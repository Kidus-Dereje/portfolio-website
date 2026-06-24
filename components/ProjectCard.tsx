import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  imageUrl: string
  imageAlt: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
  imageUrl,
  imageAlt,
}: ProjectCardProps) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 text-pretty leading-relaxed text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
          >
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
          >
            <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
