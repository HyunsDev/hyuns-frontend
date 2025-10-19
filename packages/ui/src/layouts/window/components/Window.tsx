"use client";

import { DialogContent, DialogTitle } from "@workspace/ui/components/dialog";
import { WindowContextProvider } from "../contexts";
import { WindowSidebarProvider } from "./WindowSidebar";

export type WindowProps = {
  children: React.ReactNode;
  defaultPageId: string;
  srTitle: string;
};
export function Window({ children, defaultPageId, srTitle }: WindowProps) {
  return (
    <WindowContextProvider defaultPageId={defaultPageId}>
      <DialogContent className="max-w-[min(90dvw,1100px)] w-full max-h-[min(90dvh,720px)] h-full flex p-0 gap-0">
        <WindowSidebarProvider>
          <DialogTitle className="sr-only">{srTitle}</DialogTitle>
          {children}
        </WindowSidebarProvider>
      </DialogContent>
    </WindowContextProvider>
  );
}
