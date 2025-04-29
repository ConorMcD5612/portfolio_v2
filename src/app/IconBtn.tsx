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
  return (
    <button className={`flex gap-5 
    bg-${color} 
    place-items-center 
    p-2 rounded-md 
    border-cream 
    border-3 
    hover:underline 
    decoration-light-red
    hover:cursor-grab
    hover:bg-light-red
    hover:border-black
    `
    }>
      <div className="text-black font-extrabold text-xl">{name.toUpperCase()}</div>
      <img height={size} width={size} src={iconSrc} />
    </button>
  );
};
