import React from "react";

export const WebsiteTag = ({top} : {top: boolean}) => {
  const styles = {
    top: "md:top-0 md:left-0 md:right-auto md:translate-none",
    bottom: "md:right-0 md:bottom-0 md:translate-none",
    middle: "right-[50%] translate-x-1/2",
  };



  
  return (
    <div
      className={`absolute text-xs ${styles["middle"]} ${top ? styles["top"] : styles["bottom"]} opacity-50 font-extrabold text-xl p-2`}
    >
      {top ? "<conor.works>" : "</conor.works>"}
    </div>
  );
};
