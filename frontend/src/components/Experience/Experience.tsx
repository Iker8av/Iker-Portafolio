"use client";

import React from "react";
import "./Experience.scss";
import bg from "../../../public/meta.jpg";
import PopUp from "../PopUp/PopUp";

interface Experience {
  name: string;
  date: string;
  frontimg: string;
  description: string;
  technologies: string;
  highlights: string;
  galery: [string];
  links: [string];
}

interface ExperiencePorps {
  data: any;
}

interface ExperienceCardProps {
  experience: Experience;
  setProjectSelected: any;
}

export default function Experience({ data }: ExperiencePorps) {
  const [experienceSelected, setExperienceSelected] =
    React.useState<Experience | null>(null);
  return (
    <div className="experience">
      <h1>Experience</h1>
      {data &&
        data.map((item: any) => {
          return (
            <ExperienceCard
              key={item}
              experience={item}
              setProjectSelected={setExperienceSelected}
            />
          );
        })}

      {experienceSelected && (
        <PopUp
          project={experienceSelected}
          setProject={setExperienceSelected}
        ></PopUp>
      )}
    </div>
  );
}

export function ExperienceCard({
  experience,
  setProjectSelected,
}: ExperienceCardProps) {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${experience.frontimg})` }}
      onClick={() => setProjectSelected(experience)}
    >
      <div className="banner-bg">
        <div></div>
        <h2>{experience.name}</h2>
      </div>
    </div>
  );
}
