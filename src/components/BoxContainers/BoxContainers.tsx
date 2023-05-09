import React from "react";
import "./BoxContainer.scss";

interface BoxContainerProps {
  title: string;
  info: string;
  details: string;
}

export function BoxContainers({ title, info, details }: BoxContainerProps) {
  return (
    <>
      <div className="box-container">
        <h3 className="box-title">{title}</h3>
        <div className="box-content">
          <p>{info}</p>
          <span>{details}</span>
        </div>
      </div>
    </>
  );
}
