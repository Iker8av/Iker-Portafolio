import React from "react";
import { BoxContainers } from "../BoxContainers/BoxContainers";
import "./SchoolInfo.scss";

export default function SchoolInfo() {
  return (
    <div className="school-info">
      <h1>Education</h1>
      <div className="row-boxes">
        <div style={{ width: "20%" }}>
          <BoxContainers
            title="School:"
            info="Tecnológico de Monterrey"
            details=""
          ></BoxContainers>
        </div>
        <div style={{ width: "20%" }}>
          <BoxContainers
            title="Career:"
            info="B.S. Computer Science "
            details=""
          ></BoxContainers>
        </div>
        <div style={{ width: "20%" }}>
          <BoxContainers
            title="Graduate:"
            info="June 2025"
            details="(Expected)"
          ></BoxContainers>
        </div>
        <div style={{ width: "20%" }}>
          <BoxContainers
            title="GPA:"
            info="3.7"
            details="(untill 3rd semester)"
          ></BoxContainers>
        </div>
      </div>
    </div>
  );
}
