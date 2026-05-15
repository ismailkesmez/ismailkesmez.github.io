import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "İsmail Kesmez | Electrical & Electronics Engineer",
  description:
    "İsmail Kesmez - Electrical & Electronics Engineer. Projects, skills and contact.",
  icons: {
    icon: "/assets/images/profile-pic-(1).png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
