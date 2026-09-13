"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  X,
  Minus,
  Maximize2,
  Minimize2,
  Move,
  GripHorizontal,
  ChevronLeft,
  ChevronRight,
  Maximize,
} from "lucide-react";
import { useFoundryStore, type WindowId, type WindowMode } from "@/lib/store";

interface FloatingWindowProps {
  id: WindowId;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  headerActions?: React.ReactNode;
  presetWidths?: number[];
  allowDock?: boolean;
  allowResize?: boolean;
  allowMinimize?: boolean;
  allowMaximize?: boolean;
  allowClose?: boolean;
  onClose?: () => void;
  className?: string;
}

export default function FloatingWindow({
  id,
  title,
  subtitle,
  icon,
  children,
  headerActions,
  presetWidths = [380, 520, 860],
  allowDock = true,
  allowResize = true,
  allowMinimize = true,
  allowMaximize = true,
  allowClose = true,
  onClose,
  className = "",
}: FloatingWindowProps) {
  const store = useFoundryStore();
  const win = store.windows[id];
  const {
    activeWindowId,
    isCleanMapMode,
    bringToFront,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    setWindowPosition,
    setWindowSize,
    setWindowMode,
  } = store;

  const [isDragging, setIsDragging] = useState(false);
  const [resizingEdge, setResizingEdge] = useState<string | null>(null);

  const dragStartRef = useRef<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
    initialWidth: number;
    initialHeight: number;
  }>({
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    initialWidth: 0,
    initialHeight: 0,
  });

  const isActive = activeWindowId === id;

  const handlePointerDownHeader = (e: React.PointerEvent) => {
    // Ignore clicks on buttons or interactive inputs in the header
    if ((e.target as HTMLElement).closest("button, a, input, select, textarea")) {
      return;
    }
    e.preventDefault();
    bringToFront(id);

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: win.position.x,
      initialY: win.position.y,
      initialWidth: win.size.width,
      initialHeight: win.size.height,
    };

    setIsDragging(true);
    document.body.style.userSelect = "none";
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMoveHeader = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    // Viewport bounds clamping
    const maxX = Math.max(10, window.innerWidth - 120);
    const maxY = Math.max(10, window.innerHeight - 80);

    const newX = Math.max(4, Math.min(maxX, dragStartRef.current.initialX + deltaX));
    const newY = Math.max(4, Math.min(maxY, dragStartRef.current.initialY + deltaY));

    // Magnetic snapping to dock edges
    if (allowDock) {
      if (newX < 24) {
        setWindowMode(id, "docked-left");
      } else if (newX > window.innerWidth - win.size.width - 24) {
        setWindowMode(id, "docked-right");
      } else if (win.mode !== "floating") {
        setWindowMode(id, "floating");
      }
    }

    setWindowPosition(id, { x: newX, y: newY });
  };

  const handlePointerUpHeader = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.userSelect = "";
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  // Resizing logic for borders and corner
  const handleResizePointerDown = (edge: string, e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    bringToFront(id);

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: win.position.x,
      initialY: win.position.y,
      initialWidth: win.size.width,
      initialHeight: win.size.height,
    };

    setResizingEdge(edge);
    document.body.style.userSelect = "none";
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleResizePointerMove = (e: React.PointerEvent) => {
    if (!resizingEdge) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    let newWidth = dragStartRef.current.initialWidth;
    let newHeight = dragStartRef.current.initialHeight;
    let newX = win.position.x;

    if (resizingEdge.includes("e")) {
      newWidth = dragStartRef.current.initialWidth + deltaX;
    }
    if (resizingEdge.includes("w")) {
      newWidth = dragStartRef.current.initialWidth - deltaX;
      newX = dragStartRef.current.initialX + deltaX;
    }
    if (resizingEdge.includes("s")) {
      newHeight = dragStartRef.current.initialHeight + deltaY;
    }

    // Apply constraints
    const clampedW = Math.max(win.minSize.width, Math.min(win.maxSize.width, newWidth));
    const clampedH = Math.max(win.minSize.height, Math.min(win.maxSize.height, newHeight));

    setWindowSize(id, { width: clampedW, height: clampedH });
    if (resizingEdge.includes("w") && win.mode === "floating") {
      setWindowPosition(id, { x: newX, y: win.position.y });
    }
  };

  const handleResizePointerUp = (e: React.PointerEvent) => {
    if (resizingEdge) {
      setResizingEdge(null);
      document.body.style.userSelect = "";
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    closeWindow(id);
  };

  if (!win || !win.isOpen || win.isMinimized || isCleanMapMode) {
    return null;
  }

  // Dynamic styling based on mode and state
  const isDockedLeft = win.mode === "docked-left" && !win.isMaximized;
  const isDockedRight = win.mode === "docked-right" && !win.isMaximized;
  const isFloating = win.mode === "floating" && !win.isMaximized;

  const style: React.CSSProperties = {
    zIndex: win.zIndex,
  };

  if (win.isMaximized) {
    style.position = "absolute";
    style.top = 70;
    style.left = 12;
    style.right = 12;
    style.bottom = 12;
    style.width = "auto";
    style.height = "auto";
  } else if (isDockedLeft) {
    style.position = "absolute";
    style.top = 76;
    style.bottom = 12;
    style.left = 12;
    style.width = win.size.width;
    style.height = "auto";
  } else if (isDockedRight) {
    style.position = "absolute";
    style.top = 76;
    style.bottom = 12;
    style.right = 12;
    style.width = win.size.width;
    style.height = "auto";
  } else {
    style.position = "absolute";
    style.top = win.position.y;
    style.left = win.position.x;
    style.width = win.size.width;
    style.height = win.size.height;
  }

  return (
    <div
      onPointerDown={() => bringToFront(id)}
      style={style}
      className={`group/window hidden md:flex flex-col bg-white/95 backdrop-blur-md rounded-2xl border transition-shadow duration-150 overflow-hidden ${
        isActive
          ? "border-[#47317f]/40 shadow-[0_16px_48px_rgba(71,49,127,0.18)] ring-1 ring-[#47317f]/20"
          : "border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      } ${className}`}
    >
      {/* Window Header Bar (Draggable) */}
      <div
        onPointerDown={handlePointerDownHeader}
        onPointerMove={handlePointerMoveHeader}
        onPointerUp={handlePointerUpHeader}
        className={`px-3 py-2 sm:px-3.5 sm:py-2.5 flex items-center justify-between gap-2 select-none cursor-grab active:cursor-grabbing border-b shrink-0 transition-colors ${
          isActive
            ? "bg-slate-50/90 border-slate-200"
            : "bg-slate-100/70 border-slate-200/80 hover:bg-slate-50/80"
        }`}
        title="Kliknij i przeciągnij, aby przesunąć okno"
      >
        {/* Left: Icon, Title & Drag indicator */}
        <div className="flex items-center gap-2 min-w-0">
          <GripHorizontal className="w-4 h-4 text-slate-400 group-hover/window:text-slate-600 transition-colors shrink-0" />
          {icon && <div className="shrink-0 text-[#47317f]">{icon}</div>}
          <div className="flex flex-col min-w-0">
            <h3 className="text-xs font-bold text-slate-800 tracking-tight truncate leading-tight">
              {title}
            </h3>
            {subtitle && (
              <span className="text-[10px] text-slate-500 font-medium truncate leading-tight">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Center/Right: Actions & Window Controls */}
        <div className="flex items-center gap-1 shrink-0">
          {/* Custom Header Actions */}
          {headerActions}

          {/* Quick Preset Width Buttons (Only in docked or resizable mode) */}
          {allowResize && !win.isMaximized && presetWidths?.length > 0 && (
            <div className="hidden lg:flex items-center bg-slate-200/70 p-0.5 rounded-lg mr-1 text-[10px] font-bold text-slate-600">
              {presetWidths.map((pw) => (
                <button
                  key={pw}
                  type="button"
                  onClick={() => setWindowSize(id, { width: pw, height: win.size.height })}
                  className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                    Math.abs(win.size.width - pw) < 20
                      ? "bg-white text-[#47317f] shadow-xs font-black"
                      : "hover:text-slate-900 hover:bg-slate-300/60"
                  }`}
                  title={`Ustaw szerokość na ${pw}px`}
                >
                  {pw >= 800 ? "L" : pw >= 500 ? "M" : "S"}
                </button>
              ))}
            </div>
          )}

          {/* Docking Toggles */}
          {allowDock && (
            <div className="flex items-center gap-0.5 mr-0.5">
              <button
                type="button"
                onClick={() =>
                  setWindowMode(id, isDockedLeft ? "floating" : "docked-left")
                }
                className={`p-1 rounded-lg transition-all cursor-pointer ${
                  isDockedLeft
                    ? "bg-[#47317f] text-white"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
                }`}
                title={isDockedLeft ? "Odczep okno (pływające)" : "Zadokuj do lewej krawędzi"}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setWindowMode(id, isDockedRight ? "floating" : "docked-right")
                }
                className={`p-1 rounded-lg transition-all cursor-pointer ${
                  isDockedRight
                    ? "bg-[#47317f] text-white"
                    : "text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
                }`}
                title={isDockedRight ? "Odczep okno (pływające)" : "Zadokuj do prawej krawędzi"}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Minimize Button */}
          {allowMinimize && (
            <button
              type="button"
              onClick={() => minimizeWindow(id, true)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all cursor-pointer"
              title="Zminimalizuj do paska OmniDock"
              aria-label="Zminimalizuj"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Maximize / Restore Button */}
          {allowMaximize && (
            <button
              type="button"
              onClick={() => maximizeWindow(id)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-all cursor-pointer"
              title={win.isMaximized ? "Przywróć standardowy rozmiar" : "Maksymalizuj"}
              aria-label={win.isMaximized ? "Przywróć" : "Maksymalizuj"}
            >
              {win.isMaximized ? (
                <Minimize2 className="w-3.5 h-3.5" />
              ) : (
                <Maximize2 className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          {/* Close Button */}
          {allowClose && (
            <button
              type="button"
              onClick={handleClose}
              className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all cursor-pointer ml-0.5"
              title="Zamknij okno (Esc)"
              aria-label="Zamknij"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Window Body (Scrollable, full selectable text) */}
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col relative select-text">
        {children}
      </div>

      {/* Resizing Edge Handles (Only if allowResize and not maximized) */}
      {allowResize && !win.isMaximized && (
        <>
          {/* Right Edge Handle */}
          <div
            onPointerDown={(e) => handleResizePointerDown("e", e)}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            className="absolute top-0 right-0 bottom-0 w-2.5 cursor-e-resize hover:bg-[#47317f]/20 transition-colors z-20"
            title="Przeciągnij, aby zmienić szerokość"
          />

          {/* Left Edge Handle (if floating or docked right) */}
          {(isFloating || isDockedRight) && (
            <div
              onPointerDown={(e) => handleResizePointerDown("w", e)}
              onPointerMove={handleResizePointerMove}
              onPointerUp={handleResizePointerUp}
              className="absolute top-0 left-0 bottom-0 w-2.5 cursor-w-resize hover:bg-[#47317f]/20 transition-colors z-20"
              title="Przeciągnij, aby zmienić szerokość"
            />
          )}

          {/* Bottom Edge Handle (if floating) */}
          {isFloating && (
            <div
              onPointerDown={(e) => handleResizePointerDown("s", e)}
              onPointerMove={handleResizePointerMove}
              onPointerUp={handleResizePointerUp}
              className="absolute left-0 right-0 bottom-0 h-2.5 cursor-s-resize hover:bg-[#47317f]/20 transition-colors z-20"
              title="Przeciągnij, aby zmienić wysokość"
            />
          )}

          {/* Bottom-Right Corner Handle */}
          <div
            onPointerDown={(e) => handleResizePointerDown("se", e)}
            onPointerMove={handleResizePointerMove}
            onPointerUp={handleResizePointerUp}
            className="absolute right-0 bottom-0 w-4 h-4 cursor-se-resize flex items-end justify-end p-0.5 text-slate-300 hover:text-[#47317f] transition-colors z-30"
            title="Przeciągnij narożnik, aby zmienić rozmiar"
          >
            <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
              <path d="M6 6H4V4H6V6ZM6 2H4V0H6V2ZM2 6H0V4H2V6Z" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}
