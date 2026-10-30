import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Selected Work — Saqib", description: "Selected product design projects by Saqib." };

const projects = [
  { no:"01", name:"Knowbot Analytics", category:"AI · ANALYTICS DASHBOARD", year:"2025", desc:"A clear command center for chatbot activity, usage, and knowledge resources. The dashboard brings bot health and content performance into one practical view.", outcome:"Bot activity at a glance", tone:"finance", image:"/projects/knowbot-analytics.png", alt:"Knowbot bot usage analytics dashboard" },
  { no:"02", name:"VoiceMind AI", category:"AI · MOBILE PRODUCT", year:"2025", desc:"A voice-first workspace for capturing meetings and turning them into useful next steps. Quick recording and AI insights keep the important follow-through close.", outcome:"From conversation to next step", tone:"nexa", image:"/projects/voicemind-ai.png", alt:"VoiceMind AI mobile app with recording and meeting insights" },
  { no:"03", name:"Travel AI", category:"TRAVEL · AI EXPERIENCE", year:"2025", desc:"A visual trip planner that turns a destination into a personal itinerary. Explore Manali through destination highlights and practical trip details.", outcome:"A more personal way to plan a trip", tone:"pulse", image:"/projects/travel-ai-manali.png", alt:"Travel AI destination page for Manali" },
];

export default function WorkPage() {
  return <main><SiteHeader/><section className="page-hero page-hero-compact wrap"><p className="eyebrow"><span className="live-dot"/> Selected work · 2024—25</p><h1>Made with <span className="serif-italic">intention.</span></h1><p className="page-lede">A few collaborations where good questions, thoughtful design, and a little bit of curiosity came together.</p><div className="page-index">03 PROJECTS <span/> AI · MOBILE · TRAVEL</div></section>
    <section className="wrap work-page-list">{projects.map((project)=><article className="work-case" key={project.no}><div className={`case-art ${project.tone}`}><Image className="case-art-backdrop" src={project.image} alt="" fill sizes="(max-width: 680px) 100vw, 50vw"/><Image className="case-art-image" src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, 50vw"/><span className="case-art-label">{project.category}</span><span className="case-art-year">{project.year}</span><span className="case-image-shade"/></div><div className="case-copy"><span className="case-no">{project.no} / FEATURED PROJECT</span><h2>{project.name}<ArrowUpRight size={18}/></h2><span className="case-category">{project.category} <i/> {project.year}</span><p>{project.desc}</p><div className="case-outcome"><span>THE INTENTION</span><strong>{project.outcome}</strong></div></div></article>)}</section>
    <section className="page-cta wrap"><div><p className="eyebrow"><span className="live-dot"/> Your project could be next</p><h2>Have a good one <span className="serif-italic">in mind?</span></h2></div><Link className="button button-primary" href="/contact">Let’s talk <ArrowUpRight size={16}/></Link></section><SiteFooter/></main>;
}
