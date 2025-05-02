import React from "react";

export const IconBtn = ({
  iconSrc,
  name,
  size,
  color,
}: {
  iconSrc: string;
  name: string;
  size: number;
  color: string;
}) => {

  type ColorKey = "orange" | "red" | "darkBlue";

  const colors: Record<ColorKey, string> = {
    orange: "bg-light-orange border-cream text-black",
    red: "bg-light-red",
    darkBlue: "bg-dark-blue border-black text-cream",
  };

  return (
    <button className={`flex gap-5 
    ${colors[color as ColorKey]}
    place-items-center 
    p-2 rounded-md 
    border-3 
    hover:underline 
    decoration-light-red
    hover:cursor-grab
    hover:bg-light-red
    hover:border-black
    hover:decoration-light-blue
    hover:text-black
    
    `
    }>
      <div className=" font-extrabold text-xl">{name.toUpperCase()}</div>
      <img height={size} width={size} src={iconSrc} />
    </button>
  );
};
