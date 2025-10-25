import React, { useState } from "react";
import ResumeSection from "./components/ResumeSection.jsx";

export default function App() {
  // start hidden
  const [showResume, setShowResume] = useState(false);

  // mobile nav open/close
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleResumeClick = () => {
    setShowResume(true);
    // also close mobile drawer if it's open
    setMobileOpen(false);

    setTimeout(() => {
      const el = document.getElementById("resume");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        fontFamily:
          '-apple-system,BlinkMacSystemFont,"Inter","Roboto","Segoe UI",sans-serif',
      }}
    >
      {/* radial glow background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: 600,
            width: 600,
            borderRadius: "9999px",
            filter: "blur(60px)",
            opacity: 0.5,
            background:
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18) 0%, rgba(16,185,129,0) 70%)",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-md navbar-dark"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(82,82,82,0.6)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
        }}
      >
        <div className="container d-flex align-items-center w-100">
          {/* Brand */}
          <a
            className="navbar-brand d-flex align-items-center"
            href="#about"
            style={{
              color: "white",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                display: "inline-block",
                height: "8px",
                width: "8px",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to right,#6366f1,#38bdf8)",
                boxShadow: "0 0 20px rgba(99,102,241,0.8)",
                marginRight: "8px",
              }}
            />
            D Subrahmanyam
          </a>

          {/* Hamburger (ALWAYS visible on small) */}
          <button
            className="d-md-none btn p-2"
            onClick={toggleMobile}
            style={{
              border: "1px solid rgba(245,245,245,0.4)",
              borderRadius: "0.5rem",
              backgroundColor: "transparent",
              lineHeight: 0,
            }}
            aria-label="Toggle navigation"
          >
            {/* simple 3-line icon, no Bootstrap JS dependency */}
            <div
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#fff",
                marginBottom: "5px",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#fff",
                marginBottom: "5px",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "2px",
                backgroundColor: "#fff",
              }}
            />
          </button>

          {/* Desktop links */}
          <ul className="navbar-nav ms-auto mb-0 gap-md-3 d-none d-md-flex align-items-md-center">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <li className="nav-item" key={label}>
                <a
                  className="nav-link"
                  href={link}
                  style={{
                    color: "#a3a3a3",
                    fontSize: "0.9rem",
                  }}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Resume tab */}
            <li className="nav-item">
              <button
                className="btn btn-link nav-link p-0"
                style={{
                  color: "#a3a3a3",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
                onClick={handleResumeClick}
              >
                Resume
              </button>
            </li>

            {/* Contact CTA */}
            <li className="nav-item">
              <a
                href="#contact"
                className="btn btn-sm"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#fff",
                  background:
                    "linear-gradient(to right,#4f46e5,#0ea5e9)",
                  border: "none",
                  borderRadius: "0.5rem",
                  boxShadow: "0 15px 40px rgba(56,189,248,0.4)",
                }}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile dropdown (custom instead of Bootstrap collapse) */}
        {mobileOpen && (
          <div
            className="w-100 d-md-none"
            style={{
              backgroundColor: "rgba(10,10,10,0.95)",
              borderTop: "1px solid rgba(82,82,82,0.6)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
            }}
          >
            <ul
              className="navbar-nav px-3 py-3"
              style={{ rowGap: "0.5rem" }}
            >
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (
                <li className="nav-item" key={label}>
                  <a
                    className="nav-link"
                    href={link}
                    style={{
                      color: "#a3a3a3",
                      fontSize: "0.9rem",
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li className="nav-item">
                <button
                  className="btn btn-link nav-link p-0"
                  style={{
                    color: "#a3a3a3",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                  }}
                  onClick={handleResumeClick}
                >
                  Resume
                </button>
              </li>

              <li className="nav-item mt-2">
                <a
                  href="#contact"
                  className="btn w-100 text-white"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    background:
                      "linear-gradient(to right,#4f46e5,#0ea5e9)",
                    border: "none",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 15px 40px rgba(56,189,248,0.4)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ABOUT / HERO */}
      <section
        id="about"
        className="container py-5 py-md-5"
        style={{ color: "#d4d4d8" }}
      >
        <div className="row gy-4 align-items-start">
          {/* LEFT column */}
          <div className="col-12 col-md-6">
            <h1
              className="fw-semibold"
              style={{
                color: "#fff",
                fontSize: "clamp(1.5rem,2vw,2.5rem)",
                lineHeight: 1.2,
              }}
            >
              Backend / Platform Engineer
              <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right,#6366f1,#38bdf8,#6ee7b7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 20px rgba(16,185,129,0.4)",
                  fontWeight: 600,
                }}
              >
                Java • Go • Cloud • Messaging
              </span>
            </h1>

            <p
              className="mt-3"
              style={{
                fontSize: "0.95rem",
                color: "#d4d4d8",
                lineHeight: 1.5,
                maxWidth: "40rem",
              }}
            >
              I build secure, scalable backend services and internal platforms:
              microservices, event-driven systems, secure tunneling, and
              developer tooling. My focus is reliability, correctness, and
              observability at scale.
            </p>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#9ca3af",
                lineHeight: 1.5,
                maxWidth: "40rem",
              }}
            >
              Technical Lead at HP PPS Services Pvt Ltd (3.5+ yrs).
              Previously 4 yrs at Mphasis Ltd, Bangalore. I work across
              Java/Spring Boot, Go, Kubernetes, Solace/RabbitMQ, and secure
              Mongo access tooling.
            </p>

            <div
              style={{
                fontSize: "0.8rem",
                color: "#d4d4d8",
                lineHeight: 1.5,
                maxWidth: "40rem",
              }}
            >
              <p className="mt-3">
                I specialize in event-driven microservices using Spring Boot,
                MongoDB, RabbitMQ, Solace, Docker, Kubernetes, and CI/CD
                through Azure DevOps and AWS.
              </p>
              <p>
                I’ve led core services in HP’s Stratus eCommerce platform such
                as Event Handler, Solace Consumer, and RPL. Work includes
                secure message routing, LaunchDarkly runtime config, MongoDB
                access controls, and production-grade observability in Splunk.
              </p>
              <p>
                I also build developer-facing platforms like secure MongoDB
                tunneling (temporary audited DB access) and Mock Genie (mock
                downstream services to unblock lower envs).
              </p>
              <p>
                I’m growing in DevOps, Cloud, and Generative AI. I believe
                clean architecture + automation + observability = production
                confidence.
              </p>
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
              <a
                href="#projects"
                className="btn"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#fff",
                  background:
                    "linear-gradient(to right,#4f46e5,#0ea5e9)",
                  border: "none",
                  borderRadius: "0.75rem",
                  boxShadow:
                    "0 20px 60px rgba(56,189,248,0.45)",
                }}
              >
                View projects
              </a>

              <a
                href="#contact"
                className="btn"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#fff",
                  backgroundColor: "rgba(23,23,23,0.7)",
                  border: "1px solid rgba(82,82,82,0.8)",
                  borderRadius: "0.75rem",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.8)",
                }}
              >
                Contact me
              </a>
            </div>
          </div>

          {/* RIGHT column */}
          <div className="col-12 col-md-6">
            <div
              className="p-4 rounded-4 position-relative"
              style={{
                backgroundColor: "rgba(23,23,23,0.5)",
                border: "1px solid #27272a",
                boxShadow: "0 40px 120px rgba(0,0,0,0.9)",
                overflow: "hidden",
              }}
            >
              {/* glow accent */}
              <div
                style={{
                  position: "absolute",
                  top: "-4rem",
                  right: "-4rem",
                  height: "10rem",
                  width: "10rem",
                  borderRadius: "9999px",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.4), rgba(0,0,0,0) 70%)",
                  filter: "blur(40px)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }}
              />

              {/* profile */}
              <div className="text-center">
                <div className="position-relative d-inline-block">
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      background:
                        "radial-gradient(circle at 40% 40%, rgba(56,189,248,0.4) 0%, rgba(0,0,0,0) 70%)",
                      filter: "blur(30px)",
                      opacity: 0.3,
                    }}
                  />
                  <img
                    src="/profile.jpg"
                    alt="D Subrahmanyam"
                    style={{
                      position: "relative",
                      width: "8rem",
                      height: "8rem",
                      objectFit: "cover",
                      borderRadius: "9999px",
                      border: "2px solid #38bdf8",
                      boxShadow:
                        "0 25px 80px rgba(56,189,248,0.4)",
                    }}
                  />
                </div>

                <div className="mt-3">
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    D Subrahmanyam
                  </div>
                  <div
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Technical Lead @ HP
                  </div>
                </div>
              </div>

              {/* core focus */}
              <div
                className="d-flex align-items-center gap-2 mt-4 mb-2 text-uppercase"
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "#9ca3af",
                  letterSpacing: "0.05em",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    height: "6px",
                    width: "6px",
                    borderRadius: "9999px",
                    background:
                      "linear-gradient(to right,#6366f1,#38bdf8)",
                    boxShadow:
                      "0 0 10px rgba(56,189,248,0.8)",
                  }}
                />
                Core Focus
              </div>

              <ul
                className="list-unstyled"
                style={{
                  fontSize: "0.8rem",
                  color: "#e5e7eb",
                }}
              >
                {[
                  "Secure microservices in Java / Spring Boot and Go",
                  "Event-driven systems with RabbitMQ / Solace",
                  "MongoDB, Spring Data JPA, controlled data access",
                  "Docker, Kubernetes, Azure, AWS",
                  "Prod reliability, Splunk / RPL observability",
                ].map((line, i) => (
                  <li
                    className="d-flex"
                    key={i}
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <span
                      style={{
                        color: "#38bdf8",
                        marginRight: "0.5rem",
                        fontSize: "0.7rem",
                      }}
                    >
                      ●
                    </span>
                    <span style={{ color: "#f8fafc" }}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="container py-5 border-top"
        style={{ borderColor: "rgba(82,82,82,0.6)" }}
      >
        <SectionHeader
          id="skills-header"
          title="Skills & Tech"
          blurb="Backend engineering • messaging systems • infrastructure • developer tooling"
        />

        <div className="row row-cols-2 row-cols-sm-3 g-3 g-md-4 mt-2">
          {[
            "Java",
            "Spring Boot",
            "Spring Data JPA",
            "Security",
            "Go",
            "Microservices",
            "MongoDB",
            "Mongo tunneling",
            "RabbitMQ",
            "Solace",
            "Solace consumer",
            "Event Handler",
            "Docker",
            "Kubernetes",
            "AWS",
            "Azure",
            "Splunk / RPL",
            "Mock Genie",
          ].map((item) => (
            <div className="col" key={item}>
              <div
                className="text-center h-100 d-flex align-items-center justify-content-center rounded-3"
                style={{
                  backgroundColor: "rgba(23,23,23,0.6)",
                  border: "1px solid #27272a",
                  color: "#e5e7eb",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  padding: "0.75rem",
                  minHeight: "3rem",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,0.8)",
                }}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="container py-5 border-top"
        style={{ borderColor: "rgba(82,82,82,0.6)" }}
      >
        <SectionHeader
          id="projects-header"
          title="Projects"
          blurb="Internal platforms and services I’ve led or contributed to"
        />

        <div className="row gy-4 mt-2">
          <div className="col-12 col-md-8 offset-md-4">
            <ProjectCard
              title="Mongo Tunneling Service"
              tagline="Secure tunneling service for restricted MongoDB clusters."
              bullets={[
                "Spring Boot backend that dynamically builds Mongo URIs and opens short-lived secure tunnels.",
                "Provides temporary, auditable access instead of permanent DB exposure.",
              ]}
              tech={[
                "Java",
                "Spring Boot",
                "MongoDB",
                "Security",
                "AWS / Azure",
              ]}
            />

            <ProjectCard
              title="Solace / RabbitMQ Event Consumer"
              tagline="High-reliability message consumer for event-driven flows."
              bullets={[
                "Consumes and processes events from Solace and RabbitMQ.",
                "Implements retry/backoff and message confirm logic.",
                "Integrated Splunk / RPL tracing for production debugging.",
              ]}
              tech={[
                "Go",
                "Java",
                "Solace",
                "RabbitMQ",
                "Kubernetes",
                "Splunk",
              ]}
            />

            <ProjectCard
              title="Mock Genie"
              tagline="Internal mock service platform for faster dev & CI."
              bullets={[
                "Simulates downstream APIs so teams can test without lower env dependencies.",
                "Improves developer velocity and CI/CD reliability.",
              ]}
              tech={[
                "Go",
                "Docker",
                "Microservices",
                "Test Automation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="container py-5 border-top"
        style={{ borderColor: "rgba(82,82,82,0.6)" }}
      >
        <SectionHeader
          id="experience-header"
          title="Experience"
          blurb="7.5+ years building backend platforms, messaging systems and developer tooling"
        />

        <div className="row gy-4 mt-2">
          <div className="col-12 col-md-8 offset-md-4">
            <ExperienceItem
              role="Technical Lead"
              company="HP PPS Services Pvt Ltd"
              time="June 2021 — Present (3.5+ years)"
              bullets={[
                "Leading backend / platform work for microservices and event-driven systems.",
                "Architected secure MongoDB tunneling and high-reliability Solace consumers.",
                "Implemented DevOps flows across Docker, Kubernetes, and Azure.",
                "Improved production visibility using Splunk / RPL dashboards and tracing.",
              ]}
            />

            <ExperienceItem
              role="Software Engineer"
              company="Mphasis Ltd, Bangalore"
              time="May 2017 — May 2021 (4 years)"
              bullets={[
                "Developed and deployed Spring Boot microservices for enterprise clients.",
                "Integrated secure messaging, REST APIs, and persistence layers.",
                "Improved performance and reliability across production systems.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="container py-5 border-top"
        style={{ borderColor: "rgba(82,82,82,0.6)" }}
      >
        <SectionHeader
          id="contact-header"
          title="Contact"
          blurb="Let’s build something reliable, fast, and production-ready."
        />

        <div className="row gy-4 mt-2">
          <div className="col-12 col-md-8 offset-md-4">
            <div
              className="rounded-4 p-4 position-relative"
              style={{
                backgroundColor: "rgba(23,23,23,0.6)",
                border: "1px solid #27272a",
                boxShadow:
                  "0 60px 140px rgba(0,0,0,0.9)",
              }}
            >
              <div className="row g-4 text-sm text-light">
                <div className="col-12 col-md-4">
                  <ContactField
                    label="Name"
                    value="D Subrahmanyam"
                  />
                </div>
                <div className="col-12 col-md-4">
                  <ContactField
                    label="Email"
                    value="subrahmanyam07.d@gmail.com"
                  />
                </div>
                <div className="col-12 col-md-4">
                  <ContactField
                    label="GitHub"
                    value="github.com/subbu261"
                  />
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a
                  href="mailto:subrahmanyam07.d@gmail.com"
                  className="btn text-white"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    background:
                      "linear-gradient(to right,#4f46e5,#0ea5e9)",
                    border: "none",
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 25px 80px rgba(56,189,248,0.5)",
                  }}
                >
                  Email me
                </a>

                <a
                  href="https://github.com/subbu261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-white"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    backgroundColor: "rgba(23,23,23,0.7)",
                    border: "1px solid rgba(82,82,82,0.8)",
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.8)",
                  }}
                >
                  GitHub Profile
                </a>
              </div>
            </div>

            <footer
              className="text-center text-muted mt-5 mb-4"
              style={{ fontSize: "0.7rem", color: "#52525b" }}
            >
              <div
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(to right,rgba(0,0,0,0),rgba(82,82,82,0.4),rgba(0,0,0,0))",
                  marginBottom: "1rem",
                }}
              />
              <div style={{ color: "#6b7280" }}>
                © {new Date().getFullYear()} D Subrahmanyam. All
                rights reserved.
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* RESUME (conditional render) */}
      {showResume && <ResumeSection />}
    </main>
  );
}

/* -------------------------------- */
/* Shared subcomponents in App.jsx  */
/* -------------------------------- */

function SectionHeader({ id, title, blurb }) {
  return (
    <div className="row mb-4 mb-md-5">
      <div className="col-12 col-md-4">
        <div className="d-flex align-items-center gap-2 mb-2">
          <div
            style={{
              width: "4px",
              height: "20px",
              borderRadius: "4px",
              background:
                "linear-gradient(to bottom,#6366f1,#38bdf8)",
              boxShadow:
                "0 0 15px rgba(56,189,248,0.7)",
            }}
          />
          <h2
            id={id}
            className="m-0 fw-semibold"
            style={{
              color: "#fff",
              fontSize: "1.1rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
        </div>
        <p
          style={{
            color: "#9ca3af",
            fontSize: "0.8rem",
            lineHeight: 1.5,
            maxWidth: "20rem",
          }}
        >
          {blurb}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ title, tagline, bullets, tech }) {
  return (
    <div
      className="mb-4 p-4 rounded-4 position-relative"
      style={{
        backgroundColor: "rgba(23,23,23,0.6)",
        border: "1px solid #27272a",
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.9)",
      }}
    >
      {/* glow accent */}
      <div
        style={{
          position: "absolute",
          top: "-3.5rem",
          right: "-3.5rem",
          height: "8rem",
          width: "8rem",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(16,185,129,0.4), rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <div className="d-flex align-items-center gap-2">
            <span
              style={{
                display: "inline-block",
                height: "8px",
                width: "8px",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to right,#6366f1,#38bdf8)",
                boxShadow:
                  "0 0 12px rgba(56,189,248,0.8)",
              }}
            />
            <div
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              {title}
            </div>
          </div>

          <div
            style={{
              color: "#d4d4d8",
              fontSize: "0.8rem",
              lineHeight: 1.5,
              marginTop: "0.25rem",
            }}
          >
            {tagline}
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              style={{
                backgroundColor: "rgba(38,38,38,0.7)",
                border: "1px solid rgba(82,82,82,0.7)",
                borderRadius: "0.5rem",
                fontSize: "0.7rem",
                color: "#e5e7eb",
                padding: "0.4rem 0.5rem",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.8)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <ul
        style={{
          color: "#9ca3af",
          fontSize: "0.8rem",
          lineHeight: 1.5,
          marginTop: "0.75rem",
          paddingLeft: "1rem",
        }}
      >
        {bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: "0.4rem" }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ role, company, time, bullets }) {
  return (
    <div
      className="mb-4 p-4 rounded-4 position-relative"
      style={{
        backgroundColor: "rgba(23,23,23,0.6)",
        border: "1px solid #27272a",
        boxShadow:
          "0 40px 120px rgba(0,0,0,0.9)",
      }}
    >
      {/* glow accent */}
      <div
        style={{
          position: "absolute",
          bottom: "-3.5rem",
          left: "-3.5rem",
          height: "8rem",
          width: "8rem",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.4), rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <div>
          <div
            className="d-flex align-items-center flex-wrap gap-2"
            style={{ fontSize: "0.95rem", fontWeight: 600 }}
          >
            <span
              style={{
                display: "inline-block",
                height: "8px",
                width: "8px",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to right,#6366f1,#38bdf8)",
                boxShadow:
                  "0 0 12px rgba(99,102,241,0.8)",
              }}
            />
            <span style={{ color: "#fff" }}>
              {role}{" "}
              <span style={{ color: "#6b7280", fontWeight: 400 }}>
                @ {company}
              </span>
            </span>
          </div>

          <div
            style={{
              fontSize: "0.7rem",
              color: "#9ca3af",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: "0.25rem",
            }}
          >
            {time}
          </div>
        </div>
      </div>

      <ul
        style={{
          color: "#9ca3af",
          fontSize: "0.8rem",
          lineHeight: 1.5,
          marginTop: "0.75rem",
          paddingLeft: "1rem",
        }}
      >
        {bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: "0.4rem" }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactField({ label, value }) {
  return (
    <div>
      <div
        className="d-flex align-items-center gap-1"
        style={{
          color: "#9ca3af",
          fontSize: "0.6rem",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        <span
          style={{
            display: "inline-block",
            height: "6px",
            width: "6px",
            borderRadius: "9999px",
            background:
              "linear-gradient(to right,#6366f1,#38bdf8)",
            boxShadow:
              "0 0 8px rgba(56,189,248,0.8)",
          }}
        />
        {label}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "#fff",
          fontWeight: 500,
          wordBreak: "break-all",
        }}
      >
        {value}
      </div>
    </div>
  );
}
