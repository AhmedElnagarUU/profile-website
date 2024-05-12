"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ButtonTag from "./ButtonTag";
import { myProject } from "@/constant/myProject";
import Image from "next/image";

export const ProjectSection = () => {
  const [tag, setTage] = useState("all");

  const handeTagChange = (newTag: any) => {
    setTage(newTag);
  };

  const filterProject = myProject.filter((project):any => 
    project.tags.includes(tag)
  );
  return (
    <div id="Projects" className="mt-32  overflow-x-hidden text-center">
      <h2 className=" font-bold text-3xl">My Project</h2>
      <p className=" px-20 mt-5">
        Transform your project into a masterpiece. Lets make your vision a
        reality.
      </p>
      <div className="overflow-x-h text-nowra text-sm md:font-medium mt-5 px-5 text-center text-slate-900 bg-white rounded-xl w-fit gap-x-1 md:gap-x-6 mx-auto flex">
        <ButtonTag
          name={"all"}
          isSlected={tag === "all"}
          onClick={handeTagChange}
        />
        <ButtonTag
          name={"Web Design"}
          isSlected={tag === "Web Design"}
          onClick={handeTagChange}
        />
        <ButtonTag
          name={"Graphic Design"}
          isSlected={tag === "Graphic Design"}
          onClick={handeTagChange}
        />
        <ButtonTag
          name={`UI UX`}
          isSlected={tag === "UI UX"}
          onClick={handeTagChange}
        />
      </div>
      <div className="grid gap-5 w-2/3 mx-auto justify-items-center items-center grid-cols-1 md:grid-cols-2 mt-20 lg:grid-cols-3">
        {filterProject.map((ele) => (
          <div className="transition-all" key={ele.id}>
            <Image
              src={`${ele.imgUrl}`}
              alt={`${ele.imgUrl}`}
              width={200}
              height={200}
              className="transition-all rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
