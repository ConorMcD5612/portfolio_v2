
import { SideBar } from "./SideBar";

import { Projects } from "./Projects";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex h-[100vh] place-items-center justify-center border-black w-1/2">
        <SideBar />
      </div>
      <div className="flex place-items-center">
        <Projects />
      </div>
    </div>
  );
}
