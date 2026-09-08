"use client";

import { useState } from "react";
import { basePath } from "../basePath";

export default function CardC() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="card-container">
      <div
        className={isFlipped ? "card card-rotate" : "card"}
        onClick={(e) => {
          setIsFlipped((flipped) => !flipped);
          e.stopPropagation();
        }}
      >
        <div className="side">
          <div className="side-text">
            <h2>&lt;/&gt;Adopter un mode d&apos;écriture enrichie</h2>
            <p className="helper">
              Un éditeur comme Sublime Text aide aide à structurer le code
              html et pouvoir également travailler avec d&apos;autres
              langages
            </p>
          </div>
          <div className="pictures">
            <img src={`${basePath}/images/sublime.jpg`} alt="Sublime-text" />
          </div>
        </div>
        <div className="side back">
          <div className="side-text">
            <h2>&lt;/&gt;Adopter un mode d&apos;écriture enrichie</h2>
            <p className="helper">
              Un éditeur comme Visual Studio Code aide à structurer le code
              html et pouvoir également travailler avec d&apos;autres
              langages
            </p>
          </div>
          <div className="pictures">
            <img
              src={`${basePath}/images/visual-studio.jpg`}
              alt="Visual Studio Code"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
