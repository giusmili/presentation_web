"use client";

import { useState } from "react";

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
          <img src="/images/html5.png" alt="front" />
        </div>
        <div className="back">
          <img src="/images/css3.png" alt="back" />
        </div>
        <div className="top">
          <img src="/images/node.png" alt="top" />
        </div>
        <div className="bottom">
          <img src="/images/jquery.png" alt="bottom" />
        </div>
        <div className="left">
          <img src="/images/logo_php.png" alt="left" />
        </div>
        <div className="right">
          <img src="/images/javascript.png" alt="right" />
        </div>
      </div>
    </div>
  );
}
