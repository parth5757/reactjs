import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });    

export const metadata: Metadata = {
  title: "Parth universe",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body className={`${inter.className} bg-[#30014] overfolw-y-scroll over`}>
        {children}
      </body>
    </html>
  )
}