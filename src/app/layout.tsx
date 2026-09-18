import type { Metadata } from "next";
import { RouteTransition } from "@/components/layout/RouteTransition";
import "@fontsource-variable/google-sans-flex/wght.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, "")}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tri Anugerah Yusra | Product Designer",
  description:
    "Product Designer specializing in accounting, ERP, fintech, and B2B systems where the hard part is the logic underneath.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <RouteTransition />
        {children}
      </body>
    </html>
  );
}
