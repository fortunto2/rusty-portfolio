"use client"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Dots */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["hero", "projects", "experience", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <header
          id="hero"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="py-12 sm:py-16 lg:min-h-screen lg:flex lg:items-center opacity-0"
        >
          <div className="w-full space-y-6 sm:space-y-8">
            <div className="flex items-start justify-between gap-4 sm:gap-8 mb-6 sm:mb-8">
              {/* Avatar on left */}
              <div className="flex-shrink-0">
                <img
                  src="/images/design-mode/ComfyUI_15730_.jpeg"
                  alt="Rustam Salavatov"
                  className="w-20 h-20 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-primary"
                />
              </div>

              {/* LinkedIn + QR Code on right */}
              <div className="flex items-start gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/rustam-salavatov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 sm:gap-2 text-sm hover:text-primary transition-colors group"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary">
                    LinkedIn
                  </span>
                </a>
                <img src="/images/design-mode/image.png" alt="QR Code" className="w-16 h-16 sm:w-24 sm:h-24" />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wider uppercase">
                  AI Engineer / Multi-Agent Systems
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                  Rusty
                  <br />
                  <span className="text-xl sm:text-3xl lg:text-4xl text-muted-foreground font-normal">
                    [Rustam Salavatov]
                  </span>
                </h1>
              </div>

              <div className="max-w-2xl space-y-3 sm:space-y-4">
                <p className="text-base sm:text-xl text-muted-foreground leading-relaxed text-pretty">
                  Building <span className="text-primary font-semibold">AI Director systems</span> and{" "}
                  <span className="text-primary font-semibold">multi-agent platforms</span> that unlock creative
                  potential for startups and enterprises.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Projects Section */}
        <section id="projects" ref={(el) => (sectionsRef.current[1] = el)} className="py-10 sm:py-16">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold">Featured Projects</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl text-pretty">
                Pioneering AI solutions that transform creative workflows and business operations.
              </p>
            </div>

            {/* SuperStoryboard Hackathon Project */}
            <div className="group relative p-6 sm:p-12 rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-card hover:border-primary transition-all duration-500 shadow-lg shadow-primary/20">
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1.5 bg-primary text-black text-[10px] sm:text-xs font-bold rounded-full uppercase flex items-center gap-1">
                🏆 2nd Place
              </div>

              <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-0">
                {/* Video + Title Section */}
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Video Embed - Left side on desktop */}
                  <div className="w-full lg:w-2/5 flex-shrink-0">
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                      <iframe
                        src="https://www.youtube.com/embed/ZGePJxuK3ic"
                        title="SuperStoryboard Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />
                    </div>
                  </div>

                  {/* Text Content - Right side on desktop */}
                  <div className="flex-1 space-y-3 sm:space-y-4">
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-2xl sm:text-4xl font-bold group-hover:text-primary transition-colors duration-300">
                        SuperStoryboard
                      </h3>
                      <p className="text-base sm:text-xl text-primary font-semibold">
                        AI-Powered Storyboard Generation with Real-Time Figma Collaboration
                      </p>
                      <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
                        Built entirely on Supabase - an AI-powered platform based on Figma mock-up that generates
                        storyboards from text descriptions with instant Figma plugin sync. Easy to clone and customize
                        for your own storyboard generator needs. Community template coming soon. Combines Google Gemini
                        2.5 for image generation, Veo 3.1 for video generation, and Phoenix Channels for real-time
                        collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground uppercase">
                    Technical Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      "Figma Plugin (37kb) with WebSocket sync",
                      "Supabase as single source of truth",
                      "Google Gemini 2.5 Flash for images",
                      "Google Veo 3.1 for video generation",
                      "PGMQ async job processing",
                      "Real-time Phoenix Channels protocol",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Supabase",
                    "Figma Plugin",
                    "Google Gemini",
                    "Veo 3.1",
                    "PGMQ",
                    "Phoenix Channels",
                    "WebSocket",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs border border-primary/30 rounded-full bg-primary/10 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
                  <a
                    href="https://hackathon.supabase.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-bold rounded-lg shadow-lg hover:shadow-xl text-xs sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                    <span>Supabase Hackathon</span>
                  </a>

                  <a
                    href="https://www.figma.com/community/file/1569684518251047797/ai-storybord-with-google-nana-banana-and-veo3-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-purple-600 text-white hover:bg-purple-700 transition-all duration-300 font-bold rounded-lg shadow-lg hover:shadow-xl text-xs sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                    </svg>
                    <span>Figma Template</span>
                  </a>

                  <a
                    href="https://figma-chat.superduperai.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-primary text-black hover:bg-primary/90 transition-all duration-300 font-bold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 text-xs sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Live Demo</span>
                  </a>

                  <a
                    href="https://github.com/fortunto2/superstoryboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 border-2 border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 font-semibold rounded-lg text-xs sm:text-base"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SuperDuperAI - Featured */}
            <div className="group relative p-8 sm:p-12 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-500">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full">
                FLAGSHIP PROJECT
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-bold group-hover:text-primary transition-colors duration-300">
                    SuperDuperAI
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    Hire Your AI Director: Unlock Your Hidden Talent with Multi-Agents
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    A creative platform for building AI-powered video content from concept to completion. Features
                    multi-agent orchestration across pre-production, production, and post-production workflows with
                    character consistency, voice synthesis, and automated editing.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-sm font-mono text-muted-foreground uppercase">Key Features</div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      "Multi-Agent Orchestration",
                      "Character-Focused Creation",
                      "AI Video Generation",
                      "Voice Synthesis (ElevenLabs)",
                      "Script to Timeline Automation",
                      "ComfyUI/Stable Diffusion Integration",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["LangChain", "OpenAI", "Next.js", "Prefect.io", "Azure", "FFMPEG", "Remotion.js"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-border rounded-full bg-muted/30 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://superduperai.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
                  >
                    <span>Visit superduperai.co</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  <a
                    href="https://blog.superduperai.co/api/file/uploads/2025-11-08T01-31-48-999Z-0a219428-SuperDuper_Pitch_-websummit_-mini.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black hover:bg-primary/90 transition-all duration-300 font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>View Pitch Deck</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-xl border border-primary/30 bg-card hover:border-primary/50 transition-all duration-500">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-primary uppercase">AI Solutions & Consulting</div>
                    <h3 className="text-2xl font-bold">From 0 to 1: Fast MVP Development & AI Integration</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Strategic consulting and hands-on development for businesses implementing AI. Specializing in
                      multi-agent systems, RAG solutions, business automation, and rapid MVP delivery.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-2">
                        <div className="font-semibold text-sm">Business AI Agents</div>
                        <p className="text-sm text-muted-foreground">
                          Custom agents for workflow automation, customer service, and decision support
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-2">
                        <div className="font-semibold text-sm">RAG Systems</div>
                        <p className="text-sm text-muted-foreground">
                          Intelligent document processing and knowledge base solutions
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-2">
                        <div className="font-semibold text-sm">Fast MVP Development</div>
                        <p className="text-sm text-muted-foreground">
                          Rapid prototyping and 0 to 1 product development with AI integration
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-muted/30">
                      <div className="space-y-2">
                        <div className="font-semibold text-sm">Team AI Training</div>
                        <p className="text-sm text-muted-foreground">
                          Training development teams on AI implementation and best practices
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["LangChain", "OpenAI", "RAG", "FastAPI", "Multi-Agent Systems", "Vector DBs"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs border border-border rounded-full bg-muted/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://calendar.app.google/n4GorZYpiAucGjAE6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black hover:bg-primary/90 transition-all duration-300 font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/40"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Book Consultation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={(el) => (sectionsRef.current[2] = el)} className="py-16 sm:py-20 opacity-0">
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                Over a decade of building AI systems and leading technical teams.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  period: "April 2024 - Present",
                  role: "CTO / AI Engineer",
                  company: "SuperDuperAI",
                  link: "https://superduperai.co",
                  description:
                    "Leading development of generative AI video editor platform. Building multi-agent systems for creative content production with LangChain, OpenAI, and advanced video processing tools.",
                  highlights: [
                    "Architected multi-agent orchestration system",
                    "Integrated Stable Diffusion/Flux for image generation",
                    "Built real-time preview system with Remotion.js",
                  ],
                },
                {
                  period: "April 2021 - Present",
                  role: "CTO",
                  company: "Zenpulsar",
                  link: "https://zenpulsar.com",
                  description:
                    "Designing AI financial agents and ETL architectures. Leading ML engineering, model serving, and backend development with focus on time-series analysis and vector databases.",
                  highlights: [
                    "Implemented time-series forecasting models",
                    "Built ETL pipelines with Airflow/Prefect",
                    "Integrated vector database (Weaviate) for semantic search",
                  ],
                },
                {
                  period: "September 2019 - May 2020",
                  role: "AI Engineer",
                  company: "Insense - Influencer Market",
                  description: "Prototyped video quality prediction systems using computer vision and ML models.",
                  highlights: ["Developed CV-based quality assessment", "Improved content moderation pipeline"],
                },
                {
                  period: "January 2015 - August 2019",
                  role: "CTO",
                  company: "LIFE2FILM",
                  link: "https://life2film.com",
                  description:
                    "Built B2C platform for automatic emotional video creation. Scaled to 1M+ users. Led development of ML-powered video analysis and generation using neural networks and computer vision.",
                  highlights: [
                    "Scaled platform to 1M+ users",
                    "Developed ML video analysis algorithms",
                    "Built automated editing pipeline",
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group p-5 sm:p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-3">
                      <div className="text-sm font-mono text-muted-foreground">{job.period}</div>
                    </div>

                    <div className="lg:col-span-9 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          {job.link ? (
                            <a
                              href={job.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-base text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                            >
                              {job.company}
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          ) : (
                            <div className="text-base text-muted-foreground">{job.company}</div>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>

                      <ul className="space-y-1.5">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-bold">Core Competencies</h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    category: "Agentic Workflows",
                    skills: ["LangChain", "OpenAI SDK", "RAG", "Multi-Agent Systems"],
                  },
                  {
                    category: "Generative Media",
                    skills: ["Flux", "ComfyUI", "LoRA Fine-tuning", "FFMPEG", "OpenCV"],
                  },
                  {
                    category: "LLM Operations",
                    skills: ["vLLM", "Azure OpenAI", "Prompt Engineering", "Vector DBs"],
                  },
                  {
                    category: "Backend & APIs",
                    skills: ["Python", "FastAPI", "Next.js", "Node.js"],
                  },
                  {
                    category: "Data & ETL",
                    skills: ["Airflow", "Prefect", "Postgres", "MongoDB", "ClickHouse", "Weaviate"],
                  },
                  {
                    category: "DevOps & Cloud",
                    skills: ["Docker", "K8s", "AWS", "GCP", "Azure", "GitLab CI"],
                  },
                ].map((group, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border bg-card">
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-primary uppercase">{group.category}</div>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <span key={skill} className="text-xs text-muted-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={(el) => (sectionsRef.current[3] = el)} className="py-16 sm:py-20 opacity-0">
          <div className="space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bio */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <span className="text-primary font-semibold">Digital Visionary</span> recognizing the
                      transformative potential of AI and technology in our rapidly evolving digital age.
                    </p>
                    <p>
                      <span className="text-primary font-semibold">Technical All-Rounder</span> with deep expertise in
                      Python, PyTorch, AWS, and Google Cloud, seamlessly navigating the intricate realms of the tech
                      landscape with a profound focus on AI.
                    </p>
                    <p>
                      <span className="text-primary font-semibold">Purpose Over Profit:</span> Driven by making a
                      tangible difference. While the allure of profit is undeniable, I'm drawn to projects with the
                      power to uplift, inspire, and bring about change.
                    </p>
                    <p>
                      I'm blessed with a loving family - my wonderful wife and our three remarkable children are my
                      biggest sources of inspiration.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="space-y-3">
                    <div className="text-sm font-mono text-primary uppercase">Interests & Values</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground">
                          Activism for environmental preservation and social causes
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground">Electronic music production and freestyling</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <span className="text-muted-foreground">Trained sail yacht captain</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Videos */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <h3 className="text-xl font-bold">YouTube Content</h3>
                  </div>

                  {/* Video 1 - Cursor */}
                  <a
                    href="https://www.youtube.com/watch?v=i2mFvjE3zJY&feature=youtu.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          Building Startups with Cursor AI Editor
                        </h4>
                        <svg
                          className="w-5 h-5 text-primary group-hover:scale-110 transition-transform flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        First episode on working with Cursor editor to create your startup. Covers SuperDuperAI and
                        competitor analysis, how it can replace developers, creating PRD specifications, MCP and Rules,
                        and whether it can accelerate your work 10x.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <span>Watch on YouTube</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* Video 2 - Flux */}
                  <a
                    href="https://www.youtube.com/watch?v=5g8VWG3TVjM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          Working with Flux Model for Image Generation
                        </h4>
                        <svg
                          className="w-5 h-5 text-primary group-hover:scale-110 transition-transform flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Deep dive into working with the Flux model for advanced image generation, including practical
                        techniques and workflows for creating high-quality AI-generated images.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-primary">
                        <span>Watch on YouTube</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>

                  {/* YouTube Channel Link */}
                  <a
                    href="https://www.youtube.com/@SuperDuperStartup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>View YouTube Channel</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" ref={(el) => (sectionsRef.current[4] = el)} className="py-16 sm:py-20 opacity-0">
          <div className="space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold">Let's Build Something</h2>
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                Available for consulting, project collaborations, and building AI agent systems for startups and
                enterprises.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <a
                    href="mailto:rust.starman@gmail.com"
                    className="group flex items-center gap-3 text-lg hover:text-primary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>rust.starman@gmail.com</span>
                  </a>

                  <a
                    href="mailto:info@superduperai.co"
                    className="group flex items-center gap-3 text-lg hover:text-primary transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>info@superduperai.co</span>
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-mono text-muted-foreground uppercase">Phone</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="text-xs font-mono">TR</span>
                      <a href="tel:+905073408692" className="hover:text-primary transition-colors">
                        +90 507 340 8692
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="text-xs font-mono">PT</span>
                      <a href="tel:+351910416103" className="hover:text-primary transition-colors">
                        +351 910 41 6103
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span className="text-xs font-mono">US</span>
                      <a href="tel:+18186190966" className="hover:text-primary transition-colors">
                        +1 818 619 0966
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-sm font-mono text-muted-foreground uppercase">Connect</div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "LinkedIn",
                      handle: "in/rustam-salavatov",
                      url: "https://www.linkedin.com/in/rustam-salavatov/",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                    },
                    {
                      name: "GitHub",
                      handle: "fortunto2",
                      url: "https://github.com/fortunto2",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Telegram",
                      handle: "@life2film",
                      url: "https://t.me/life2film",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      ),
                    },
                    {
                      name: "Instagram",
                      handle: "life2film",
                      url: "https://instagram.com/life2film",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384 1.079-.666 1.636-1.335 2.126-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38-.896-.42-.164-1.051-.361-2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                      ),
                    },
                    {
                      name: "YouTube",
                      handle: "@SuperDuperStartup",
                      url: "https://www.youtube.com/@SuperDuperStartup",
                      icon: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      ),
                    },
                    {
                      name: "SuperDuperAI",
                      handle: "superduperai.co",
                      url: "https://superduperai.co",
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 bg-card flex items-center gap-3"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {social.icon}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="text-sm font-semibold group-hover:text-primary transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                  <div className="space-y-3">
                    <div className="text-xs font-mono text-primary uppercase">Specializations</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Multi-Agent AI Systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Generative AI for Video/Images</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>RAG & Knowledge Systems</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Business Automation Agents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">© 2025 Rustam Salavatov. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js & v0.dev</div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/rustam-salavatov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
