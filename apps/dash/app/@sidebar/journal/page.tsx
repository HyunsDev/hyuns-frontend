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
import { toast } from "sonner";
import { JournalToastButton } from "./containers/JournalToastButton";

export default function Page() {
  return (
    <WorkbenchSidebar>
      <WorkbenchSidebarHeader title="Dashboard" />
      <SidebarContent className="gap-0">
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
              <JournalToastButton />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </WorkbenchSidebar>
  );
}
