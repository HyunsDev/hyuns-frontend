import { DashActivityBar } from "@/containers/DashActivityBar/DashActivityBar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@workspace/ui/components/breadcrumb";
import { Separator } from "@workspace/ui/components/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import {
  WorkbenchSidebarArea,
  Workbench,
  WorkbenchContentArea,
  WorkbenchProvider,
} from "@workspace/ui/layouts/workbench";
import { WorkbenchPanelHeader } from "@workspace/ui/layouts/workbench/components/Panel";
import { WorkbenchPanel } from "@workspace/ui/layouts/workbench/components/Panel/WorkbenchPanel";
import { WorkbenchSidebar } from "@workspace/ui/layouts/workbench/components/Sidebar";
import { Command, Inbox, User } from "lucide-react";

export default function Page() {
  return (
    <WorkbenchPanel>
      <WorkbenchPanelHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Inbox</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </WorkbenchPanelHeader>
      <div className="flex flex-1 flex-col gap-4 p-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
          />
        ))}
      </div>
    </WorkbenchPanel>
  );
}
