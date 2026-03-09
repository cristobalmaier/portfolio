import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Labs } from "@/components/labs"
import { Projects } from "@/components/projects"
import { LearningLog } from "@/components/learning-log"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Labs />
      <Projects />
      <LearningLog />
      <Contact />
      <Footer />
    </main>
  )
}
