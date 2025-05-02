import React from "react";
import { Tech } from "./Tech";
import { IconBtn } from "./IconBtn";
import Image from "next/image";

export const ProjectCard = ({
  name,
  description,
  imgSrc,
  gitURL,
  webURL,
  tech,
}: {
  name: string;
  description: string;
  imgSrc: string;
  gitURL: string;
  webURL: string | null;
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
    max-h-[420px]
    bg-cream
    rounded-lg
    "
    >
      <div className={`h-1/2 w-full`}>
        <Image width={500} height={500} src={imgSrc} className="w-full h-full rounded-t-lg" alt="project image" ></Image>
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
        {webURL ? (
          <>
            <a
              href={webURL}
              className="bg-dark-blue font-bold hover:underline rounded-md p-2 text-cream border-black border-3 text-lg hover:bg-light-red hover:text-black underline decoration-dark-blue hover:cursor-grab
              "
              target="_blank"
            >
              WEBSITE
            </a>
            <a
              href={gitURL}
              className="flex place-items-center hover:bg-light-red rounded-md p-2 border-black border-3"
              target="_blank"
            >
              <Image width={24} height={24} src={"/icons/iconmonstr-github-1.svg"} alt="github icon"></Image>
            </a>
          </>
        ) : (
          <a href={gitURL} target="_blank">
            <IconBtn
              iconSrc="/icons/iconmonstr-github-1.svg"
              name="github"
              size={24}
              color="darkBlue"
            />
        </a>  
        )}
      </div>
    </div>
  );
};
