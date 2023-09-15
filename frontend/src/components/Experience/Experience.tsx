"use client";

import React, { useRef, useState } from "react";
import "./Experience.scss";
import bg from "../../../public/meta.jpg";
import PopUp from "../PopUp/PopUp";
import useIsInViewport from "@/hooks/IsInViewport";

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
  index: number;
}

export default function Experience({ data }: ExperiencePorps) {
  const [experienceSelected, setExperienceSelected] =
    React.useState<Experience | null>(null);

  const titleRef = useRef(null);
  const [titlePlayedAnimation, setTitlePlayedAnimation] = useState(false);
  const titleIsInViewport = useIsInViewport(titleRef, setTitlePlayedAnimation);

  return (
    <div className="experience">
      <h1
        ref={titleRef}
        className={
          titlePlayedAnimation || titleIsInViewport ? "title appeared" : "title"
        }
      >
        Experience
      </h1>
      {data &&
        data.map((item: any, i: number) => {
          return (
            <ExperienceCard
              index={i}
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
  index,
}: ExperienceCardProps) {
  const cardRef = useRef(null);
  const [cardPlayedAnimation, setCardPlayedAnimation] = useState(false);
  const cardIsInViewport = useIsInViewport(cardRef, setCardPlayedAnimation);

  return (
    <div
      ref={cardRef}
      className={
        cardPlayedAnimation || cardIsInViewport
          ? "banner-wrapper appeared"
          : index % 2 == 0
          ? "banner-wrapper right"
          : "banner-wrapper left"
      }
    >
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
    </div>
  );
}
