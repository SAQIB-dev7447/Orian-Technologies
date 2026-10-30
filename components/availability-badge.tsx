import { MapPin, Radio } from "lucide-react";

export function AvailabilityBadge({ className = "" }: { className?: string }) {
  return <div className={`hero-status ${className}`}>
    <div className="hero-status-row"><Radio size={13}/><span><small>AVAILABLE FOR</small><strong><i/> FREELANCE</strong></span></div>
    <div className="hero-status-row"><MapPin size={13}/><span><small>LOCATION</small><strong>REMOTE</strong></span></div>
  </div>;
}
