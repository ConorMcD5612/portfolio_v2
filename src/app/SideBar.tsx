import React from "react";
import { GitHub } from "react-feather";
import { Space_Grotesk } from "next/font/google";
import { BtnGroup } from "./BtnGroup";

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const SideBar = () => {
  // github, resume
  return (
    <div
      className={`flex flex-col w-4/6 h-4/6 gap-20 ${SpaceGrotesk.className}`}
    >
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
        <div className="text-2xl">
          <p className="">
            I like to make<span className="text-mint"> web apps</span> for
            increasing productivity, as well as work on{" "}
            <span className="text-mint">collaborative</span> projects.
          </p>
        </div>
      </div>
      <BtnGroup />
    </div>
  );
};
