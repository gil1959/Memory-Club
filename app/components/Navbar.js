"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Locations", href: "#places" },
    { label: "Our Story", href: "#venues-story" },
    { label: "Partner With Us", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-md"
          : ""
      }`}
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="text-[9px] tracking-[0.2em] font-inter font-medium text-text-dark/90 uppercase text-center w-full">
            — EST 2018 —
          </span>
          <span className="font-playfair text-lg md:text-xl font-bold tracking-wide uppercase">
            Memory{" "}
            <span className="font-dancing text-xl md:text-2xl font-semibold normal-case italic">Club</span>
          </span>
          <span className="text-[8px] tracking-[0.25em] font-inter font-medium text-text-dark/90 uppercase text-center w-full">
            Photobooth Co.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-inter font-medium tracking-wide uppercase text-text-dark/80 hover:text-text-dark hover:scale-105 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - same style as hero */}
        <div className="hidden lg:block">
          <a
            href="#places"
            className="inline-flex btn-find-locations"
          >
            Find Locations
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-dark transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Bottom border line */}
      <div className="w-full h-[1px] bg-text-dark/15" />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-cream/98 backdrop-blur-sm ${
          mobileOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-inter font-medium tracking-wide uppercase text-text-dark/80 hover:text-text-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#places"
            onClick={() => setMobileOpen(false)}
            className="mt-2 btn-find-locations"
          >
            Find Locations
          </a>
        </div>
      </div>
    </nav>
  );
}
