"use client";

import { DashIcon } from "@/components/DashIcon";
import { useView } from "@/contexts/ViewContext";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter,
} from "@workspace/ui/components/sidebar";
import {
  WorkbenchActivityBar,
  WorkbenchActivityBarMenuItem,
} from "@workspace/ui/layouts/workbench";
import { NavUser } from "./NavUser";
import { Separator } from "@workspace/ui/components/separator";

export function DashActivityBar() {
  const { currentView, setCurrentView, views } = useView();

  return (
    <WorkbenchActivityBar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <DashIcon className="size-6" />
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
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="px-1.5 md:px-0">
            <SidebarMenu>
              {views
                .filter((view) => view.isVisibleInViewList)
                .map((view) => (
                  <WorkbenchActivityBarMenuItem
                    key={view.id}
                    title={view.title}
                    icon={view.icon}
                    isActive={currentView?.id === view.id}
                    onClick={() => setCurrentView(view.id)}
                    hasNotification={true}
                  />
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </WorkbenchActivityBar>
  );
}
