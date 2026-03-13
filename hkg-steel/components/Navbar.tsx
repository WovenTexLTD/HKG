"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Process" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(26, 32, 40, 0.97)" : "#1A2028",
        borderBottom: scrolled ? "1px solid rgba(231, 76, 60, 0.3)" : "1px solid rgba(255,255,255,0.08)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo — white-text SVG on dark navbar */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hkg-logo-white.svg"
              alt="HKG Steel Mills Ltd"
              style={{ display: "block", height: "34px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: "0.25rem" }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.4rem 0.9rem",
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#E74C3C" : "#CBD5DB",
                    textDecoration: "none",
                    borderRadius: "4px",
                    transition: "color 0.2s, background 0.2s",
                    letterSpacing: "0.01em",
                    background: isActive ? "rgba(231,76,60,0.1)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "#FFFFFF";
                      (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.target as HTMLAnchorElement).style.color = "#CBD5DB";
                      (e.target as HTMLAnchorElement).style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "6px",
              padding: "0.4rem",
              color: "#FFFFFF",
              cursor: "pointer",
              display: "none",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: "#1A2028",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "1rem 1.5rem 1.5rem",
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  fontSize: "1rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#E74C3C" : "#CBD5DB",
                  textDecoration: "none",
                  borderRadius: "6px",
                  background: isActive ? "rgba(231,76,60,0.1)" : "transparent",
                  marginBottom: "0.25rem",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
