"use client";

import { useEffect, useState } from "react";
import { ProfessionalSite } from "@/sites/professional/professional-site";
import { CreativeSite } from "@/sites/creative/creative-site";
import { cn } from "@/lib/utils";
import {
  MODE_STORAGE_KEY,
  normalizeStoredMode,
  type SiteMode,
} from "./mode";
import { VIEW_LABELS } from "./site-copy";

/** Shell: sticky header, mode toggle, stacked Professional + Creative panels. */
export function PortfolioShell() {
  const [mode, setMode] = useState<SiteMode>("professional");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(MODE_STORAGE_KEY);
      const next = normalizeStoredMode(raw);
      if (next) setMode(next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.body.dataset.mode = mode;
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  function selectMode(next: SiteMode) {
    setMode(next);
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
          <div className="mode-switch" role="group" aria-label="Choose portfolio view">
            <button
              type="button"
              className={cn("mode-switch__btn", mode === "professional" && "is-active")}
              aria-pressed={mode === "professional"}
              id="mode-professional"
              onClick={() => selectMode("professional")}
            >
              {VIEW_LABELS.professional}
            </button>
            <button
              type="button"
              className={cn("mode-switch__btn", mode === "creative" && "is-active")}
              aria-pressed={mode === "creative"}
              id="mode-creative"
              onClick={() => selectMode("creative")}
            >
              {VIEW_LABELS.creative}
            </button>
          </div>
        </div>
      </header>

      <main id="main" className="mode-panels" aria-live="polite">
        <ProfessionalSite active={mode === "professional"} />
        <CreativeSite active={mode === "creative"} />
      </main>
    </>
  );
}
