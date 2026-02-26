import { Button } from '@/components/ui/button'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { projects as projectsData } from '@/lib/projects'

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10)
  const project = projectsData.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header with Back Button */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="flex gap-3">
            <Button size="sm" variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-80 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title & Overview */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.problem}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16 pb-16 border-b border-border">
          <h2 className="text-lg font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent/10 text-accent font-medium rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Problem */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.details.problem}
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.details.approach}
            </p>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Architecture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-mono bg-muted/30 p-6 rounded-lg border border-border">
              {project.details.architecture}
            </p>
          </section>

          {/* Challenges */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Challenges</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.details.challenges}
            </p>
          </section>

          {/* Results */}
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Results & Impact</h2>
            <p className="text-lg text-accent font-semibold leading-relaxed">
              {project.details.results}
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-border text-center">
          <p className="text-muted-foreground mb-6">
            Interested in what we can build together?
          </p>
          <Button size="lg" asChild>
            <a href="/#contact">
              Get in Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
