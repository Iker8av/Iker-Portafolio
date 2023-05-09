import React from "react";
import "./Main.scss";
import Image from "next/image";
import me from "../../../public/me.png";

export default function Main() {
  return (
    <>
      <main>
        {/* <div className="my-pic" style={{ backgroundImage: `url(${me.src})` }} /> */}
        <Image
          className="my-pic"
          src={me}
          alt="iker pic"
          width={500}
          height={500}
        />
        <div className="floating-text">
          <div className="title">
            <h2>Hello World!</h2>
            <h1>I am Iker Ochoa</h1>
            <h3>and this is my portafolio.</h3>
          </div>
          <div className="message">
            <h4>
              "The only way to learn is by living, everything happens for some
              reason."
            </h4>
          </div>
        </div>
      </main>
    </>
  );
}
