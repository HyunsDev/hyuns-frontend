import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { MainProviders } from "@/containers/MainProvider/providers";
import { Metadata } from "next";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "PKM 유틸리티 모음",
  description: "SVG 아이콘, 이미지 아이콘, 라인 배너를 빠르게 만들어보세요.",
};

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
        <MainProviders>{children}</MainProviders>
      </body>
    </html>
  );
}
