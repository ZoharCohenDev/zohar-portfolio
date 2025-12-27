import { useEffect, useState } from "react";
import "./styles.css";

import Splash from "./components/Splash";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import PortfolioSection from "./sections/PortfolioSection";
import ProjectWalkthroughModal from "./sections/ProjectWalkthroughModal";

import { useRevealOnScroll } from "./utils/reveal";
import { enc } from "./utils/enc";

import type { ActiveTab, Project, ProjectStep } from "./types/portfolio";
import { INITIAL_PROJECTS, SKILLS } from "./data/portfolioData";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  const [activeTab, setActiveTab] = useState<ActiveTab>("experience");
  const [transitionKey, setTransitionKey] = useState(0);

  useRevealOnScroll(transitionKey);

  useEffect(() => {
    const t1 = window.setTimeout(() => setHideSplash(true), 2600);
    const t2 = window.setTimeout(() => setShowSplash(false), 3200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  const LINKEDIN_URL = "https://www.linkedin.com/in/zohar-cohen-b9832b271/";
  const GITHUB_URL = "https://github.com/ZoharCohenDev";
  const YOUR_EMAIL = "matancz99@gmail.com";

  const mailSubject = "Portfolio — Zohar Cohen";
  const mailBody = "Hi Zohar,\n\nI visited your portfolio and I’d love to connect.\n\nMy name:\nCompany:\nRole:\n\nBest,\n";

  const mailtoHref = `mailto:${YOUR_EMAIL}?subject=${enc(mailSubject)}&body=${enc(mailBody)}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(YOUR_EMAIL)}&su=${enc(mailSubject)}&body=${enc(mailBody)}`;

  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  const currentProject = projects.find((p) => p.id === openProjectId) || null;

  const setProjectLogo = (projectId: string, file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProjects((prev) => prev.map((p) => (p.id === projectId ? { ...p, logo: url } : p)));
  };

  const setProjectGithub = (projectId: string, url: string) => {
    setProjects((prev) => prev.map((p) => (p.id === projectId ? { ...p, githubUrl: url } : p)));
  };

  const setProjectOverview = (projectId: string, text: string) => {
    setProjects((prev) => prev.map((p) => (p.id === projectId ? { ...p, overview: text } : p)));
  };

  const setProjectStep = (projectId: string, idx: number, patch: Partial<ProjectStep>) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p;
        const nextSteps = p.steps.map((s, i) => (i === idx ? { ...s, ...patch } : s));
        return { ...p, steps: nextSteps };
      })
    );
  };

  const setProjectStepImage = (projectId: string, idx: number, file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setProjectStep(projectId, idx, { image: url });
  };

  const changeTab = (t: ActiveTab) => {
    setActiveTab(t);
    setTransitionKey((k) => k + 1);
  };

  return (
    <div className="page">
      {showSplash ? <Splash hide={hideSplash} /> : null}

      <Hero gmailHref={gmailHref} />

      <PortfolioSection
        activeTab={activeTab}
        onChangeTab={changeTab}
        transitionKey={transitionKey}
        skills={SKILLS}
        projects={projects}
        onOpenProject={(id) => setOpenProjectId(id)}
        onSetProjectLogo={setProjectLogo}
        onSetProjectGithub={setProjectGithub}
      />

      <Footer linkedInUrl={LINKEDIN_URL} githubUrl={GITHUB_URL} gmailHref={gmailHref} mailtoHref={mailtoHref} />

      <ProjectWalkthroughModal
        project={currentProject}
        onClose={() => setOpenProjectId(null)}
        onSetLogo={(file) => setProjectLogo(currentProject?.id ?? "", file)}
        onSetGithub={(url) => setProjectGithub(currentProject?.id ?? "", url)}
        onSetOverview={(text) => setProjectOverview(currentProject?.id ?? "", text)}
        onSetStep={(idx, patch) => setProjectStep(currentProject?.id ?? "", idx, patch)}
        onSetStepImage={(idx, file) => setProjectStepImage(currentProject?.id ?? "", idx, file)}
      />
    </div>
  );
}
