export function WorkbenchPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full max-h-[100dvh] bg-workbench-background px-0 pt-0">
      <div className="window-draggable h-[10px] w-full"></div>
      <div className="relative flex flex-col h-full max-h-[calc(100dvh-20px)] overflow-hidden border rounded-lg shadow-lg bg-background">
        {children}
      </div>
    </div>
  );
}
