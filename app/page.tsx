import AboutSection from "@/components/AboutSection";
import { Buttton } from "@/components/Buttton";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="  lg:px-10 container m-auto">
      <figure className="bubble  w-96 lg:w-[520px] h-60 bg-indigo-600 top-16 left-5 absolute"/>
      <figure className="bubble  w-96 lg:w-[700px] h-60 bg-sky-600 bottom-16 right-5 absolute"/>
      <HeroSection>
        <div className="flex justify-center lg:justify-start ">
          <Buttton>Hire Me</Buttton>
          <a href="/cv.pdf" download={`/cv.pdf`}><Buttton variants="outline">Dowenload CV</Buttton></a>
        </div>
      </HeroSection>
      <AboutSection/>
      <ServiceSection/>
      <figure className="bubble w-60 lg:w-[520px] lg:h-[520px] h-60 bg-indigo-600 top-16 left-5"/>
      <figure className="bubble w-60 lg:w-[520px] lg:h-[520px] h-60 bg-sky-600 bottom-16 right-5"/>
      <ProjectSection/>
      <EmailSection/>
      <Footer/>
    </main>
  );
}
