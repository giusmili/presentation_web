"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Loader from "./Loader";

const Intro = dynamic(() => import("./Intro"), { loading: Loader });
const CardA = dynamic(() => import("./CardA"), { loading: Loader });
const CardB = dynamic(() => import("./CardB"), { loading: Loader });
const CardC = dynamic(() => import("./CardC"), { loading: Loader });

const TABS = [
  { id: "intro", label: "Intro" },
  { id: "a", label: "Débuts du web" },
  { id: "b", label: "Histoire du web" },
  { id: "c", label: "Le html" },
];

const CONTENT = {
  intro: Intro,
  a: CardA,
  b: CardB,
  c: CardC,
};

const FADE_MS = 250;

export default function Presentation() {
  const [activeTab, setActiveTab] = useState("intro");
  const [displayedTab, setDisplayedTab] = useState("intro");
  const [isFading, setIsFading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    function handleClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isMenuOpen]);

  function selectTab(tabId) {
    setIsMenuOpen(false);
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setIsFading(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDisplayedTab(tabId);
      setIsFading(false);
    }, FADE_MS);
  }

  const Content = CONTENT[displayedTab];

  return (
    <>
      <button
        type="button"
        ref={toggleRef}
        className="nav-toggle"
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMenuOpen}
        aria-controls="site-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        className={isMenuOpen ? "nav-backdrop is-visible" : "nav-backdrop"}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <ul id="site-nav" ref={navRef} className={isMenuOpen ? "nav-open" : undefined}>
        {TABS.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              className={activeTab === tab.id ? "active" : undefined}
              onClick={(e) => {
                e.preventDefault();
                selectTab(tab.id);
              }}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <main id="info" className={isFading ? "wrap fade-out" : "wrap fade-in"}>
        <Content />
      </main>
    </>
  );
}
