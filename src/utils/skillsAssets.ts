const SKILL_FILE_MAP: Record<string, string> = {
  "Node.js": "Nodejs.png",
  "C / C++": "Cpp.png",
};

const skillImages = import.meta.glob("../assets/skills/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function normalizeSkillName(name: string) {
  const mapped = SKILL_FILE_MAP[name];
  if (mapped) return mapped;

  const cleaned = name.replace(/[^a-zA-Z0-9]/g, "");
  return `${cleaned}.png`;
}

export function getSkillImage(name: string): string | undefined {
  const fileName = normalizeSkillName(name);

  const exact = skillImages[`../assets/skills/${fileName}`];
  if (exact) return exact;

  const base = fileName.replace(/\.(png|jpg|jpeg|svg|webp)$/i, "");
  const candidates = Object.entries(skillImages).find(([path]) => {
    const onlyName = path.split("/").pop()?.replace(/\.(png|jpg|jpeg|svg|webp)$/i, "") ?? "";
    return onlyName.toLowerCase() === base.toLowerCase();
  });

  return candidates ? candidates[1] : undefined;
}
