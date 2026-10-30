import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saqib — Digital Product Designer",
  description: "Independent product designer creating clear, thoughtful digital experiences for ambitious teams.",
  icons: { icon: "/orian-technologies-ring.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
