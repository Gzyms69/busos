"use client";

import React from "react";
import { NonIdealState, Button } from "@blueprintjs/core";

interface EmptyStateViewProps {
  icon?: any;
  title: string;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  loading?: boolean;
}

export default function EmptyStateView({
  icon = "info-sign",
  title,
  description,
  actionText,
  onAction,
  loading = false,
}: EmptyStateViewProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        padding: 32,
      }}
    >
      <NonIdealState
        icon={loading ? undefined : icon}
        title={title}
        description={description}
        action={
          actionText && onAction ? (
            <Button
              intent="primary"
              text={actionText}
              onClick={onAction}
              style={{ marginTop: 12 }}
            />
          ) : undefined
        }
      />
    </div>
  );
}
