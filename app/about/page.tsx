import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About | Kidus D. Getachew",
  description: "Learn more about Kidus D. Getachew, a data scientist passionate about learning and technology.",
}

const skills = [
  "n8n",
  "Python",
  "SQL",
  "Power BI",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "Microsoft Excel",
  "Data Science",
  "Data Analytics",
  "Business Process Modelling",
  "Machine Learning",
  "Data Visualization",
  "AI Workflow Automation",
]

export default function AboutPage() {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/5 dark:bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-12 text-balance">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square rounded-full overflow-hidden border-2 border-border shadow-xl">
            <Image
              src="/images/profile_pic.png"
              alt="Kidus D. Getachew - Data Scientist and Analyst"
              fill
              className="object-cover scale-120"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-base text-foreground/90 leading-relaxed text-pretty">
              I am someone who genuinely enjoys learning something new every day, especially in fields that merge
              education with technology and data. My interest in a data-driven world naturally led me towards AI
              workflow automation, where efficiency and clarity matter. I've applied these skills in real projects such as, developing one automated workflow that manages social media posting for a trading business, and another that posts regularly on linkedin. I
              pride myself on efficiency and adaptability, committed to improving any system I'm a part of.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-105 transition-all cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
