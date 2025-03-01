import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Coffee - Fund Your Projects With Coffee",
  description: "Get Me A Coffee created by Risbern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#33363F] text-white`}
        >
        <SessionWrapper>
        <Navbar/>
        <div className="min-h-[85vh]">{children}</div>
        <Footer/>
      </SessionWrapper>
      </body>
    </html>
  );
}
