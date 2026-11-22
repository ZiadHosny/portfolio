export const site = {
  name: "Ziad Hosny",
  title: "Full-Stack Software Engineer",
  url: "https://www.ziadhosny.com",
  country: "Egypt",
  countryCode: "EG",
  email: "ziadhosny007@gmail.com",
  resume: "/ZiadHosny.pdf",
  photo: "/images/ziad.jpg",
  photoSquare: "/images/ziad-400.jpg",
  description:
    "Ziad Hosny is a Full-Stack Software Engineer from Egypt with 5+ years of experience building scalable back-end systems with Node.js, NestJS and PostgreSQL, and modern web apps with React, Next.js and TypeScript.",
  shortDescription:
    "Full-Stack Software Engineer from Egypt with 5+ years of experience in Node.js, NestJS, PostgreSQL, React and Next.js. I also make Arabic content about System Design.",
};

/** Hero counters. Update `videos` when new videos are published. */
export const stats = [
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 73, suffix: "", label: "Projects on GitHub" },
  { value: 18, suffix: "", label: "Videos on YouTube" },
];

export const youtube = {
  channel: "https://www.youtube.com/@ziadhosnydev",
  systemDesignPlaylist:
    "https://www.youtube.com/playlist?list=PLXff1uLxiPdA",
  advancedDatabasePlaylist:
    "https://www.youtube.com/playlist?list=PLDjCRhPEr6qc",
  designPatternsPlaylist:
    "https://www.youtube.com/playlist?list=PLc8zIezANQeU",
};

export type SocialKey =
  | "youtube"
  | "tiktok"
  | "instagram"
  | "linkedin"
  | "github"
  | "x"
  | "stackoverflow"
  | "leetcode"
  | "devto"
  | "medium"
  | "linktree";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "youtube", label: "YouTube", href: youtube.channel },
  { key: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@ziadhosny.dev" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/ziadhosny.dev" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ziadhosny" },
  { key: "github", label: "GitHub", href: "https://github.com/ZiadHosny" },
  { key: "x", label: "X", href: "https://x.com/ziadhosnydev" },
  { key: "stackoverflow", label: "Stack Overflow", href: "https://stackoverflow.com/users/18316349/ziad-hosny" },
  { key: "leetcode", label: "LeetCode", href: "https://leetcode.com/ZiadHosny/" },
  { key: "devto", label: "dev.to", href: "https://dev.to/ziadhosny" },
  { key: "medium", label: "Medium", href: "https://medium.com/@ziad.hosny" },
  { key: "linktree", label: "Linktree", href: "https://linktr.ee/ziadhosny" },
];

export const socialHref = (key: SocialKey) =>
  socials.find((s) => s.key === key)!.href;

export const navLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "content", label: "Content" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
];
