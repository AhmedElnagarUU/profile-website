import Image from "next/image";
import React from "react";

const HeroSection = ({ children }: any) => {
  return (

    <header className="">
      <div className="lg:flex text-center mt-32 lg:mt-0 lg:text-start lg:h-screen justify-center lg:justify-around  g-red-500 items-center ">
        <div className="b-slate-900 justify-center lg:w-2/3 lg:pl-20 ">
          <h4 className="text-sm text-white mb-5">Hi,Iam</h4>
          <h3 className="font-extrabold  text-yellow-400">Ahmed Elnagar</h3>
          <h2 className="  text-7xl font-extrabold bg-lue-400 ">UI & UX</h2>
          <h2 className="text-7xl lg:pr-16 g-red-500 lg:text-center font-extrabold">
            Design
          </h2>
          <p className="leading-7 bg-blu-500 sm:bg-re-600 px-10 lg:p-0 md:bg-cya-950 lg:bg-gree-600 text-center tracking-wider  text-sm  lg:text-left  mt-7">
            Welcome to our graphic design profile website. We specialize in
            creating stunning visual experiences that captivate and inspire.
          </p>
          {children}
        </div>
        <div className=" b-red-500 pt-20 lg:pt-0 lg:w-1/2 b-cyan-500 justify-items-center">
          <Image
            src={`/heroimage.jpg`}
            width={350}
            height={350}
            alt="Hero Image"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
          {/* <div className="relative"></div> */}
    </header>
  );
};

export default HeroSection;
