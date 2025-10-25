import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-indigo-500/40 selection:text-white">
      {/* NAV / HEADER */}
      <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight text-white">
            D Subrahmanyam
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-2 rounded-lg shadow-lg shadow-indigo-600/30 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* HERO / ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-start md:items-center gap-12"
      >
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            Backend / Platform Engineer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400">
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
            Currently a Technical Lead at HP PPS Services Pvt Ltd with 3.5 years
            of experience, previously at Mphasis Ltd for 4 years. Passionate
            about system design, DevOps integration, and event-driven
            architectures.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 text-center transition-colors"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-center transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Skills & Tech
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-3 max-w-xs">
              Backend engineering, messaging systems, data access, cloud
              runtime, and developer tooling.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
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
                className="bg-neutral-900/50 border border-neutral-800 rounded-xl px-3 py-2 text-neutral-200 text-center shadow shadow-black/40"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-3 max-w-xs">
              A few internal platforms and services I’ve built or contributed
              to.
            </p>
          </div>

          <div className="md:w-2/3 space-y-6">
            <ProjectCard
              title="Mongo Tunneling Service"
              tagline="Secure tunneling service for restricted MongoDB clusters."
              bullets={[
                "Spring Boot backend that dynamically builds Mongo URIs and starts temporary tunnels.",
                "Provides time-limited developer access with audit and security policies.",
              ]}
              tech={["Java", "Spring Boot", "MongoDB", "AWS/Azure", "Security"]}
            />

            <ProjectCard
              title="Solace / RabbitMQ Event Consumer"
              tagline="High-reliability message consumer for event-driven flows."
              bullets={[
                "Consumes and processes messages from Solace and RabbitMQ.",
                "Implements retry handling, monitoring, and message correlation.",
                "Integrated with Splunk and RPL for observability.",
              ]}
              tech={["Go", "Java", "Solace", "RabbitMQ", "Splunk"]}
            />

            <ProjectCard
              title="Mock Genie"
              tagline="Internal mock service platform that simulates downstream APIs."
              bullets={[
                "Allows integration testing without live downstream dependencies.",
                "Improves CI/CD stability and developer velocity.",
              ]}
              tech={["Go", "Docker", "Microservices", "Automation"]}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800"
      >
        <div className="flex flex-col md:flex-row md:items-start gap-10">
          <div className="md:w-1/3">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Experience
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mt-3 max-w-xs">
              Professional experience spanning over 7.5 years in backend and
              platform engineering.
            </p>
          </div>

          <div className="md:w-2/3 space-y-8">
            <ExperienceItem
              role="Technical Lead"
              company="HP PPS Services Pvt Ltd"
              time="June 2021 — Present (3.5 years)"
              bullets={[
                "Leading backend development for Stratus eCommerce and event-driven systems.",
                "Architected MongoDB tunneling service and Solace-based event handlers.",
                "Implemented DevOps workflows across Docker, Kubernetes, and Azure.",
                "Improved service reliability with Splunk dashboards and observability pipelines.",
              ]}
            />

            <ExperienceItem
              role="Software Engineer"
              company="Mphasis Ltd, Bangalore"
              time="May 2017 — May 2021 (4 years)"
              bullets={[
                "Developed and maintained Spring Boot microservices for enterprise clients.",
                "Integrated message brokers and REST APIs with secure authentication layers.",
                "Enhanced system performance and reduced latency through DB optimizations.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800"
      >
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 shadow-xl shadow-black/60 max-w-3xl">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Let’s work together.
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed mt-3 max-w-xl">
            Interested in backend, platform engineering, or microservices /
            messaging projects? Reach out below.
          </p>

          <div className="mt-6 text-sm text-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-wide font-medium">
                  Name
                </div>
                <div className="text-white font-medium">D Subrahmanyam</div>
              </div>

              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-wide font-medium">
                  Email
                </div>
                <div className="text-white font-medium break-all">
                  subrahmanyam07.d@gmail.com
                </div>
              </div>

              <div>
                <div className="text-neutral-400 text-xs uppercase tracking-wide font-medium">
                  GitHub
                </div>
                <div className="text-white font-medium break-all">
                  github.com/subbu261
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:subrahmanyam07.d@gmail.com"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 text-center transition-colors"
            >
              Email me
            </a>
            <a
              href="https://github.com/subbu261"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl text-sm font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-100 border border-neutral-700 text-center transition-colors"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        <footer className="text-center text-[11px] text-neutral-600 mt-16 mb-10">
          © {new Date().getFullYear()} D Subrahmanyam. All rights reserved.
        </footer>
      </section>
    </main>
  );
}

/* COMPONENTS */
function ProjectCard({ title, tagline, bullets, tech }) {
  return (
    <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 shadow-xl shadow-black/60">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="text-base font-semibold text-white">{title}</div>
          <div className="text-sm text-neutral-300 mt-1 leading-relaxed">
            {tagline}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-neutral-800/60 border border-neutral-700 rounded-lg px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-4 text-sm text-neutral-400 space-y-2 leading-relaxed list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ role, company, time, bullets }) {
  return (
    <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 shadow-xl shadow-black/60">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="text-white font-semibold text-base">
            {role} <span className="text-neutral-500">@ {company}</span>
          </div>
          <div className="text-xs text-neutral-400 font-medium tracking-wide uppercase">
            {time}
          </div>
        </div>
      </div>

      <ul className="mt-4 text-sm text-neutral-400 space-y-2 leading-relaxed list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
