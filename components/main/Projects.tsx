import React from "react";
import ProjectCard from "../sub/ProjectCard";
import project1 from "../../public/Frame 1.png"
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
        // @ts-ignore
          src={project1}
          title="Modern Next.js Coffe Shop"
          description="Craft a cutting-edge Next.js Coffee Shop website with seamless navigation, dynamic UI, and responsive design."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Engage users with interactive website cards—captivating, dynamic content that enhances user experience, promotes interaction, and boosts site engagement."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Explore the cosmos with our stellar space-themed website design experience."
        />
      </div>
    </div>
  );
};

export default Projects;
