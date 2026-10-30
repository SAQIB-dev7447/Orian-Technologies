import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Saqib — Digital Product Designer",
  description: "Independent product designer creating clear, thoughtful digital experiences for ambitious teams.",
  icons: { icon: "/orian-technologies-ring.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollReveal/>{children}</body></html>;
}
