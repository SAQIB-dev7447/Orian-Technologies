"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";

type ContactChannel = "email" | "whatsapp";

export function ContactForm() {
  const [channel, setChannel] = useState<ContactChannel>("email");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", "", message].filter(Boolean).join("\n");

    if (channel === "whatsapp") {
      window.location.href = `https://wa.me/919175802980?text=${encodeURIComponent(body)}`;
      return;
    }

    const subject = `Portfolio inquiry from ${name}`;
    if (/Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1) {
      const params = new URLSearchParams({ subject, body });
      window.location.href = `mailto:saqib.nmomin@gmail.com?${params.toString()}`;
      return;
    }

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "saqib.nmomin@gmail.com",
      su: subject,
      body,
    });
    window.location.href = `https://mail.google.com/mail/?${params.toString()}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-top"><span>01 — SAY HELLO</span><span>Usually replies in 2 days <span className="live-dot"/></span></div>
    <label>Your name<input name="name" placeholder="How should I call you?" required/></label>
    <label>Your email<input name="email" type="email" placeholder="you@somewhere.com" required/></label>
    <label><span>Your phone <small className="optional-label">OPTIONAL</small></span><input name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel"/></label>
    <label>A little about the project<textarea name="message" placeholder="A rough idea is a great place to start…" rows={5} required/></label>
    <fieldset className="contact-channel"><legend>Send your message with</legend><div className="contact-channel-options">
      <button type="button" className={channel === "email" ? "selected" : ""} aria-pressed={channel === "email"} onClick={() => setChannel("email")}><Mail size={14}/> Email</button>
      <button type="button" className={channel === "whatsapp" ? "selected" : ""} aria-pressed={channel === "whatsapp"} onClick={() => setChannel("whatsapp")}><MessageCircle size={14}/> WhatsApp</button>
    </div></fieldset>
    <button className="button button-primary form-submit" type="submit">{channel === "email" ? "Continue in Gmail" : "Continue in WhatsApp"} <ArrowRight size={16}/></button>
    <p className="form-fineprint"><Check size={12}/> Your message opens prefilled in {channel === "email" ? "Gmail" : "WhatsApp"} for you to send.</p>
  </form>;
}
