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

  const waPhone = "972526402708";
  const waText = "Hi Zohar, I came from your portfolio and I’d love to connect.";
  const whatsappHref = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;

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

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="whatsappFloat"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
          <path d="M16.02 3C9.38 3 4 8.38 4 15.02c0 2.64.86 5.08 2.32 7.06L5 29l7.1-1.86a12.93 12.93 0 0 0 3.92.6c6.64 0 12.02-5.38 12.02-12.02C28.04 8.38 22.66 3 16.02 3zm0 22.1c-1.26 0-2.5-.24-3.66-.7l-.26-.1-4.22 1.1 1.12-4.1-.18-.26a9.06 9.06 0 1 1 7.2 4.06zm5.26-6.9c-.28-.14-1.66-.82-1.92-.92-.26-.1-.46-.14-.66.14-.2.28-.76.92-.94 1.1-.18.18-.36.2-.64.06-.28-.14-1.2-.44-2.28-1.4-.84-.74-1.4-1.66-1.56-1.94-.16-.28-.02-.44.12-.58.12-.12.28-.3.42-.46.14-.16.18-.28.28-.46.1-.18.06-.34-.02-.48-.08-.14-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.18 0-.48.06-.74.34-.26.28-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.9.14.18 1.98 3.02 4.8 4.24.66.28 1.18.44 1.58.56.66.2 1.26.18 1.74.1.54-.08 1.66-.68 1.9-1.34.24-.66.24-1.22.18-1.34-.06-.12-.26-.18-.54-.32z" />
        </svg>
      </a>
    </div>
  );
}
