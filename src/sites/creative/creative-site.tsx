import { VIEW_LABELS } from "@/sites/shared/site-copy";

type CreativeSiteProps = {
  active: boolean;
};

/** Creative / visual work view (stills, motion, bookings). */
export function CreativeSite({ active }: CreativeSiteProps) {
  return (
    <div
      className="mode-panel mode-panel--creative"
      aria-label={`${VIEW_LABELS.creative} portfolio`}
      aria-hidden={!active}
      inert={!active}
    >
      <section
        className="hero hero--home hero--creative"
        aria-label={`${VIEW_LABELS.creative} — introduction`}
      >
        <div className="hero__canvas" aria-hidden="true" />
        <p className="hero__watermark" aria-hidden="true">
          {VIEW_LABELS.creative}
        </p>
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">Photography · Film</p>
            <h1>Light, rhythm, and the space between frames.</h1>
            <p className="lede">
              Consectetur adipiscing elit — pseudo director’s statement. Swap for real artist line
              and reel link.
            </p>
          </div>
        </div>
        <a className="hero__scroll" href="#creative-content">
          <span className="hero__scroll-label">Below</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </section>

      <div id="creative-content" className="mode-panel__content">
        <section className="section section--creative">
          <h2 className="section__title">Still</h2>
          <div className="gallery gallery--creative">
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

        <section className="section section--creative">
          <h2 className="section__title">Motion</h2>
          <div className="video-block">
            <div
              className="video-block__placeholder"
              role="img"
              aria-label="Video placeholder"
            >
              <span>Reel / embed placeholder</span>
            </div>
            <p className="video-block__caption">Short film title — 00:00 runtime (pseudo)</p>
          </div>
        </section>

        <section className="section section--creative section--contact">
          <h2 className="section__title">Bookings &amp; collabs</h2>
          <p className="contact-line">
            <a href="#">hello@email.com</a>
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
  );
}
