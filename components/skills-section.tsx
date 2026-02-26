'use client'

import { useState, useEffect, useRef } from 'react'

interface CounterStatProps {
  end: number
  label: string
  suffix?: string
}

function CounterStat({ end, label, suffix = '' }: CounterStatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let currentCount = 0
    const increment = end / 50
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

import { Layout, Server, Database, Wrench, Brain, Code2, Globe, Cpu } from 'lucide-react'

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <Layout className="w-6 h-6" />,
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS' ]
    },
    {
      category: 'Backend Architecture',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'Java', 'Python']
    },
    {
      category: 'Data Science & ML',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Machine Learning', 'Data Visualization', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Database Systems',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Normalization']
    },
    {
      category: 'Core Engineering',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Data Structures', 'Algorithms', 'OOP Design']
    },
    {
      category: 'Tools & DevOps',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'Linux', 'GitHub Actions']
    }
  ]

  return (
    <section id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
            EXPERTISE & <span className="text-primary">STACK</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive toolkit built on the intersection of Software Engineering and Data Science.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {skillCategories.map((category, idx) => (
            <div
              key={category.category}
              className="group p-8 rounded-[2rem] border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden active:scale-95"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity scale-[3] group-hover:scale-[4] duration-700 pointer-events-none translate-x-4 -translate-y-4">
                {category.icon}
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-black text-foreground tracking-tight">
                  {category.category}
                </h3>
              </div>

              <ul className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors py-1"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                    <span className="text-sm font-semibold tracking-tight">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Animated Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-border/40 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent">
          <CounterStat end={4} label="Core Projects" suffix="+" />
          <CounterStat end={60} label="Algorithmic Accuracy" suffix="%" />
          <CounterStat end={24} label="Hour Availability" suffix="/7" />
          <CounterStat end={90} label="Clean Code Metrics" suffix="%" />
        </div>
      </div>
    </section>
  )
}
