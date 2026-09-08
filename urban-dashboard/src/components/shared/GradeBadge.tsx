"use client";

import React from "react";
import { Tag, type Intent } from "@blueprintjs/core";

interface GradeBadgeProps {
  grade?: string | null;
  size?: "small" | "medium" | "large";
}

export function getGradeIntent(grade?: string | null): Intent {
  if (!grade) return "none";
  const g = grade.toUpperCase().trim();
  if (g === "A+" || g === "A") return "success";
  if (g === "B") return "primary";
  if (g === "C") return "none";
  if (g === "D") return "warning";
  if (g === "F") return "danger";
  return "none";
}

export function getGradeColor(grade?: string | null): string {
  if (!grade) return "#8f99a8";
  const g = grade.toUpperCase().trim();
  if (g === "A+") return "#0f9960";
  if (g === "A") return "#15b371";
  if (g === "B") return "#2b95d6";
  if (g === "C") return "#9da7b3";
  if (g === "D") return "#d9822b";
  if (g === "F") return "#db3737";
  return "#8f99a8";
}

export default function GradeBadge({ grade, size = "medium" }: GradeBadgeProps) {
  if (!grade) return <Tag minimal>-</Tag>;

  const intent = getGradeIntent(grade);
  const isLarge = size === "large";
  const isSmall = size === "small";

  return (
    <Tag
      intent={intent}
      round
      style={{
        fontWeight: 800,
        fontSize: isLarge ? 14 : isSmall ? 10 : 11,
        padding: isLarge ? "2px 10px" : isSmall ? "0 5px" : "1px 7px",
        letterSpacing: 0.5,
      }}
    >
      {grade.toUpperCase()}
    </Tag>
  );
}
