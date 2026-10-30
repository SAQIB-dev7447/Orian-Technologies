import type { Metadata } from "next";
import { ArrowUpRight, Quote, Sparkles } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Kind Words — Saqib", description: "Notes from the people Saqib has worked with." };

const notes = [
  { quote:"Saqib has a rare ability to make the complicated feel obvious. The work was thoughtful, collaborative, and somehow even better than we imagined.", name:"Sarah Chen", role:"Head of Product · Linear", initials:"SC" },
  { quote:"From our first conversation, it felt like we had a partner who cared as much about the why as the what. We launched with confidence.", name:"James Carter", role:"CEO · Studio North", initials:"JC" },
  { quote:"The little details, the big picture, the way he brings a room along — Saqib made the whole thing feel easy. I’d work together again in a heartbeat.", name:"Priya Patel", role:"Product Lead · Healthsync", initials:"PP" },
];

export default function KindWordsPage() {
  return <main><SiteHeader/><section className="page-hero page-hero-compact wrap"><p className="eyebrow"><span className="live-dot"/> Kind words, real people</p><h1>Better <span className="serif-italic">together.</span></h1><p className="page-lede">The work is always better when it’s shared. Here are a few words from the people who made these projects what they are.</p><div className="page-index">NOTES FROM COLLABORATORS <span/> 03 STORIES</div></section>
    <section className="wrap kindwords-list">{notes.map((note,index)=><article className="kindword-card" key={note.name}><div className="kindword-mark"><Quote size={23}/><span>0{index+1} / 03</span></div><blockquote>“{note.quote}”</blockquote><div className="kindword-person"><span className={`avatar avatar-${index}`}>{note.initials}</span><span><strong>{note.name}</strong><small>{note.role}</small></span><ArrowUpRight className="quote-arrow" size={16}/></div></article>)}</section>
    <section className="kindwords-note"><div className="wrap kindwords-note-inner"><Sparkles size={19}/><p>The best feedback is a reminder to keep making things with care.</p><span>THANK YOU, ALWAYS.</span></div></section>
    <section className="page-cta wrap"><div><p className="eyebrow"><span className="live-dot"/> Maybe we’ll make something together</p><h2>Your project, <span className="serif-italic">your story.</span></h2></div><Link className="button button-primary" href="/contact">Say hello <ArrowUpRight size={16}/></Link></section><SiteFooter/></main>;
}
