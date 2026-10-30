import type { Metadata } from "next";
import { ArrowDownRight, ArrowRight, Compass, MessageCircle, PenTool, Radio, Sparkles } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Process — Saqib", description: "A collaborative, thoughtful product design process." };

const steps = [
  { no:"01", title:"Listen", icon:<Radio/>, tag:"GET CURIOUS", desc:"Start with the real problem, the people around it, and all the questions worth asking.", details:["Understand the people and context", "Map what we know and what we don’t", "Agree what a good outcome looks like"] },
  { no:"02", title:"Find the shape", icon:<Compass/>, tag:"MAKE SENSE", desc:"Make sense of the mess. Set a direction we both believe in.", details:["Bring insights into focus", "Explore the right opportunity", "Choose a direction together"] },
  { no:"03", title:"Make it real", icon:<PenTool/>, tag:"EXPLORE & REFINE", desc:"Explore, prototype, test, refine. Keep the important bits close.", details:["Turn ideas into useful flows", "Prototype to learn quickly", "Refine with real feedback"] },
  { no:"04", title:"Make it better", icon:<Sparkles/>, tag:"SHIP & LEARN", desc:"Ship with care, learn from the real world, and keep making it better.", details:["Prepare a thoughtful handoff", "Learn from real use", "Keep improving what matters"] },
];

export default function ProcessPage() {
  return <main><SiteHeader/><section className="page-hero page-hero-compact wrap"><p className="eyebrow"><span className="live-dot"/> A little structure, lots of room</p><h1>From “what if?” to<br/><span className="serif-italic">what’s next.</span></h1><p className="page-lede">Good work is a conversation. The process gives us a shared direction while leaving enough room to discover something better.</p><div className="page-index">FOUR STEPS <span/> ALWAYS A COLLABORATION</div></section>
    <section className="wrap process-page-list"><div className="process-page-timeline">{steps.map((step,index)=><article className={`process-page-step process-side-${index % 2 === 0 ? "left" : "right"}`} key={step.no}><div className="process-marker">{step.no}</div><div className="process-page-copy"><div className="process-step-kicker">{step.icon}<span>{step.tag}</span></div><h2>{step.title}</h2><p>{step.desc}</p><div className="process-detail-points">{step.details.map((detail)=><span key={detail}><ArrowRight size={13}/>{detail}</span>)}</div></div></article>)}</div></section>
    <section className="process-promise"><div className="wrap promise-inner"><span className="promise-icon"><Sparkles/></span><div><p className="eyebrow">THE THROUGH LINE</p><h2>Curiosity first.<br/><span className="serif-italic">Care all the way through.</span></h2></div><p>There’s no one-size-fits-all playbook. We’ll adapt the rhythm to the problem, the team, and the people we’re designing for.</p></div></section>
    <section className="page-cta wrap"><div><p className="eyebrow"><span className="live-dot"/> A good process starts with hello</p><h2>Let’s find a way <span className="serif-italic">forward.</span></h2></div><Link className="button button-primary" href="/contact">Start a conversation <ArrowDownRight size={16}/></Link></section><SiteFooter/></main>;
}
