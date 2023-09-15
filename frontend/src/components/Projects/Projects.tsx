"use client";

import React, { useRef, useState } from "react";
import "./Projects.scss";
import bg from "../../../public/meta.jpg";
import axios from "axios";
import PopUp from "../PopUp/PopUp";
import useIsInViewport from "@/hooks/IsInViewport";

interface Props {
  data: any;
}

export default function Projects({ data }: Props) {
  const [projectSelected, setProjectSelected] = React.useState<Project | null>(
    null
  );

  const titleRef = useRef(null);
  const [titlePlayedAnimation, setTitlePlayedAnimation] = useState(false);
  const titleIsInViewport = useIsInViewport(titleRef, setTitlePlayedAnimation);

  return (
    <div className="projects">
      <h1
        ref={titleRef}
        className={
          titleIsInViewport || titlePlayedAnimation ? "title appeared" : "title"
        }
      >
        Projects
      </h1>
      <div className="grid-wrapper">
        {data &&
          data.map((item: any, i: number) => {
            return (
              <ProjectCard
                index={i}
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
  index: number;
}

export function ProjectCard({
  project,
  setProjectSelected,
  index,
}: ProjectCardProps) {
  const cardRef = useRef(null);
  const [cardPlayedAnimation, setCardPlayedAnimation] = useState(false);
  const cardIsInViewport = useIsInViewport(cardRef, setCardPlayedAnimation);

  return (
    <div
      className={
        cardIsInViewport || cardPlayedAnimation
          ? "card-wrapper appeared"
          : "card-wrapper"
      }
      ref={cardRef}
      style={{ transitionDelay: `${(index % 4) / 4}s` }}
    >
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
    </div>
  );
}
