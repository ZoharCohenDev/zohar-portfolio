export default function Footer({
  linkedInUrl,
  githubUrl,
  gmailHref,
}: {
  linkedInUrl: string;
  githubUrl: string;
  gmailHref: string;
  mailtoHref: string;
}) {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="footerLeft">
          <div className="footerTitle">Let’s connect</div>
          <div className="footerSub">LinkedIn, GitHub, and Email</div>
        </div>

        <div className="footerBtns">
          <a className="btn ghost" href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn ghost" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn" href={gmailHref} target="_blank" rel="noreferrer">
            Send Email
          </a>
        </div>
      </div>
    </footer>
  );
}
