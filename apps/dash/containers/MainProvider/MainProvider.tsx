import { ViewContextProvider } from "@/contexts/ViewContext";
import { WorkbenchProvider } from "@workspace/ui/layouts/workbench";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <WorkbenchProvider>
        <ViewContextProvider>{children}</ViewContextProvider>
      </WorkbenchProvider>
    </NextThemesProvider>
  );
}
