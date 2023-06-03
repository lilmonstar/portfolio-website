'use client'
import Menus from "@/components/navbar/Menus";
import Navbar from "@/components/navbar/Navbar";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Hero from "@/pages/Hero";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return (
    <div>
      {
        nav ? <Menus onClick={handleNav} /> :
      <div>
        <Navbar onClick={handleNav}/>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
      }
    </div>
  )
}
