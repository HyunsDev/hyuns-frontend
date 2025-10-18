import { Calendar } from "@workspace/ui/components/calendar";
import { Separator } from "@workspace/ui/components/separator";
import {
  SidebarHeader,
  SidebarTrigger,
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

export default function Page() {
  return (
    <WorkbenchSidebar>
      <WorkbenchSidebarHeader title="Dashboard" />
      <SidebarContent>
        <div className="">
          <Calendar
            mode="single"
            className="rounded-md w-full bg-workbench-background"
            captionLayout="dropdown"
          />
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
