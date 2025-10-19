"use client";

import { Dialog, DialogTrigger } from "@workspace/ui/components/dialog";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar";
import {
  Window,
  WindowContent,
  WindowPage,
  WindowSidebar,
  WindowSidebarContent,
  WindowSidebarGroup,
  WindowSidebarGroupContent,
  WindowSidebarHeader,
  WindowSidebarMenu,
  WindowSidebarMenuButton,
  WindowSidebarMenuItem,
} from "@workspace/ui/layouts/window";
import {
  WorkbenchSidebar,
  WorkbenchSidebarHeader,
} from "@workspace/ui/layouts/workbench";
import { Cog, Command, Inbox, Monitor, UserIcon } from "lucide-react";

function ExampleWindow() {
  return (
    <Window defaultPageId="home" srTitle="Setting">
      <WindowSidebar>
        <WindowSidebarHeader>
          <WindowSidebarMenu>
            <WindowSidebarMenuItem>
              <WindowSidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </WindowSidebarMenuButton>
            </WindowSidebarMenuItem>
          </WindowSidebarMenu>
        </WindowSidebarHeader>
        <WindowSidebarContent>
          <WindowSidebarGroup>
            <WindowSidebarGroupContent>
              <WindowSidebarMenu>
                <WindowSidebarMenuItem>
                  <WindowSidebarMenuButton to="home">
                    <UserIcon />
                    <span>이름</span>
                  </WindowSidebarMenuButton>
                </WindowSidebarMenuItem>
                <WindowSidebarMenuItem>
                  <WindowSidebarMenuButton to="display">
                    <Monitor />
                    <span>디스플레이</span>
                  </WindowSidebarMenuButton>
                </WindowSidebarMenuItem>
              </WindowSidebarMenu>
            </WindowSidebarGroupContent>
          </WindowSidebarGroup>
        </WindowSidebarContent>
      </WindowSidebar>
      <WindowContent>
        <WindowPage pageId="home">home</WindowPage>
        <WindowPage pageId="display">Display</WindowPage>
      </WindowContent>
    </Window>
  );
}

export default function Page() {
  return (
    <WorkbenchSidebar>
      <WorkbenchSidebarHeader title="Dashboard" />
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
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Dialog>
                <DialogTrigger asChild>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip={{
                        children: `Inbox`,
                        hidden: false,
                      }}
                      isActive={false}
                      className="px-2.5 md:px-2"
                    >
                      <Cog />
                      <span>Setting</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </DialogTrigger>
                <ExampleWindow />
              </Dialog>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </WorkbenchSidebar>
  );
}
