import { ModeToggle } from "@/components/ui/themeToggle";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Counter from "./components/Counter";
import Progresswork from "./components/workProgress";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Projects from "./components/Project";
import WorkTogether from "./components/WorkTogether";
import Contactform from "./components/Contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection /> 
    <Counter />
    <Progresswork />
    <Resume />
    <Services /> 
    <Projects />
    <WorkTogether />
    <Contactform />
    <Footer />
    </>
  );
}
