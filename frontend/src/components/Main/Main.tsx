import React from "react";
import "./Main.scss";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <main>
        <Image
          className="my-pic"
          src={require("../../../public/personIcon.webp")}
          alt="iker pic"
        />
        <div className="floating-text">
          <div>
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