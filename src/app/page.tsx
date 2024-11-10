import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import MySkills from './components/MySkills'
import ProjectsSection from "./components/ProjectsSection";
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-gradient-to-r from-black via-[#26042e] to-black ">
    
      <div className=" mt-20">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <MySkills />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}

