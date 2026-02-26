'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/projects'
import Image from 'next/image'

function ProjectCard({ project, isActive, index }: { project: typeof projects[0]; isActive: boolean; index: number }) {
  return (
    <div className={`transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-10'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Showcase */}
        <div
          className={`relative group transform transition-all duration-1000 ${isActive ? 'translate-x-0 scale-100' : index % 2 === 0 ? '-translate-x-20 scale-90' : 'translate-x-20 scale-90'
            }`}
        >
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80" />

            {/* Project Number Floating */}
            <div className="absolute top-8 left-8 p-4 bg-background/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <span className="text-4xl font-black text-primary/80 tracking-tighter">0{index + 1}</span>
            </div>
          </div>

          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full -z-10 group-hover:scale-150 transition-transform duration-1000" />
        </div>

        {/* Narrative Content */}
        <div
          className={`space-y-10 transform transition-all duration-1000 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
        >
          <div className="space-y-6">
            <h3 className="text-5xl lg:text-7xl font-black text-foreground tracking-tighter leading-none">
              {project.title.split('—')[0]}
            </h3>

            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              {project.problem}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">The Mission</h4>
              <p className="text-sm text-foreground font-semibold leading-relaxed">
                {project.details.approach}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">The Impact</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.details.results}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-secondary border border-border/50 text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Strategic Actions */}
          <div className="flex items-center gap-6 pt-8">
            <Button asChild className="h-14 px-8 rounded-2xl bg-foreground text-background font-bold text-base hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-foreground/10">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Explore Live <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectsScrollytelling() {
  const [activeProject, setActiveProject] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect
            // Project is active when it's in the upper portion of the viewport
            if (rect.top < window.innerHeight * 0.4) {
              const index = projects.findIndex(
                (p) => p.id === parseInt(entry.target.getAttribute('data-project-id') || '0')
              )
              if (index !== -1) {
                setActiveProject(index)
              }
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -40% 0px' }
    )

    const projectElements = containerRef.current?.querySelectorAll('[data-project-id]')
    projectElements?.forEach((el) => observer.observe(el))

    return () => {
      projectElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Scroll through selected work that demonstrates problem-solving, technical depth, and real-world impact.
          </p>
        </div>

        {/* Projects Container */}
        <div ref={containerRef} className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className="scroll-mt-20"
            >
              <ProjectCard project={project} isActive={activeProject === index} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="mt-32 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in learning more about specific projects?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
