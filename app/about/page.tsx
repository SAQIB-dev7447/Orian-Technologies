import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Asterisk, Compass, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "About — Saqib", description: "A little about Saqib and how he thinks about product design." };

const beliefs = [
  ["01", "Start with people", "The best work starts by listening carefully to the people who will live with what we make."],
  ["02", "Make the complex clear", "Find the useful idea inside the mess, then give it a shape people can understand."],
  ["03", "Care about the details", "A product is the sum of small moments. The little things deserve thoughtful attention."],
];

export default function AboutPage() {
  return <main><SiteHeader/><section className="page-hero wrap"><p className="eyebrow"><span className="live-dot"/> A little about me</p><h1>Curious by nature.<br/><span className="serif-italic">Designer by choice.</span></h1><p className="page-lede">I’m Saqib, an independent product designer who likes asking good questions, making sense of complicated things, and turning them into digital experiences that feel easy to use.</p><Link className="button button-primary" href="/work">See what I make <ArrowDownRight size={16}/></Link><div className="page-hero-art about-hero-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/><div className="about-art-symbol"><Image src="/orian-technologies-ring.png" alt="Orian Technologies ring logo" width={76} height={76} className="about-ring-logo"/></div><span>THOUGHTFUL BY DEFAULT · ALWAYS ASKING WHY</span></div></section>
    <section className="about-story section-pad"><div className="wrap about-story-grid"><div><p className="eyebrow"><span className="live-dot"/> The short version</p><h2>I like the space<br/>between <span className="serif-italic">why and how.</span></h2></div><div className="about-story-copy"><p>That’s where a useful idea gets its shape. I work with small, ambitious teams to understand what people need, find the signal in a complex problem, and build products that feel considered from the first click.</p><p>My practice moves between research, product strategy, interaction design, and visual systems. I’m happiest when the work is collaborative and the team stays curious all the way through.</p><Link className="text-link" href="/process">How I like to work <ArrowUpRight size={15}/></Link></div></div></section>
    <section className="wrap section-pad"><div className="section-heading"><div><p className="eyebrow"><span className="live-dot"/> A few things I believe</p><h2>Good work feels <span className="serif-italic">human.</span></h2></div></div><div className="belief-grid">{beliefs.map(([num,title,body])=><article className="belief-card" key={num}><span>{num} / PRINCIPLE</span><h3>{title}</h3><p>{body}</p><Asterisk size={17}/></article>)}</div></section>
    <section className="about-facts"><div className="wrap facts-row"><span><Compass size={17}/> Based in India, working everywhere</span><span><Heart size={17}/> Independent by design</span><span><Sparkles size={17}/> Currently exploring human centered AI</span></div></section>
    <section className="page-cta wrap"><div><p className="eyebrow"><span className="live-dot"/> Good things start somewhere</p><h2>Let’s make something <span className="serif-italic">matter.</span></h2></div><Link className="button button-primary" href="/contact">Get in touch <ArrowUpRight size={16}/></Link></section><SiteFooter/></main>;
}
