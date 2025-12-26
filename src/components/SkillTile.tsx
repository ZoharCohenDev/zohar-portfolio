import type { Skill } from "../types/portfolio";
import { getSkillImage } from "../utils/skillsAssets";

export default function SkillTile({ s }: { s: Skill }) {
  const autoLogo = getSkillImage(s.name);
  const src = s.logo ?? autoLogo;
  const sizeClass = s.size === "large" ? "skillTileLarge" : "";

  return (
    <div className={`skillTile ${sizeClass}`} data-reveal>
      <div className="skillLogoWrap">
        {src ? (
          <img className="skillLogo" src={src} alt={s.name} loading="lazy" />
        ) : (
          <div className="skillLogoFallback">{s.name.slice(0, 2).toUpperCase()}</div>
        )}
      </div>
      <div className="skillLabel">{s.name}</div>
    </div>
  );
}
