import Image from "next/image";
import React from "react";
import ProgressPar from "./ProgressPar";

function AboutSection() {
  return (
    <div
      id="About"
      className="  mt-32 relative lg:h-scree g-yellow-800 lg:flex  items-cener"
    >
     
    
      <div className="lg:pl-10 lg:w-1/2 g-blue-600">
        <Image
          src={`/aboutme.jpg`}
          width={380}
          height={380}
          alt="Hero Image"
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="mx-auto pt-16 lg:pt-0 g-red-300 w-1/2">
        <h3 className="text-center lg:text-left font-semibold text-4xl">About Me</h3>
        <p className="leading-5  text-center lg:text-left pt-5 lg:pr-16 text-sm tracking-wider">
          Crafting seamless digital experiences is my passion. With a keen eye
          for detail and a knack for intuitive design, I specialize in creating
          user-centric UI/UX solutions that captivate and delight.{" "}
        </p>
        <ProgressPar skill={`UX`} statu={'w-[95%]'} showStatu={`95%`}/>
        <ProgressPar skill={`Website Design`} statu={'w-[86%]'} showStatu={`86%`}/>
        <ProgressPar skill={`App Design`} statu={'w-[90%]'} showStatu={`90%`}/>
        <ProgressPar skill={`Graephic Design`} statu={'w-[93%]'} showStatu={`93%`}/>
      </div>
    </div>
  );
}

export default AboutSection;
