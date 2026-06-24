import type { Metadata } from "next"
import ExperienceTimeline from "@/components/ExperienceTimeline"

export const metadata: Metadata = {
  title: "Experience | Kidus D. Getachew",
  description: "Professional experience in data science, analytics, and automation.",
}

const experiences = [
  {
    company: "TechFlow Solutions",
    role: "Data Analyst & Automation Specialist",
    dates: "Jan 2023 - Present",
    description: [
      "Developed automated workflows using n8n and Python, reducing manual data processing time by 60%",
      "Created comprehensive data analysis reports using SQL and Pandas, enabling data-driven decision making across 3 departments",
    ],
  },
  {
    company: "DataVision Analytics",
    role: "Junior Data Scientist",
    dates: "Jun 2021 - Dec 2022",
    description: [
      "Built predictive models using Scikit-Learn to forecast sales trends with 85% accuracy",
      "Collaborated with cross-functional teams to transform complex datasets into actionable business insights",
    ],
  },
  {
    company: "Innovative Systems Corp",
    role: "Data Analytics Intern",
    dates: "Jan 2021 - May 2021",
    description: [
      "Performed exploratory data analysis on customer datasets using Python and Excel",
      "Assisted in the development of interactive dashboards for real-time business monitoring",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-12 text-balance">
          Experience
        </h1>

        <ExperienceTimeline experiences={experiences} />
      </div>
    </div>
  )
}
