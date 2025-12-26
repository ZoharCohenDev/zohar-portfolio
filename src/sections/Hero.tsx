import { useState } from "react";
import Modal from "../components/Modal";
import { scrollToId } from "../utils/scroll";

export default function Hero({ gmailHref }: { gmailHref: string }) {
  const [cvOpen, setCvOpen] = useState(false);
  const cvSrc = "/ZoharCV.pdf";
  const [gradeSheetOpen, setGradeSheetOpen] = useState(false);
  const gradeSheetSrc = "/GradeSheet.pdf";
  // const linkedinHref = "https://www.linkedin.com/in/zohar-cohen-b9832b271/";
  // const githubHref = "https://github.com/ZoharCohenDev";

  return (
    <>
      <section className="heroFull" id="about">
        <div className="heroBg" aria-hidden="true">
          <div className="heroBlob hb1" />
          <div className="heroBlob hb2" />
          <div className="heroGrid" />
        </div>

        <div className="heroContent">
          <div className="heroLeft" data-reveal>
            <div className="pill">
              <span className="badgeMark" />
              Full-Stack Developer | Software Engineer
            </div>

            <h1 className="heroH1">
              Hi, I’m <span className="grad">Zohar Cohen</span>.
              <br />
              Full-Stack Developer | Software Engineer
            </h1>

            <p className="heroLead">
              Software is easy to write. <br/>
              Good software is harder.<br/>
              That’s the part I care about and continue to specialize in.<br/>
              Computer Science B.Sc. graduate, M.Sc. student.
            </p>

            <div className="heroCtas">
              <button className="btn" onClick={() => scrollToId("portfolio")}>
                View portfolio
              </button>

              <button className="btn ghost" onClick={() => setCvOpen(true)}>
                View CV
              </button>

              <button className="btn ghost" onClick={() => setGradeSheetOpen(true)}>
                Grade Sheet
              </button>

              {/* <a className="btn ghost" href={linkedinHref} target="_blank" rel="noreferrer">
                LinkedIn
              </a>

              <a className="btn ghost" href={githubHref} target="_blank" rel="noreferrer">
                GitHub
              </a> */}

              <a className="btn ghost" href={gmailHref} target="_blank" rel="noreferrer">
                Send Email
              </a>
            </div>


            <div className="heroMini">
              <div className="miniCard">
                <div className="miniBig">React</div>
                <div className="miniSmall">UI + UX</div>
              </div>
              <div className="miniCard">
                <div className="miniBig">TypeScript</div>
                <div className="miniSmall">Strong typing</div>
              </div>
              <div className="miniCard">
                <div className="miniBig">Node</div>
                <div className="miniSmall">APIs</div>
              </div>
              <div className="miniCard">
                <div className="miniBig">Java</div>
                <div className="miniSmall">programming language</div>
              </div>
            </div>
          </div>

          <div className="heroRight" data-reveal>
            <div className="rightArt">
              <div className="orb o1" />
              <div className="orb o2" />
              <div className="orb o3" />
              <div className="ring r1" />
              <div className="ring r2" />
              <div className="scan" />
              <div className="rightText">
                <div className="rtTitle">Portfolio Showcase</div>
                <div className="rtSub">Projects, experience, and my tech stack, built with clean design and smooth interactions.</div>
              </div>
              <div className="rightGlow" />
            </div>
          </div>
        </div>

        <div className="scrollHint" aria-hidden="true">
          <div className="mouse">
            <div className="wheel" />
          </div>
          <div className="hintText">Scroll</div>
        </div>
      </section>

      <Modal open={cvOpen} title="Resume" onClose={() => setCvOpen(false)}>
        <div className="cvModalBody">
          <iframe className="cvFrame" src={cvSrc} title="CV" />
          <div className="cvActions">
            <a className="btn ghost" href={cvSrc} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <a className="btn" href={cvSrc} download>
              Download PDF
            </a>
          </div>
        </div>
      </Modal>

      <Modal open={gradeSheetOpen} title="Grade Sheet" onClose={() => setGradeSheetOpen(false)}>
        <div className="cvModalBody">
          <iframe className="cvFrame" src={gradeSheetSrc} title="Grade Sheet" />
          <div className="cvActions">
            <a className="btn ghost" href={gradeSheetSrc} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <a className="btn" href={gradeSheetSrc} download>
              Download PDF
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}
