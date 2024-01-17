import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/navbar";
import MobileNavbar from "../components/ui/mobileNavbar";
import { Toaster } from "react-hot-toast";
import ThemeSwitcher from "@/components/theme-switcher";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Fernandes Portfolio",
  description:
    "A portfolio showcasing the work of Lucas Fernandes as software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-300 text-gray-950 relative h-full dark:bg-gray-800`}
      >
        <div className="bg-[#e6b0b2] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#362021]"></div>
        <div className="bg-[#9894b3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#25233b]"></div>
        <ThemeContextProvider>
          <Navbar />
          <MobileNavbar />
          {children}
          <Toaster />
          <ThemeSwitcher />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
