export function WorkbenchPanelContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 min-h-0 overflow-auto">
      {children}
    </div>
  );
}
