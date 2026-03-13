import type { Metadata } from "next";
import { Award, ShieldCheck, FlaskConical, Building, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certifications | HKG Steel Mills Ltd",
  description:
    "HKG Steel Mills Ltd certifications: ISO 9001:2015, BSTI approved, PWD authorized, and BUET tested. Complete quality compliance for Bangladesh's national infrastructure requirements.",
  alternates: { canonical: "/certifications" },
};

const certifications = [
  {
    icon: Award,
    name: "ISO 9001:2015",
    body: "International Organization for Standardization",
    scope: "Quality Management System",
    desc: "HKG Steel Mills Ltd operates under a certified ISO 9001:2015 Quality Management System, covering all stages of production from raw material procurement to final product dispatch. The certification demonstrates our commitment to consistent quality, process control, and continuous improvement.",
    significance: "Internationally recognized — signals QMS maturity to global partners",
    color: "#E74C3C",
  },
  {
    icon: ShieldCheck,
    name: "BSTI Approved",
    body: "Bangladesh Standards and Testing Institution",
    scope: "National Standards Compliance",
    desc: "Approved by Bangladesh's national standards body, BSTI. Our products comply with the Bangladesh national standards for steel reinforcement bars (BDS ISO 6935-2), ensuring compliance for all construction projects governed by Bangladeshi building codes.",
    significance: "Required for all construction in Bangladesh — confirms domestic compliance",
    color: "#2980B9",
  },
  {
    icon: Building,
    name: "PWD Approved",
    body: "Public Works Department, Government of Bangladesh",
    scope: "Government & Public Infrastructure",
    desc: "HKG Steel is authorized for use in government-funded and public infrastructure projects under the Public Works Department (PWD) of the Government of Bangladesh. This authorization is a prerequisite for supply to government contracts and institutional projects.",
    significance: "Mandatory for government project supply — confirms institutional credibility",
    color: "#27AE60",
  },
  {
    icon: FlaskConical,
    name: "BUET Approved",
    body: "Bangladesh University of Engineering and Technology",
    scope: "Monthly Third-Party Testing",
    desc: "Our products are tested monthly by BUET — Bangladesh's most respected engineering university. BUET test reports verify yield strength, tensile strength, elongation, bend test, and chemical composition of our deformed bars against all applicable standards. Test certificates are available to clients on request.",
    significance: "Monthly third-party verification — test certificates available to clients",
    color: "#8E44AD",
  },
];

const standards = [
  { code: "BDS ISO 6935", title: "Bangladesh Deformed Bar Standard", scope: "Primary domestic standard" },
  { code: "BS 4449", title: "British Standard — Steel for Reinforcement", scope: "UK / International" },
  { code: "DIN 488", title: "German Standard — Reinforcing Steel", scope: "European" },
  { code: "JIS G3112", title: "Japanese Standard — Steel Bars", scope: "Japanese / Asian" },
  { code: "ASTM A-615", title: "American Standard — Deformed Bars", scope: "US / International" },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          backgroundImage: "url('/images/header.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",
          paddingTop: "calc(70px + 5rem)",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at right, rgba(231,76,60,0.08), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1rem" }}>
            Quality &amp; Compliance
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: "700px" }}>
            Certifications &amp; Approvals
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "#1A2028", marginTop: "1.25rem", maxWidth: "600px", lineHeight: 1.75 }}>
            HKG Steel holds all major quality certifications and regulatory approvals required for steel manufacturing and supply in Bangladesh — with international standard compliance for global partners.
          </p>
        </div>
      </section>

      {/* Cert badges overview */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECEF", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {certifications.map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.875rem 1.5rem",
                background: "#F5F6FA",
                border: `1px solid ${c.color}30`,
                borderLeft: `4px solid ${c.color}`,
                borderRadius: "8px",
              }}
            >
              <c.icon size={20} style={{ color: c.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: "0.9375rem", color: "#2D3436" }}>{c.name}</div>
                <div style={{ fontSize: "0.75rem", color: "#636E72" }}>{c.scope}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications detail cards */}
      <section style={{ padding: "6rem 1.5rem", background: "#F5F6FA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Full Details
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em" }}>
              Our Quality Credentials
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {certifications.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid #E8ECEF",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                }}
                className="cert-card"
              >
                {/* Left panel */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${c.color}18, ${c.color}08)`,
                    borderRight: `1px solid ${c.color}20`,
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: `${c.color}15`,
                      border: `1.5px solid ${c.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <c.icon size={28} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "1.375rem", fontWeight: 900, color: "#2D3436", letterSpacing: "-0.02em" }}>{c.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#636E72", marginTop: "0.25rem", lineHeight: 1.5 }}>{c.body}</div>
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: c.color,
                      background: `${c.color}12`,
                      border: `1px solid ${c.color}30`,
                      borderRadius: "4px",
                      padding: "0.3rem 0.7rem",
                    }}
                  >
                    {c.scope}
                  </div>
                </div>

                {/* Right panel */}
                <div style={{ padding: "2.5rem" }}>
                  <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    {c.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.625rem",
                      padding: "0.875rem 1.25rem",
                      background: `${c.color}08`,
                      borderLeft: `3px solid ${c.color}`,
                      borderRadius: "0 6px 6px 0",
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: c.color, flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#3D4F5F" }}>{c.significance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .cert-card { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Standards Compliance */}
      <section style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Standards Compliance
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em" }}>
              International Standards Met
            </h2>
            <p style={{ fontSize: "1rem", color: "#636E72", marginTop: "0.75rem", maxWidth: "520px", margin: "0.75rem auto 0" }}>
              HKG Steel products are manufactured to comply with all major international reinforcement bar standards.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#2D3436" }}>
                  {["Standard Code", "Full Title", "Scope / Region"].map((h) => (
                    <th key={h} style={{ padding: "1rem 1.25rem", textAlign: "left", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF", borderBottom: "3px solid #E74C3C" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {standards.map((s, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#FFFFFF" : "#F5F6FA", borderBottom: "1px solid #E8ECEF" }}>
                    <td style={{ padding: "1rem 1.25rem", fontWeight: 800, color: "#E74C3C", fontFamily: "monospace" }}>{s.code}</td>
                    <td style={{ padding: "1rem 1.25rem", color: "#2D3436", fontWeight: 500 }}>{s.title}</td>
                    <td style={{ padding: "1rem 1.25rem", color: "#636E72", fontSize: "0.875rem" }}>{s.scope}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #2D3436, #1A2028)", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ShieldCheck size={48} style={{ color: "#E74C3C", marginBottom: "1.25rem" }} />
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            Test Certificates Available on Request
          </h2>
          <p style={{ fontSize: "1rem", color: "#8A9BA6", marginBottom: "2rem", lineHeight: 1.75 }}>
            BUET test reports for specific batches, ISO certificates, and BSTI compliance documentation can be provided upon request for due diligence purposes.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#E74C3C",
              color: "#FFFFFF",
              padding: "0.875rem 2.25rem",
              borderRadius: "6px",
              fontWeight: 700,
              fontSize: "0.9375rem",
              textDecoration: "none",
            }}
          >
            Request Documentation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
