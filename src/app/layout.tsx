import type { Metadata } from "next";
import "@fontsource-variable/google-sans-flex/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tri Anugerah Yusra | Portfolio",
  description:
    "UX Designer, Product Designer, and Graphic Designer who bridges people with design and bring happiness.",
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
