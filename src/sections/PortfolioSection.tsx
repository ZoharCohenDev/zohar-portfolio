import { useEffect, useState } from "react";
import type { Project, Skill, ActiveTab } from "../types/portfolio";
import TabSwitch from "../components/TabSwitch";
import SkillTile from "../components/SkillTile";
import ProjectCard from "../components/ProjectCard";
import landingPageImg from "../assets/SmarketingPics/landing-page.png";
import registerImg from "../assets/SmarketingPics/Register.png";
import createCampaignImg from "../assets/SmarketingPics/createCampaign.png";
import buildLPImg from "../assets/SmarketingPics/buildLP.png";
import analyticsImg from "../assets/SmarketingPics/analythics.png";
import lpImg from "../assets/SmarketingPics/LP.png";

import smarketingImg from "../assets/projectsLogo/Smarketing.png";

type ExperienceFlowItem = {
  title: string;
  text: string;
  image?: string;
};

export default function PortfolioSection({
  activeTab,
  onChangeTab,
  transitionKey,
  skills,
  projects,
  onOpenProject,
  onSetProjectLogo,
  onSetProjectGithub,
}: {
  activeTab: ActiveTab;
  onChangeTab: (t: ActiveTab) => void;
  transitionKey: number;
  skills: Skill[];
  projects: Project[];
  onOpenProject: (id: string) => void;
  onSetProjectLogo: (projectId: string, file?: File) => void;
  onSetProjectGithub: (projectId: string, url: string) => void;
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

  const experienceIntro =
    "Smarketing - Full Stack Developer - Final Project\n\n" +
    "End to end marketing automation platform for creating, managing, and optimizing digital campaigns.\n\n" +
    "Led system design and full development from concept to a production ready platform.\n\n" +
    "Selected for a competitive entrepreneurship program and presented on the Shark Tank TV show as the only team representing the college.\n\n" +
    "Tech: React, TypeScript, Node.js, Express, MongoDB.";


  const flowItems: ExperienceFlowItem[] = [
    {
      title: "Product landing page",
      text:"",
      image: landingPageImg,
    },
    {
      title: "Campaign & business inputs",
      text:"",
      image: registerImg,
    },
    {
      title: "Content generation & tone control",
      text:"",
      image: createCampaignImg,
    },
    {
      title: "Layout templates & design system",
      text:"",
      image: buildLPImg,
    },
    {
      title: "Landing page analytics",
      text:"",
      image: analyticsImg,
    },
    {
      title: "Preview, edit, and iterate",
      text:"",
      image: lpImg,
    },
  ];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="sectionHead" data-reveal>
          <div className="kicker">Portfolio</div>
          <h2 className="titleBig">Portfolio Showcase</h2>
        </div>

        <TabSwitch active={activeTab} onChange={onChangeTab} />

        <div className="panelWrap" key={transitionKey}>
          <div className="panel">
            {activeTab === "experience" ? (
              <div className="experienceLayout">
                <div className="expStoryCard" data-reveal>
                  <div className="expBrand">
                    <div className="brandLogoWrap">
                      <img className="brandLogo" src={smarketingImg} alt="Smarketing logo" />
                    </div>

                    <div className="brandMeta">
                      <div className="brandTitle">Smarketing</div>
                      <div className="brandSub">Full-Stack Developer · Venture Team (5 founders)</div>
                    </div>
                  </div>

                  <div className="expBigText">
                    {experienceIntro.split("\n\n").map((p, i) => (
                      <p key={`exp-p-${i}`}>{p}</p>
                    ))}
                  </div>

                  <div className="expBullets">
                    <div className="bulletRow">
                      <div className="bulletDot" />
                      <div className="bulletText">
                        Co-founded and built the product as part of a team of five entrepreneurs - from concept to a working platform.
                      </div>
                    </div>
                    <div className="bulletRow">
                      <div className="bulletDot" />
                      <div className="bulletText">
                        Took the venture beyond the college scope, improved it through iterations, and presented it in a sharks Tank investor TV pitch.
                      </div>
                    </div>
                    <div className="bulletRow">
                      <div className="bulletDot" />
                      <div className="bulletText">
                        Owned the landing page generator and delivered the UI/UX across the product with a strong focus on design, responsiveness, and performance.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="expFlowCard" data-reveal>
                  <div className="flowTitle">How the system works</div>

                  <div className="flowList">
                    {flowItems.map((it, idx) => (
                      <div className="flowRow" key={`flow-${idx}`}>
                        <div className="flowLine" aria-hidden="true" />
                        <div className="flowNode" aria-hidden="true">
                          {String(idx + 1).padStart(2, "0")}
                        </div>

                        <div className="flowContent">
                          <div className="flowHeader">
                            <div className="flowItemTitle">{it.title}</div>
                          </div>

                          <div className="flowBody">
                            <div className="flowImgWrap">
                              {it.image ? (
                                <img
                                  className="flowImg clickable"
                                  src={it.image}
                                  alt={it.title}
                                  onClick={() => setOpenImage(it.image!)}
                                />
                              ) : (
                                <div className="flowImgFallback">Add screenshot</div>
                              )}
                            </div>

                            <div className="flowText">{it.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "skills" ? (
              <div>
                <div className="skillsTop" data-reveal>
                  <div className="skillsTitle">Tech Stack</div>
                </div>

                <div className="skillsShowcase">
                  {skills.map((s) => (
                    <div key={s.name} className="skillSlot">
                      <SkillTile s={s} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {activeTab === "projects" ? (
              <div>
                <div className="projTopLine" data-reveal>
                  <div className="skillsTitle">Projects</div>
                </div>

                <div className="projGrid">
                  {projects.map((p) => (
                    <ProjectCard
                      key={p.id}
                      p={p}
                      onOpen={() => onOpenProject(p.id)}
                      onSetLogo={(file) => onSetProjectLogo(p.id, file)}
                      onSetGithub={(url) => onSetProjectGithub(p.id, url)}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

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
    </section>
  );
}
