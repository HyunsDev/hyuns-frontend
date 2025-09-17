import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  SidebarMenuButton,
  SidebarTrigger,
} from "@hyunsdev/ui";
import { MainSidebar } from "../../containers/MainSidebar/MainSidebar";
import { ChevronDown } from "lucide-react";

export function SvgIconsPage() {
  return (
    <div className="w-full h-full flex">
      <MainSidebar />
      <main className="w-full h-full p-4">
        <SidebarTrigger />
      </main>
    </div>
  );
}
