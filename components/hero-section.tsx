'use client'

import { Button } from '@/components/ui/button'
import { Github, Linkedin, Download } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-primary/10 blur-[130px] rounded-full animate-pulse opacity-20" />
      <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-primary/15 blur-[110px] rounded-full animate-pulse delay-700 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12 order-2 lg:order-1">
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold tracking-[0.1em] uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Top-Tier Software Engineer
            </div>

            {/* High-Impact Name */}
            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-black text-foreground mb-4 tracking-tighter leading-[0.85]">
                GARREPALLI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/60 to-foreground/20">
                  VARSHITH
                </span>
              </h1>
              <div className="absolute -top-4 -left-4 text-primary/10 text-9xl font-black select-none -z-10 opacity-20">DEV</div>
            </div>

            {/* Strategic Value Proposition */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-muted-foreground font-semibold border-l-4 border-primary pl-8 py-2 max-w-2xl leading-tight">
                Architecting high-performance <span className="text-foreground">Full-Stack</span> systems & <span className="text-foreground">Data Science</span> solutions.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
                I bridge the gap between complex mathematics and scalable software,
                specializing in systems that demand both precision and performance.
              </p>
            </div>

            {/* Premium CTA Logic */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              <Button asChild size="lg" className="h-16 px-10 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-2xl shadow-foreground/20 transition-all hover:scale-105 active:scale-95 text-lg font-black tracking-tight">
                <a href="/resume.pdf" download>
                  <Download className="w-6 h-6 mr-3" />
                  View Resume
                </a>
              </Button>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild className="w-14 h-14 rounded-full border-border/40 hover:bg-muted hover:border-foreground/30 transition-all hover:scale-110 shadow-sm">
                  <a href="https://github.com/GVR2007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-6 h-6" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="w-14 h-14 rounded-full border-border/40 hover:bg-muted hover:border-foreground/30 transition-all hover:scale-110 shadow-sm">
                  <a href="https://www.linkedin.com/in/varshith-garrepalli-b3ab76320" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Profile Composition */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center group">
            <div className="relative w-full aspect-[4/5] max-w-[500px]">
              {/* Premium Glow Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-primary/10 blur-[140px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Geometric Frame Decorative */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-700" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl -z-10 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />

              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/10">
                <Image
                  src="/profile.jpg"
                  alt="Garrepalli Varshith"
                  fill
                  priority
                  className="object-cover transition-all duration-1000 group-hover:scale-110 filter brightness-[1.02] contrast-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.indexOf('avatar') === -1) {
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop';
                    }
                  }}
                  style={{
                    maskImage: 'linear-gradient(to left, black 92%, transparent 100%), linear-gradient(to top, black 92%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to left, black 92%, transparent 100%), linear-gradient(to top, black 92%, transparent 100%)',
                  }}
                />

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Interactive Performance Metric */}
              <div className="absolute -bottom-8 -right-8 p-8 rounded-3xl bg-background/90 backdrop-blur-2xl border border-white/10 shadow-3xl hidden xl:block animate-in fade-in slide-in-from-bottom-10 duration-1000 group-hover:translate-y-[-10px] transition-transform">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">Expert Performance</div>
                </div>
                <div className="text-4xl font-black text-foreground tabular-nums tracking-tighter">80.1%</div>
                <div className="text-[10px] font-bold text-primary/80">Code Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Discovery */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-all cursor-pointer group">
        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground group-hover:text-primary transition-colors">Discover</span>
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-primary to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </section>
  )
}
