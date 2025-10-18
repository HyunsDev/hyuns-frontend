import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { MainProvider } from "@/containers/MainProvider/MainProvider";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
