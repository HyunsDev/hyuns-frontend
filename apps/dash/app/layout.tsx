import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { MainProvider } from "@/containers/MainProvider/MainProvider";
import {
  Workbench,
  WorkbenchContentArea,
  WorkbenchSidebarArea,
} from "@workspace/ui/layouts/workbench";
import { WorkbenchPanelGroup } from "@workspace/ui/layouts/workbench/components/Panel";
import { DashActivityBar } from "@/containers/DashActivityBar";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <MainProvider>
          <Workbench>
            <WorkbenchSidebarArea>
              <DashActivityBar />
              {sidebar}
            </WorkbenchSidebarArea>
            <WorkbenchContentArea>
              <WorkbenchPanelGroup>{children}</WorkbenchPanelGroup>
            </WorkbenchContentArea>
          </Workbench>
        </MainProvider>
      </body>
    </html>
  );
}
