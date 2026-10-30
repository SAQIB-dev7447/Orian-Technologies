"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight, ChevronRight, Menu } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Kind words", href: "/kindwords" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="topbar">
      <Link className="brand orian-brand" href="/" aria-label="Orian Technologies home"><Image className="brand-logo" src="/orian-technologies-ring.png" width={44} height={44} alt="" priority/><span className="orian-wordmark">ORIAN<small>TECHNOLOGIES</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
      <Link className="nav-cta" href="/contact">Let’s talk <ArrowUpRight size={14} /></Link>
      <details className="mobile-menu"><summary className="menu-button" aria-label="Open navigation"><Menu size={20} /></summary><nav aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}<ChevronRight size={14}/></Link>)}</nav></details>
    </header>
  );
}
