import React from "react";

export const Features = ({ features }: { features: string[] }) => {
  return (
    <div className="w-11/12 h-11/12 justify-self-end ">
      <h2 className="font-semibold text-3xl">Features:</h2>
      <ul className="list-disc mt-2">
        {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
      </ul>
    </div>
  );
};
