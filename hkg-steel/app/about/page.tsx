import type { Metadata } from "next";
import { Quote, Users, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | HKG Steel Mills Ltd",
  description:
    "Learn about HKG Steel Mills Ltd — an ISO 9001:2015 certified steel manufacturer in Sonargaon, Bangladesh. Member of the Haseen Kayaba Group. Over 15 years of operation.",
  alternates: { canonical: "/about" },
};

const timeline = [
  { year: "2010", title: "Founded", desc: "Established HKG Steel Mills Ltd under the Haseen Kayaba Group" },
  { year: "2013", title: "Plant Commissioned", desc: "State-of-the-art re-rolling plant commissioned at Mridhakandi, Sonargaon" },
  { year: "2015", title: "CCM Introduced", desc: "Continuous Casting Machine (CCM) introduced for advanced billet production" },
  { year: "2017", title: "ISO 9001:2015", desc: "Achieved ISO 9001:2015 Quality Management System certification" },
  { year: "2019", title: "BUET / BSTI / PWD", desc: "Received approvals from BUET, BSTI, and PWD for national infrastructure projects" },
  { year: "2022", title: "Capacity Expansion", desc: "Expanded production capacity with upgraded rolling mills" },
  { year: "2025", title: "National Brand", desc: "Established as a leading steel brand in Bangladesh" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A2028 0%, #2D3436 100%)",
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
            Who We Are
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: "700px" }}>
            About HKG Steel Mills Ltd
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "#8A9BA6", marginTop: "1.25rem", maxWidth: "600px", lineHeight: 1.75 }}>
            An established, operating steel manufacturer with state-of-the-art facilities, rigorous quality standards, and a proven track record across Bangladesh.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="two-col-grid">
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1rem" }}>
                Company Overview
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Building Bangladesh's Infrastructure Since 2010
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8 }}>
                  HKG Steel Mills Ltd, based in Sonargaon, is committed to producing world-class steel that ensures safety, reliability, and long-term progress for Bangladesh. With a state-of-the-art manufacturing facility and advanced technology, we deliver products that meet the highest international standards.
                </p>
                <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8 }}>
                  Our production capacity exceeds 10,000 metric tonnes per month, enabling us to supply quality steel to every region of the country. HKG Steel is a trusted partner in major national development projects, contributing to infrastructure that drives growth and resilience.
                </p>
                <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8 }}>
                  HKG Steel Mills Ltd is a proud member of the <strong style={{ color: "#2D3436" }}>Haseen Kayaba Group</strong> — a conglomerate committed to building a stronger Bangladesh.
                </p>
              </div>
            </div>

            {/* Stats box */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "Monthly Production Capacity", value: "10,000+", unit: "Metric Tonnes" },
                { label: "Annual Production Capacity", value: "120,000", unit: "Metric Tonnes/Year" },
                { label: "Weekly Delivery Capability", value: "2,500", unit: "Tonnes" },
                { label: "Daily Melting Capacity", value: "400+", unit: "Tonnes/Day" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem",
                    background: "#F5F6FA",
                    borderRadius: "10px",
                    border: "1px solid #E8ECEF",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "0.875rem", color: "#636E72", fontWeight: 500 }}>{s.label}</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#2D3436", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#E74C3C", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .two-col-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        `}</style>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: "5rem 1.5rem", background: "#F5F6FA", borderTop: "1px solid #E8ECEF", borderBottom: "1px solid #E8ECEF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="two-col-grid">
            <div
              style={{
                padding: "2.5rem",
                background: "#FFFFFF",
                borderRadius: "12px",
                border: "1px solid #E8ECEF",
                borderTop: "4px solid #E74C3C",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.875rem" }}>
                Mission
              </div>
              <p style={{ fontSize: "1.0625rem", color: "#3D4F5F", lineHeight: 1.8, fontWeight: 400 }}>
                To produce world-class steel with unmatched quality and reliability, driving progress through innovation and sustainable practices.
              </p>
            </div>
            <div
              style={{
                padding: "2.5rem",
                background: "linear-gradient(135deg, #2D3436, #1A2028)",
                borderRadius: "12px",
                borderTop: "4px solid #E74C3C",
              }}
            >
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.875rem" }}>
                Vision
              </div>
              <p style={{ fontSize: "1.0625rem", color: "#CBD5DB", lineHeight: 1.8, fontWeight: 400 }}>
                To empower Bangladesh's future with stronger cities, safer communities, and globally competitive infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MD Quote */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <Quote size={48} style={{ color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }} />
          <blockquote
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.7,
              fontStyle: "italic",
              margin: "0 0 2rem",
            }}
          >
            "At HKG Steel, we never compromise on product quality — every rod we produce is built to stand the test of time."
          </blockquote>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "0.02em" }}>
              Faiz Ahamed Khan
            </div>
            <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", marginTop: "0.25rem" }}>
              Managing Director, HKG Steel Mills Ltd
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Our Journey
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em" }}>
              Over 15 Years of Growth
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "calc(6rem - 1px)", top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, #E74C3C, rgba(231,76,60,0.1))" }} className="timeline-line" />

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {timeline.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    paddingBottom: i < timeline.length - 1 ? "2.5rem" : "0",
                  }}
                  className="timeline-item"
                >
                  {/* Year */}
                  <div
                    style={{
                      minWidth: "6rem",
                      textAlign: "right",
                      paddingTop: "0.2rem",
                    }}
                    className="timeline-year"
                  >
                    <span style={{ fontSize: "1rem", fontWeight: 800, color: "#E74C3C" }}>{item.year}</span>
                  </div>

                  {/* Dot */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "#E74C3C",
                      border: "3px solid #FFFFFF",
                      boxShadow: "0 0 0 2px #E74C3C",
                      flexShrink: 0,
                      marginTop: "0.3rem",
                    }}
                  />

                  {/* Content */}
                  <div style={{ paddingBottom: "0.5rem" }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#2D3436", marginBottom: "0.375rem" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#636E72", lineHeight: 1.65 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .timeline-line { left: 0.75rem !important; }
            .timeline-item { gap: 1rem !important; }
            .timeline-year { min-width: 0 !important; display: none !important; }
          }
        `}</style>
      </section>

      {/* Facility Photo */}
      <section style={{ padding: "0 1.5rem 6rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              aspectRatio: "16/5",
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/factory-about-banner.jpg"
              alt="HKG Steel Mills — induction furnace and scrap melting facility"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transform: "scale(1.12)", transformOrigin: "center" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.55)", padding: "0.75rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#FFFFFF" }}>HKG Steel Mills — Mridhakandi Plant, Sonargaon, Narayangonj</span>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>Established 2013</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
