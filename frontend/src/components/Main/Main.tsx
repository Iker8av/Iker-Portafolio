import React, { useRef, useState } from "react";
import useIsInViewport from "../../hooks/IsInViewport";
import "./Main.scss";
import Image from "next/image";

export default function Main() {
  const titleRef = useRef(null);
  const [titlePlayedAnimation, setTitlePlayedAnimation] = useState(false);
  const titleIsInViewport = useIsInViewport(titleRef, setTitlePlayedAnimation);

  const messageRef = useRef(null);
  const [messagePlayedAnimation, setMessagePlayedAnimation] = useState(false);
  const messageIsInViewport = useIsInViewport(
    messageRef,
    setMessagePlayedAnimation
  );

  return (
    <>
      <main>
        {/* 
        //TODO Add Photo 
        <div 
          className="my-pic"
          style={{
            backgroundImage: `url(${"https://i.imgur.com/ZmzSxij.png"})`,
          }}
        /> */}
        <div className="floating-text">
          <div
            className={
              titleIsInViewport || titlePlayedAnimation
                ? "title appeared"
                : "title"
            }
            ref={titleRef}
          >
            <h2>Hello World!</h2>
            <h1>I am Iker Ochoa</h1>
            <h3>and this is my portafolio.</h3>
          </div>
          <div
            ref={messageRef}
            className={
              messageIsInViewport || messagePlayedAnimation
                ? "message appeared"
                : "message"
            }
          >
            <h4>"Keep learning, keep growing"</h4>
          </div>
        </div>
      </main>
    </>
  );
}
