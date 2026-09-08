"use client";

import React, { useState } from "react";
import {
  Card,
  Elevation,
  Button,
  ButtonGroup,
  Switch,
  PopoverNext,
  Menu,
  MenuItem,
  Tag,
} from "@blueprintjs/core";
import { useFoundryStore, type H3ColorMetric } from "@/lib/store";

export default function MapHud() {
  const {
    mapStyle,
    setMapStyle,
    showBoundary,
    showHexagons,
    showStops,
    showHubs,
    showRoutes,
    show3DBuildings,
    toggleLayer,
    h3Metric,
    setH3Metric,
    resetView,
  } = useFoundryStore();

  const [isLayersOpen, setIsLayersOpen] = useState(false);
  const [isMetricOpen, setIsMetricOpen] = useState(false);

  const metricLabels: Record<H3ColorMetric, string> = {
    transport_score: "Podaż Transportu (0-100)",
    pop_total: "Populacja GUS 250m",
    transit_desert: "Pustynie Transportowe (TDI)",
    rcn_median_price_m2: "Ceny Mieszkań RCN (PLN/m²)",
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 14,
        right: 14,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        pointerEvents: "auto",
      }}
    >
      <Card
        elevation={Elevation.TWO}
        style={{
          background: "rgba(24, 28, 32, 0.88)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(56, 62, 71, 0.8)",
          borderRadius: 6,
          padding: "6px 8px",
          display: "flex",
          alignItems: "center",
          gap: 6,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Style Toggle */}
        <ButtonGroup minimal>
          <Button
            small
            icon="map"
            active={mapStyle === "dark"}
            intent={mapStyle === "dark" ? "primary" : "none"}
            onClick={() => setMapStyle("dark")}
            title="Ciemny podkład wektorowy Carto"
          />
          <Button
            small
            icon="satellite"
            active={mapStyle === "satellite"}
            intent={mapStyle === "satellite" ? "primary" : "none"}
            onClick={() => setMapStyle("satellite")}
            title="Satelitarny podkład fotograficzny"
          />
        </ButtonGroup>

        <div style={{ width: 1, height: 16, background: "#383e47" }} />

        {/* 3D Pitch Toggle */}
        <Button
          small
          minimal
          icon="cube"
          active={show3DBuildings}
          intent={show3DBuildings ? "primary" : "none"}
          onClick={() => toggleLayer("show3DBuildings")}
          title="Przełącz perspektywę 3D"
        />

        {/* Reset Camera */}
        <Button
          small
          minimal
          icon="compass"
          onClick={resetView}
          title="Wyzeruj obrót i kąt kamery"
        />

        <div style={{ width: 1, height: 16, background: "#383e47" }} />

        {/* Layer Visibility Popover */}
        <PopoverNext
          isOpen={isLayersOpen}
          onInteraction={(next) => setIsLayersOpen(next)}
          content={
            <div style={{ padding: "12px 14px", width: 220, background: "#1c2127" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.6,
                  color: "#8f99a8",
                  marginBottom: 10,
                }}
              >
                Warstwy Mapy Deck.gl
              </div>
              <Switch
                label="Obrys aglomeracji"
                checked={showBoundary}
                onChange={() => toggleLayer("showBoundary")}
                innerLabelChecked="ON"
                innerLabel="OFF"
                style={{ fontSize: 12, marginBottom: 8 }}
              />
              <Switch
                label="Siatka Uber H3 Res 8"
                checked={showHexagons}
                onChange={() => toggleLayer("showHexagons")}
                innerLabelChecked="ON"
                innerLabel="OFF"
                style={{ fontSize: 12, marginBottom: 8 }}
              />
              <Switch
                label="Słupki fizyczne micro"
                checked={showStops}
                onChange={() => toggleLayer("showStops")}
                innerLabelChecked="ON"
                innerLabel="OFF"
                style={{ fontSize: 12, marginBottom: 8 }}
              />
              <Switch
                label="Węzły przesiadkowe macro"
                checked={showHubs}
                onChange={() => toggleLayer("showHubs")}
                innerLabelChecked="ON"
                innerLabel="OFF"
                style={{ fontSize: 12, marginBottom: 8 }}
              />
              <Switch
                label="Ślady linii GTFS"
                checked={showRoutes}
                onChange={() => toggleLayer("showRoutes")}
                innerLabelChecked="ON"
                innerLabel="OFF"
                style={{ fontSize: 12, marginBottom: 0 }}
              />
            </div>
          }
          placement="bottom-end"
        >
          <Button
            small
            minimal
            icon="layers"
            rightIcon="caret-down"
            style={{ fontWeight: 600, fontSize: 11 }}
          >
            Warstwy
          </Button>
        </PopoverNext>

        {/* H3 Metric Selector Popover */}
        <PopoverNext
          isOpen={isMetricOpen}
          onInteraction={(next) => setIsMetricOpen(next)}
          content={
            <Menu style={{ background: "#1c2127", minWidth: 200 }}>
              <div
                style={{
                  padding: "8px 12px 4px 12px",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#8f99a8",
                }}
              >
                Kolorowanie Siatki H3
              </div>
              {(
                [
                  "transport_score",
                  "pop_total",
                  "transit_desert",
                  "rcn_median_price_m2",
                ] as H3ColorMetric[]
              ).map((metric) => (
                <MenuItem
                  key={metric}
                  text={metricLabels[metric]}
                  active={h3Metric === metric}
                  onClick={() => {
                    setH3Metric(metric);
                    setIsMetricOpen(false);
                  }}
                />
              ))}
            </Menu>
          }
          placement="bottom-end"
        >
          <Button
            small
            minimal
            icon="heat-grid"
            rightIcon="caret-down"
            style={{ fontWeight: 600, fontSize: 11, color: "#2b95d6" }}
          >
            Metryka H3
          </Button>
        </PopoverNext>
      </Card>
    </div>
  );
}
