import { Sidebar } from "@workspace/ui/components/sidebar";

export function WorkbenchSidebarArea({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row group-data-[side=left]:border-r-workbench-background transition-[border-color] duration-300 ease-in-out"
    >
      {children}
    </Sidebar>
  );
}
