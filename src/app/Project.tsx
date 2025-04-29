import React from "react";
import { Tech } from "./Tech";
import { Features } from "./Features";
import { GitHub } from "react-feather";

export const Project = ({
  name,
  description,
  imgSrc,
  gitURL,
  tech,
  features,
}: {
  name: string;
  description: string;
  imgSrc: string;
  gitURL: string;
  tech: string[];
  features: string[];
}) => {
  return (
    <div className="grid relative grid-flow-col grid-cols-3 gap-2 w-full text-lg rounded-sm h-[33vh] border-2 border-black place-items-center p-4">
      <div className="w-full h-11/12">
        <h2 className="font-extrabold text-5xl">{name}</h2>
        <Tech tech={tech} />
        <p className="font-medium mt-2">{description}</p>
      </div>

      <Features features={features} />
      <div className="border-black border-2 place-self-center shadow-md w-11/12 h-11/12 overflow-hidden">
        <img className="w-full h-full" src={imgSrc} />
      </div>

      {/*buttons at the bottom */}
      <div className="flex absolute gap-1 left-0 bottom-0 p-2">
        <GitHub className="border-black border-2 p-2" size={48}/>
        <button className="border-black border-2 p-2 w-36 bg-black text-white text-xl font-medium">Web</button>
      </div>
    </div>
  );
};
