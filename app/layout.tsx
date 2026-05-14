import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İsmail Kesmez | Electrical & Electronics Engineer",
  description:
    "İsmail Kesmez - Electrical & Electronics Engineer. Projects, skills and contact.",
  icons: {
    icon: "/assets/images/profile-pic (1).png",
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
