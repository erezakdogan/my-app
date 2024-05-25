"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopBar } from "./components/topbar";
import { Sidebar } from "./components/sidebar";
import Modal from "./components/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen max-h-screen bg-gray-400 space-y-2 p-2">
        <header className="bg-gray-200 rounded-lg p-2 ">
          <TopBar />
        </header>
        <main className="flex flex-grow overflow-hidden space-x-2">
          <aside className="flex-none w-64 bg-gray-200 p-4 rounded-lg ">
            <Sidebar />
          </aside>
          <section className="flex-1 flex-grow min-h-fit max-h-fit overflow-y-scroll rounded-lg">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
