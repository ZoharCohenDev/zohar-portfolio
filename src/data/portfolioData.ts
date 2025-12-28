import type { Project, Skill } from "../types/portfolio";
import landingPageImg from "../assets/CWCprojectPics/landing-page.png"
import postImg from "../assets/CWCprojectPics/post.png"
import profileImg from "../assets/CWCprojectPics/profile.png"
import feedImg from "../assets/CWCprojectPics/feed.png"
import arsenalImg from "../assets/Code-VisualizerProject/arsenal.png"
import recursiveImg from "../assets/Code-VisualizerProject/recursive.png"
import treeImg from "../assets/Code-VisualizerProject/tree.png"
import stackCodeImg from "../assets/Code-VisualizerProject/stack+code.png"
import multiStructuresImg from "../assets/Code-VisualizerProject/multi-structures.png"
import CWClogoImg from "../assets/CWCprojectPics/logo.png";
import codeVisualizerLogoImg from "../assets/Code-VisualizerProject/logo.png";
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
    logo: CWClogoImg,
    githubUrl: "https://github.com/ZoharCohenDev/CWC---content-with-coffee",
    overview:
      "A social network for coffee lovers. Users sign up through a designed landing page, share coffee-related posts (with or without images), follow other profiles, edit posts and profiles, and chat with a coffee-focused smart assistant.",
    steps: [
      {
        title: "Landing Page & Sign Up",
        text:
          "Users first see a designed landing page with smooth effects/animations. From there they can sign up and create an account to start using the platform.",
        image: landingPageImg,
      },
      {
        title: "Create & Manage Posts",
        text:
          "Create coffee-related posts with images or text-only. Users can edit their posts, update content, and keep their profile feed organized.",
        image: postImg,
      },
      {
        title: "Profiles & Following",
        text:
          "Each user has a profile page. You can follow other coffee lovers and build a feed around people and content you like.",
        image: profileImg,
      },
      {
        title: "Coffee-Only Smart Chat",
        text:
          "A built-in smart chat assistant focused only on coffee: recommendations, brewing tips, beans, gear, flavors, and anything coffee related.",
        image: feedImg,
      },
    ],
  },
  {
    id: "p2",
    name: "Code Visualizer",
    tech: "React, TypeScript",
    logo: codeVisualizerLogoImg,
    githubUrl: "https://github.com/ZoharCohenDev/code-visualizer",
    overview:
      "Interactive code visualizer for students: run code step-by-step and see what happens behind the scenes with variables, console output, recursion stack, and visual data structures.",
    steps: [
      {
        title: "Code Arsenal (ready examples)",
        text:
          "An arsenal of code snippets you can search and paste into the editor, then run and step through to understand what the code is doing behind the scenes.",
        image: arsenalImg,
      },
      {
        title: "Recursion Trace (call-by-call)",
        text:
          "Pick a recursive example and watch it call-by-call: see every function call, the current stack, where it enters, and what it returns.",
        image: recursiveImg,
      },
      {
        title: "Visual Data Structures",
        text:
          "Visual examples of core data structures like Stack, Queue, BinaryTree, and Array, drawn on screen so the logic is easier to understand.",
        image: treeImg,
      },
      {
        title: "Step-by-step Execution",
        text:
          "Run and step through code to see variables change in real time and watch the console output update as the program executes.",
        image: stackCodeImg,
      },
      {
        title: "Multiple Data Structures Together",
        text:
          "Supports multiple data structures in the same run and lets you view them together to understand how they interact in one program.",
        image: multiStructuresImg,
      },
    ],
  },
];
