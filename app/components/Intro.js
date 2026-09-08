"use client";

import { useState } from "react";
import { basePath } from "../basePath";

export default function Intro() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="wrap" role="region" aria-describedby="desc">
      <div
        className={isPaused ? "cube cube-stop" : "cube"}
        id="cube"
        onClick={() => setIsPaused((paused) => !paused)}
      >
        <div className="front">
          <img src={`${basePath}/images/html5.png`} alt="Logo HTML5" />
        </div>
        <div className="back">
          <img src={`${basePath}/images/css3.png`} alt="Logo CSS3" />
        </div>
        <div className="top">
          <img src={`${basePath}/images/node.png`} alt="Logo Node.js" />
        </div>
        <div className="bottom">
          <img src={`${basePath}/images/jquery.png`} alt="Logo jQuery" />
        </div>
        <div className="left">
          <img src={`${basePath}/images/logo_php.png`} alt="Logo PHP" />
        </div>
        <div className="right">
          <img src={`${basePath}/images/javascript.png`} alt="Logo JavaScript" />
        </div>
      </div>
    </div>
  );
}
