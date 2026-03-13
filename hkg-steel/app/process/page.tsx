import type { Metadata } from "next";
import { Flame, FlaskConical, Layers, Scissors, Thermometer, Gauge, Droplets, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Production Process | HKG Steel Mills Ltd",
  description:
    "HKG Steel's 8-step production process — from scrap melting to finished deformed bar. Induction furnaces, CCM casting, hot rolling, and Q&T quenching for superior quality.",
  alternates: { canonical: "/process" },
};

const steps = [
  {
    icon: Flame,
    step: "01",
    title: "Scrap Charging & Melting",
    desc: "High-grade scrap is charged into our induction furnaces — a 20 MT and 8 MT unit — and melted at high temperatures. Our facility processes more than 400 tonnes of scrap steel daily.",
    detail: "20 MT + 8 MT Induction Furnaces · 400+ Tonnes/Day",
  },
  {
    icon: FlaskConical,
    step: "02",
    title: "Primary Refining",
    desc: "Molten steel undergoes primary refining to remove impurities, adjust chemical composition, and achieve the target carbon, manganese, and alloy balance required for final product grades.",
    detail: "Chemistry Adjustment · Slag Removal · Temperature Control",
  },
  {
    icon: Layers,
    step: "03",
    title: "Continuous Casting (CCM)",
    desc: "Refined molten steel is poured into our Continuous Casting Machine (CCM), solidifying into billets of uniform cross-section and quality. Output is approximately 350 tonnes of billets per day.",
    detail: "~350 Tonnes/Day · Uniform Cross-Section · Consistent Composition",
  },
  {
    icon: Scissors,
    step: "04",
    title: "Billet Cutting & Handling",
    desc: "Cast billets are cut to standard lengths by automated cutting systems and transferred to the billet storage yard for inspection, inventory management, and reheating queue.",
    detail: "Automated Cutting · Dimensional Inspection · Yard Management",
  },
  {
    icon: Thermometer,
    step: "05",
    title: "Billet Reheating",
    desc: "Billets are loaded into a reheating furnace to reach the uniform temperature required for smooth and consistent rolling. Precise temperature control ensures material homogeneity.",
    detail: "Uniform Heating · Temperature-Controlled Furnace",
  },
  {
    icon: Gauge,
    step: "06",
    title: "Hot Rolling into Bars",
    desc: "Heated billets are fed through a series of rolling stands that progressively reduce the cross-section, forming deformed bars in diameters from 8mm to 32mm to precise dimensional tolerances.",
    detail: "8mm – 32mm Diameters · Tight Dimensional Tolerances",
  },
  {
    icon: Droplets,
    step: "07",
    title: "TMT / Q&T Treatment",
    desc: "Bars pass through a quenching box where high-pressure water rapidly cools the outer surface, creating a hardened martensite rim while the core remains austenitic. This produces the high-strength, ductile profile of our finished bars — resistant to seismic loads.",
    detail: "Quenching & Tempering · Martensite Rim · Seismic Resistance",
  },
  {
    icon: PackageCheck,
    step: "08",
    title: "Cooling, Cutting & Dispatch",
    desc: "Bars are air-cooled on the cooling bed, cut to commercial lengths, bundled, and labelled. Final quality inspection and dimensional checks are completed before BUET-certified batches are dispatched.",
    detail: "Air Cooling · Dimensional Check · Certification & Dispatch",
  },
];

export default function ProcessPage() {
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
            How We Make Steel
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: "700px" }}>
            Production Process
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "#8A9BA6", marginTop: "1.25rem", maxWidth: "600px", lineHeight: 1.75 }}>
            An eight-step process from raw scrap to certified, dispatched steel — controlled at every stage for consistent, internationally-compliant quality.
          </p>
        </div>
      </section>

      {/* Process Stats */}
      <section style={{ background: "#FFFFFF", borderBottom: "1px solid #E8ECEF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
          {[
            { value: "400+", unit: "Tonnes/Day", label: "Melting Capacity" },
            { value: "~350", unit: "Tonnes/Day", label: "CCM Billet Output" },
            { value: "10,000+", unit: "T/Month", label: "Rolling Capacity" },
            { value: "8", unit: "Steps", label: "Process Stages" },
          ].map((s, i, arr) => (
            <div key={i} style={{ padding: "2rem 1rem", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid #E8ECEF" : "none" }}>
              <div style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: "#2D3436", letterSpacing: "-0.03em", lineHeight: 1 }}>
                {s.value}<span style={{ color: "#E74C3C", fontSize: "0.65em" }}>{s.unit}</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "#636E72", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8-step process */}
      <section style={{ padding: "6rem 1.5rem", background: "#F5F6FA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.03em" }}>
              From Scrap to Certified Steel
            </h2>
            <p style={{ fontSize: "1rem", color: "#636E72", marginTop: "0.75rem", maxWidth: "500px", margin: "0.75rem auto 0" }}>
              Every step in our process is engineered for quality, consistency, and compliance with international standards.
            </p>
          </div>

          {/* Steps grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {steps.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid #E8ECEF",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {/* Step number watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1.25rem",
                    fontSize: "4rem",
                    fontWeight: 900,
                    color: "rgba(231,76,60,0.06)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    userSelect: "none",
                  }}
                >
                  {s.step}
                </div>

                {/* Icon + step number */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, rgba(231,76,60,0.15), rgba(231,76,60,0.05))",
                      border: "1px solid rgba(231,76,60,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <s.icon size={22} style={{ color: "#E74C3C" }} />
                  </div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#E74C3C" }}>
                    Step {s.step}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#2D3436", marginBottom: "0.625rem", lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#636E72", lineHeight: 1.75 }}>
                    {s.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    padding: "0.625rem 0.875rem",
                    background: "#F5F6FA",
                    borderRadius: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#3D4F5F",
                    letterSpacing: "0.02em",
                    borderLeft: "3px solid #E74C3C",
                  }}
                >
                  {s.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process photo placeholder — full width */}
      <section style={{ padding: "0 1.5rem 6rem", background: "#F5F6FA" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              aspectRatio: "21/6",
              background: "linear-gradient(90deg, #1A2028 0%, #2D3436 40%, #E74C3C 100%)",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "0.75rem",
              position: "relative",
            }}
          >
            <Flame size={64} style={{ color: "rgba(255,255,255,0.12)" }} />
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", textAlign: "center", fontStyle: "italic" }}>
              [PLACEHOLDER: Rolling mill, induction furnace, or CCM casting line photo]
            </p>
          </div>
        </div>
      </section>

      {/* Quality note */}
      <section style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg, #2D3436, #1A2028)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1rem" }}>
            Quality Control
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
            Every Batch is Tested Before Dispatch
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#8A9BA6", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            HKG Steel products undergo monthly quality testing by BUET (Bangladesh University of Engineering and Technology). Test results are available to clients on request. Our ISO 9001:2015 Quality Management System governs all stages of production — from raw material receipt to finished product dispatch.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {["ISO 9001:2015 QMS", "Monthly BUET Testing", "BSTI Approved", "PWD Authorized"].map((b, i) => (
              <span
                key={i}
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "100px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#CBD5DB",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
