import React from "react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="container py-5 border-top"
      style={{
        borderColor: "rgba(82,82,82,0.6)",
        scrollMarginTop: "6rem", // navbar offset for smooth scroll
      }}
    >
      {/* Header row */}
      <div className="row g-4 mb-4 mb-md-5">
        {/* Left: heading + intro */}
        <div className="col-12 col-md-4">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div
              style={{
                width: "4px",
                height: "16px",
                borderRadius: "4px",
                background:
                  "linear-gradient(to bottom,#6366f1,#38bdf8)",
                boxShadow:
                  "0 0 10px rgba(56,189,248,0.7)",
              }}
            />
            <h2
              id="resume-header"
              className="m-0 fw-semibold"
              style={{
                color: "#fff",
                fontSize: "1rem",
                lineHeight: 1.2,
              }}
            >
              Complete Resume
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
            Full professional résumé with career history, projects, and
            education.
          </p>
        </div>

        {/* Right: quick badges */}
        <div className="col-12 col-md-8 d-flex flex-wrap gap-2">
          {[
            "Technical Lead @ HP",
            "7.5+ yrs Backend / Platform",
            "Java • Spring Boot • Go • RabbitMQ • Solace",
            "Kubernetes • AWS • MongoDB • LaunchDarkly",
          ].map((badge, idx) => (
            <span
              key={idx}
              className="rounded-3"
              style={{
                backgroundColor: "rgba(23,23,23,0.6)",
                border: "1px solid rgba(82,82,82,0.6)",
                color: "#e5e7eb",
                fontSize: "0.7rem",
                fontWeight: 500,
                padding: "0.4rem 0.6rem",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.8)",
                whiteSpace: "nowrap",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Resume card */}
      <div
        className="rounded-4 position-relative"
        style={{
          backgroundColor: "rgba(23,23,23,0.6)",
          border: "1px solid #27272a",
          boxShadow: "0 40px 100px rgba(0,0,0,0.9)",
          color: "#e5e7eb",
          padding: "1.25rem 1.25rem 2rem",
        }}
      >
        {/* glow accent */}
        <div
          style={{
            position: "absolute",
            top: "-4rem",
            right: "-4rem",
            height: "8rem",
            width: "8rem",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.2), rgba(0,0,0,0) 70%)",
            filter: "blur(50px)",
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />

        {/* Name & Contact */}
        <h3
          className="fw-bold mb-1"
          style={{
            color: "#fff",
            fontSize: "1.25rem",
            lineHeight: 1.2,
          }}
        >
          D Subrahmanyam
        </h3>

        <p
          className="mb-4"
          style={{
            fontSize: "0.75rem",
            color: "#9ca3af",
            lineHeight: 1.4,
          }}
        >
          Email:{" "}
          <a
            href="mailto:subrahmanyam07.d@gmail.com"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
            }}
          >
            subrahmanyam07.d@gmail.com
          </a>{" "}
          | Phone: +91-9844158385
        </p>

        {/* Career Objective */}
        <ResumeBlock title="Career Objective">
          <p
            style={{
              fontSize: "0.8rem",
              color: "#d4d4d8",
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            To build and deliver secure, reliable, high-performance backend
            platforms and event-driven services at scale. I focus on clean
            architecture, observability, and automation to improve developer
            velocity and production stability.
          </p>
        </ResumeBlock>

        {/* Professional Summary */}
        <ResumeList
          title="Professional Summary"
          items={[
            "~7.5 years of experience in backend engineering and production support.",
            "Technical Lead at HP PPS Services Pvt Ltd (3.5+ yrs).",
            "4 years at Mphasis Ltd developing Spring Boot microservices.",
            "Expertise in Java, Spring Boot, Go, MongoDB, RabbitMQ, Solace, Docker, Kubernetes, AWS, Azure.",
            "Architected secure MongoDB tunneling and Solace consumers.",
            "Experience with Splunk, RPL, and LaunchDarkly configuration.",
          ]}
        />

        {/* Core Skills */}
        <ResumeBlock title="Core Skills">
          <p
            style={{
              fontSize: "0.8rem",
              color: "#d4d4d8",
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            Java, Go, Spring Boot, Spring Data JPA, Security, REST APIs,
            Microservices, RabbitMQ, Solace, MongoDB, Docker, Kubernetes,
            AWS, Azure, LaunchDarkly, Splunk, CI/CD, Observability, DevOps.
          </p>
        </ResumeBlock>

        {/* Professional Experience */}
        <ResumeList
          title="Professional Experience"
          items={[
            "HP PPS Services Pvt Ltd — Technical Lead | Jun 2021 – Present",
            "Mphasis Ltd, Bangalore — Software Engineer | May 2017 – May 2021",
          ]}
        />

        {/* Key Projects */}
        <ResumeList
          title="Key Projects"
          items={[
            "Event Handler: Spring Boot service for reliable event transformation and routing with RabbitMQ and Solace.",
            "Solace / RabbitMQ Consumer Framework: Handles ack/nack, confirms, and tracing for event-driven flows.",
            "MongoDB Secure Tunneling: Auditable short-lived access to MongoDB clusters.",
            "Mock Genie: Mock service platform for CI/CD testing.",
            "Ecommerce – Moneta & RPL: Payment validation, RPL screening, and refund workflow in Spring Boot & MongoDB.",
          ]}
        />

        {/* Education */}
        <ResumeList
          title="Education"
          items={[
            "MCA – SRKR Engineering College, Bhimavaram (80%)",
            "B.Sc (MPCS) – Sri Surya Degree College, Narasapuram (84%)",
            "Intermediate (MPC) – Sri Surya Junior College, Narasapuram (85.9%)",
          ]}
        />

        {/* Personal Details */}
        <ResumeList
          title="Personal Details"
          items={[
            "Date of Birth: 12 March 1994",
            "Nationality: Indian",
            "Languages: English, Telugu",
            "Marital Status: Married",
          ]}
        />

        {/* Download button */}
        <div className="text-center mt-4 mt-md-5">
          <a
            href="/D_Subrahmanyam_Resume.pdf"
            download
            className="btn w-100 w-sm-auto text-white"
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              background:
                "linear-gradient(to right,#4f46e5,#0ea5e9)",
              border: "none",
              borderRadius: "0.75rem",
              boxShadow:
                "0 15px 40px rgba(56,189,248,0.4)",
              padding: "0.9rem 1.25rem",
              maxWidth: "16rem",
            }}
          >
            Download Resume (PDF)
          </a>

          <div
            style={{
              fontSize: "0.7rem",
              color: "#6b7280",
              marginTop: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            Latest version includes Event Handler, Solace Consumer,
            Mongo Tunneling, Mock Genie & Moneta/RPL.
          </div>
        </div>
      </div>
    </section>
  );
}

/* helpers */

function ResumeBlock({ title, children }) {
  return (
    <div className="mt-4 mt-md-5">
      <h4
        className="fw-semibold mb-2"
        style={{
          color: "#fff",
          fontSize: "0.9rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h4>
      {children}
    </div>
  );
}

function ResumeList({ title, items }) {
  return (
    <div className="mt-4 mt-md-5">
      <h4
        className="fw-semibold mb-2"
        style={{
          color: "#fff",
          fontSize: "0.9rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h4>

      <ul
        style={{
          color: "#d4d4d8",
          fontSize: "0.8rem",
          lineHeight: 1.6,
          paddingLeft: "1rem",
          marginBottom: 0,
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              marginBottom: "0.5rem",
              listStyleType: "disc",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
