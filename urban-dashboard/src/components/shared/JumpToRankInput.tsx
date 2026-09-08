"use client";

import React, { useState } from "react";
import { ControlGroup, NumericInput, Button } from "@blueprintjs/core";

interface JumpToRankInputProps {
  maxRank?: number;
  onJump: (rank: number) => void;
  disabled?: boolean;
}

export default function JumpToRankInput({
  maxRank = 60000,
  onJump,
  disabled = false,
}: JumpToRankInputProps) {
  const [value, setValue] = useState<number>(1);

  const handleJump = () => {
    if (value && value >= 1) {
      const clamped = Math.min(Math.max(1, value), maxRank);
      onJump(clamped);
    }
  };

  return (
    <ControlGroup style={{ alignItems: "center" }}>
      <NumericInput
        small
        min={1}
        max={maxRank}
        stepSize={10}
        majorStepSize={100}
        value={value}
        onValueChange={(val) => {
          if (!isNaN(val)) setValue(val);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleJump();
        }}
        placeholder="#Rank"
        disabled={disabled}
        style={{ width: 80, fontSize: 11 }}
        leftIcon="numerical"
      />
      <Button
        small
        icon="locate"
        onClick={handleJump}
        disabled={disabled}
        title="Skocz do pozycji rankingu"
        style={{ fontSize: 11 }}
      >
        Skocz
      </Button>
    </ControlGroup>
  );
}
