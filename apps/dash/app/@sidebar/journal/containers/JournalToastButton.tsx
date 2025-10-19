"use client";

import {
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar";
import { Inbox } from "lucide-react";
import { toast } from "sonner";

export function JournalToastButton() {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={{
          children: `Toast`,
          hidden: false,
        }}
        onClick={() => toast("Hello, World!")}
        className="px-2.5 md:px-2"
      >
        <Inbox />
        <span>Toast</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
