"use client";

import React from "react";

import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { useWorkbenchContext } from "../../contexts/workbenchContext";

export function Workbench({ children }: { children: React.ReactNode }) {
  const { sidebarWidth } = useWorkbenchContext();

  return (
    <div className="fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-workbench-background">
      <SidebarProvider
        style={
          {
            "--sidebar-width": `${sidebarWidth}px`,
          } as React.CSSProperties
        }
      >
        {children}
      </SidebarProvider>
    </div>
  );
}
