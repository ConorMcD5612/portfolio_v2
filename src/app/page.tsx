
import { SideBar } from "./SideBar";
import { Projects } from "./Projects";
import { WebsiteTag } from "./WebSite";

export default function Home() {
  return (
    <div >
      <WebsiteTag top={true}/>
    <div className="flex md:flex-col lg:flex-row mr-20">
      <div className="flex place-items-center justify-center border-black m-auto">
        <SideBar />
      </div>
      <div className="flex place-items-center w-1/2">
        <Projects />
      </div>
    </div>
      <WebsiteTag top={false}/>
    </div>
  );
}
