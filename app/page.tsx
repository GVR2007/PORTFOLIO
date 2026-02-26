import { HeroSection } from '@/components/hero-section'
import { ProjectsScrollytelling } from '@/components/projects-scrollytelling'
import { SkillsSection } from '@/components/skills-section'
import { ContactSection } from '@/components/contact-section'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ProjectsScrollytelling />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
