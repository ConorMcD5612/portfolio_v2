import React from "react";
import { GitHub } from "react-feather";
import { Space_Grotesk } from "next/font/google";
import { BtnGroup } from "./BtnGroup";

export const SideBar = () => {
  // github, resume
  return (
    <div className={`flex flex-col gap-20 w-1/2`}>
      <header className="inline-block font-black text-8xl">
        <h1>
          I<span className="text-mint">'</span>m
          <span className="text-light-orange"> Conor</span>
        </h1>
        <h1 className="text-light-orange">
          McDevitt<span className="text-mint">.</span>
        </h1>
        <h2 className="font-medium text-3xl underline decoration-light-blue">
          Software Engineer and Computer Science Senior
        </h2>
      </header>

      <div className="flex gap-3 flex-col">
        <div className="text-2xl font-medium">
          <p className="">
            I like to make<span className="text-mint"> web apps</span> for
            increasing productivity, as well as work on{" "}
            <span className="text-mint">collaborative</span> projects.
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="text-2xl">
          Check out some of my personal projects and projects I've built for
          school
        </p>
        
      </div>

      <BtnGroup />
    </div>
  );
};
