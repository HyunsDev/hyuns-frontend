import { cn } from "@workspace/ui/lib/utils";

export function WorkbenchPanel({
  children,
  className,
  maxWidth,
}: {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 min-w-0 w-full h-full max-h-[100dvh] bg-workbench-background px-0 pt-0"
      )}
      style={{
        maxWidth: maxWidth,
      }}
    >
      <div className="window-draggable h-[10px] w-full"></div>
      <div
        className={cn(
          "relative flex flex-col h-full max-h-[calc(100dvh-20px)] min-w-0 overflow-hidden border rounded-lg shadow-lg bg-background",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
