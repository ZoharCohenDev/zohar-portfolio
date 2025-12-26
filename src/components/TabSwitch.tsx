import type { ActiveTab } from "../types/portfolio";

export default function TabSwitch({
  active,
  onChange,
}: {
  active: ActiveTab;
  onChange: (t: ActiveTab) => void;
}) {
  return (
    <div className="tabBar" data-reveal>
      <button className={`tabBtn ${active === "experience" ? "active" : ""}`} onClick={() => onChange("experience")}>
        Experience
      </button>
      <button className={`tabBtn ${active === "skills" ? "active" : ""}`} onClick={() => onChange("skills")}>
        Skills
      </button>
      <button className={`tabBtn ${active === "projects" ? "active" : ""}`} onClick={() => onChange("projects")}>
        Projects
      </button>
    </div>
  );
}
