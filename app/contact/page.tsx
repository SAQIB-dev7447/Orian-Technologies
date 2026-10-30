import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone, Radio } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { EmailLink } from "@/components/email-link";

export const metadata: Metadata = { title: "Contact — Saqib", description: "Start a product design conversation with Saqib." };

export default function ContactPage() {
  return <main><SiteHeader/><section className="contact-page wrap"><div className="contact-copy"><p className="eyebrow"><span className="live-dot"/> Have something good in mind?</p><h1>Let’s make<br/>a little <span className="serif-italic">noise.</span></h1><p className="page-lede">Tell me what you’re thinking. A rough idea, a tricky problem, a half-finished sentence — any of those are a good place to start.</p><EmailLink className="contact-email" ariaLabel="Email Saqib at saqib.nmomin@gmail.com"><Mail size={15}/> saqib.nmomin@gmail.com <ArrowUpRight size={14}/></EmailLink><div className="contact-details"><span><MapPin size={14}/> India · Working everywhere</span><span><Phone size={14}/> Available for remote work</span><span><Radio size={14}/> Open to select projects</span></div></div><ContactForm/><div className="contact-glow"/></section><section className="contact-bottom"><div className="wrap"><span>GOOD CONVERSATIONS START WITH A QUESTION.</span><EmailLink ariaLabel="Email Saqib">What are you working on? <ArrowUpRight size={14}/></EmailLink></div></section><SiteFooter/></main>;
}
