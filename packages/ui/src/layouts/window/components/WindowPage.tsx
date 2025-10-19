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
  return <div className={cn("w-full h-full", className)}>{children}</div>;
}
