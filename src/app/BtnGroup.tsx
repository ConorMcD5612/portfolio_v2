import React from "react";
import { IconBtn } from "./IconBtn";

export const BtnGroup = () => {
  return (
    <div className="flex gap-2 align-start">
      <a href="https://github.com/ConorMcD5612" target="_blank">
        <IconBtn
          name="GitHub"
          size={24}
          iconSrc="/icons/iconmonstr-github-1.svg"
          color="orange"
        />
      </a>
      <a href="/resume.pdf" download>
        <IconBtn
          name="Resume"
          size={24}
          iconSrc="/icons/iconmonstr-cv-3.svg"
          color="orange"
        />
      </a>
      <a href="mailto:cdmcdevi@gmail.com">
      <IconBtn
        name="Email"
        size={24}
        iconSrc="/icons/iconmonstr-email-3.svg"
        color="orange"
        />
    </a>
    </div>
  );
};
