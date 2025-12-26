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
  const experienceIntro =
    "I worked as a Full Stack Developer at Smarketing, a venture founded by five entrepreneurs as part of a college project that we decided to take all the way to a real product.\n\n" +
    "We didn’t treat it like a “demo” - we built an end to end marketing platform focused on helping businesses create campaigns and generate high-converting landing pages quickly. As the product matured, we pushed it forward beyond the academic scope, validated the direction with real feedback, and presented the venture on an investor TV show (sharks Tank) as part of our funding and growth efforts.\n\n" +
    "My role was hands on across the entire stack. I owned the generic landing page generator from start to finish - the data structure, the UI experience, and the logic that turns campaign/business inputs into a complete landing page. In addition, I was responsible for building and polishing the website pages, the overall UI/UX, responsiveness, and the design system that keeps everything consistent and professional.";

  const flowItems: ExperienceFlowItem[] = [
    {
      title: "Step 1 — Campaign & business inputs",
      text: "The process starts when a user defines the campaign goal, audience, and business details. These inputs become the structured foundation for all generated content and layout decisions.",
    },
    {
      title: "Step 2 — Content generation & tone control",
      text: "Based on the marketing tone and campaign purpose, the system generates section copy that matches the style and intent - then allows refinement and iteration.",
    },
    {
      title: "Step 3 — Layout templates + design system",
      text: "The platform maps content into reusable, responsive templates. Colors, typography, spacing, and component styling stay consistent through a shared design system.",
    },
    {
      title: "Step 4 — Landing page assembly",
      text: "All sections are assembled into a complete page: hero, features, reviews, gallery, and contact. The output is a full landing page, ready to preview and publish.",
    },
    {
      title: "Step 5 — Preview, edit, and iterate",
      text: "Users can reorder sections, edit text, swap visuals, and adjust styles. The builder keeps the experience fast and prevents breaking the layout.",
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
                      <div className="bulletText">Co-founded and built the product as part of a team of five entrepreneurs - from concept to a working platform.</div>
                    </div>
                    <div className="bulletRow">
                      <div className="bulletDot" />
                      <div className="bulletText">Took the venture beyond the college scope, improved it through iterations, and presented it in a sharks Tank investor TV pitch.</div>
                    </div>
                    <div className="bulletRow">
                      <div className="bulletDot" />
                      <div className="bulletText">Owned the landing page generator and delivered the UI/UX across the product with a strong focus on design, responsiveness, and performance.</div>
                    </div>
                  </div>

                  <div className="mutedTiny">
                    Next: you can attach screenshots to the flow below and turn this into a full “system walkthrough” chain with visual steps.
                  </div>
                </div>

                <div className="expFlowCard" data-reveal>
                  <div className="flowTitle">How the system works</div>
                  <div className="flowSub">A visual chain you can expand with screenshots - each step leads to the next.</div>

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
                                <img className="flowImg" src={it.image} alt={it.title} />
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

                  <div className="mutedTiny">
                    When you’re ready, we’ll add image uploads per step and make the chain animated (scroll reveal + subtle connector motion).
                  </div>
                </div>
              </div>
            ) : null}

            {activeTab === "skills" ? (
              <div>
                <div className="skillsTop" data-reveal>
                  <div className="skillsTitle">Tech Stack</div>
                  <div className="skillsSub">Logos are loaded automatically from src/assets/skills.</div>
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
                  <div className="skillsSub">Three projects. Click any card to open a full walkthrough popup.</div>
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
    </section>
  );
}
