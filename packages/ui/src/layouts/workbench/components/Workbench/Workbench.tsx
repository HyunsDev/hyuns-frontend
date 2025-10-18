import { SidebarProvider } from "@workspace/ui/components/sidebar";

export function Workbench({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 w-[100dvw] h-[100dvh] bg-workbench-background">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "280px",
          } as React.CSSProperties
        }
      >
        {children}
      </SidebarProvider>
    </div>
  );
}
