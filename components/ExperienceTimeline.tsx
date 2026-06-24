import { Briefcase } from "lucide-react"

interface Experience {
  company: string
  role: string
  dates: string
  description: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-8 md:pl-20">
            {/* Timeline dot */}
            <div className="absolute left-[-8px] md:left-[23px] top-1 w-5 h-5 bg-sky-600 dark:bg-sky-400 rounded-full border-4 border-white dark:border-slate-900" />

            <div className="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-sky-50 dark:bg-sky-950/50 rounded-lg">
                  <Briefcase className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-1">{experience.role}</h3>
                  <p className="text-sky-600 dark:text-sky-400 font-medium mb-1">{experience.company}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{experience.dates}</p>
                </div>
              </div>

              <ul className="space-y-2 ml-0 md:ml-14">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-slate-600 dark:text-slate-200 text-pretty leading-relaxed flex gap-2">
                    <span className="text-sky-600 dark:text-sky-400 mt-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
