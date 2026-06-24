import type { Metadata } from "next"
import ProjectCard from "@/components/ProjectCard"

export const metadata: Metadata = {
  title: "Projects | Kidus D. Getachew",
  description: "Explore my portfolio of data science, analytics, and automation projects.",
}

const projects = [
  {
    title: "Automated Telegram Posting Workflow",
    description:
      "The Telegram Social Media Posting Automation is an intelligent workflow that extracts product information from user-uploaded images and creates professional social media posts. This n8n workflow uses computer vision, AI analysis, and automated content generation to transform product photos into detailed social media content with technical specifications and professionally sourced images.",
    tech: ["n8n", "Python", "Javascript", "Telegram API", "Amazon Rekognition API", "Groq API", "Bing Image Search API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Kidus-Dereje/telegram_marketing_post_automation.git",
    imageUrl: "/images/telegram_automation_img.png",
    imageAlt: "Dashboard interface for an automation workflow",
  },
  {
    title: "Telco Churn Prediction Model",
    description:
      "Built a machine learning model using Scikit-Learn and Pandas to predict customer churn, enabling proactive retention strategies.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Data Visualization", "Logistic Regression", "Random Forest", "Machine Learning"],
    liveUrl: "https://telco-churn-prediction-ml.streamlit.app/",
    githubUrl: "https://github.com/Kidus-Dereje/telco_churn_prediction_using_ml.git",
    imageUrl: "/images/churn_app_img.png",
    imageAlt: "Data visualization dashboard showing churn analytics application",
  },
  {
    title: "Automated Linkedin Posting Workflow",
    description:
      "The LinkedIn Daily Post Manager is an intelligent workflow automation that helps you maintain a consistent LinkedIn presence by curating, filtering, and creating any content of preference from news articles. This n8n workflow automatically finds relevant news based on your interests, lets you select the best article, generates LinkedIn-optimized posts, and publishes them—all with minimal manual intervention.",
    tech: ["Javascript", "Python", "Google Sheets API", "News Search API", "n8n", "Linkedin API", "Groq API", "Gmail API"],
    liveUrl: "#",
    githubUrl: "https://github.com/Kidus-Dereje/linkedin_daily_post_automation.git",
    imageUrl: "images/linkedin_automation_img.png",
    imageAlt: "Dashboard interface for an automation workflow",
  },
  {
    title: "Marketing Performance A/B Data Analysis",
    description:
      "This is a data analysis project done on a dataset of a year round monthly campaign runs of multiple channels (facebook and adwords) for a trading business. The goal of the project is to identify the most effective channels and strategies for marketing, and to provide actionable insights to improve marketing performance.",
    tech: ["Python","Pandas","NumPy","Microsoft Excel","Data Analysis","Data Visualization", "Data Modelling", "Statistical Analysis", "Power BI", "SQL"],
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiODE4OTliMDUtN2VmYi00ZGQ2LTgxMjYtYzc2NTRmZDU0ZDA0IiwidCI6ImZjZTU2MjU4LTlmZWMtNGQxYi05YjI5LTk3ZmYwYzI0Mjk1ZCJ9",
    githubUrl: "https://github.com/Kidus-Dereje/marketing_performance_data_analysis.git",
    imageUrl: "images/dashboard_img.png",
    imageAlt: "Dashboard interface for marketing performance analysis",
  },
]

export default function ProjectsPage() {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/5 dark:bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 text-balance">Projects</h1>
        <p className="text-lg text-muted-foreground mb-12 text-pretty">
          A selection of my recent work in data science, analytics, and automation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
