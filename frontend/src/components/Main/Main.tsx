import React from "react";
import "./Main.scss";
import Image from "next/image";

export default function Main() {
  return (
    <>
      <main>
        {/* 
          //TODO Add Photo 
        */}
        {/* <div
          className="my-pic"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/ZmzSxij.png"})`,
          }}
        /> */}
        <div className="floating-text">
          <div className="title">
            <h2>Hello World!</h2>
            <h1>I am Iker Ochoa</h1>
            <h3>and this is my portafolio.</h3>
          </div>
          <div className="message">
            <h4>"Keep learning, keep growing"</h4>
          </div>
        </div>
      </main>
    </>
  );
}
