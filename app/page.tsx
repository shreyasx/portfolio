import Image from "next/image";

import ContactForm from "@/components/contact-form";
import DynamicTenure from "@/components/DynamicTenure";
import { HeroButtons } from "@/components/hero-buttons";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="pb-20 pt-16 sm:pb-28 sm:pt-24 md:pb-36 md:pt-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16 lg:gap-24">
              {/* Text — first on desktop */}
              <div className="w-full md:w-3/5">
                <p className="mb-5 font-mono text-xs tracking-[0.2em] text-primary uppercase">
                  Senior Full-Stack Engineer
                </p>
                <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Shreyas
                  <br />
                  Jamkhandi
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I ship whole systems — the interface, the services behind it,
                  and the infrastructure underneath. Lately that means
                  production LLM and agent systems.
                </p>
                <div className="mt-8">
                  <HeroButtons />
                </div>
              </div>

              {/* Portrait */}
              <div className="flex w-full justify-center md:w-2/5">
                <div className="relative aspect-[3/4] w-56 overflow-hidden rounded-sm border border-border/80 sm:w-64 md:w-72 lg:w-80">
                  <Image
                    src="/shreyas.jpg"
                    alt="Shreyas Jamkhandi"
                    fill
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────── */}
        <section
          id="about"
          className="border-t border-border/60 py-20 sm:py-28"
        >
          <div className="container mx-auto px-4">
            <p className="mb-3 text-center font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Background
            </p>
            <h2 className="mb-12 text-center font-display text-2xl font-bold md:text-3xl">
              About Me
            </h2>

            <div className="mx-auto max-w-3xl space-y-6">
              <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                {`I'm a full-stack engineer based in Bangalore. I started out freelancing in college, then joined RELSO as their first engineering hire — leading a two-person team, fully remote with a US client, and shipping a production agent that worked across Zoho CRM and Shopify. After that I spent ten months as the sole engineer at GST Manager, a B2B compliance platform: two React apps, the Python and Node services behind them, an 87-model Postgres schema, and the AWS infrastructure it all ran on.`}
              </p>
              <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                {`Today I'm a Senior Software Engineer at Tracxn, working on production LLM and agent systems. Alongside that I co-founded TeachPad, an AI teaching-prep SaaS now past 2,000 users, and built and published StoreScope on the Shopify App Store on my own. I lean on AI tooling heavily — Claude Code is a daily driver — but the architecture calls and the trade-offs are mine to defend.`}
              </p>
            </div>
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────────── */}
        <section
          id="skills"
          className="border-t border-border/60 bg-card py-20 sm:py-28"
        >
          <div className="container mx-auto px-4">
            <p className="mb-3 text-center font-mono text-xs tracking-[0.2em] text-primary uppercase">
              What I Work With
            </p>
            <h2 className="mb-4 text-center font-display text-2xl font-bold md:text-3xl">
              Tool Belt
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-base text-muted-foreground">
              Tools are transient. I stay dangerous by pairing core fundamentals
              with AI copilots that cut ramp-up time to near-zero.
            </p>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {[
                {
                  title: "Core Stack",
                  items: [
                    "TypeScript / JavaScript",
                    "Python",
                    "React & Next.js",
                    "Node.js & Express",
                    "TailwindCSS",
                  ],
                },
                {
                  title: "Backend & Data",
                  items: [
                    "FastAPI (async)",
                    "PostgreSQL & Prisma",
                    "Redis",
                    "Temporal",
                    "Firebase & Supabase",
                  ],
                },
                {
                  title: "AI & Agents",
                  items: [
                    "Tool-calling agents",
                    "RAG & vector search",
                    "LangGraph",
                    "Evals & regression in CI",
                    "Claude · Gemini · OpenAI",
                  ],
                },
                {
                  title: "Infrastructure",
                  items: [
                    "AWS (EC2, RDS, Lambda)",
                    "Docker",
                    "GitHub Actions CI/CD",
                    "Health-gated deploys",
                    "Sentry & structured logs",
                  ],
                },
              ].map(({ title, items }) => (
                <div key={title}>
                  <h3 className="mb-5 font-mono text-xs tracking-[0.15em] text-primary uppercase">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-foreground/80"
                      >
                        <span className="block size-1 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section
          id="experience"
          className="border-t border-border/60 py-20 sm:py-28"
        >
          <div className="container mx-auto px-4">
            <p className="mb-3 text-center font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Where I&apos;ve Been
            </p>
            <h2 className="mb-16 text-center font-display text-2xl font-bold md:text-3xl">
              Experience
            </h2>

            <div className="mx-auto max-w-3xl space-y-16">
              {[
                {
                  period: "Jul 2026 — Present",
                  // Counts up from the joining date so the current role stays accurate.
                  tenureStart: "2026-07-20",
                  tenure: null,
                  role: "Senior Software Engineer",
                  company: "Tracxn",
                  href: "https://tracxn.com",
                  bullets: [
                    "Work on production LLM and agent systems on the customer-facing product surface.",
                    "Agentic retrieval and synthesis over a large proprietary dataset, served at product scale.",
                  ],
                },
                {
                  period: "Oct 2025 — Jul 2026",
                  tenureStart: null,
                  tenure: "10 months",
                  role: "Sole Engineer & Technical Lead",
                  company: "GST Manager",
                  href: "https://gstmanager.com",
                  bullets: [
                    "Sole engineer on a live B2B compliance platform — two React/Next.js apps, the async FastAPI and Node.js services behind them, and the AWS infrastructure and CI/CD that shipped them.",
                    "Built the system of record: 87-model event-sourced PostgreSQL with an immutable audit log, multi-tenant RBAC, and a CI-enforced write path.",
                    "Shipped a Claude tool-calling agent with 60+ tools that executes real operations against production — human approval on every write, and an eval harness gating each prompt and model change in CI.",
                    "Durable Temporal workflows, CQRS read models on Redis, and live chat across both portals over SSE.",
                  ],
                },
                {
                  period: "Mar 2024 — Sep 2025",
                  tenureStart: null,
                  tenure: "1 year 7 months",
                  role: "Tech Lead",
                  company: "RELSO",
                  href: null,
                  bullets: [
                    "Led a two-engineer team — architecture, standards, and code reviews — fully remote with a US team.",
                    "Built a production LangGraph agent that answers live inventory questions and executes writes across Zoho CRM and Shopify.",
                    "Shipped the company's Shopify storefront front to back.",
                  ],
                },
              ].map(
                (
                  { period, tenureStart, tenure, role, company, href, bullets },
                  index
                ) => (
                  <div key={company}>
                    {index > 0 && (
                      <div className="mx-auto mb-16 w-8 border-t border-border" />
                    )}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                      <div className="space-y-1">
                        <p className="font-mono text-xs tracking-wider text-muted-foreground">
                          {period}
                        </p>
                        <p className="font-mono text-xs text-muted-foreground">
                          {tenureStart ? (
                            <DynamicTenure
                              startDate={tenureStart}
                              className="text-xs"
                            />
                          ) : (
                            tenure
                          )}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold sm:text-xl">
                          {role}
                        </h3>
                        <p className="mb-4 text-sm text-primary">
                          {href ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-colors hover:text-primary/80"
                            >
                              {company}
                            </a>
                          ) : (
                            company
                          )}
                        </p>
                        <ul className="space-y-2.5">
                          {bullets.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80"
                            >
                              <span className="mt-2 block size-1 shrink-0 rounded-full bg-primary/50" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────────── */}
        <section
          id="projects"
          className="border-t border-border/60 bg-card py-20 sm:py-28"
        >
          <div className="container mx-auto px-4">
            <p className="mb-3 text-center font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Built &amp; Shipped
            </p>
            <h2 className="mb-4 text-center font-display text-2xl font-bold md:text-3xl">
              Things I Own
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-center text-base text-muted-foreground">
              Products I started myself and still run — both live, both
              something you can go use right now.
            </p>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  name: "TeachPad",
                  role: "Co-Founder & Engineer",
                  period: "Apr 2025 — Present",
                  href: "https://teachpad.in",
                  linkLabel: "teachpad.in",
                  blurb:
                    "AI teaching-prep SaaS I co-founded and still run, now past 2,000 users. I own the backend: async FastAPI on PostgreSQL and Supabase, a RAG pipeline over Pinecone and Gemini that grounds every generation in real source material, plus usage quotas and Razorpay billing.",
                  stack: ["FastAPI", "PostgreSQL", "Pinecone", "RAG", "Razorpay"],
                },
                {
                  name: "StoreScope",
                  role: "Founder & Sole Engineer",
                  period: "Jun 2025 — Present",
                  href: "https://apps.shopify.com/storescope",
                  linkLabel: "Shopify App Store",
                  blurb:
                    "Real-time customer-journey and abandonment analytics for Shopify merchants — taken from an idea to a published App Store listing solo. High-throughput event ingestion, OAuth install flow, and usage-tiered billing with per-store quota enforcement at the API Gateway edge.",
                  stack: ["Shopify API", "AWS Amplify", "API Gateway", "OAuth"],
                },
              ].map(
                ({ name, role, period, href, linkLabel, blurb, stack }) => (
                  <div
                    key={name}
                    className="flex flex-col rounded-sm border border-border/60 bg-background p-6 sm:p-8"
                  >
                    <div className="mb-4 flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-lg font-bold sm:text-xl">
                        {name}
                      </h3>
                      <p className="shrink-0 font-mono text-xs text-muted-foreground">
                        {period}
                      </p>
                    </div>
                    <p className="mb-4 font-mono text-xs tracking-[0.1em] text-primary uppercase">
                      {role}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-foreground/80">
                      {blurb}
                    </p>
                    <div className="mt-auto space-y-5">
                      <div className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-sm border border-border/70 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {linkLabel}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── Operating Principles ─────────────────────────────── */}
        <section className="border-t border-border/60 py-20 sm:py-28">
          <div className="container mx-auto px-4">
            <p className="mb-3 text-center font-mono text-xs tracking-[0.2em] text-primary uppercase">
              How I Work
            </p>
            <h2 className="mb-12 text-center font-display text-2xl font-bold md:text-3xl">
              Operating Principles
            </h2>
            <div className="mx-auto max-w-3xl rounded-sm border border-border/60 bg-card p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
                {`I'm the go-to person when technical challenges surface. Whether it's debugging a stubborn issue or architecting an entirely new workflow, I thrive on diagnosing complex problems and shipping efficient, sustainable solutions. The goal is always the same — minimize downtime, keep momentum, and make sure every user has a seamless experience.`}
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section
          id="contact"
          className="border-t border-border/60 py-20 sm:py-28"
        >
          <div className="container mx-auto px-4">
            <p className="mb-3 text-center font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Let&apos;s Connect
            </p>
            <h2 className="mb-16 text-center font-display text-2xl font-bold md:text-3xl">
              Get in Touch
            </h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              {/* Form */}
              <div>
                <h3 className="mb-6 font-display text-lg font-semibold">
                  Drop a Line
                </h3>
                <ContactForm />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between">
                <div className="space-y-5">
                  <h3 className="font-display text-lg font-semibold">
                    {`Have a problem worth solving?`}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Based in Bangalore, open to remote. Always up for a
                    conversation about hard systems problems, new
                    products&nbsp;&mdash; or a role where the ownership is real.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="mb-4 font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
                    Find me on
                  </p>
                  <div className="flex gap-4">
                    {[
                      {
                        href: "mailto:shreyxs@gmail.com",
                        label: "Email",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        ),
                      },
                      {
                        href: "https://linkedin.com/in/shreyasx",
                        label: "LinkedIn",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        ),
                      },
                      {
                        href: "https://github.com/shreyasx",
                        label: "GitHub",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                          </svg>
                        ),
                      },
                      {
                        href: "https://x.com/shreyxs",
                        label: "X",
                        icon: (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          </svg>
                        ),
                      },
                    ].map(({ href, label, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target={
                          href.startsWith("mailto") ? undefined : "_blank"
                        }
                        rel={
                          href.startsWith("mailto")
                            ? undefined
                            : "noopener noreferrer"
                        }
                        className="flex size-11 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                        title={label}
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-border/60 py-8">
        <div className="container mx-auto flex flex-col items-center gap-1">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shreyas Jamkhandi
          </p>
        </div>
      </footer>
    </div>
  );
}
