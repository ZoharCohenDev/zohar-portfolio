export default function Splash({ hide }: { hide: boolean }) {
  return (
    <div className={`splash ${hide ? "splashHide" : ""}`}>
      <div className="splashInner">
        <div className="splashTitle">Portfolio Website</div>
        <div className="splashSub">Welcome to</div>
        <div className="splashBig">Zohar’s Portfolio</div>
        <div className="splashDots">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="splashGlow" />
    </div>
  );
}
