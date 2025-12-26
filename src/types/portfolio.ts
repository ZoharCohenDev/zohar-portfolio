export type ActiveTab = "experience" | "skills" | "projects";

export type Skill = {
  name: string;
  logo?: string;
  size?: "normal" | "large";
};

export type ProjectStep = {
  title: string;
  text: string;
  image?: string;
};

export type Project = {
  id: string;
  name: string;
  tech: string;
  logo?: string;
  githubUrl: string;
  overview: string;
  steps: ProjectStep[];
};
