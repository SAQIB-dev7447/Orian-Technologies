"use client";

import type { MouseEvent, ReactNode } from "react";

const emailAddress = "saqib.nmomin@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

function isMobileMailDevice() {
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1;
}

export function EmailLink({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isMobileMailDevice()) return;
    event.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  }

  return <a className={className} href={gmailComposeUrl} onClick={handleClick} aria-label={ariaLabel}>{children}</a>;
}
