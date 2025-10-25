import React from "react";

export default function ResumeSection() {
  return (
    <section
      id="resume"
      className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-800/60 scroll-mt-24"
    >
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 mb-10">
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-5 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.7)]" />
            <h2
              id="resume-header"
              className="text-xl font-semibold text-white tracking-tight"
            >
              Complete Resume
            </h2>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Full professional résumé with career history, skills, projects and
            education. Downloadable PDF included.
          </p>
        </div>

        {/* Quick stats card */}
        <div className="md:w-2/3 flex flex-wrap gap-3 text-[11px]">
          <span className="bg-neutral-900/60 border border-neutral-700/60 text-neutral-200 rounded-lg px-3 py-1 font-medium shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            Technical Lead @ HP
          </span>
          <span className="bg-neutral-900/60 border border-neutral-700/60 text-neutral-200 rounded-lg px-3 py-1 font-medium shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            7.5+ yrs Backend / Platform
          </span>
          <span className="bg-neutral-900/60 border border-neutral-700/60 text-neutral-200 rounded-lg px-3 py-1 font-medium shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            Java • Spring Boot • Go • RabbitMQ • Solace
          </span>
          <span className="bg-neutral-900/60 border border-neutral-700/60 text-neutral-200 rounded-lg px-3 py-1 font-medium shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            Kubernetes • AWS • MongoDB • LaunchDarkly
          </span>
        </div>
      </div>

      {/* Resume body */}
      <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 shadow-[0_60px_140px_rgba(0,0,0,0.9)] text-neutral-200 relative overflow-hidden">
        {/* glow accent bg */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.22),rgba(0,0,0,0)_70%)] blur-3xl opacity-40" />

        {/* Top info */}
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white">
                D Subrahmanyam
              </h3>
              <p className="text-sm text-neutral-400">
                Email:{" "}
                <a
                  href="mailto:subrahmanyam07.d@gmail.com"
                  className="text-sky-400 hover:text-sky-300"
                >
                  subrahmanyam07.d@gmail.com
                </a>{" "}
                | Phone: +91-9844158385
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] text-neutral-300 font-medium">
              <span className="bg-neutral-800/60 border border-neutral-700/70 rounded-md px-2 py-1 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                Backend / Platform Engineer
              </span>
              <span className="bg-neutral-800/60 border border-neutral-700/70 rounded-md px-2 py-1 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                Event-driven Systems
              </span>
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-2">
            Career Objective
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            To build and deliver secure, reliable, high-performance backend
            platforms and event-driven services at scale. I focus on clean
            architecture, observability, and automation to improve developer
            velocity and production stability.
          </p>
        </section>

        {/* Professional Summary */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-2">
            Professional Summary
          </h4>
          <ul className="list-disc list-inside text-sm text-neutral-300 space-y-2 leading-relaxed">
            <li>
              ~7.5 years of experience in backend engineering, platform
              development, and production support.
            </li>
            <li>
              Technical Lead at HP PPS Services Pvt Ltd, driving event-driven
              microservices and messaging systems for HP eCommerce systems
              (3.5+ years).
            </li>
            <li>
              4 years prior experience at Mphasis Ltd, building Spring Boot
              microservices and AWS-integrated services.
            </li>
            <li>
              Strong hands-on expertise in Java, Spring Boot, Go, MongoDB,
              RabbitMQ, Solace, Docker, Kubernetes, AWS, and Azure.
            </li>
            <li>
              Architected secure MongoDB tunneling and reliable Solace
              consumers with feature-flag-driven control.
            </li>
            <li>
              Experience with observability tools like Splunk, RPL, and
              LaunchDarkly-based configuration.
            </li>
          </ul>
        </section>

        {/* Core Skills */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-2">
            Core Skills
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            <span className="text-neutral-400 font-medium">
              Languages / Runtime:
            </span>{" "}
            Java, Go
            <br />
            <span className="text-neutral-400 font-medium">
              Backend / Frameworks:
            </span>{" "}
            Spring Boot, Spring MVC, Spring Security, Spring Data JPA,
            Hibernate, REST APIs, Microservices architecture
            <br />
            <span className="text-neutral-400 font-medium">
              Messaging & Event-Driven:
            </span>{" "}
            RabbitMQ (publisher confirms, ack/nack, retry queues), Solace
            PubSub+, Event Handler pipelines
            <br />
            <span className="text-neutral-400 font-medium">
              Data / Storage:
            </span>{" "}
            MongoDB (secured access, performance tuning, auditing), Oracle,
            MySQL, DynamoDB, AWS Aurora DB
            <br />
            <span className="text-neutral-400 font-medium">
              Cloud & Infra:
            </span>{" "}
            Docker, Kubernetes, AWS (EC2, S3, Lambda, SQS, Secrets Manager,
            CloudWatch), Azure, LaunchDarkly, OAuth/KMS-secured comms
            <br />
            <span className="text-neutral-400 font-medium">
              Observability / Reliability:
            </span>{" "}
            Splunk dashboards, RPL monitoring, tracing in prod, rollback
            planning
            <br />
            <span className="text-neutral-400 font-medium">
              Tooling & Quality:
            </span>{" "}
            IntelliJ, Postman, JUnit 5, Mockito, JaCoCo, SonarQube,
            Git/Azure DevOps CI/CD
          </p>
        </section>

        {/* Professional Experience */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-4">
            Professional Experience
          </h4>

          {/* HP block */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="text-white font-semibold text-base flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                <span>
                  HP PPS Services Pvt Ltd{" "}
                  <span className="text-neutral-500 font-normal">
                    | Technical Lead
                  </span>
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium tracking-wide uppercase">
                June 2021 – Present (3.5+ years)
              </div>
            </div>

            <ul className="list-disc list-inside text-sm text-neutral-300 space-y-2 mt-3 leading-relaxed">
              <li>
                Designed event-driven microservices that process and route
                critical eCommerce events (order, invoice, payment,
                subscription).
              </li>
              <li>
                Built and enhanced{" "}
                <span className="text-neutral-100 font-medium">
                  Event Handler
                </span>{" "}
                service to enrich Solace events and publish reliable messages
                to RabbitMQ with correlation tracking.
              </li>
              <li>
                Developed{" "}
                <span className="text-neutral-100 font-medium">
                  Solace Consumer
                </span>{" "}
                components handling event enrichment, routing logic, and
                failure isolation.
              </li>
              <li>
                Created{" "}
                <span className="text-neutral-100 font-medium">
                  MongoDB Secure Tunneling Service
                </span>{" "}
                offering short-lived, auditable access to restricted clusters
                instead of permanent DB exposure.
              </li>
              <li>
                Integrated LaunchDarkly feature flags for dynamic config
                management across DEV / PIE / STG / PROD without redeploys.
              </li>
              <li>
                Implemented Splunk / RPL-based observability for production
                tracing and debugging.
              </li>
              <li>
                Built{" "}
                <span className="text-neutral-100 font-medium">
                  Mock Genie
                </span>{" "}
                platform to simulate downstream APIs for CI/CD pipeline
                testing and unblock teams.
              </li>
            </ul>
          </div>

          {/* Mphasis block */}
          <div className="mb-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="text-white font-semibold text-base flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-sky-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                <span>
                  Mphasis Ltd, Bangalore{" "}
                  <span className="text-neutral-500 font-normal">
                    | Software Engineer
                  </span>
                </span>
              </div>
              <div className="text-[11px] text-neutral-400 font-medium tracking-wide uppercase">
                May 2017 – May 2021 (4 years)
              </div>
            </div>

            <ul className="list-disc list-inside text-sm text-neutral-300 space-y-2 mt-3 leading-relaxed">
              <li>
                Developed and deployed Spring Boot microservices for enterprise
                payment systems and order management.
              </li>
              <li>
                Built REST APIs for IPN, IDN, IRN services integrating payment
                and refund flows with RPL screening.
              </li>
              <li>
                Implemented data security and signature verification using HMAC
                SHA-256 and Spring Security.
              </li>
              <li>
                Enhanced performance, automated retry logic, and improved error
                tracking for high-volume transactions.
              </li>
              <li>
                Worked on AWS (EC2, S3, Lambda, SQS, Secrets Manager) and
                integrated logging via CloudWatch.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-2">
            Key Projects
          </h4>
          <ul className="list-disc list-inside text-sm text-neutral-300 space-y-3 leading-relaxed">
            <li>
              <span className="text-neutral-100 font-medium">
                Event Handler (HP eCommerce Platform)
              </span>
              : Spring Boot service to transform and enrich Solace events
              (order / invoice / payment / subscription) and publish reliable
              internal messages to RabbitMQ with retry, DLQ handling,
              correlation mapping, and audit trails.
            </li>
            <li>
              <span className="text-neutral-100 font-medium">
                Solace / RabbitMQ Consumer Framework
              </span>
              : High-availability consumer layer with confirm callbacks,
              ack/nack logic, LaunchDarkly runtime control per environment, and
              Splunk-based traceability for production debugging.
            </li>
            <li>
              <span className="text-neutral-100 font-medium">
                MongoDB Secure Tunneling Service
              </span>
              : Internal access platform that dynamically creates short-lived,
              auditable tunnels to restricted MongoDB clusters instead of
              giving long-term direct DB access.
            </li>
            <li>
              <span className="text-neutral-100 font-medium">
                Mock Genie (Internal Mocking Platform)
              </span>
              : Mock downstream services from contract/Swagger so teams can
              test in CI and lower envs without waiting on real downstream
              systems.
            </li>
            <li>
              <span className="text-neutral-100 font-medium">
                Ecommerce – Moneta & RPL
              </span>
              : Handles payment validation, RPL compliance screening on billing
              / shipping address, delivery notification (IDN) or refund/cancel
              workflow (IRN), scheduled retries for failures, and full
              lifecycle audit storage in MongoDB.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
          <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1 leading-relaxed">
            <li>
              MCA – SRKR Engineering College, Bhimavaram (80%)
            </li>
            <li>
              B.Sc (MPCS) – Sri Surya Degree College, Narasapuram (84%)
            </li>
            <li>
              Intermediate (MPC) – Sri Surya Junior College, Narasapuram
              (85.9%)
            </li>
          </ul>
        </section>

        {/* Personal details */}
        <section className="relative mt-8">
          <h4 className="text-lg font-semibold text-white mb-2">
            Personal Details
          </h4>
          <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1 leading-relaxed">
            <li>Date of Birth: 12 March 1994</li>
            <li>Nationality: Indian</li>
            <li>Languages: English, Telugu</li>
            <li>Marital Status: Married</li>
          </ul>
        </section>

        {/* Download button */}
        <div className="relative mt-10 text-center">
          <a
            href="/D_Subrahmanyam_Resume.pdf"
            download
            className="inline-block bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white text-sm font-medium px-6 py-3 rounded-lg shadow-[0_15px_40px_rgba(56,189,248,0.4)] transition-all"
          >
            Download Resume (PDF)
          </a>

          <div className="text-[11px] text-neutral-500 mt-3">
            This is the latest version with Event Handler, Solace Consumer,
            Mongo Tunneling, Mock Genie & Moneta/RPL work.
          </div>
        </div>
      </div>
    </section>
  );
}
