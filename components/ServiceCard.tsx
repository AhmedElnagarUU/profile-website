import Image from "next/image";
import React from "react";
import { serviceCard } from "@/constant/serviceCard";
const ServiceCard = () => {
  return (
    <div className="grid gap-10 items-center grid-cols-1 justify-items-center px-20 mt-20  md:grid-cols-2 xl:grid-cols-3">
      {serviceCard.map((item) => (
        <div key={item.id} className=" rounded-xl text-center items-center w-60 h-60 bg-slate-800 border-2 hover:border-cyan-500 border-transparent hover:bg-slate-700/50 pt-7 px-5">
          <Image className="mx-auto" src={`${item.Url}`} width={50} height={50} alt={`${item.title}`} />
          <h4 className="mt-3">{item.title}</h4>
          <p className="px-1 mt-3">{item.content}</p>
        </div>
      ))}
    
    </div>
  );
};

export default ServiceCard;
