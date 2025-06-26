import React from "react";
import { BtnGroup } from "./BtnGroup";

export const SideBar = () => {
  // github, resume
  return (
    <div className={`flex flex-col  m-5 gap-5 md:w-5/6 lg:w-3/4 xl:w-4/6 2xl:w-1/2`}>
      <header className="inline-block font-black text-6xl">
        <h1 className="">
          I<span className="text-mint">&apos;</span>m
          <span className="text-light-orange"> Conor</span>
        </h1>
        <h1 className="text-light-orange">
          McDevitt<span className="text-mint">.</span>
        </h1>
        <h2 className="font-medium text-xl underline decoration-light-blue">
          Software Engineer and Computer Science Senior
        </h2>
      </header>

      <div className="flex gap-3 flex-col">
        <div className="text-lg font-medium">
          <p className="">
            I like to make<span className="text-mint"> web apps</span> for
            increasing productivity, as well as work on{" "}
            <span className="text-mint">collaborative</span> projects.
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="text-lg">
          Check out some of my personal projects and projects I&apos;ve built for
          school<span className="text-light-red">!!!!!</span>
        </p>
        
      </div>
     

      <BtnGroup />
   
    </div>
  );
};
