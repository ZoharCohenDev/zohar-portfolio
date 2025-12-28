import { useEffect, useState } from "react";
import type { Project, Skill, ActiveTab } from "../types/portfolio";
import TabSwitch from "../components/TabSwitch";
import SkillTile from "../components/SkillTile";
import ProjectCard from "../components/ProjectCard";

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
    "I worked as a Full Stack Developer at Smarketing, a venture founded by five entrepreneurs as part of a college project that we decided to take all the way to a real product.\n\n" +
    "We didn’t treat it like a “demo” - we built an end to end marketing platform focused on helping businesses create campaigns and generate high-converting landing pages quickly. As the product matured, we pushed it forward beyond the academic scope, validated the direction with real feedback, and presented the venture on an investor TV show (sharks Tank) as part of our funding and growth efforts.\n\n" +
    "My role was hands on across the entire stack. I owned the generic landing page generator from start to finish - the data structure, the UI experience, and the logic that turns campaign/business inputs into a complete landing page. In addition, I was responsible for building and polishing the website pages, the overall UI/UX, responsiveness, and the design system that keeps everything consistent and professional.";

  const flowItems: ExperienceFlowItem[] = [
    {
      title: "Step 0 — Product landing page",
      text:
        "The journey starts with a public marketing landing page that introduces Smarketing as a product. It explains the value, shows the core capabilities, and drives users to sign up. This page was designed to convert visitors into active users.",
      image: "/src/assets/SmarketingPics/landing-page.png",
    },
    {
      title: "Step 1 — Campaign & business inputs",
      text:
        "After signing up, users define their campaign goals, target audience, and business details. These inputs are structured and validated to serve as the foundation for all generated content. Every later decision in the system is based on this data.",
      image: "/src/assets/SmarketingPics/Register.png",
    },
    {
      title: "Step 2 — Content generation & tone control",
      text:
        "Based on the campaign purpose and selected marketing tone, the system generates copy for each landing page section. Users can tweak wording, regenerate content, and adjust tone without breaking structure. This keeps content flexible but controlled.",
      image: "/src/assets/SmarketingPics/createCampaign.png",
    },
    {
      title: "Step 3 — Layout templates & design system",
      text:
        "Generated content is mapped into responsive layout templates built on a shared design system. Colors, typography, spacing, and components stay consistent across pages. This allows fast generation without sacrificing visual quality.",
      image: "/src/assets/SmarketingPics/buildLP.png",
    },
    {
      title: "Step 4 — Landing page analytics",
      text:
        "Once the landing page is live, the system tracks performance and engagement metrics. These insights help users understand how their campaign performs and where improvements are needed. Analytics close the loop between content and results.",
      image: "/src/assets/SmarketingPics/analythics.png",
    },
    {
      title: "Step 5 — Preview, edit, and iterate",
      text:
        "Users can preview the full landing page, reorder sections, replace images, and fine-tune text. The builder prevents layout-breaking changes while keeping iteration fast. This makes continuous improvement simple and safe.",
      image: "/src/assets/SmarketingPics/LP.png",
    },
  ];

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="sectionHead" data-reveal>
          <div className="kicker">Portfolio</div>
          <h2 className="titleBig">Portfolio Showcase</h2>
          <p className="subText">
            Explore my journey through projects, experience, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
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
