"use client";

import React from "react";
import "./PopUp.scss";
import Image from "next/image";
import testimg from "../../../public/meta.jpg";
import Cross from "../../../public/cross.png";

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

interface Props {
  project: Project;
  setProject: any;
}

export default function PopUp({ project, setProject }: Props) {
  const [img, setImg] = React.useState<string>("");

  return (
    <div className="popup">
      <div className="popup-container">
        <div className="popup-header">
          <div>
            <h1>{project.name}</h1>
            <span>{project.date}</span>
          </div>
          <button
            className="close-button"
            onClick={() => {
              setProject(null);
            }}
          >
            X
          </button>
        </div>
        <p>{project.description}</p>
        <div className="row">
          <h3>Technologies:</h3>
          <p>{project.technologies}</p>
        </div>
        <div className="row">
          <h3>Highlighted work:</h3>
          <p>{project.highlights}</p>
        </div>
        <h2>Gallery:</h2>
        <div className="galery-grid">
          {project.galery.map((item) => {
            return (
              <div
                onClick={() => setImg(item)}
                className="img-galery"
                style={{
                  backgroundImage: `url(${item})`,
                }}
              />
            );
          })}
        </div>
        {project.links[0] !== "" && <h3>Links:</h3>}
        {project.links[0] !== "" &&
          project.links.map((link) => {
            return (
              <a className="popup-link" target="_blank" href={link}>
                {link}
              </a>
            );
          })}
      </div>
      {img !== "" && <ImagePopUp img={img} setImg={setImg}></ImagePopUp>}
    </div>
  );
}

interface PropsImg {
  img: string;
  setImg: any;
}

export function ImagePopUp({ img, setImg }: PropsImg) {
  return (
    <div className="img-popup-bg">
      <div
        className="img-popup"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <button onClick={() => setImg("")} className="close-button">
          X
        </button>
      </div>
    </div>
  );
}
