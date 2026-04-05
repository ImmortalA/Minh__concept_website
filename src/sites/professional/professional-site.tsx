import { VIEW_LABELS } from "@/sites/shared/site-copy";

type ProfessionalSiteProps = {
  active: boolean;
};

/** Professional / career-focused view (credentials, work history, etc.). */
export function ProfessionalSite({ active }: ProfessionalSiteProps) {
  return (
    <div
      className="mode-panel mode-panel--professional"
      aria-label={`${VIEW_LABELS.professional} portfolio`}
      aria-hidden={!active}
      inert={!active}
    >
      <section
        className="hero hero--home hero--professional"
        aria-label={`${VIEW_LABELS.professional} — introduction`}
      >
        <div className="hero__canvas" aria-hidden="true" />
        <p className="hero__watermark" aria-hidden="true">
          {VIEW_LABELS.professional}
        </p>
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">Economics · Finance</p>
            <h1>Building clear models for uncertain markets.</h1>
            <p className="lede">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pseudo copy for layout —
              replace with positioning statement and target roles.
            </p>
          </div>
        </div>
        <a className="hero__scroll" href="#professional-content">
          <span className="hero__scroll-label">Below</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </section>

      <div id="professional-content" className="mode-panel__content">
        <section className="section section--professional">
          <h2 className="section__title">Education</h2>
          <ul className="resume-entries">
            <li className="resume-entry">
              <div className="resume-entry__row">
                <h3 className="resume-entry__title">B.A. in Economics</h3>
                <span className="resume-entry__dates">20XX — 20XX (expected)</span>
              </div>
              <p className="resume-entry__org">Pseudo University · City, Country</p>
              <ul className="resume-entry__bullets">
                <li>GPA: X.XX / 4.00 · Dean’s List (placeholder)</li>
                <li>
                  Relevant coursework: Corporate Finance, Econometrics, Monetary Economics,
                  Financial Accounting
                </li>
              </ul>
            </li>
            <li className="resume-entry">
              <div className="resume-entry__row">
                <h3 className="resume-entry__title">Exchange / secondary program</h3>
                <span className="resume-entry__dates">Season 20XX</span>
              </div>
              <p className="resume-entry__org">Partner institution · City (pseudo)</p>
            </li>
          </ul>
        </section>

        <section className="section section--professional">
          <h2 className="section__title">Experience</h2>
          <ul className="resume-entries">
            <li className="resume-entry">
              <div className="resume-entry__row">
                <h3 className="resume-entry__title">Summer Analyst — Investment research</h3>
                <span className="resume-entry__dates">Jun 20XX — Aug 20XX</span>
              </div>
              <p className="resume-entry__org">Pseudo Bank · City</p>
              <ul className="resume-entry__bullets">
                <li>Built comps and summary models for coverage names (placeholder outcome).</li>
                <li>Drafted one-pagers for internal sector reviews; supported earnings prep.</li>
              </ul>
            </li>
            <li className="resume-entry">
              <div className="resume-entry__row">
                <h3 className="resume-entry__title">Research assistant</h3>
                <span className="resume-entry__dates">20XX — Present</span>
              </div>
              <p className="resume-entry__org">Department of Economics · Pseudo University</p>
              <ul className="resume-entry__bullets">
                <li>Literature review and data cleaning for faculty project (pseudo topic).</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="section section--professional">
          <h2 className="section__title">Leadership &amp; activities</h2>
          <ul className="resume-entries resume-entries--compact">
            <li className="resume-entry">
              <div className="resume-entry__row">
                <h3 className="resume-entry__title">Vice President</h3>
                <span className="resume-entry__dates">20XX — 20XX</span>
              </div>
              <p className="resume-entry__org">Economics &amp; Finance Society · Pseudo University</p>
              <ul className="resume-entry__bullets">
                <li>Organized speaker series and case workshops (pseudo scale).</li>
              </ul>
            </li>
            <li className="resume-entry">
              <div className="resume-entry__row">
                <h3 className="resume-entry__title">Case competition — finalist</h3>
                <span className="resume-entry__dates">20XX</span>
              </div>
              <p className="resume-entry__org">National M&amp;A case challenge (pseudo)</p>
            </li>
          </ul>
        </section>

        <section className="section section--professional">
          <h2 className="section__title">Projects &amp; selected work</h2>
          <div className="cards cards--professional">
            <article className="card">
              <h3>Equity research memo</h3>
              <p>Placeholder: single-name coverage, investment thesis, and key risks.</p>
            </article>
            <article className="card">
              <h3>DCF &amp; trading comps model</h3>
              <p>Placeholder — methodology, drivers, and sector assumptions.</p>
            </article>
            <article className="card">
              <h3>Policy / memo</h3>
              <p>Placeholder — brief for class or competition with recommendation.</p>
            </article>
          </div>
        </section>

        <section className="section section--professional">
          <h2 className="section__title">Skills &amp; interests</h2>
          <div className="skill-grid">
            <div className="skill-block">
              <h3 className="skill-block__label">Technical</h3>
              <p className="skill-block__text">
                Excel (advanced), financial modeling, Bloomberg Terminal (pseudo), Stata / R
                (introductory)
              </p>
            </div>
            <div className="skill-block">
              <h3 className="skill-block__label">Languages</h3>
              <p className="skill-block__text">
                English (fluent), Vietnamese (native), French (working proficiency — placeholder)
              </p>
            </div>
            <div className="skill-block">
              <h3 className="skill-block__label">Interests</h3>
              <p className="skill-block__text">
                Photography, cinema, long-distance running (pseudo — swap for real)
              </p>
            </div>
          </div>
        </section>

        <section className="section section--professional section--contact">
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
  );
}
