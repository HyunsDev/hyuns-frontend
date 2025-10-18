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
  Workbench,
  WorkbenchContent,
  WorkbenchProvider,
} from "@workspace/ui/layouts/workbench";
import { WorkbenchActivityBar } from "@workspace/ui/layouts/workbench/components/ActivityBar";
import { WorkbenchPanelHeader } from "@workspace/ui/layouts/workbench/components/Panel";
import { WorkbenchPanel } from "@workspace/ui/layouts/workbench/components/Panel/WorkbenchPanel";
import { WorkbenchSidebar } from "@workspace/ui/layouts/workbench/components/Sidebar";
import { Command, Inbox, User } from "lucide-react";

function AppActivityBar() {
  return (
    <WorkbenchActivityBar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              <SidebarMenuItem key={`title`}>
                <SidebarMenuButton
                  tooltip={{
                    children: `title`,
                    hidden: false,
                  }}
                  isActive={true}
                  className="px-2.5 md:px-2"
                >
                  <Inbox />
                  <span>title</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <User />
      </SidebarFooter>
    </WorkbenchActivityBar>
  );
}

export default function Page() {
  return (
    <WorkbenchProvider>
      <Workbench>
        <Sidebar
          collapsible="icon"
          className="overflow-hidden *:data-[sidebar=sidebar]:flex-row group-data-[side=left]:border-r-workbench-background transition-[border-color] duration-300 ease-in-out"
        >
          <AppActivityBar />
          <WorkbenchSidebar>
            {/** Example Shadcn/ui Sidebar */}
            <SidebarHeader>
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
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
                        <span>Inbox</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </WorkbenchSidebar>
        </Sidebar>
        <WorkbenchContent>
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
        </WorkbenchContent>
      </Workbench>
    </WorkbenchProvider>
  );
}
