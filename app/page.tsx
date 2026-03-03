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
                  Full-Stack Engineer
                </p>
                <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Shreyas
                  <br />
                  Jamkhandi
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I help startups cut noise, ship faster, and build systems that
                  actually work. First-principles thinking meets AI fire-power.
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
                {`I'm a full-stack developer based in Bangalore, working fully remote. I started out freelancing while in college — building end-to-end solutions and learning how to ship fast without cutting corners. After graduating with a degree in Computer Science, I joined Relso as their first engineering hire, where I led development from scratch and learned what it takes to build real products under startup constraints.`}
              </p>
              <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                {`Today, I work at GST Manager, where I own everything on the tech side — from internal tools to client-facing products — keeping things reliable, fast, and simple. I use AI tools to stay quick on my feet and build with clarity, not chaos.`}
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

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {/* Core */}
              <div>
                <h3 className="mb-5 font-mono text-xs tracking-[0.15em] text-primary uppercase">
                  Core Stack
                </h3>
                <ul className="space-y-3">
                  {[
                    "JavaScript / TypeScript",
                    "React & Next.js",
                    "Node.js & Express",
                    "TailwindCSS",
                    "SQL & NoSQL",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <span className="block size-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Integrations */}
              <div>
                <h3 className="mb-5 font-mono text-xs tracking-[0.15em] text-primary uppercase">
                  Integrations
                </h3>
                <ul className="space-y-3">
                  {[
                    "Shopify & Zoho",
                    "REST & GraphQL",
                    "Third-party APIs",
                    "Payment Gateways",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-foreground/80"
                    >
                      <span className="block size-1 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Infra */}
              <div>
                <h3 className="mb-5 font-mono text-xs tracking-[0.15em] text-primary uppercase">
                  Infrastructure
                </h3>
                <ul className="space-y-3">
                  {["Docker", "AWS", "Kubernetes", "CI/CD Pipelines"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-foreground/80"
                      >
                        <span className="block size-1 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
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
              {/* GST Manager */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                <div className="space-y-1">
                  <p className="font-mono text-xs tracking-wider text-muted-foreground">
                    Oct 2025 &mdash; Present
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    <DynamicTenure startDate="2025-10-01" className="text-xs" />
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    Tech Lead
                  </h3>
                  <p className="mb-4 text-sm text-primary">
                    <a
                      href="https://gstmanager.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-primary/80"
                    >
                      GST Manager
                    </a>
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Own all core systems — internal tools and client-facing products.",
                      "Build fast, reliable solutions that keep the business running smoothly.",
                      "Automate repetitive processes and improve operational workflows.",
                      "Work closely with leadership to align tech decisions with business goals.",
                    ].map((item) => (
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

              {/* Divider */}
              <div className="mx-auto w-8 border-t border-border" />

              {/* Relso */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                <div className="space-y-1">
                  <p className="font-mono text-xs tracking-wider text-muted-foreground">
                    Mar 2024 &mdash; Oct 2025
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    1 year 8 months
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    Tech Lead
                  </h3>
                  <p className="mb-4 text-sm text-primary">Relso</p>
                  <ul className="space-y-2.5">
                    {[
                      "Led development on Relso's primary web platforms, fully remote.",
                      "Unified multiple projects under one Turborepo monorepo for scalability.",
                      "Built modern UI components, integrated APIs, and enhanced product workflows.",
                      "Streamlined customer acquisition and improved data accuracy.",
                    ].map((item) => (
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
          </div>
        </section>

        {/* ── Operating Principles ─────────────────────────────── */}
        <section className="border-t border-border/60 bg-card py-20 sm:py-28">
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
                    Based in Bangalore, working remote. Always open to
                    discussing new projects, creative ideas, or
                    opportunities&nbsp;&mdash; especially ones that move fast
                    and break the right things.
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
