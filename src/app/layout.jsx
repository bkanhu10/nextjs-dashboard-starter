import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";

import AuthLayout from "./AuthLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Central | ",
  description: "View Customers, Insights, Analytics, and more.",
  robots: "noindex, nofollow",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png" },
      new URL("/favicon-16x16.png", "https://example.com"),
      { url: "/favicon-32x32.png", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: ["/android-chrome-512x512.png"],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${inter.className}`}>
        <AuthLayout>{children}</AuthLayout>
        <Toaster />
      </body>
    </html>
  );
}
