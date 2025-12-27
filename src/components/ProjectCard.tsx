import type { Project } from "../types/portfolio";

export default function ProjectCard({
  p,
  onOpen,
}: {
  p: Project;
  onOpen: () => void;
  onSetLogo?: (file?: File) => void;
  onSetGithub?: (url: string) => void;
}) {
  const isCWC = p.id === "p1";

  const cwcWebGithub = "https://github.com/ZoharCohenDev/CWC---content-with-coffee";
  const cwcMobileGithub = "https://github.com/ZoharCohenDev/CWC---mobile";

  const safeGithub = (isCWC ? cwcWebGithub : p.githubUrl)?.trim() || "#";
  const githubDisabled = safeGithub === "#";

  return (
    <div className="projCard" data-reveal onClick={onOpen} role="button" tabIndex={0}>
      <div className="projTop">
        <div className="projLogoWrap">
          {p.logo ? (
            <img className="projLogo" src={p.logo} alt={`${p.name} logo`} />
          ) : (
            <div className="projLogoFallback">LOGO</div>
          )}
        </div>

        <div className="projMeta">
          <div className="projName">{p.name}</div>
          <div className="projTech">{p.tech}</div>
        </div>
      </div>

      <div className="projDesc">{p.overview}</div>

      <div className="projBottom" onClick={(e) => e.stopPropagation()}>
        <a
          className={`btn small ${githubDisabled ? "disabled" : ""}`}
          href={githubDisabled ? undefined : safeGithub}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            if (githubDisabled) e.preventDefault();
          }}
        >
          GitHub
        </a>

        {isCWC && (
          <a className="btn small" href={cwcMobileGithub} target="_blank" rel="noreferrer">
            Mobile
          </a>
        )}
      </div>

      <div className="projHint">Click to open full walkthrough</div>
      <div className="projGlow" aria-hidden="true" />
    </div>
  );
}
