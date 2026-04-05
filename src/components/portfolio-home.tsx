"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Mode = "analyst" | "studio";

const STORAGE_KEY = "portfolio-mode";

function isMode(value: string | null | undefined): value is Mode {
  return value === "analyst" || value === "studio";
}

export function PortfolioHome() {
  const [mode, setMode] = useState<Mode>("analyst");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isMode(saved)) setMode(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.body.dataset.mode = mode;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  function selectMode(next: Mode) {
    setMode(next);
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* Avoid a hard jump: smooth scroll when motion is OK; skip if already near top */
    if (window.scrollY > 64) {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <p className="wordmark">M. Tran</p>
          <div className="mode-switch" role="group" aria-label="Portfolio view">
            <button
              type="button"
              className={cn("mode-switch__btn", mode === "analyst" && "is-active")}
              aria-pressed={mode === "analyst"}
              id="mode-analyst"
              onClick={() => selectMode("analyst")}
            >
              Analyst
            </button>
            <button
              type="button"
              className={cn("mode-switch__btn", mode === "studio" && "is-active")}
              aria-pressed={mode === "studio"}
              id="mode-studio"
              onClick={() => selectMode("studio")}
            >
              Studio
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="mode-panels" aria-live="polite">
        <div
          className="mode-panel mode-panel--analyst"
          aria-label="Analyst portfolio"
          aria-hidden={mode !== "analyst"}
          inert={mode !== "analyst"}
        >
          <section className="hero hero--home hero--analyst" aria-label="Analyst — introduction">
            <div className="hero__canvas" aria-hidden="true" />
            <p className="hero__watermark" aria-hidden="true">
              Analyst
            </p>
            <div className="hero__inner">
              <div className="hero__copy">
                <p className="eyebrow">Economics · Finance</p>
                <h1>Building clear models for uncertain markets.</h1>
                <p className="lede">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pseudo copy
                  for layout — replace with positioning statement and target roles.
                </p>
              </div>
            </div>
            <a className="hero__scroll" href="#analyst-content">
              <span className="hero__scroll-label">Below</span>
              <span className="hero__scroll-line" aria-hidden="true" />
            </a>
          </section>

          <div id="analyst-content" className="mode-panel__content">
          <section className="section section--analyst">
            <h2 className="section__title">Selected work</h2>
            <div className="cards cards--analyst">
              <article className="card">
                <h3>Equity research memo</h3>
                <p>Placeholder project title and one-line outcome metric.</p>
              </article>
              <article className="card">
                <h3>DCF &amp; comps model</h3>
                <p>Placeholder — methodology and sector focus.</p>
              </article>
              <article className="card">
                <h3>Policy brief</h3>
                <p>Placeholder — academic or case competition piece.</p>
              </article>
            </div>
          </section>

          <section className="section section--analyst">
            <h2 className="section__title">Experience</h2>
            <ol className="timeline">
              <li>
                <span className="timeline__meta">20XX — Present</span>
                <span className="timeline__role">
                  Pseudo internship · Investment research
                </span>
              </li>
              <li>
                <span className="timeline__meta">20XX — 20XX</span>
                <span className="timeline__role">Pseudo role · Economics society</span>
              </li>
              <li>
                <span className="timeline__meta">20XX</span>
                <span className="timeline__role">Pseudo program · University</span>
              </li>
            </ol>
          </section>

          <section className="section section--analyst section--contact">
            <h2 className="section__title">Contact</h2>
            <p className="contact-line">
              <a href="#">firstname.last@email.com</a>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <a href="#">LinkedIn</a>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <a href="#">CV (PDF)</a>
            </p>
          </section>
          </div>
        </div>

        <div
          className="mode-panel mode-panel--studio"
          aria-label="Studio portfolio"
          aria-hidden={mode !== "studio"}
          inert={mode !== "studio"}
        >
          <section className="hero hero--home hero--studio" aria-label="Studio — introduction">
            <div className="hero__canvas" aria-hidden="true" />
            <p className="hero__watermark" aria-hidden="true">
              Studio
            </p>
            <div className="hero__inner">
              <div className="hero__copy">
                <p className="eyebrow">Photography · Film</p>
                <h1>Light, rhythm, and the space between frames.</h1>
                <p className="lede">
                  Consectetur adipiscing elit — pseudo director’s statement. Swap for
                  real artist line and reel link.
                </p>
              </div>
            </div>
            <a className="hero__scroll" href="#studio-content">
              <span className="hero__scroll-label">Below</span>
              <span className="hero__scroll-line" aria-hidden="true" />
            </a>
          </section>

          <div id="studio-content" className="mode-panel__content">
          <section className="section section--studio">
            <h2 className="section__title">Still</h2>
            <div className="gallery">
              <figure className="gallery__cell">
                <figcaption>Frame 01</figcaption>
              </figure>
              <figure className="gallery__cell">
                <figcaption>Frame 02</figcaption>
              </figure>
              <figure className="gallery__cell gallery__cell--wide">
                <figcaption>Frame 03 — wide</figcaption>
              </figure>
              <figure className="gallery__cell">
                <figcaption>Frame 04</figcaption>
              </figure>
              <figure className="gallery__cell">
                <figcaption>Frame 05</figcaption>
              </figure>
            </div>
          </section>

          <section className="section section--studio">
            <h2 className="section__title">Motion</h2>
            <div className="video-block">
              <div
                className="video-block__placeholder"
                role="img"
                aria-label="Video placeholder"
              >
                <span>Reel / embed placeholder</span>
              </div>
              <p className="video-block__caption">
                Short film title — 00:00 runtime (pseudo)
              </p>
            </div>
          </section>

          <section className="section section--studio section--contact">
            <h2 className="section__title">Bookings &amp; collabs</h2>
            <p className="contact-line">
              <a href="#">studio@email.com</a>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <a href="#">Vimeo</a>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <a href="#">Instagram</a>
            </p>
          </section>
          </div>
        </div>
      </main>
    </>
  );
}
