"use client";

import React from "react";
import "./Projects.scss";
import bg from "../../../public/meta.jpg";
import axios from "axios";
import PopUp from "../PopUp/PopUp";

interface Props {
  data: any;
}

export default function Projects({ data }: Props) {
  const [projectSelected, setProjectSelected] = React.useState<Project | null>(
    null
  );

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="grid-wrapper">
        {data &&
          data.map((item: any, i: number) => {
            return (
              <ProjectCard
                key={i}
                project={item}
                setProjectSelected={setProjectSelected}
              ></ProjectCard>
            );
          })}
      </div>
      {projectSelected && (
        <PopUp
          project={projectSelected}
          setProject={setProjectSelected}
        ></PopUp>
      )}
    </div>
  );
}

interface Project {
  name: string;
  date: string;
  frontimg: string;
  description: string;
  technologies: string;
  highlights: string;
  galery: [string];
  links: [string];
}

interface ProjectCardProps {
  project: Project;
  setProjectSelected: any;
}

export function ProjectCard({ project, setProjectSelected }: ProjectCardProps) {
  return (
    <div
      className="project-cards"
      style={{ backgroundImage: `url(${project.frontimg})` }}
      onClick={() => setProjectSelected(project)}
    >
      <div className="card-container">
        <div></div>
        <h2>{project.name}</h2>
      </div>
    </div>
  );
}
