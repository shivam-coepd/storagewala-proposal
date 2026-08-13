import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "StorageWala Website Redesign Proposal | APT Digital Express",
  description: "A conversion-focused digital platform for discovering storage plans, calculating transparent pricing, booking pickup, and paying securely online.",
  keywords: "StorageWala, website redesign, online booking, payment gateway, storage solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%231e3a5f'/><text y='.9em' x='50%' text-anchor='middle' font-size='60' fill='%23d4a843'>SW</text></svg>" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
