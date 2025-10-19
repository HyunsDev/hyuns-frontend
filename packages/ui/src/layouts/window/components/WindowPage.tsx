import { cn } from "@workspace/ui/lib/utils";
import { useWindow } from "../contexts";

export function WindowPage({
  children,
  pageId,
  className,
}: {
  children?: React.ReactNode;
  pageId: string;
  className?: string;
}) {
  const { currentPageId } = useWindow();
  if (currentPageId !== pageId) return null;
  return (
    <div
      className={cn("px-4 py-4 w-full h-full min-h-0 overflow-auto", className)}
    >
      {children}
    </div>
  );
}

export function WindowPageHeader({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("w-full py-2 mb-2 px-1 font-medium border-b", className)}
    >
      {children}
    </div>
  );
}
