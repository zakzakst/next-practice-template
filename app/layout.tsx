import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "アプリのタイトル",
  description: "アプリの説明",
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
};

export default Layout;
