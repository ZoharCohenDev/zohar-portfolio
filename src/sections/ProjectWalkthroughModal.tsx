import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import type { Project } from "../types/portfolio";

export default function ProjectWalkthroughModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
  onSetLogo: (file?: File) => void;
  onSetGithub: (url: string) => void;
  onSetOverview: (text: string) => void;
  onSetStep: (idx: number, patch: { title?: string; text?: string }) => void;
  onSetStepImage: (idx: number, file?: File) => void;
}) {
  const [openImage, setOpenImage] = useState<string | null>(null);

  useEffect(() => {
    if (!openImage) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImage(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openImage]);

  useEffect(() => {
    if (!project) setOpenImage(null);
  }, [project]);

  return (
    <Modal open={!!project} title={project ? `${project.name} walkthrough` : ""} onClose={onClose}>
      {project ? (
        <div className="walk">
          <div className="walkHeader">
            <div className="walkLeft">
              <div className="walkName">{project.name}</div>
              <div className="walkTech">{project.tech}</div>
            </div>
          </div>

          <textarea className="projOverview" value={project.overview} readOnly />

          <div className="snakeWrap">
            <svg className="snakeSvg" viewBox="0 0 1000 1200" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M 140 40 C 420 160, 580 160, 860 280 C 580 400, 420 400, 140 520 C 420 640, 580 640, 860 760 C 580 880, 420 880, 140 1000 C 420 1120, 580 1120, 860 1160"
                fill="none"
                className="snakePath"
              />
            </svg>

            <div className="steps">
              {project.steps.map((s, idx) => {
                const align = idx % 2 === 0 ? "left" : "right";
                return (
                  <div className={`stepRow ${align}`} key={`${project.id}-step-${idx}`}>
                    <div className="stepCard">
                      <div className="stepTop">
                        <div className="stepIndex">{String(idx + 1).padStart(2, "0")}</div>
                        <input className="stepTitle" value={s.title} readOnly />
                      </div>

                      <div className="stepBody">
                        <div className="stepImgWrap">
                          {s.image ? (
                            <img
                              className="stepImg clickable"
                              src={s.image}
                              alt={s.title}
                              onClick={() => setOpenImage(s.image!)}
                            />
                          ) : (
                            <div className="stepImgFallback">Upload screenshot</div>
                          )}
                        </div>

                        <textarea className="stepText" value={s.text} readOnly />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {openImage && (
        <div className="imageOverlay" onClick={() => setOpenImage(null)}>
          <img
            src={openImage}
            alt="Preview"
            className="imageOverlayImg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Modal>
  );
}
