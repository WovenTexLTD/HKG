"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/process", label: "Production Process" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#131920",
        color: "#CBD5DB",
        borderTop: "3px solid #E74C3C",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                HKG <span style={{ color: "#E74C3C" }}>STEEL</span>
              </div>
              <div style={{ fontSize: "0.65rem", color: "#6B7B85", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Mills Ltd
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#8A9BA6", maxWidth: "260px" }}>
              Building Bangladesh with strength and reliability. ISO 9001:2015 certified steel manufacturer since 2010.
            </p>
            <div style={{ marginTop: "1.25rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9BA8B0",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  padding: "0.3rem 0.6rem",
                  marginRight: "0.5rem",
                }}
              >
                ISO 9001:2015
              </span>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9BA8B0",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "4px",
                  padding: "0.3rem 0.6rem",
                }}
              >
                BUET Approved
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1.25rem" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.6rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.875rem",
                      color: "#8A9BA6",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#FFFFFF")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#8A9BA6")}
                  >
                    <ChevronRight size={12} style={{ color: "#E74C3C", flexShrink: 0 }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1.25rem" }}>
              Contact
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <MapPin size={16} style={{ color: "#E74C3C", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#CBD5DB", marginBottom: "0.2rem" }}>Corporate Office</div>
                  <div style={{ fontSize: "0.8rem", color: "#8A9BA6", lineHeight: 1.5 }}>
                    Sena Kalyan Bhaban (17th Floor)<br />
                    195 Motijheel C/A, Dhaka-1000
                  </div>
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem" }}>
                <MapPin size={16} style={{ color: "#E74C3C", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#CBD5DB", marginBottom: "0.2rem" }}>Factory</div>
                  <div style={{ fontSize: "0.8rem", color: "#8A9BA6", lineHeight: 1.5 }}>
                    Mridhakandi New Town<br />
                    Sonargaon, Narayangonj
                  </div>
                </div>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Phone size={16} style={{ color: "#E74C3C", flexShrink: 0 }} />
                <a href="tel:+8801770600700" style={{ fontSize: "0.875rem", color: "#8A9BA6", textDecoration: "none" }}>
                  +880 1770 600 700
                </a>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Mail size={16} style={{ color: "#E74C3C", flexShrink: 0 }} />
                <a href="mailto:info@hkgsteel.com" style={{ fontSize: "0.875rem", color: "#8A9BA6", textDecoration: "none" }}>
                  info@hkgsteel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Group */}
          <div>
            <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1.25rem" }}>
              About the Group
            </h3>
            <p style={{ fontSize: "0.875rem", color: "#8A9BA6", lineHeight: 1.7 }}>
              HKG Steel Mills Ltd is a proud member of the <strong style={{ color: "#CBD5DB" }}>Haseen Kayaba Group</strong> — committed to building a stronger, more resilient Bangladesh.
            </p>
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "rgba(231,76,60,0.08)",
                border: "1px solid rgba(231,76,60,0.2)",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#9BA8B0", marginBottom: "0.25rem" }}>Annual Capacity</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#FFFFFF" }}>120,000</div>
              <div style={{ fontSize: "0.75rem", color: "#E74C3C", fontWeight: 600, letterSpacing: "0.05em" }}>METRIC TONNES</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "#5A6870", margin: 0 }}>
            &copy; 2025 HKG Steel Mills Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "#5A6870", margin: 0 }}>
            Sonargaon, Narayangonj, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
