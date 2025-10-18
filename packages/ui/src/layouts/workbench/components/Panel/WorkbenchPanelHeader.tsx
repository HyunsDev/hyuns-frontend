import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";

export function WorkbenchPanelHeader({
  children,
  showSidebarButton = true,
}: {
  children: React.ReactNode;
  showSidebarButton?: boolean;
}) {
  return (
    <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-2">
      {showSidebarButton && (
        <>
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </>
      )}

      {children}
    </header>
  );
}
