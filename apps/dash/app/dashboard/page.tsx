import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@workspace/ui/components/breadcrumb";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import {
  WorkbenchPanelContent,
  WorkbenchPanelHeader,
} from "@workspace/ui/layouts/workbench/components/Panel";
import { WorkbenchPanel } from "@workspace/ui/layouts/workbench/components/Panel/WorkbenchPanel";

export default function Page() {
  return (
    <WorkbenchPanel>
      <WorkbenchPanelHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>Inbox</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </WorkbenchPanelHeader>
      <WorkbenchPanelContent>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
            />
          ))}
        </div>
      </WorkbenchPanelContent>
    </WorkbenchPanel>
  );
}
