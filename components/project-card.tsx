import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/utils'

interface ProjectDetails {
  problem: string
  approach: string
  architecture: string
  challenges: string
  results: string
}

interface Project {
  id: number
  title: string
  problem: string
  techStack: string[]
  liveDemo: string
  github: string
  image: string
  details: ProjectDetails
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/project/${project.id}`)
  }

  return (
    <div
      className="group cursor-pointer h-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 h-full flex flex-col shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted aspect-video">
          <Image
            src={getAssetPath(project.image)}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Tag Overlay */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-background/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10 shadow-xl">
              Project #{project.id}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 flex flex-col flex-grow bg-gradient-to-b from-transparent to-primary/[0.02]">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>
            <div className="w-8 h-[2px] bg-primary group-hover:w-16 transition-all duration-500" />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed font-light">
            {project.problem}
          </p>

          {/* Tech Ecosystem */}
          <div className="mb-8 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary hover:bg-primary/10 hover:text-primary transition-colors text-[10px] font-bold rounded-lg border border-border/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-border/40">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                window.open(project.github, '_blank')
              }}
              className="flex-1 rounded-xl h-10 font-bold text-xs"
            >
              <Github className="w-4 h-4 mr-2" />
              Source
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleCardClick()
              }}
              className="px-4 rounded-xl h-10 bg-foreground hover:bg-foreground/90 transition-all font-bold"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
