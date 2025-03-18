import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ARCHICONNECT Academy",
  description: "Learn and grow with ARCHICONNECT Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
