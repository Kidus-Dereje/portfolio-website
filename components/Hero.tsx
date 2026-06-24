import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import Button from "./ui/Button"

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-sky-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 dark:bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 dark:from-slate-50 dark:via-sky-300 dark:to-slate-50 mb-6 text-balance tracking-tight">
          Kidus D. Getachew
        </h1>

        <p className="text-xl sm:text-2xl text-foreground mb-3 text-balance font-semibold">Data Scientist & Analyst</p>

        <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
          Making Complex Data Simple, Insightful, and Decision-Ready
        </p>

        <p className="text-xl sm:text-2xl text-foreground mb-3 text-balance font-semibold">
          AI Workflow Automation Consultant
        </p>

        <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          Streamlining Business Operations Using No-Code, Low-Code, and Python-Based Automation
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/projects">
            <Button className="group shadow-lg shadow-sky-500/25 dark:shadow-sky-400/20 hover:shadow-xl hover:shadow-sky-500/30 dark:hover:shadow-sky-400/25 transition-all">
              View My Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          <a href="/resume.pdf" download>
            <Button variant="outline" className="border-2 hover:border-primary transition-all bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
