import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk, Braces,
  Command, Compass, Figma, Heart, Layers3, Mail, MapPin, PenTool, Phone, Radio,
  Sparkles, Workflow,
} from "lucide-react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { EmailLink } from "@/components/email-link";

const projects = [
  { no: "01", name: "Knowbot Analytics", type: "AI · Analytics dashboard", desc: "A clear command center for chatbot activity, usage, and knowledge resources.", label: "Analytics Dashboard", className: "finance", year: "2025", image: "/projects/knowbot-analytics.png", alt: "Knowbot bot usage analytics dashboard" },
  { no: "02", name: "VoiceMind AI", type: "AI · Mobile product", desc: "A voice-first workspace for capturing meetings and turning them into useful next steps.", label: "Mobile App", className: "nexa", year: "2025", image: "/projects/voicemind-ai.png", alt: "VoiceMind AI mobile app with recording and meeting insights" },
  { no: "03", name: "Travel AI", type: "Travel · AI experience", desc: "A visual trip planner that turns a destination into a personal itinerary.", label: "Travel Experience", className: "pulse", year: "2025", image: "/projects/travel-ai-manali.png", alt: "Travel AI destination page for Manali" },
];

const skills = ["Product strategy", "UX research", "Interaction design", "Design systems", "Prototyping", "Visual design"];
const tools = ["Figma", "Framer", "Webflow", "Notion", "Adobe CC"];
const services = [
  ["01", "Product direction", "Find the right problem, align around a clear vision, and turn big goals into a practical plan.", <Compass key="service-compass"/>],
  ["02", "Experience design", "Shape clear user journeys and intuitive interfaces from first sketch through polished prototype.", <PenTool key="service-pen"/>],
  ["03", "AI product experiences", "Make emerging technology feel useful, understandable, and human in everyday workflows.", <Sparkles key="service-sparkles"/>],
  ["04", "Design systems", "Build consistent, flexible foundations that help products and teams grow with confidence.", <Layers3 key="service-layers"/>],
];
const technologies = [
  ["HTML", "5", "html"], ["CSS", "3", "css"], ["JavaScript", "JS", "javascript"],
  ["SQLite", "◉", "sqlite"], ["PostgreSQL", "🐘", "postgres"], ["Bootstrap", "B", "bootstrap"],
  ["TypeScript", "TS", "typescript"], ["Next.js", "N", "next"], ["Python", "Py", "python"],
  ["Flask", "◒", "flask"], ["FastAPI", "⚡", "fastapi"], ["Node.js", "⬡", "node"],
  ["Ollama", "◎", "ollama"], ["Git", "◆", "git"], ["GitHub", "GH", "github"],
  ["Vercel", "▲", "vercel"], ["Supabase", "▰", "supabase"], ["Render", "☁", "render"],
  ["React", "⚛", "react"], ["VS Code", "‹/›", "vscode"], ["Figma", "F", "figma"],
  ["Framer", "Fr", "framer"], ["Webflow", "W", "webflow"], ["Notion", "N", "notion"], ["Adobe CC", "A", "adobe"],
  ["LangChain", "⛓", "langchain"], ["AI Agents", "✳", "ai-agents"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> Independent product designer <span className="eyebrow-location">· Based in India</span></p>
          <h1>I make digital<br />things feel <span className="blue-word">human.</span></h1>
          <p className="hero-intro">I’m Saqib, a product designer partnering with good people to make useful, considered digital experiences.</p>
          <div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={17} /></a><a href="#contact" className="button button-quiet">A little about me <ArrowDown size={15} /></a></div>
          <div className="availability"><span className="availability-icon"><Radio size={15} /></span><div><strong>Available for select projects</strong><span>Taking on work for early 2026</span></div></div>
        </div>
        <div className="hero-art" aria-label="Saqib working at a computer in blue neon light">
          <Image className="hero-portrait" src="/saqib-at-work.png" alt="Saqib working at a computer, with blue neon lighting and a monitor" fill priority sizes="(max-width: 680px) 100vw, 50vw" />
          <div className="hero-portrait-shade" />
        </div>
        <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line"/><span>01 / 06</span></div>
      </section>

      <section className="trusted wrap" aria-label="Selected collaborators"><span className="section-kicker">GOOD COMPANY<br />I’VE KEPT</span><div className="logo-list"><span className="logo-word openai"><Asterisk size={18} /> OpenAI</span><span className="logo-word stripe">stripe<span className="logo-dot">.</span></span><span className="logo-word notion"><Command size={16} /> Notion</span><span className="logo-word linear"><span className="linear-mark">◒</span> Linear</span><span className="logo-word vercel"><span className="vercel-mark">▲</span> Vercel</span></div><span className="trusted-note">A few teams I’ve been lucky to work with ↗</span></section>

      <section className="work-section wrap section-pad" id="work">
        <div className="section-heading"><div><p className="eyebrow"><span className="live-dot" /> Selected projects · 2024—25</p><h2>Made with <span className="serif-italic">intention.</span></h2></div><a href="#contact" className="text-link">Have a project in mind? <ArrowUpRight size={15} /></a></div>
        <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.no}>
          <a className={`project-visual ${project.className}`} href="#contact" aria-label={`Discuss ${project.name}`}>
            <div className="project-meta"><span>{project.label}</span><span>{project.year}</span></div>
            <Image className="project-preview-backdrop" src={project.image} alt="" fill sizes="(max-width: 680px) 100vw, 33vw" />
            <Image className="project-preview-image" src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 100vw, 33vw" />
            <span className="project-preview-shade" />
            <span className="project-view"><ArrowUpRight size={17} /></span>
          </a>
          <div className="project-copy"><div><span className="project-no">{project.no} /</span><h3>{project.name}</h3></div><span className="project-type">{project.type}</span><p>{project.desc}</p></div>
        </article>)}</div>
        <div className="work-bottom"><span>Three projects, lots of good conversations.</span><a href="#contact" className="button button-quiet">More about my work <ArrowUpRight size={15} /></a></div>
      </section>

      <section className="services-section wrap section-pad" id="services"><div className="section-heading"><div><p className="eyebrow"><span className="live-dot"/> HOW I CAN HELP</p><h2>From first thought<br/>to <span className="serif-italic">shipped product.</span></h2></div><p className="section-intro">A flexible design partner for the questions, decisions, and details that move a product forward.</p></div><div className="services-grid">{services.map(([no,title,description,icon])=><article className="service-card" key={String(no)}><div className="service-card-top"><span>{no} / 04</span><i>{icon}</i></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Discuss ${title}`}>Explore together <ArrowUpRight size={14}/></a></article>)}</div></section>

      <section className="about-band" id="about"><div className="wrap about-inner"><div className="about-visual" aria-hidden="true"><div className="about-grid-glow"/><div className="about-cube"><span/><span/><span/><i><Sparkles size={25} strokeWidth={1.3}/></i></div><span className="about-visual-caption">THOUGHTFUL BY DEFAULT · ALWAYS ASKING WHY</span></div><div className="about-copy"><p className="eyebrow"><span className="live-dot" /> A bit about me</p><h2>Curious by nature.<br /><span className="serif-italic">Designer by choice.</span></h2><p>I enjoy finding the simple idea inside a complicated problem. Over the last few years, I’ve helped small teams turn big ambitions into products people actually enjoy using.</p><a className="text-link" href="/about">More about me <ArrowUpRight size={15} /></a></div><aside className="about-profile"><div className="profile-row"><span><i>01</i>Name</span><strong>Saqib</strong></div><div className="profile-row"><span><i>02</i>Email</span><strong>saqib.nmomin@gmail.com</strong></div><div className="profile-row"><span><i>03</i>Location</span><strong>India · Remote</strong></div><div className="profile-row"><span><i>04</i>Availability</span><strong><b className="profile-status"/> Open for select projects</strong></div><div className="experience-badge"><span><strong>05+</strong> YEARS OF<br/> EXPERIENCE</span><ArrowUpRight size={19}/></div></aside></div></section>

      <section className="skills-section wrap section-pad" id="skills"><div className="section-heading"><div><p className="eyebrow"><span className="live-dot" /> The kit I bring</p><h2>Good thinking.<br /><span className="serif-italic">Useful making.</span></h2></div><p className="section-intro">From the first thoughtful question to the tiny details that make a product click.</p></div>
        <div className="skills-impact"><div className="skills-panel"><h3><Layers3 size={16} /> TOOLS &amp; SKILLS</h3><div className="tool-grid">{tools.map((tool, i) => <span key={tool}><i className={`tool-glyph glyph-${i}`}>{[<Figma key="f" size={19}/>, <Asterisk key="a" size={18}/>, <Workflow key="w" size={18}/>, <Command key="c" size={17}/>, <PenTool key="p" size={17}/>][i]}</i>{tool}</span>)}</div><div className="skill-meter-list">{[["UX research", "95%"], ["Interaction design", "93%"], ["Design systems", "90%"]].map(([skill, score]) => <div className="skill-meter" key={skill}><div><span>{skill}</span><b>{score}</b></div><span className="meter-track"><i style={{width:score}} /></span></div>)}</div><p className="tool-note">Strategy, prototyping, and visual design<br />round out the toolkit.</p></div><div className="impact-panel"><h3><Asterisk size={16} /> IMPACT BY THE NUMBERS</h3><div className="impact-grid">{[["50+", "Projects completed"], ["25+", "Teams & clients"], ["05", "Years experience"], ["98%", "Would work together again"]].map(([num, label], i) => <div className="impact-stat" key={num}><span className="impact-icon">{[<Layers3 key="a"/>, <Workflow key="b"/>, <Braces key="c"/>, <Heart key="d"/>][i]}</span><strong>{num}</strong><span>{label}</span></div>)}</div></div></div>
      </section>

      <section className="fit-section"><div className="wrap fit-inner"><div className="fit-heading"><p className="eyebrow"><span className="live-dot"/> THE BEST WORK STARTS HERE</p><h2>Good people.<br/><span className="serif-italic">Meaningful problems.</span></h2></div><p className="fit-copy">I work best with thoughtful teams who care about the people using what they make, stay open to new ideas, and want to turn a promising “what if” into something real.</p><a href="#contact" className="button button-quiet">See if we’re a fit <ArrowUpRight size={15}/></a></div></section>

        <section className="technology-section wrap section-pad" id="technology"><div className="technology-panel"><div className="technology-heading"><div><p className="eyebrow"><span className="live-dot" /> THE TOOLS BEHIND THE WORK</p><h2>Technology <span className="serif-italic">I use.</span></h2></div><p>Design, development, and collaboration tools<br/>that help turn ideas into useful products.</p></div><div className="technology-grid">{technologies.map(([name, mark, color])=><div className="technology-item" key={name}><span className={`technology-mark ${color}`} aria-hidden="true">{mark}</span><span>{name}</span></div>)}</div><div className="technology-foot"><span>DESIGN · DEVELOPMENT · AI · INFRASTRUCTURE</span><span>27 TOOLS</span></div></div></section>

        <section className="process-section" id="process"><div className="wrap section-pad"><div className="section-heading process-heading"><div><p className="eyebrow"><span className="live-dot" /> A little structure, lots of room</p><h2>From “what if?” to <span className="serif-italic">what’s next.</span></h2></div><span className="process-aside">Good work is a conversation.<br />Here’s how we might have it.</span></div><div className="home-process-track">{[["01", "Listen", "Start with the real problem, the people around it, and all the questions worth asking.", <Radio key="a"/>], ["02", "Find the shape", "Make sense of the mess. Set a direction we both believe in.", <Asterisk key="b"/>], ["03", "Make it real", "Explore, prototype, test, refine. Keep the important bits close.", <PenTool key="c"/>], ["04", "Make it better", "Ship with care, learn from the real world, and keep making it better.", <ArrowUpRight key="d"/>]].map(([num, title, body, icon]) => <article className="home-process-step" key={String(num)}><div className="home-step-head"><span>{num}</span><i>{icon}</i></div><h3>{title}</h3><p>{body}</p><span className="home-step-line"/></article>)}</div></div></section>

      <section className="testimonial-section wrap section-pad" id="testimonials"><div className="section-heading"><div><p className="eyebrow"><span className="live-dot" /> Kind words, real people</p><h2>Better together<span className="blue-word">.</span></h2></div><span className="testimonial-count">01 — 03</span></div><div className="quote-grid">{[["“Saqib has a rare ability to make the complicated feel obvious. The work was thoughtful, collaborative, and somehow even better than we imagined.”", "Sarah Chen", "Head of Product · Linear", "SC"], ["“From our first conversation, it felt like we had a partner who cared as much about the why as the what. We launched with confidence.”", "James Carter", "CEO · Studio North", "JC"], ["“The little details, the big picture, the way he brings a room along — Saqib made the whole thing feel easy. I’d work together again in a heartbeat.”", "Priya Patel", "Product Lead · Healthsync", "PP"]].map(([quote, name, role, initials], i) => <article className="quote-card" key={name}><span className="quote-mark">“</span><p>{quote}</p><div className="quote-person"><span className={`avatar avatar-${i}`}>{initials}</span><span><strong>{name}</strong><small>{role}</small></span><ArrowUpRight className="quote-arrow" size={15}/></div></article>)}</div><div className="quote-pagination"><span className="active-pip"/><span/><span/><span className="pagination-label">Words I keep coming back to</span></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="contact-copy"><p className="eyebrow"><span className="live-dot" /> Have something good in mind?</p><h2>Let’s make<br />a little <span className="serif-italic">noise.</span></h2><p>I’m currently open to the right kind of collaboration. Tell me what you’re thinking and we’ll take it from there.</p><EmailLink className="contact-email" ariaLabel="Email Saqib at saqib.nmomin@gmail.com"><Mail size={15}/> saqib.nmomin@gmail.com <ArrowUpRight size={14}/></EmailLink><div className="contact-details"><span><MapPin size={14}/> India · Working everywhere</span><span><Phone size={14}/> Available for remote work</span></div></div><ContactForm/><div className="contact-glow"/></div></section>

      <SiteFooter />
    </main>
  );
}
