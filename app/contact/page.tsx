import type { Metadata } from "next"
import { Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Kidus D. Getachew",
  description: "Get in touch with Kidus D. Getachew for data science opportunities and collaborations.",
}

export default function ContactPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4 text-balance">
          Get In Touch
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-200 mb-12 text-pretty">
          I'm always open to discussing new opportunities, interesting data problems, or potential collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50 mb-6">Direct Contact</h2>
            <div className="space-y-4">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-slate-600 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>kidus.dr.getachew@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
