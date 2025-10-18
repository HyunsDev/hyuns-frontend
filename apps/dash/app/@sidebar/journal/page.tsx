import { Separator } from "@workspace/ui/components/separator";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar";
import {
  WorkbenchSidebar,
  WorkbenchSidebarHeader,
} from "@workspace/ui/layouts/workbench";
import { Inbox } from "lucide-react";
import { JournalCalendar } from "./containers/JournalCalendar";
import dynamic from "next/dynamic";

export default function Page() {
  return (
    <WorkbenchSidebar>
      <WorkbenchSidebarHeader title="Dashboard" />
      <SidebarContent>
        <div className="">
          <JournalCalendar />
          <Separator />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={{
                    children: `Inbox`,
                    hidden: false,
                  }}
                  isActive={true}
                  className="px-2.5 md:px-2"
                >
                  <Inbox />
                  <span>Journal</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </WorkbenchSidebar>
  );
}
