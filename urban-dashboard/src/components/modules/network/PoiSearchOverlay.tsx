"use client";

import React, { useState, useEffect, useRef } from "react";
import { InputGroup, PopoverNext, Menu, MenuItem, Tag, Position, Spinner } from "@blueprintjs/core";
import { searchPoi } from "@/lib/api";
import type { PoiSearchItem } from "@/lib/api/types";
import { useFoundryStore } from "@/lib/store";

interface PoiSearchOverlayProps {
  onPoiSelect?: (poi: PoiSearchItem) => void;
}

export default function PoiSearchOverlay({ onPoiSelect }: PoiSearchOverlayProps) {
  const { selectedCity, setViewState } = useFoundryStore();

  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [items, setItems] = useState<PoiSearchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setItems([]);
      setLoading(false);
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      const controller = new AbortController();
      setLoading(true);

      searchPoi(
        {
          city: selectedCity,
          query: query.trim(),
          category: category || undefined,
          limit: 10,
        },
        controller.signal
      )
        .then((res) => {
          if (!controller.signal.aborted) {
            setItems(res.items || []);
            setLoading(false);
            setIsOpen(true);
          }
        })
        .catch((e) => {
          if (e?.name !== "AbortError") {
            setItems([]);
            setLoading(false);
          }
        });

      return () => controller.abort();
    }, 250);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [query, category, selectedCity]);

  const handleSelectPoi = (poi: PoiSearchItem) => {
    setIsOpen(false);
    setItems([]);
    setQuery(poi.name);
    setViewState({
      longitude: poi.lon,
      latitude: poi.lat,
      zoom: 15,
      pitch: 45,
    });
    if (onPoiSelect) onPoiSelect(poi);
  };

  const resultsMenu = (
    <Menu style={{ maxHeight: 300, overflowY: "auto", minWidth: 280, background: "#1c2127" }}>
      {loading ? (
        <div style={{ padding: 12, textAlign: "center" }}>
          <Spinner size={18} />
          <div style={{ fontSize: 11, color: "#8f99a8", marginTop: 6 }}>Szukanie obiektów POI...</div>
        </div>
      ) : items.length === 0 ? (
        <div style={{ padding: "10px 14px", fontSize: 11, color: "#8f99a8" }}>
          Brak magnesów POI pasujących do zapytania.
        </div>
      ) : (
        items.map((poi) => (
          <MenuItem
            key={poi.poi_id || `${poi.name}-${poi.lat}`}
            onClick={() => handleSelectPoi(poi)}
            text={
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <div style={{ fontWeight: 600, color: "#f6f7f9" }}>{poi.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10 }}>
                  <Tag minimal intent="primary" style={{ fontSize: 9, padding: "0 4px" }}>
                    {poi.category}
                  </Tag>
                  <span style={{ color: "#8f99a8" }}>Tier: {poi.tier}</span>
                  <span style={{ color: "#0f9960", fontWeight: 700 }}>Waga w: {poi.w}</span>
                </div>
              </div>
            }
          />
        ))
      )}
    </Menu>
  );

  return (
    <div style={{ position: "relative", width: 260 }}>
      <PopoverNext
        isOpen={isOpen && (items.length > 0 || loading)}
        onInteraction={(nextOpen) => {
          if (!nextOpen) setIsOpen(false);
        }}
        content={resultsMenu}
        placement="bottom-start"
        autoFocus={false}
        arrow={false}
      >
        <InputGroup
          small
          leftIcon="search"
          rightElement={
            query ? (
              <Tag
                minimal
                interactive
                icon="cross"
                onClick={() => {
                  setQuery("");
                  setItems([]);
                  setIsOpen(false);
                }}
                style={{ cursor: "pointer" }}
              />
            ) : undefined
          }
          placeholder="Szukaj POI (DuckDB pushdown)..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => {
            if (items.length > 0) setIsOpen(true);
          }}
          style={{ width: "100%", fontSize: 11 }}
        />
      </PopoverNext>
    </div>
  );
}
