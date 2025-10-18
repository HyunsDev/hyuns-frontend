"use client";

import { Kbd } from "@workspace/ui/components/kbd";
import {
  SidebarHeader,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";

export function WorkbenchSidebarHeader({ title }: { title: string }) {
  return (
    <SidebarHeader className="gap-3.5 border-b py-2 pl-4 pr-2">
      <div className="flex w-full items-center justify-between">
        <div className="text-foreground text-base font-medium">{title}</div>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger />
          </TooltipTrigger>
          <TooltipContent>
            사이드바 접기 <Kbd>Ctrl + /</Kbd>
          </TooltipContent>
        </Tooltip>
      </div>
    </SidebarHeader>
  );
}
