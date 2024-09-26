import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";



export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "For Educational Purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >

          <Header />
          {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
