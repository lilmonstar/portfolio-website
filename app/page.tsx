import Navbar from "@/components/navbar/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Hero from "@/pages/Hero";

export default function Home() {

  return (
    <div>
      <div>
        <Navbar/>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
