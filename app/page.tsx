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
    <main className="  lg:px-10  mx-auto">
      <figure className="bubble  w-32 lg:w-[520px] h-60 bg-indigo-600 top-16 left-5 absolute"/>
      <figure className="bubble  w-32 lg:w-[700px] h-60 bg-sky-600 bottom-16 right-5 absolute"/> 
      <HeroSection>
        <div className="flex justify-center lg:justify-start ">
          <Buttton>Hire Me</Buttton>
          <Buttton variants="outline">Dowenload CV</Buttton>
        </div>
      </HeroSection>
      <AboutSection/>
      <ServiceSection/>
      <figure className="bubble w-32 lg:w-[520px] lg:h-[520px] h-60 bg-indigo-600 top-16 left-5"/>
      <figure className="bubble w-32 lg:w-[520px] lg:h-[520px] h-60 bg-sky-600 bottom-16 right-5"/>
      <ProjectSection/>
      <EmailSection/>
      <Footer/>
    </main>
  );
}
