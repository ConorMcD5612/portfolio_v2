
import { SideBar } from "./SideBar";
import { Projects } from "./Projects";
import { WebsiteTag } from "./WebsiteTag";

export default function Home() {
  return (
    <div >
      <WebsiteTag top={true}/>
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex place-items-center justify-center border-black m-auto">
        <SideBar />
      </div>
      <div className="flex place-items-center m-5">
        <Projects />
      </div>
    </div>
      <WebsiteTag top={false}/>
    </div>
  );
}
