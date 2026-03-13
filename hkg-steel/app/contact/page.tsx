"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const offices = [
  {
    type: "Corporate Office",
    address: "Sena Kalyan Bhaban (17th Floor)\n195 Motijheel C/A\nDhaka-1000, Bangladesh",
    mapQuery: "Sena+Kalyan+Bhaban,+195+Motijheel+C/A,+Dhaka",
    icon: "🏢",
  },
  {
    type: "Factory & Plant",
    address: "Mridhakandi New Town\nSonargaon, Narayangonj\nBangladesh",
    mapQuery: "Mridhakandi,+Sonargaon,+Narayangonj,+Bangladesh",
    icon: "🏭",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission — integrate with a real form backend (e.g. Formspree, Resend) before going live
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setSubmitting(false);
  };

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
            Get in Touch
          </div>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.05, maxWidth: "700px" }}>
            Contact HKG Steel
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "#8A9BA6", marginTop: "1.25rem", maxWidth: "600px", lineHeight: 1.75 }}>
            For product enquiries, certifications, specifications, or any business enquiry — reach us directly at our Dhaka office or contact our team.
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
            {/* Contact info */}
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "1rem" }}>
                Contact Information
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.02em", marginBottom: "2rem" }}>
                Reach Us Directly
              </h2>

              {/* Direct contacts */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
                <a
                  href="tel:+8801770600700"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem",
                    background: "#F5F6FA",
                    border: "1px solid #E8ECEF",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(231,76,60,0.1)", border: "1px solid rgba(231,76,60,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Phone size={20} style={{ color: "#E74C3C" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#636E72", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>Hotline</div>
                    <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#2D3436" }}>+880 1770 600 700</div>
                  </div>
                </a>

                <a
                  href="mailto:info@hkgsteel.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem",
                    background: "#F5F6FA",
                    border: "1px solid #E8ECEF",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(231,76,60,0.1)", border: "1px solid rgba(231,76,60,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={20} style={{ color: "#E74C3C" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#636E72", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>Email</div>
                    <div style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#2D3436" }}>info@hkgsteel.com</div>
                  </div>
                </a>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem", background: "#F5F6FA", border: "1px solid #E8ECEF", borderRadius: "10px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(231,76,60,0.1)", border: "1px solid rgba(231,76,60,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={20} style={{ color: "#E74C3C" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#636E72", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>Office Hours</div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#2D3436" }}>Sunday – Thursday</div>
                    <div style={{ fontSize: "0.85rem", color: "#636E72" }}>9:00 AM – 6:00 PM (BST)</div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#636E72", marginBottom: "1.25rem" }}>
                Our Locations
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {offices.map((o, i) => (
                  <div key={i} style={{ padding: "1.5rem", background: "#F5F6FA", border: "1px solid #E8ECEF", borderRadius: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                      <span style={{ fontSize: "1.25rem" }}>{o.icon}</span>
                      <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#2D3436" }}>{o.type}</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                      <MapPin size={15} style={{ color: "#E74C3C", flexShrink: 0, marginTop: "2px" }} />
                      <p style={{ fontSize: "0.875rem", color: "#636E72", lineHeight: 1.7, margin: 0, whiteSpace: "pre-line" }}>
                        {o.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8ECEF",
                borderRadius: "16px",
                padding: "3rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <CheckCircle2 size={56} style={{ color: "#27AE60", margin: "0 auto 1.5rem" }} />
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2D3436", marginBottom: "0.75rem" }}>
                    Message Received
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#636E72", lineHeight: 1.7 }}>
                    Thank you for reaching out to HKG Steel Mills Ltd. We'll respond to your enquiry within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#2D3436", marginBottom: "0.5rem" }}>
                    Send an Enquiry
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#636E72", marginBottom: "2rem" }}>
                    Fill in the form below and we'll get back to you within one business day.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="form-grid">
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#3D4F5F", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Full name"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            border: "1.5px solid #DFE6E9",
                            borderRadius: "8px",
                            fontSize: "0.9375rem",
                            color: "#2D3436",
                            background: "#FAFBFC",
                            outline: "none",
                            transition: "border-color 0.2s",
                            fontFamily: "inherit",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#E74C3C")}
                          onBlur={(e) => (e.target.style.borderColor = "#DFE6E9")}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#3D4F5F", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="your@email.com"
                          style={{
                            width: "100%",
                            padding: "0.75rem 1rem",
                            border: "1.5px solid #DFE6E9",
                            borderRadius: "8px",
                            fontSize: "0.9375rem",
                            color: "#2D3436",
                            background: "#FAFBFC",
                            outline: "none",
                            transition: "border-color 0.2s",
                            fontFamily: "inherit",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#E74C3C")}
                          onBlur={(e) => (e.target.style.borderColor = "#DFE6E9")}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#3D4F5F", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="e.g. Product specifications, Certification documents, Business enquiry"
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "1.5px solid #DFE6E9",
                          borderRadius: "8px",
                          fontSize: "0.9375rem",
                          color: "#2D3436",
                          background: "#FAFBFC",
                          outline: "none",
                          transition: "border-color 0.2s",
                          fontFamily: "inherit",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#E74C3C")}
                        onBlur={(e) => (e.target.style.borderColor = "#DFE6E9")}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#3D4F5F", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Please describe your enquiry in detail..."
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "1.5px solid #DFE6E9",
                          borderRadius: "8px",
                          fontSize: "0.9375rem",
                          color: "#2D3436",
                          background: "#FAFBFC",
                          outline: "none",
                          transition: "border-color 0.2s",
                          fontFamily: "inherit",
                          resize: "vertical",
                          lineHeight: 1.6,
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#E74C3C")}
                        onBlur={(e) => (e.target.style.borderColor = "#DFE6E9")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        background: submitting ? "#C0392B" : "#E74C3C",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "0.9rem 2rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        cursor: submitting ? "not-allowed" : "pointer",
                        fontFamily: "inherit",
                        letterSpacing: "0.01em",
                        transition: "background 0.2s",
                        width: "100%",
                      }}
                    >
                      {submitting ? "Sending..." : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
          @media (max-width: 500px) {
            .form-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Map section */}
      <section style={{ padding: "0 1.5rem 6rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E74C3C", marginBottom: "0.75rem" }}>
              Find Us
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#2D3436", letterSpacing: "-0.02em" }}>
              Our Locations
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="maps-grid">
            {/* Corporate Office Map */}
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #E8ECEF" }}>
              <div style={{ padding: "1rem 1.25rem", background: "#F5F6FA", borderBottom: "1px solid #E8ECEF", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <span style={{ fontSize: "1.1rem" }}>🏢</span>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#2D3436" }}>Corporate Office — Motijheel, Dhaka</span>
              </div>
              <iframe
                title="HKG Steel Corporate Office, Motijheel Dhaka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5!2d90.4125!3d23.7275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b01%3A0x8fa563bbdd5904a6!2sSena%20Kalyan%20Bhaban!5e0!3m2!1sen!2sbd!4v1"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Factory Map */}
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #E8ECEF" }}>
              <div style={{ padding: "1rem 1.25rem", background: "#F5F6FA", borderBottom: "1px solid #E8ECEF", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                <span style={{ fontSize: "1.1rem" }}>🏭</span>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#2D3436" }}>Factory — Sonargaon, Narayangonj</span>
              </div>
              <iframe
                title="HKG Steel Factory, Sonargaon Narayangonj"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5!2d90.6103!3d23.6590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0a8c9fc20c9%3A0x1!2sSonargaon%2C+Narayangonj!5e0!3m2!1sen!2sbd!4v1"
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .maps-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
