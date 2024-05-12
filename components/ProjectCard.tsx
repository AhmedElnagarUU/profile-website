import { myProject } from "@/constant/myProject";
import Image from "next/image";

 const ProjectCard = () => {
  return (
    <>
      {myProject.map((ele: { id: any; imgUrl: any }) => (
        <div key={ele.id} className="">
          <Image src={`${ele.imgUrl}`} alt={`${ele.imgUrl}`} width={200} height={200} />
        </div>
      ))}
    </>
  );
};


export default ProjectCard