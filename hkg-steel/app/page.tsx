import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, Award, TrendingUp, Layers, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "HKG Steel Mills Ltd | Leading Steel Manufacturer in Bangladesh",
  description:
    "HKG Steel Mills Ltd — ISO 9001:2015 certified steel manufacturer in Sonargaon, Bangladesh. 120,000 tonnes annual capacity. Steel billets and deformed bar (rebar) for major national infrastructure.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: "120,000", unit: "Tonnes/Year", label: "Production Capacity" },
  { value: "2010", unit: "Founded", label: "Over 15 Years Operating" },
  { value: "ISO 9001", unit: ":2015", label: "Quality Certified" },
  { value: "BUET", unit: "Approved", label: "Tested Monthly" },
];

const products = [
  {
    icon: Layers,
    title: "Steel Billets",
    desc: "Produced using advanced Continuous Casting Machine (CCM) technology for uniform density and consistent chemical composition. Available in custom cross-sections and lengths.",
    specs: ["CCM Technology", "~350 Tonnes/Day", "Custom Sizes"],
  },
  {
    icon: Building2,
    title: "Deformed Bar (Rebar)",
    desc: "High-strength deformed bars manufactured through controlled Quenching & Tempering (Q&T) process. Minimum yield strength 500 MPa. Sized 8mm to 32mm for all construction needs.",
    specs: ["Grade 500W & 60/400", "Yield ≥ 500 MPa", "8mm – 32mm Diameters"],
  },
];

const projects = [
  {
    name: "Ruppur Nuclear Power Plant",
    detail: "Listed supplier — Bangladesh's landmark 2,400 MW nuclear infrastructure project",
    icon: "⚛",
  },
  {
    name: "Sylhet Sena Nibash",
    detail: "Military housing development — institutional-grade structural steel supply",
    icon: "🏗",
  },
  {
    name: "RUET Campus",
    detail: "Rajshahi University of Engineering & Technology — academic infrastructure",
    icon: "🎓",
  },
];

const certBadges = [
  { label: "ISO 9001:2015", sub: "Certified" },
  { label: "BSTI", sub: "Approved" },
  { label: "PWD", sub: "Approved" },
  { label: "BUET", sub: "Tested Monthly" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/images/hero (1).png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "70px",
          textAlign: "center",
        }}
      >
        {/* Dark tint over hero image */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.72)", zIndex: 0 }} />

        {/* Subtle diagonal texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(231,76,60,0.025) 80px, rgba(231,76,60,0.025) 81px)",
            pointerEvents: "none",
          }}
        />
        {/* Red glow behind logo */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(231,76,60,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-inner"
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "clamp(3rem, 8vw, 7rem) 1.25rem clamp(4rem, 9vw, 8rem)",
            width: "100%",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo — inline JSX for reliable centering */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(0.75rem, 2vw, 1.25rem)", marginBottom: "clamp(1.5rem, 4vw, 3.5rem)" }}>
            {/* Symbol mark */}
            <svg width="clamp(52px, 12vw, 80px)" height="clamp(52px, 12vw, 80px)" viewBox="0 0 126 126" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <g transform="translate(63,63)">
                <rect x="-48" y="-19" width="52" height="38" rx="13" fill="#E74C3C" transform="rotate(-45)"/>
                <rect x="-48" y="-19" width="52" height="38" rx="13" fill="#C0392B" transform="rotate(45)"/>
                <rect x="-48" y="-19" width="52" height="38" rx="13" fill="#E74C3C" transform="rotate(135)"/>
                <rect x="-48" y="-19" width="52" height="38" rx="13" fill="#C0392B" transform="rotate(225)"/>
                <polygon points="0,-23 10,-10 23,0 10,10 0,23 -10,10 -23,0 -10,-10" fill="#1A2028"/>
                <circle cx="0" cy="0" r="6" fill="#1A2028"/>
              </g>
            </svg>
            {/* Wordmark */}
            <div style={{ textAlign: "left", lineHeight: 1 }}>
              <div style={{ fontSize: "clamp(2.4rem, 10vw, 5.5rem)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "'Arial Black', 'Franklin Gothic Heavy', Impact, sans-serif" }}>
                <span style={{ color: "#FFFFFF" }}>HKG</span>
                <span style={{ color: "#E74C3C" }}> STEEL</span>
              </div>
              <div style={{ fontSize: "clamp(0.55rem, 1.4vw, 0.75rem)", color: "rgba(255,255,255,0.45)", letterSpacing: "0.25em", textTransform: "uppercase", marginTop: "0.2rem" }}>
                Mills Ltd
              </div>
            </div>
          </div>

          {/* h1 for SEO — visually hidden, screen-reader accessible */}
          <h1 style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>
            HKG Steel Mills Ltd — Leading Steel Manufacturer in Bangladesh
          </h1>

          {/* Bengali tagline */}
          <p
            style={{
              fontSize: "clamp(1.4rem, 3.2vw, 2rem)",
              color: "#E74C3C",
              fontWeight: 700,
              marginBottom: "0.6rem",
              lineHeight: 1.4,
              letterSpacing: "0.01em",
            }}
          >
            নির্মাণে নিশ্চিন্ত নির্ভরতা
          </p>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "rgba(255,255,255,0.75)",
              fontStyle: "italic",
              fontWeight: 400,
              marginBottom: "2.5rem",
            }}
          >
            "Building Bangladesh with Strength and Reliability"
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "620px",
              lineHeight: 1.85,
              marginBottom: "3rem",
            }}
          >
            An established steel manufacturer operating from Sonargaon, Narayangonj. High-grade billets
            and deformed bars with a capacity exceeding{" "}
            <strong style={{ color: "#FFFFFF", fontWeight: 700 }}>120,000 metric tonnes per year</strong>,
            supplying Bangladesh's most critical national infrastructure.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#E74C3C",
                color: "#FFFFFF",
                padding: "1rem 2.5rem",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              View Products <ArrowRight size={17} />
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "#FFFFFF",
                padding: "1rem 2.5rem",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.22)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom fade to white */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "130px",
            background: "linear-gradient(to bottom, transparent, #FFFFFF)",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ── STATS BAR ── */}
      <section
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #E8ECEF",
        }}
      >
        <div
          className="home-stats-grid"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem 1rem",
                textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid #E8ECEF" : "none",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 900, color: "#2D3436", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#E74C3C", marginTop: "0.25rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                {s.unit}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#636E72", marginTop: "0.3rem", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT INTRO ── */}
      <section className="s-pad" style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="about-grid"
          >
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#E74C3C",
                  marginBottom: "1rem",
                }}
              >
                Who We Are
              </div>
              <h2
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 800,
                  color: "#2D3436",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                A Real Steel Mill,<br />
                <span style={{ color: "#E74C3C" }}>Built to Last</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                HKG Steel Mills Ltd operates a state-of-the-art manufacturing facility at Mridhakandi, Sonargaon.
                We produce steel billets via Continuous Casting Machine and high-grade deformed bars through
                controlled rolling and quenching processes.
              </p>
              <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "2rem" }}>
                As a member of the <strong style={{ color: "#2D3436" }}>Haseen Kayaba Group</strong>, we maintain
                rigorous quality standards — ISO 9001:2015 certified, BUET tested monthly, and approved for
                government and public infrastructure projects nationwide.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "400+ tonnes of steel melted daily",
                  "Induction furnaces: 20 MT and 8 MT capacity",
                  "Monthly BUET quality testing — results on request",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle2 size={18} style={{ color: "#E74C3C", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.9375rem", color: "#3D4F5F" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "2rem",
                  color: "#E74C3C",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}
              >
                Our Full Story <ArrowRight size={16} />
              </Link>
            </div>

            {/* Factory photo */}
            <div>
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: "12px",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid #DFE6E9",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/factory-rebar-floor.jpg"
                  alt="HKG Steel Mills factory floor — rebar production"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transform: "scale(1.12)", transformOrigin: "center" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(0,0,0,0.55)",
                    padding: "0.75rem 1rem",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.75)",
                    fontStyle: "italic",
                  }}
                >
                  HKG Steel Mills — Mridhakandi, Sonargaon Facility
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          }
        `}</style>
      </section>

      {/* ── PRODUCTS OVERVIEW ── */}
      <section className="s-pad" style={{ padding: "6rem 1.5rem", background: "#F5F6FA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Our Products
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#2D3436",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Steel for Every Structure
            </h2>
            <p style={{ fontSize: "1rem", color: "#636E72", maxWidth: "520px", margin: "0 auto" }}>
              Two core products, manufactured to international standards, tested rigorously, and trusted in Bangladesh's most demanding projects.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {products.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid #E8ECEF",
                  padding: "2.5rem",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(to right, #E74C3C, #C0392B)",
                  }}
                />
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(231,76,60,0.1)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p.icon size={26} style={{ color: "#E74C3C" }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "#2D3436",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.875rem",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "#636E72", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                  {p.specs.map((spec, j) => (
                    <span
                      key={j}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#3D4F5F",
                        background: "#F5F6FA",
                        border: "1px solid #DFE6E9",
                        borderRadius: "4px",
                        padding: "0.3rem 0.7rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "#E74C3C",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  Full Specifications <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTABLE PROJECTS ── */}
      <section
        className="s-pad"
        style={{
          padding: "6rem 1.5rem",
          background: "linear-gradient(135deg, #2D3436 0%, #1A2028 100%)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Project Credentials
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Trusted on Bangladesh's<br />Landmark Projects
            </h2>
            <p style={{ fontSize: "1rem", color: "#8A9BA6", maxWidth: "520px", margin: "0 auto" }}>
              HKG Steel is a named supplier and participant in some of Bangladesh's most significant national development works.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  padding: "2rem",
                  transition: "border-color 0.2s, background 0.2s",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: 1 }}>{p.icon}</div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.625rem",
                    lineHeight: 1.3,
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#8A9BA6", lineHeight: 1.65 }}>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS STRIP ── */}
      <section style={{ padding: "4rem 1.5rem", background: "#FFFFFF", borderBottom: "1px solid #E8ECEF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#636E72" }}>
              Certifications & Approvals
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {certBadges.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#F5F6FA",
                  border: "1px solid #DFE6E9",
                  borderRadius: "10px",
                  padding: "1.25rem 2rem",
                  minWidth: "160px",
                }}
              >
                <Award size={24} style={{ color: "#E74C3C", marginBottom: "0.5rem" }} />
                <div style={{ fontWeight: 800, fontSize: "0.9375rem", color: "#2D3436" }}>{b.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#636E72", fontWeight: 500 }}>{b.sub}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/certifications"
              style={{
                fontSize: "0.875rem",
                color: "#E74C3C",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              View All Certifications <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <TrendingUp size={40} style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }} />
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            Considering HKG as a Partner?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", lineHeight: 1.75 }}>
            We're an established, operating steel manufacturer with certifications, capacity, and
            a track record. Get in touch for specifications, certifications, or any business enquiry.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#FFFFFF",
                color: "#C0392B",
                padding: "0.9rem 2.25rem",
                borderRadius: "6px",
                fontWeight: 800,
                fontSize: "0.9375rem",
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "transparent",
                color: "#FFFFFF",
                padding: "0.9rem 2.25rem",
                borderRadius: "6px",
                fontWeight: 700,
                fontSize: "0.9375rem",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              Product Specifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
