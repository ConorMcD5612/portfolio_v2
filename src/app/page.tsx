import { Project } from "./Project";
import { SideBar } from "./SideBar";
import texasImg from "../../public/images/gameplay.png";
import ticTacImg from "../../public/images/tictac.png";
import heatmapImg from "../../public/images/heatmap.png";

const project_info = [
  {
    name: "Texas Hold'em",
    description:
      "Heads up texas hold'em made in python, built by a team of four",
    imgSrc: texasImg,
    gitURL: "https://github.com/sgmalik/software_engineering_final",
    tech: ["Python", "Pygame", "Pytest"],
    features: [
      "Graphical interface created with homemade assets",
      "Poker engine implementing all the game logic needed for heads up play",
      "Inteligent CPU player (CPU uses machine learning algorithms to decide action's)",
    ],
  },
  {
    name: "Heatmaps",
    description: "A habit tracking app based on github's heatmap.",
    imgSrc: heatmapImg,
    gitURL: "https://heatmaps-eta.vercel.app/dashboard",
    tech: ["TypeScript", "React", "SQL"],
    features: [
      "Track time spent on a habit daily",
      "Add multiple heatmaps/habits",
      "Color of cells based on how much time you spent on a habit that day",
    ],
  },
  {
    name: "9x Tic-Tac-Toe",
    description: "tic-tac-toe based game made with JavaScript",
    imgSrc: ticTacImg,
    gitURL: "https://conormcd5612.github.io/",
    tech: ["JavaScript"],
    features: [
      "Once a board has been clicked, goes to corresponding board",
      "Highlights current gameboard",
      "Once a player gets three X or O's in a row/col/diagonal they win",
    ],
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="flex h-full place-items-center justify-center border-black w-2/5 fixed left-0">
        <SideBar />
      </div>
      <div className="flex justify-center absolute right-0 w-3/5">
        <div className="flex flex-col gap-3">
          {project_info.map(
            ({ name, description, imgSrc, gitURL, tech, features }, index) => {
              return (
                <Project
                  name={name}
                  description={description}
                  imgSrc={imgSrc.src}
                  gitURL={gitURL}
                  tech={tech}
                  features={features}
                  key={index}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
