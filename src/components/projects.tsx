import React from "react";
import SectionHeader from "./ui/section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";

function Projects() {
  return (
    <section id="projects">
      <SectionHeader>Projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
