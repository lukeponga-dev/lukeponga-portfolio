"use client";

import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav"><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">Menu</button>{open && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation"><a href="#work" onClick={() => setOpen(false)}>Work</a><a href="#skills" onClick={() => setOpen(false)}>Stack</a><a href="#about" onClick={() => setOpen(false)}>About</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a></nav>}</div>;
}
