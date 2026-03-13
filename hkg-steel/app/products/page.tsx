import type { Metadata } from "next";
import { Layers, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | HKG Steel Mills Ltd",
  description:
    "HKG Steel products: ISO 9001:2015 certified steel billets and deformed bar (rebar) from 8mm to 32mm. Grade 500W and Grade 60/400. BUET and BSTI approved.",
  alternates: { canonical: "/products" },
};

const gradeTable = [
  {
    grade: "Grade 500W",
    yield: "500 MPa",
    tensile: "575 MPa",
    elongation: "14%",
    standards: "BDS ISO 6935, BS 4449, DIN 488, JIS 3112",
  },
  {
    grade: "Grade 60/400",
    yield: "420 MPa",
    tensile: "620 MPa",
    elongation: "9%",
    standards: "ASTM A-615",
  },
];

const weightTable = [
  { dia: "8 mm", weight: "0.395 kg/m", section: "50.3 mm²", lengthPerTon: "2,532 m" },
  { dia: "10 mm", weight: "0.617 kg/m", section: "78.5 mm²", lengthPerTon: "1,621 m" },
  { dia: "12 mm", weight: "0.888 kg/m", section: "113.1 mm²", lengthPerTon: "1,126 m" },
  { dia: "16 mm", weight: "1.578 kg/m", section: "201.1 mm²", lengthPerTon: "634 m" },
  { dia: "20 mm", weight: "2.466 kg/m", section: "314.2 mm²", lengthPerTon: "406 m" },
  { dia: "22 mm", weight: "2.984 kg/m", section: "380.1 mm²", lengthPerTon: "335 m" },
  { dia: "25 mm", weight: "3.854 kg/m", section: "490.9 mm²", lengthPerTon: "259 m" },
  { dia: "28 mm", weight: "4.834 kg/m", section: "615.8 mm²", lengthPerTon: "207 m" },
  { dia: "32 mm", weight: "6.313 kg/m", section: "804.2 mm²", lengthPerTon: "158 m" },
];

export default function ProductsPage() {
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
            Products
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: "700px" }}>
            Products &amp; Specifications
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "#8A9BA6", marginTop: "1.25rem", maxWidth: "600px", lineHeight: 1.75 }}>
            Two core products manufactured to international standards — each tested, certified, and trusted on Bangladesh's most demanding projects.
          </p>
        </div>
      </section>

      {/* Product 1: Steel Billets */}
      <section style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="two-col-grid">
            {/* Image placeholder */}
            <div
              style={{
                aspectRatio: "4/3",
                background: "linear-gradient(135deg, #1A2028 0%, #3D4F5F 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/factory-wire-coiling.jpg"
                alt="HKG Steel Mills — wire rod coiling and finishing"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.65)", padding: "0.6rem 1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}>
                HKG Steel Billets — Continuous Casting Line
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(231,76,60,0.1)",
                  border: "1px solid rgba(231,76,60,0.25)",
                  borderRadius: "6px",
                  padding: "0.35rem 0.9rem",
                  marginBottom: "1.25rem",
                }}
              >
                <Layers size={14} style={{ color: "#E74C3C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E74C3C" }}>Product 01</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                Steel Billets
              </h2>
              <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Our steel billets are produced using an advanced Continuous Casting Machine (CCM), ensuring uniform density, consistent chemical composition, and superior metallurgical quality. Billets serve as the primary feedstock for re-rolling into deformed bars and structural sections.
              </p>
              <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "2rem" }}>
                Custom cross-sections and lengths are available based on client specifications.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { label: "Technology", value: "CCM (Continuous Casting)" },
                  { label: "Daily Output", value: "~350 Tonnes" },
                  { label: "Induction Furnaces", value: "20 MT + 8 MT" },
                  { label: "Custom Sizes", value: "Available on Request" },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "1rem", background: "#F5F6FA", borderRadius: "8px", border: "1px solid #E8ECEF" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#636E72", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{s.label}</div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#2D3436" }}>{s.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Uniform chemical composition throughout the cross-section",
                  "Superior surface quality vs. ingot casting",
                  "BUET tested for compliance — certificates available",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <CheckCircle2 size={16} style={{ color: "#E74C3C", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontSize: "0.9rem", color: "#3D4F5F" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product 2: Deformed Bar */}
      <section style={{ padding: "6rem 1.5rem", background: "#F5F6FA", borderTop: "1px solid #E8ECEF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="two-col-grid">
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(231,76,60,0.1)",
                  border: "1px solid rgba(231,76,60,0.25)",
                  borderRadius: "6px",
                  padding: "0.35rem 0.9rem",
                  marginBottom: "1.25rem",
                }}
              >
                <Building2 size={14} style={{ color: "#E74C3C" }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#E74C3C" }}>Product 02</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                Deformed Bar (Rebar)
              </h2>
              <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                HKG deformed bars are manufactured through a controlled hot-rolling and Quenching & Tempering (Q&T) process, producing high-strength, ductile bars suitable for reinforced concrete structures — including seismic applications.
              </p>
              <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.8, marginBottom: "2rem" }}>
                With a minimum yield strength of <strong style={{ color: "#2D3436" }}>500 MPa (72,500 PSI)</strong>, our bars comply with multiple international standards including BDS ISO 6935, BS 4449, DIN 488, JIS 3112, and ASTM A-615.
              </p>

              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  background: "rgba(231,76,60,0.07)",
                  border: "1px solid rgba(231,76,60,0.2)",
                  borderRadius: "8px",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#E74C3C", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
                  Key Performance
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
                  {[
                    { label: "Min. Yield Strength", value: "500 MPa" },
                    { label: "Available Sizes", value: "8–32 mm" },
                    { label: "Process", value: "Q&T / TMT" },
                  ].map((s, i) => (
                    <div key={i}>
                      <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#636E72", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: "#2D3436", marginTop: "0.2rem" }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {[
                  "Seismic-resistant — suitable for earthquake-zone construction",
                  "High ductility — superior performance in flexural loading",
                  "Available with test certificates from BUET on request",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                    <CheckCircle2 size={16} style={{ color: "#E74C3C", flexShrink: 0, marginTop: "3px" }} />
                    <span style={{ fontSize: "0.9rem", color: "#3D4F5F" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image placeholder */}
            <div
              style={{
                aspectRatio: "4/3",
                background: "linear-gradient(135deg, #1A2028 0%, #2D3436 100%)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "0.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/factory-rebar-floor.jpg"
                alt="HKG Steel Mills — deformed bar (rebar) on rolling mill floor"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", inset: 0 }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.65)", padding: "0.6rem 1rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}>
                HKG Deformed Bar (Rebar) — 8mm to 32mm
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .two-col-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        `}</style>
      </section>

      {/* Grade Table */}
      <section style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Specifications
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em" }}>
              Grade Reference Table
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr style={{ background: "#2D3436" }}>
                  {["Grade", "Yield Strength", "Tensile Strength", "Elongation", "Applicable Standards"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "1rem 1.25rem",
                        textAlign: "left",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        borderBottom: "3px solid #E74C3C",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gradeTable.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "#FFFFFF" : "#F5F6FA",
                      borderBottom: "1px solid #E8ECEF",
                    }}
                  >
                    <td style={{ padding: "1rem 1.25rem", fontWeight: 800, color: "#E74C3C" }}>{row.grade}</td>
                    <td style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "#2D3436" }}>{row.yield}</td>
                    <td style={{ padding: "1rem 1.25rem", fontWeight: 700, color: "#2D3436" }}>{row.tensile}</td>
                    <td style={{ padding: "1rem 1.25rem", color: "#636E72" }}>{row.elongation}</td>
                    <td style={{ padding: "1rem 1.25rem", color: "#636E72", fontSize: "0.875rem" }}>{row.standards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Weight Table */}
      <section style={{ padding: "0 1.5rem 6rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
              Deformed Bar Weight Reference
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "#636E72" }}>All sizes 8mm to 32mm — weights, cross-sections, and metres per tonne</p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
              <thead>
                <tr style={{ background: "#F5F6FA" }}>
                  {["Diameter", "Weight / Metre", "Cross Section", "Length per Tonne"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "0.875rem 1.25rem",
                        textAlign: "left",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#636E72",
                        borderBottom: "2px solid #DFE6E9",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weightTable.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? "#FFFFFF" : "#FAFBFC",
                      borderBottom: "1px solid #EEF1F3",
                      transition: "background 0.15s",
                    }}
                  >
                    <td style={{ padding: "0.875rem 1.25rem", fontWeight: 700, color: "#2D3436" }}>{row.dia}</td>
                    <td style={{ padding: "0.875rem 1.25rem", color: "#3D4F5F" }}>{row.weight}</td>
                    <td style={{ padding: "0.875rem 1.25rem", color: "#636E72" }}>{row.section}</td>
                    <td style={{ padding: "0.875rem 1.25rem", color: "#636E72" }}>{row.lengthPerTon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Capacity note */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "linear-gradient(135deg, #2D3436, #1A2028)",
              borderRadius: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {[
              { label: "Monthly Capacity", value: "10,000+", unit: "Metric Tonnes" },
              { label: "Weekly Delivery", value: "2,500", unit: "Tonnes" },
              { label: "Available Sizes", value: "8 – 32", unit: "mm Diameter" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#E74C3C", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.25rem" }}>{s.unit}</div>
                <div style={{ fontSize: "0.8rem", color: "#8A9BA6", marginTop: "0.25rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
