"use client";

import React from "react";
import Experience from "@/components/Experience/Experience";
import Main from "../components/Main/Main";
import SchoolInfo from "../components/SchoolInfo/SchoolInfo";
import Projects from "@/components/Projects/Projects";
import axios from "axios";

export default function Home() {
  const [projects, setProjects] = React.useState<any | null>(null);
  const [experiences, setExperiences] = React.useState<any | null>(null);

  React.useEffect(() => {
    (async () => {
      await axios
        .get(
          location.hostname === "localhost" ||
            location.hostname === "127.0.0.1" ||
            location.hostname === ""
            ? "https://morning-wave-88837.herokuapp.com/getMessage"
            : "http://localhost:3030/getMessage"
        )
        .then((res) => {
          setExperiences(res.data.experiences);
          setProjects(res.data.projects);
        });
    })();
  }, []);

  return (
    <div className="App">
      <Main></Main>
      <SchoolInfo></SchoolInfo>
      <Experience data={experiences}></Experience>
      <Projects data={projects}></Projects>
    </div>
  );
}
