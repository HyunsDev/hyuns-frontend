import { Sidebar } from "@workspace/ui/components/sidebar";

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
