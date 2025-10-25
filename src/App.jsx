import React from "react";

/* ────────────────────────────────────────────── */
/* Main Component */
/* ────────────────────────────────────────────── */
export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-indigo-500/40 selection:text-white">
      {/* Decorative gradient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18)_0%,rgba(16,185,129,0)_70%)] blur-3xl opacity-60" />
      </div>

      {/* NAV / HEADER */}
      <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-neutral-800/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
            <span>D Subrahmanyam</span>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="hover:text-white transition-colors relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-indigo-400 to-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="text-xs font-medium bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white px-3 py-2 rounded-lg shadow-[0_15px_40px_rgba(56,189,248,0.4)] transition-all"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* ABOUT / HERO */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center gap-12"
      >
        {/* LEFT: Intro text */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            Backend / Platform Engineer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Java • Go • Cloud • Messaging
            </span>
          </h1>

          <p className="mt-6 text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
            I build secure, scalable backend services and internal platforms:
            microservices, event-driven systems, secure tunneling, and developer
            tooling. My focus is reliability, correctness, and observability at
            scale.
          </p>

          <p className="mt-4 text-neutral-400 text-sm leading-relaxed max-w-xl">
            Technical Lead at HP PPS Services Pvt Ltd (3.5+ yrs). Previously 4
            yrs at Mphasis Ltd, Bangalore. I work across Java/Spring Boot, Go,
            Kubernetes, Solace/RabbitMQ, and secure Mongo access tooling.
          </p>

          {/* "About me" deeper bio */}
          <div className="mt-6 text-neutral-300 text-sm leading-relaxed max-w-xl space-y-4">
            <p>
              I specialize in building and operating event-driven microservices
              using Spring Boot, MongoDB, RabbitMQ, Solace, Docker, and
              Kubernetes, with CI/CD and deployment using Azure DevOps and AWS.
            </p>
            <p>
              I’ve led core services in HP’s Stratus eCommerce platform such as
              Event Handler, Solace Consumer, and RPL (Restricted Party List).
              My work includes secure message routing, LaunchDarkly-driven
              runtime config, MongoDB performance tuning, and production-grade
              reliability/monitoring using Splunk and internal dashboards.
            </p>
            <p>
              I also build developer-facing platforms like secure MongoDB
              tunneling (temporary auditable access instead of permanent DB
              exposure) and Mock Genie (mock downstream services to unblock
              lower env dependencies). I care about stability, traceability,
              and making teams ship faster.
            </p>
            <p>
              I’m actively growing in DevOps, Cloud, and Generative AI. I
              believe in clean architecture + automation + observability =
              production confidence.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white shadow-[0_20px_60px_rgba(56,189,248,0.45)] text-center transition-all"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-neutral-900/70 hover:bg-neutral-800 text-neutral-100 border border-neutral-700/80 shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-center transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* RIGHT: Profile card with photo and core focus */}
        <div className="flex-1 w-full">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 shadow-[0_40px_120px_rgba(0,0,0,0.9)] relative overflow-hidden">
            {/* glow accent */}
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.4),rgba(0,0,0,0)_70%)] blur-2xl opacity-30 pointer-events-none" />

            {/* Photo */}
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(56,189,248,0.4,)_0%,rgba(0,0,0,0)_70%)] blur-xl opacity-30" />
                <img
                  src="/profile.jpg"
                  alt="D Subrahmanyam"
                  className="relative w-32 h-32 rounded-full object-cover border-2 border-sky-400 shadow-[0_25px_80px_rgba(56,189,248,0.4)]"
                />
              </div>

              <div className="mt-4">
                <div className="text-white font-semibold text-base">
                  D Subrahmanyam
                </div>
                <div className="text-[12px] text-neutral-400 font-medium tracking-wide uppercase">
                  Technical Lead @ HP
                </div>
              </div>
            </div>

            {/* Core focus list */}
            <div className="text-xs uppercase text-neutral-400 font-medium tracking-wide mt-6 mb-4 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              Core Focus
            </div>

            <ul className="space-y-3 text-sm text-neutral-200">
              {[
                "Secure microservices in Java / Spring Boot and Go",
                "Event-driven systems with RabbitMQ / Solace",
                "MongoDB, Spring Data JPA, controlled data access",
                "Docker, Kubernetes, Azure, AWS",
                "Prod reliability, Splunk / RPL observability",
              ].map((line, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-400 mt-0.5 text-xs">●</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/60"
      >
        <SectionHeader
          id="skills-header"
          title="Skills & Tech"
          blurb="Backend engineering • messaging systems • infrastructure • developer tooling"
        />

        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mx-auto md:ml-[33%]">
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
            <div
              key={item}
              className="bg-neutral-900/60 border border-neutral-800 rounded-xl px-3 py-2 text-neutral-200 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_80px_rgba(56,189,248,0.2)] hover:border-sky-500/40 hover:text-white transition-all text-xs font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/60"
      >
        <SectionHeader
          id="projects-header"
          title="Projects"
          blurb="Internal platforms and services I’ve led or contributed to"
        />

        <div className="md:w-2/3 space-y-6 mx-auto md:ml-[33%]">
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
            tech={["Go", "Docker", "Microservices", "Test Automation"]}
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/60"
      >
        <SectionHeader
          id="experience-header"
          title="Experience"
          blurb="7.5+ years building backend platforms, messaging systems and developer tooling"
        />

        <div className="md:w-2/3 space-y-8 mx-auto md:ml-[33%]">
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
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/60"
      >
        <SectionHeader
          id="contact-header"
          title="Contact"
          blurb="Let’s build something reliable, fast, and production-ready."
        />

        <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 shadow-[0_60px_140px_rgba(0,0,0,0.9)] md:w-2/3 mx-auto md:ml-[33%] relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-neutral-200 relative">
            <ContactField label="Name" value="D Subrahmanyam" />
            <ContactField label="Email" value="subrahmanyam07.d@gmail.com" />
            <ContactField label="GitHub" value="github.com/subbu261" />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 relative">
            <a
              href="mailto:subrahmanyam07.d@gmail.com"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white text-center shadow-[0_25px_80px_rgba(56,189,248,0.5)] transition-all"
            >
              Email me
            </a>
            <a
              href="https://github.com/subbu261"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-neutral-900/70 hover:bg-neutral-800 text-neutral-100 border border-neutral-700/80 text-center shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <footer className="text-center text-[11px] text-neutral-600 mt-16 mb-10">
          <div className="text-neutral-600 bg-gradient-to-r from-transparent via-neutral-700/40 to-transparent h-px w-full mb-4" />
          <div className="text-neutral-500">
            © {new Date().getFullYear()} D Subrahmanyam. All rights reserved.
          </div>
        </footer>
      </section>
    </main>
  );
}

/* ────────────────────────────────────────────── */
/* Subcomponents */
/* ────────────────────────────────────────────── */

function SectionHeader({ id, title, blurb }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-10 mb-10">
      <div className="md:w-1/3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-5 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" />
          <h2
            id={id}
            className="text-xl font-semibold text-white tracking-tight"
          >
            {title}
          </h2>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
          {blurb}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ title, tagline, bullets, tech }) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 shadow-[0_40px_120px_rgba(0,0,0,0.9)] hover:shadow-[0_60px_160px_rgba(56,189,248,0.12)] hover:border-sky-500/40 transition-all relative overflow-hidden">
      {/* glow accent */}
      <div className="absolute -top-14 -right-14 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.4),rgba(0,0,0,0)_70%)] blur-2xl opacity-20 pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative">
        <div>
          <div className="text-base font-semibold text-white flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
            <span>{title}</span>
          </div>
          <div className="text-sm text-neutral-300 mt-1 leading-relaxed">
            {tagline}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-neutral-800/70 border border-neutral-700/70 rounded-lg px-2 py-1 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-[11px] text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-4 text-sm text-neutral-400 space-y-2 leading-relaxed list-disc list-inside relative">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ role, company, time, bullets }) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 shadow-[0_40px_120px_rgba(0,0,0,0.9)] hover:shadow-[0_60px_160px_rgba(99,102,241,0.12)] hover:border-indigo-500/40 transition-all relative overflow-hidden">
      {/* glow accent */}
      <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.4),rgba(0,0,0,0)_70%)] blur-2xl opacity-20 pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative">
        <div>
          <div className="text-white font-semibold text-base flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
            <span>
              {role}{" "}
              <span className="text-neutral-500">@ {company}</span>
            </span>
          </div>
          <div className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
            {time}
          </div>
        </div>
      </div>

      <ul className="mt-4 text-sm text-neutral-400 space-y-2 leading-relaxed list-disc list-inside relative">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactField({ label, value }) {
  return (
    <div className="text-left">
      <div className="text-neutral-400 text-[10px] uppercase tracking-wide font-medium flex items-center gap-1">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        {label}
      </div>
      <div className="text-white font-medium text-sm break-all">{value}</div>
    </div>
  );
}
