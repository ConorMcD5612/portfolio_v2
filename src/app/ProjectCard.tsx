import React from "react";
import { Tech } from "./Tech";
import { Features } from "./Features";
import { GitHub } from "react-feather";

export const ProjectCard = ({
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
    <div
      className="
    relative
    flex 
    flex-col 
    text-black 
    border-light-orange 
    border-3 
    w-full
    max-h-[480px]

    bg-cream
    rounded-lg
    "
    >
      <div className={`h-1/2 w-full`}>
        <img
          src={imgSrc}
          className="w-full h-full rounded-t-lg"
        ></img>
      </div>
      <div>
        <div className="flex flex-col gap-3 h-1/2 w-full p-2">
          <div>
            <h2 className="font-medium text-3xl">{name}</h2>
            <Tech tech={tech} />
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 m-2 flex gap-2 text-lg">
      <button className="bg-dark-blue rounded-md p-2 text-cream border-black border-2 text-lg hover:bg-light-red hover:text-black underline decoration-dark-blue hover:cursor-grab">
        WEBSITE
      </button>
      <button className="rounded-md p-2 border-black border-2">
        <img src={"/icons/iconmonstr-github-1.svg"}></img>
      </button>
      </div>
    </div>
  );
};
