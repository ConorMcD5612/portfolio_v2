
import { SideBar } from "./SideBar";

import { Projects } from "./Projects";

export default function Home() {
  return (
    <div className="flex mr-20">
      <div className="flex h-[100vh] place-items-center justify-center border-black m-auto w-1/2">
        <SideBar />
      </div>
      <div className="flex place-items-center w-1/2">
        <Projects />
      </div>
    </div>
  );
}
