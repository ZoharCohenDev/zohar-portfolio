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
    name: "Code Visualizer",
    tech: "React, TypeScript",
    logo: "/src/assets/Code-VisualizerProject/logo.png",
    githubUrl: "",
    overview:
      "Interactive code visualizer for students: run code step-by-step and see what happens behind the scenes with variables, console output, recursion stack, and visual data structures.",
    steps: [
      {
        title: "Code Arsenal (ready examples)",
        text:
          "An arsenal of code snippets you can search and paste into the editor, then run and step through to understand what the code is doing behind the scenes.",
        image: "/src/assets/Code-VisualizerProject/arsenal.png",
      },
      {
        title: "Recursion Trace (call-by-call)",
        text:
          "Pick a recursive example and watch it call-by-call: see every function call, the current stack, where it enters, and what it returns.",
        image: "/src/assets/Code-VisualizerProject/recursive.png",
      },
      {
        title: "Visual Data Structures",
        text:
          "Visual examples of core data structures like Stack, Queue, BinaryTree, and Array, drawn on screen so the logic is easier to understand.",
        image: "/src/assets/Code-VisualizerProject/tree.png",
      },
      {
        title: "Step-by-step Execution",
        text:
          "Run and step through code to see variables change in real time and watch the console output update as the program executes.",
        image: "/src/assets/Code-VisualizerProject/stack+code.png",
      },
      {
        title: "Multiple Data Structures Together",
        text:
          "Supports multiple data structures in the same run and lets you view them together to understand how they interact in one program.",
        image: "/src/assets/Code-VisualizerProject/multi-structures.png",
      },
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
