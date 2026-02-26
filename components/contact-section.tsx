import { Button } from '@/components/ui/button'
import { Mail, ArrowRight, Github, Linkedin, MessageSquare } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
            Let's Connect
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter">
            READY FOR THE <br />
            <span className="text-primary">NEXT CHALLENGE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed pt-4">
            I'm currently seeking high-impact roles in Software Engineering and Data Science.
            If you're looking for a developer who thinks in systems and executes with precision, let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Email Card */}
          <div className="lg:col-span-2 group p-10 rounded-[3rem] border border-border/50 bg-background/50 backdrop-blur-2xl hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity scale-[5] pointer-events-none">
              <Mail />
            </div>

            <div>
              <div className="p-4 w-fit rounded-2xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4 tracking-tight">Email varshith@example.com</h3>
              <p className="text-muted-foreground font-medium mb-12 max-w-md">
                I'm responsive and typically get back to you within 24 hours. Perfect for formal inquiries or project proposals.
              </p>
            </div>

            <Button asChild className="w-full h-14 rounded-2xl bg-foreground text-background hover:bg-foreground/90 font-bold group">
              <a href="mailto:varshith@example.com">
                Send a Message <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Social Links Stack */}
          <div className="flex flex-col gap-6">
            <a
              href="https://github.com/GVR2007"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[2.5rem] border border-border/50 bg-background/50 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 flex flex-col gap-4 shadow-sm hover:shadow-xl active:scale-95"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">GitHub</p>
                <p className="text-lg font-bold text-foreground">GVR2007</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/varshith-garrepalli-b3ab76320"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[2.5rem] border border-border/50 bg-background/50 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 flex flex-col gap-4 shadow-sm hover:shadow-xl active:scale-95"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-lg font-bold text-foreground">varshith-garrepalli</p>
              </div>
            </a>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="text-center pt-20 border-t border-border/40">
          <p className="text-sm text-muted-foreground italic font-light">
            "Software is the bridge between human imagination and real-world impact."
          </p>
        </div>
      </div>
    </section>
  )
}
