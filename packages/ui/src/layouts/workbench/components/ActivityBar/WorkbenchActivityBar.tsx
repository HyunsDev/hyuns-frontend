"use client";

import { Slot } from "@radix-ui/react-slot";
import {
  Sidebar,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export function WorkbenchActivityBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar
      collapsible="none"
      className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
    >
      {children}
    </Sidebar>
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm opacity-40 outline-hidden ring-sidebar-ring transition-[width,height,padding,opacity] hover:text-sidebar-accent-foreground focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:opacity-100 data-[active=true]:font-medium data-[active=true]:text-sidebar-foreground data-[state=open]:hover:opacity-70 data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8!  [&>span:last-child]:truncate [&>svg]:size-6 [&>svg]:shrink-0 [&>svg]:stroke-[1.5px]",
  {
    variants: {
      variant: {
        default: "hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  isActive?: boolean;
  tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  );
}

export type WorkbenchActivityBarMenuItemProps =
  React.ComponentProps<"button"> & {
    title: string;
    icon: React.ReactNode;
    isActive: boolean;
    hasNotification?: boolean;
    asChild?: boolean;
  };
export function WorkbenchActivityBarMenuItem({
  title,
  icon,
  isActive,
  hasNotification = false,
  className,
  asChild = false,
  ...props
}: WorkbenchActivityBarMenuItemProps) {
  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton
        tooltip={{
          children: title,
          hidden: false,
        }}
        isActive={isActive}
        className={cn(
          "group/menu-button relative overflow-visible px-1",
          className
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -left-2 w-1 rounded-r bg-sidebar-foreground transition-[height,opacity,transform] duration-200 ease-in-out",
            isActive
              ? "top-0.5 bottom-0.5 opacity-100"
              : hasNotification
                ? "top-1/2 h-2 -translate-y-1/2 opacity-50 group-hover/menu-button:h-5 group-hover/menu-button:opacity-50"
                : "top-1/2 h-2 -translate-y-1/2 opacity-0 group-hover/menu-button:h-5 group-hover/menu-button:opacity-50"
          )}
        />
        {icon}
        <span>{title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
