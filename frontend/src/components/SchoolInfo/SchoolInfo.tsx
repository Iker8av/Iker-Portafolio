import React, { useRef, useState } from "react";
import { BoxContainers } from "../BoxContainers/BoxContainers";
import "./SchoolInfo.scss";
import useIsInViewport from "../../hooks/IsInViewport";

export default function SchoolInfo() {
  const titleRef = useRef(null);
  const [titlePlayedAnimation, setTitlePlayedAnimation] = useState(false);
  const titleIsInViewport = useIsInViewport(titleRef, setTitlePlayedAnimation);

  const boxesRef = useRef(null);
  const [boxesPlayedAnimation, setBoxesPlayedAnimation] = useState(false);
  const boxesIsInViewport = useIsInViewport(boxesRef, setBoxesPlayedAnimation);

  return (
    <div className="school-info">
      <h1
        ref={titleRef}
        className={
          titleIsInViewport || titlePlayedAnimation ? "title appeared" : "title"
        }
      >
        Education
      </h1>
      <div
        ref={boxesRef}
        className={
          boxesIsInViewport || boxesPlayedAnimation
            ? "row-boxes appeared"
            : "row-boxes"
        }
      >
        <div style={{ width: "100%" }}>
          <BoxContainers
            title="School:"
            info="Tecnológico de Monterrey"
            details=""
          ></BoxContainers>
        </div>
        <div style={{ width: "100%" }}>
          <BoxContainers
            title="Career:"
            info="B.S. Computer Science "
            details=""
          ></BoxContainers>
        </div>
        <div style={{ width: "100%" }}>
          <BoxContainers
            title="Graduate:"
            info="June 2025"
            details="(Expected)"
          ></BoxContainers>
        </div>
        <div style={{ width: "100%" }}>
          <BoxContainers
            title="GPA:"
            info="4.0"
            details="(until 4th semester)"
          ></BoxContainers>
        </div>
      </div>
    </div>
  );
}
