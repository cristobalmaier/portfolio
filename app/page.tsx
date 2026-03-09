import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Labs } from "@/components/labs"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-base">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Labs />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
