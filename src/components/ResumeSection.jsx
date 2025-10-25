import React from "react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 border-t border-neutral-800/60 scroll-mt-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 sm:gap-10 mb-8 sm:mb-10">
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" />
            <h2
              id="resume-header"
              className="text-lg sm:text-xl font-semibold text-white tracking-tight"
            >
              Complete Resume
            </h2>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Full professional résumé with career history, projects, and education.
          </p>
        </div>

        {/* Quick badges */}
        <div className="md:w-2/3 flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
          {[
            "Technical Lead @ HP",
            "7.5+ yrs Backend / Platform",
            "Java • Spring Boot • Go • RabbitMQ • Solace",
            "Kubernetes • AWS • MongoDB • LaunchDarkly",
          ].map((badge, idx) => (
            <span
              key={idx}
              className="bg-neutral-900/60 border border-neutral-700/60 text-neutral-200 rounded-lg px-2 sm:px-3 py-1 font-medium shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Resume body */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 sm:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.9)] text-neutral-200 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.2),rgba(0,0,0,0)_70%)] blur-3xl opacity-40 pointer-events-none" />

        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">D Subrahmanyam</h3>
        <p className="text-xs sm:text-sm text-neutral-400 mb-6">
          Email:{" "}
          <a
            href="mailto:subrahmanyam07.d@gmail.com"
            className="text-sky-400 hover:text-sky-300"
          >
            subrahmanyam07.d@gmail.com
          </a>{" "}
          | Phone: +91-9844158385
        </p>

        {/* Sections */}
        <Section title="Career Objective">
          To build and deliver secure, reliable, high-performance backend platforms and event-driven services at scale. I focus on clean architecture, observability, and automation to improve developer velocity and production stability.
        </Section>

        <ListSection
          title="Professional Summary"
          items={[
            "~7.5 years of experience in backend engineering and production support.",
            "Technical Lead at HP PPS Services Pvt Ltd (3.5+ yrs).",
            "4 years at Mphasis Ltd developing Spring Boot microservices.",
            "Expertise in Java, Spring Boot, Go, MongoDB, RabbitMQ, Solace, Docker, K8s, AWS, Azure.",
            "Architected secure MongoDB tunneling and Solace consumers.",
            "Experience with Splunk, RPL, and LaunchDarkly configuration.",
          ]}
        />

        <Section title="Core Skills">
          Java, Go, Spring Boot, Spring Data JPA, Security, REST APIs, Microservices,
          RabbitMQ, Solace, MongoDB, Docker, Kubernetes, AWS, Azure, LaunchDarkly,
          Splunk, CI/CD, Observability, DevOps.
        </Section>

        <ListSection
          title="Professional Experience"
          items={[
            "HP PPS Services Pvt Ltd — Technical Lead | Jun 2021 – Present",
            "Mphasis Ltd, Bangalore — Software Engineer | May 2017 – May 2021",
          ]}
        />

        <ListSection
          title="Key Projects"
          items={[
            "Event Handler: Spring Boot service for reliable event transformation and routing with RabbitMQ and Solace.",
            "Solace / RabbitMQ Consumer Framework: Handles ack/nack, confirms, and tracing for event-driven flows.",
            "MongoDB Secure Tunneling: Auditable short-lived access to MongoDB clusters.",
            "Mock Genie: Mock service platform for CI/CD testing.",
            "Ecommerce – Moneta & RPL: Payment validation, RPL screening, and refund workflow in Spring Boot & MongoDB.",
          ]}
        />

        <ListSection
          title="Education"
          items={[
            "MCA – SRKR Engineering College, Bhimavaram (80%)",
            "B.Sc (MPCS) – Sri Surya Degree College, Narasapuram (84%)",
            "Intermediate (MPC) – Sri Surya Junior College, Narasapuram (85.9%)",
          ]}
        />

        <ListSection
          title="Personal Details"
          items={[
            "Date of Birth: 12 March 1994",
            "Nationality: Indian",
            "Languages: English, Telugu",
            "Marital Status: Married",
          ]}
        />

        {/* Download button */}
        <div className="mt-8 text-center">
          <a
            href="/D_Subrahmanyam_Resume.pdf"
            download
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white text-sm font-medium px-5 py-3 rounded-lg shadow-[0_15px_40px_rgba(56,189,248,0.4)] transition-all"
          >
            Download Resume (PDF)
          </a>
          <p className="text-[11px] text-neutral-500 mt-3">
            Latest version includes Event Handler, Solace Consumer, Mongo Tunneling, Mock Genie & Moneta/RPL.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-6 sm:mt-8">
      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-neutral-300 leading-relaxed">{children}</p>
    </div>
  );
}

function ListSection({ title, items }) {
  return (
    <div className="mt-6 sm:mt-8">
      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
        {title}
      </h4>
      <ul className="list-disc list-inside text-sm text-neutral-300 space-y-2 leading-relaxed">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
