import { useEffect, useMemo, useState } from "react";
import Modal from "../components/Modal";
import { scrollToId } from "../utils/scroll";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calc = () => setIsMobile(window.matchMedia("(max-width: 820px)").matches);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return isMobile;
}

function PdfModal({
  open,
  title,
  src,
  onClose,
}: {
  open: boolean;
  title: string;
  src: string;
  onClose: () => void;
}) {
  const isMobile = useIsMobile();

  return (
    <Modal open={open} title={title} onClose={onClose}>
      <div className="cvModalBody">
        {!isMobile ? (
          <iframe className="cvFrame" src={src} title={title} />
        ) : (
          <div className="pdfMobileCard">

            <div className="pdfMobileBtns">
              <a className="btn" href={src} target="_blank" rel="noreferrer">
                Open full screen
              </a>
              <a className="btn ghost" href={src} download>
                Download PDF
              </a>
            </div>
          </div>
        )}

        {/* <div className="cvActions">
          <a className="btn ghost" href={src} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
          <a className="btn" href={src} download>
            Download PDF
          </a>
        </div> */}
      </div>
    </Modal>
  );
}

export default function Hero({ gmailHref }: { gmailHref: string }) {
  const [cvOpen, setCvOpen] = useState(false);
  const [gradeSheetOpen, setGradeSheetOpen] = useState(false);

  const cvSrc = useMemo(() => "/ZoharCV.pdf", []);
  const gradeSheetSrc = useMemo(() => "/GradeSheet.pdf", []);

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
              Software is easy to write. <br />
              Good software is harder.<br />
              That’s the part I care about and continue to specialize in.<br />
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
                <div className="rtSub">
                  Projects, experience, and my tech stack, built with clean design and smooth interactions.
                </div>
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

      <PdfModal open={cvOpen} title="Resume" src={cvSrc} onClose={() => setCvOpen(false)} />
      <PdfModal
        open={gradeSheetOpen}
        title="Grade Sheet"
        src={gradeSheetSrc}
        onClose={() => setGradeSheetOpen(false)}
      />
    </>
  );
}
