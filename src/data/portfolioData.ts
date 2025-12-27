import type { Project, Skill } from "../types/portfolio";

export const SKILLS: Skill[] = [
  { name: "React" },
  { name: "TypeScript", size: "large" },
  { name: "JavaScript", size: "large" },
  { name: "Node.js" },
  { name: "Express", size: "large" },
  { name: "MongoDB" },
  { name: "SQL" },
  { name: "Java" },
  { name: "Python" },
  { name: "C / C++", size: "large" },
  { name: "Docker", size: "large" },
  { name: "Git" },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "CWC – Content With Coffee",
    tech: "React, TypeScript, Node.js, MongoDB",
    logo: "/src/assets/CWCprojectPics/logo.png",
    githubUrl: "https://github.com/ZoharCohenDev/CWC---content-with-coffee",
    overview:
      "A social network for coffee lovers. Users sign up through a designed landing page, share coffee-related posts (with or without images), follow other profiles, edit posts and profiles, and chat with a coffee-focused smart assistant.",
    steps: [
      {
        title: "Landing Page & Sign Up",
        text:
          "Users first see a designed landing page with smooth effects/animations. From there they can sign up and create an account to start using the platform.",
        image: "/src/assets/CWCprojectPics/landing-page.png",
      },
      {
        title: "Create & Manage Posts",
        text:
          "Create coffee-related posts with images or text-only. Users can edit their posts, update content, and keep their profile feed organized.",
        image: "/src/assets/CWCprojectPics/post.png",
      },
      {
        title: "Profiles & Following",
        text:
          "Each user has a profile page. You can follow other coffee lovers and build a feed around people and content you like.",
        image: "/src/assets/CWCprojectPics/profile.png",
      },
      {
        title: "Coffee-Only Smart Chat",
        text:
          "A built-in smart chat assistant focused only on coffee: recommendations, brewing tips, beans, gear, flavors, and anything coffee related.",
        image: "/src/assets/CWCprojectPics/feed.png",
      },
    ],
  },
  {
    id: "p2",
    name: "CVGo",
    tech: "React, TypeScript, Node.js",
    logo: undefined,
    githubUrl: "",
    overview: "AI resume builder and job tracking concept: generate a CV and manage your pipeline in one place.",
    steps: [
      { title: "Profile and Inputs", text: "Explain what the user fills in.", image: undefined },
      { title: "CV Generation", text: "Explain how the CV is generated.", image: undefined },
      { title: "Job Tracking", text: "Explain the tracking flow.", image: undefined },
    ],
  },
  {
    id: "p3",
    name: "InboxHub",
    tech: "Node.js, APIs, Integrations",
    logo: undefined,
    githubUrl: "",
    overview: "Unified inbox concept: organize important emails, keep statuses updated, and search everything fast.",
    steps: [
      { title: "Connect Accounts", text: "Explain the connection flow.", image: undefined },
      { title: "Smart Sorting", text: "Explain the sorting and tagging logic.", image: undefined },
      { title: "Status Updates", text: "Explain how statuses are tracked.", image: undefined },
    ],
  },
];
