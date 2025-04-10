import Image from "next/image";

import { Cloud, Code, Puzzle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import DynamicTenure from "@/components/DynamicTenure";
import ContactForm from "@/components/contact-form";
import { HeroButtons } from "@/components/hero-buttons";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="dark:hero-gradient-dark light:hero-gradient-light light:from-white light:to-[#f5f5f5] py-12 dark:from-[#121212] dark:to-background sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-8 sm:gap-12 md:flex-row md:gap-16">
              {/* Avatar first on mobile, but second on desktop */}
              <div className="flex w-full justify-center md:order-2 md:w-2/5">
                <div className="hover-lift relative size-48 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg sm:size-56 md:size-72 lg:size-80">
                  <Image
                    src="/shreyas.jpg"
                    alt="Shreyas Jamkhandi"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Text second on mobile, but first on desktop */}
              <div className="w-full animate-fade-up text-center md:order-1 md:w-3/5 md:pl-8 md:text-left">
                <h1
                  className="text-2xl font-bold text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ lineHeight: 1.25 }}
                >
                  {`Hi, I'm Shreyas Jamkhandi — a Remote Full-Stack Developer & Technical Consultant.`}
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-foreground/80 md:mx-0 md:text-lg">
                  {`I help businesses craft modern web platforms and streamline their processes—on
                  my own terms. Remote work fuels my creativity and discipline, letting me deliver
                  high-quality solutions while enjoying the freedom I value.`}
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <HeroButtons />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="theme-transition bg-secondary py-16 sm:py-20 md:py-24"
        >
          <div className="container mx-auto animate-fade-up px-4">
            <h2 className="mb-8 text-center text-xl font-bold leading-tight sm:mb-10 sm:text-2xl md:mb-12 md:text-3xl">
              About Me
            </h2>
            <div className="mx-auto max-w-4xl space-y-4 sm:space-y-6">
              <p
                className="text-center text-sm leading-relaxed text-foreground/90 md:text-lg"
                style={{
                  wordBreak: "keep-all",
                  hyphens: "none",
                }}
              >
                {`I'm a Full-Stack Developer based in Sanquelim, Goa, driven by discipline, autonomy, and the thrill of building meaningful digital experiences. I graduated in 2023 with a B.E. in Computer Science from KLS Gogte Institute of Technology, Belagavi. Back in college, I took on freelance projects via `}
                <a
                  href="https://www.freelancer.in/u/shreyxs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary transition-colors hover:underline"
                >
                  Freelancer.in
                </a>
                {`—earning a 5-star reputation for my dedication and efficient delivery.`}
              </p>
              <p
                className="text-center text-sm leading-relaxed text-foreground/90 md:text-lg"
                style={{
                  wordBreak: "keep-all",
                  hyphens: "none",
                }}
              >
                {`After graduation, I stepped into the professional world as an Associate Technical Consultant at Finaks for an American firm called Workforce Software, where I proudly earned the PT101 certification. But my true passion lay in web development, which led me to Relso.`}
              </p>
              <p
                className="text-center text-sm leading-relaxed text-foreground/90 md:text-lg"
                style={{
                  wordBreak: "keep-all",
                  hyphens: "none",
                }}
              >
                {`Today, I work remotely as a Web Architect, consolidating multiple platforms into one Turborepo monorepo—a project that resonates with my love for streamlined, scalable solutions. Beyond coding, I'm fueled by the discipline to stay consistent and the ambition to someday build my own product.`}
              </p>
              <p
                className="text-center text-sm leading-relaxed text-foreground/90 md:text-lg"
                style={{
                  wordBreak: "keep-all",
                  hyphens: "none",
                }}
              >
                {`Whether it's problem-solving or pioneering new features, I hold myself to a high standard—because if we're going to create something, let's make it exceptional.`}
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="theme-transition bg-background py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 animate-fade-up text-center text-2xl font-bold leading-tight md:text-3xl">
              Skills & Tech Stack
            </h2>

            <div className="skills-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Core Technologies */}
              <div
                className="group animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <Card className="skills-card h-full border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="skill-icon-container rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20">
                        <Code className="skill-icon size-6" />
                      </div>
                      <CardTitle className="py-5 text-xl leading-tight text-foreground">
                        Core Technologies
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-4">
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          JavaScript, TypeScript
                        </span>
                      </li>
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          React, Next.js, Node.js, Express
                        </span>
                      </li>
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          TailwindCSS, CSS-in-JS
                        </span>
                      </li>
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          SQL & NoSQL Databases
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Integrations & APIs */}
              <div
                className="group animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <Card className="skills-card h-full border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="skill-icon-container rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20">
                        <Puzzle className="skill-icon size-6" />
                      </div>
                      <CardTitle className="py-5 text-xl leading-tight text-foreground">
                        Integrations & APIs
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-4">
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          Shopify, Zoho
                        </span>
                      </li>
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          REST & GraphQL
                        </span>
                      </li>
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          Third-party API Integrations
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Cloud & DevOps */}
              <div
                className="group animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <Card className="skills-card h-full border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="skill-icon-container rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20">
                        <Cloud className="skill-icon size-6" />
                      </div>
                      <CardTitle className="py-5 text-xl leading-tight text-foreground">
                        Cloud & DevOps
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ul className="space-y-4">
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          Docker
                        </span>
                      </li>
                      <li className="group/item flex items-center gap-3 transition-all duration-300">
                        <div className="size-1.5 shrink-0 rounded-full bg-primary transition-transform group-hover/item:scale-125"></div>
                        <span className="text-base leading-relaxed text-foreground transition-colors group-hover/item:text-primary">
                          Basic AWS
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="theme-transition bg-secondary py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 animate-fade-up text-center text-2xl font-bold leading-tight md:text-3xl">
              Projects
            </h2>

            <div className="grid grid-cols-1 gap-16 md:gap-8 lg:grid-cols-2 xl:gap-14">
              {/* Project 1 */}
              <Card
                className="animate-fade-up border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
                style={{ animationDelay: "100ms" }}
              >
                <CardHeader className="card-header pb-4">
                  <CardTitle className="card-title flex items-center gap-3 text-xl leading-tight">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2H2v10h10V2z"></path>
                        <path d="M12 12h10v10H12V12z"></path>
                        <path d="M22 2h-5v5h5V2z"></path>
                        <path d="M7 17H2v5h5v-5z"></path>
                      </svg>
                    </div>
                    Relso Company Main Website
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                  <p className="mb-6 text-justify text-base leading-relaxed text-foreground">
                    A sophisticated B2B website for a company specializing in
                    premium Indian furniture in the USA. The platform features a
                    modern, stylish user interface complemented by a robust
                    backend that processes orders and creates customer profiles
                    through seamless Zoho API integration. I was deeply involved
                    in design ideation and collaborated closely with
                    non-technical founders to translate complex business
                    requirements into effective digital solutions that enhance
                    customer engagement and streamline operations.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-4">
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Next.js
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      TypeScript
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      TailwindCSS
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Zoho API
                    </Badge>
                  </div>
                  <div className="border-t border-border/50 pt-2">
                    <a
                      href="https://relso.today"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Visit Website{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card
                className="animate-fade-up border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
                style={{ animationDelay: "200ms" }}
              >
                <CardHeader className="card-header pb-4">
                  <CardTitle className="card-title flex items-center gap-3 text-xl leading-tight">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    Relso Rep-Corner
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                  <p className="mb-6 text-justify text-base leading-relaxed text-foreground">
                    A dynamic platform designed to empower company
                    representatives with efficient workflow management tools.
                    This application facilitates comprehensive tracking of
                    inventory, real-time order updates, and integrated customer
                    record management, all powered by sophisticated Zoho API
                    integration. The platform plays a crucial role in lead
                    tracking, invoice management, and product showcasing to
                    retailers, delivering measurable business value through
                    improved operational efficiency and enhanced sales team
                    productivity.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-4">
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Next.js
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      TypeScript
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      ShadcnUI
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Zoho API
                    </Badge>
                  </div>
                  <div className="border-t border-border/50 pt-2">
                    <a
                      href="https://rep.relso.today"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Visit Website{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card
                className="animate-fade-up border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
                style={{ animationDelay: "300ms" }}
              >
                <CardHeader className="card-header pb-4">
                  <CardTitle className="card-title flex items-center gap-3 text-xl leading-tight">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"></path>
                      </svg>
                    </div>
                    Freelance Website for a Game Designer
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                  <p className="mb-6 text-justify text-base leading-relaxed text-foreground">
                    A creatively designed freelance project that showcases a
                    game designer&apos;s portfolio with distinctive flair. The
                    site features a stylish, game-inspired user interface
                    meticulously crafted to effectively highlight the
                    designer&apos;s professional experience and creative works.
                    The project embraces innovative design approaches and modern
                    aesthetics that reflect the designer&apos;s unique style
                    while maintaining usability and engagement, resulting in a
                    compelling digital portfolio that stands out in a
                    competitive industry.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-4">
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Next.js
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      TypeScript
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      TailwindCSS
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Framer Motion
                    </Badge>
                  </div>
                  <div className="border-t border-border/50 pt-2">
                    <a
                      href="https://rohan-agarwal.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Visit Website{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Project 4 */}
              <Card
                className="animate-fade-up border border-primary/20 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
                style={{ animationDelay: "400ms" }}
              >
                <CardHeader className="card-header pb-4">
                  <CardTitle className="card-title flex items-center gap-3 text-xl leading-tight">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path>
                      </svg>
                    </div>
                    MAS (Medical Affairs Society) Website
                  </CardTitle>
                </CardHeader>
                <CardContent className="card-content">
                  <p className="mb-6 text-justify text-base leading-relaxed text-foreground">
                    A professional and refined website developed for the Medical
                    Affairs Society. This platform distinguishes itself through
                    sophisticated, elegant design using Material UI, diverging
                    from the Next.js, Tailwind, and ShadcnUI stack employed in
                    other projects. The site features a clean layout with
                    thoughtfully spaced design elements and modern aesthetics
                    that contribute to a highly functional and professional
                    digital presence, effectively representing the
                    society&apos;s mission and providing valuable resources to
                    its members.
                  </p>
                  <div className="mb-6 flex flex-wrap gap-4">
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      React
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      JavaScript
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Material UI
                    </Badge>
                    <Badge className="border-none bg-primary/15 px-3 py-1 text-foreground hover:bg-primary/20">
                      Responsive Design
                    </Badge>
                  </div>
                  <div className="border-t border-border/50 pt-2">
                    <a
                      href="https://medicalaffairssociety.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Visit Website{" "}
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-background py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 text-center text-2xl font-bold leading-tight md:text-3xl">
              Experience
            </h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16">
              {/* Experience 1 */}
              <Card className="relative overflow-hidden border border-primary/30 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Decorative border accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/80 to-primary/30"></div>

                <CardContent className="p-8">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="md:w-1/4">
                      <div className="mb-3 inline-flex rounded-full border-2 border-primary/30 bg-primary/10 p-3 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="3"
                            width="20"
                            height="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                      </div>
                      <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">
                        Web Architect
                      </h3>
                      <p className="mb-1 font-medium text-primary">@ Relso</p>
                      <p className="text-sm text-muted-foreground">
                        March 2024 - Present
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">
                        <DynamicTenure startDate="2024-03-01" />
                      </p>
                    </div>

                    <div className="relative before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-primary/20 md:w-3/4 md:pl-8">
                      <ul className="space-y-4 text-foreground">
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Enjoying full remote flexibility while leading
                            development on Relso&apos;s primary web platforms.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Unifying multiple projects under one Turborepo
                            monorepo to improve scalability and consistency.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Implementing modern UI components, integrating APIs,
                            and enhancing product workflows.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Streamlined customer acquisition processes and
                            increased data accuracy.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience 2 */}
              <Card className="relative overflow-hidden border border-primary/30 bg-card/90 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Decorative border accent */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/80 to-primary/30"></div>

                <CardContent className="p-8">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="md:w-1/4">
                      <div className="mb-3 inline-flex rounded-full border-2 border-primary/30 bg-primary/10 p-3 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect
                            x="8"
                            y="2"
                            width="8"
                            height="4"
                            rx="1"
                            ry="1"
                          ></rect>
                          <path d="M15 11h-6"></path>
                          <path d="M15 15h-6"></path>
                          <path d="M15 19h-6"></path>
                        </svg>
                      </div>
                      <h3 className="mb-2 text-lg font-bold leading-tight text-foreground">
                        Associate Technical Consultant Intern
                      </h3>
                      <p className="mb-1 font-medium text-primary">@ Finaks</p>
                      <p className="text-sm text-muted-foreground">
                        August 2023 - February 2024
                      </p>
                      <p className="text-sm font-medium text-muted-foreground">
                        7 months
                      </p>
                    </div>

                    <div className="relative before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-primary/20 md:w-3/4 md:pl-8">
                      <ul className="space-y-4 text-foreground">
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Collaborated with cross-functional teams to deliver
                            solutions for Workforce Software.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Earned the PT101 certification, a milestone in
                            technical consulting excellence.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Assisted in solution architecture, documentation,
                            and implementation.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 mt-1.5 size-3 shrink-0 rounded-full border border-primary/30 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>
                          <span className="text-base leading-relaxed">
                            Supported senior consultants on major project
                            deliverables.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Problem Solving Section */}
        <section id="problem-solving" className="bg-secondary py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-2xl font-bold leading-tight md:text-3xl">
              Problem Solving
            </h2>
            <Card className="mx-auto max-w-4xl border border-primary/15 bg-card/80">
              <CardContent className="card-content p-8">
                <p className="text-justify text-base leading-relaxed text-foreground">
                  {`I'm the go-to person when technical challenges rear their heads at Relso. Whether it's 
                  troubleshooting a stubborn bug or architecting an entirely new workflow, I thrive on 
                  diagnosing complex issues and creating efficient, sustainable solutions. My goal is always 
                  to minimize downtime, keep projects moving forward, and ensure every user has a seamless 
                  experience—no matter how big the challenge.`}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="theme-transition bg-background py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-16 animate-fade-up text-center text-2xl font-bold leading-tight md:text-3xl">
              Get in Touch
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Contact Form */}
              <div
                className="animate-fade-up space-y-6"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-xl font-semibold leading-tight">
                  Send a Message
                </h3>
                <ContactForm />
              </div>

              {/* Contact Info with enhanced styling */}
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold leading-tight">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-justify text-base leading-relaxed text-foreground">
                    I&apos;m currently based in the scenic town of Sanquelim,
                    Goa, and I&apos;ve embraced remote work as my lifestyle of
                    choice. I&apos;m always open to discussing new projects,
                    creative ideas, or opportunities — especially those that
                    align with my passion for flexibility and innovation.
                  </p>
                  <p className="text-justify text-base leading-relaxed text-foreground">
                    Want to learn how I can help build your next big thing? Drop
                    a message or reach out on my social channels—I&apos;ll do my
                    best to get back to you promptly!
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  <h4 className="text-xl font-medium">Find me on</h4>
                  <div className="mt-4 flex gap-6">
                    <a
                      href="mailto:shreyxs@gmail.com"
                      className="transition-transform hover:scale-110"
                      title="Email me"
                    >
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors hover:bg-primary/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com/in/shreyasx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                      title="Connect on LinkedIn"
                    >
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors hover:bg-primary/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://github.com/shreyasx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                      title="View my GitHub"
                    >
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors hover:bg-primary/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://x.com/shreyxs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                      title="Follow me on Twitter/X"
                    >
                      <div className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors hover:bg-primary/25">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="light:bg-[#f5f5f5] theme-transition border-t border-border py-8 dark:bg-[#121212]">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shreyas Jamkhandi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
