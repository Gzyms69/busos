"use client";

import React from "react";
import { Button, Popover, Menu, MenuItem, Position } from "@blueprintjs/core";
import { exportToCsv, exportToJson } from "@/lib/utils/formatters";

interface DataExportMenuProps {
  filename: string;
  headers: string[];
  rows: (string | number | boolean | null | undefined)[][] | (() => (string | number | boolean | null | undefined)[][]);
  rawJsonData?: any | (() => any);
  disabled?: boolean;
}

export default function DataExportMenu({
  filename,
  headers,
  rows,
  rawJsonData,
  disabled = false,
}: DataExportMenuProps) {
  const handleExportCsv = () => {
    const dataRows = typeof rows === "function" ? rows() : rows;
    exportToCsv(filename, headers, dataRows);
  };

  const handleExportJson = () => {
    let data = typeof rawJsonData === "function" ? rawJsonData() : rawJsonData;
    if (!data) {
      const dataRows = typeof rows === "function" ? rows() : rows;
      data = dataRows.map((r) => {
        const obj: Record<string, any> = {};
        headers.forEach((h, idx) => {
          obj[h] = r[idx];
        });
        return obj;
      });
    }
    exportToJson(filename, data);
  };

  const menu = (
    <Menu style={{ background: "#1c2127", border: "1px solid #383e47" }}>
      <MenuItem
        icon="document"
        text="Pobierz plik CSV (.csv)"
        onClick={handleExportCsv}
      />
      <MenuItem
        icon="code"
        text="Pobierz dane JSON (.json)"
        onClick={handleExportJson}
      />
    </Menu>
  );

  return (
    <Popover content={menu} position={Position.BOTTOM_RIGHT}>
      <Button
        small
        icon="download"
        disabled={disabled}
        text="Eksport"
        style={{ fontSize: 11 }}
      />
    </Popover>
  );
}
