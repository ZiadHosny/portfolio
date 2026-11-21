import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiYoutube } from "react-icons/si";
import { socialHref } from "@/lib/site";

export const typedLines = [
  "Full-Stack Software Engineer",
  "Node.js · NestJS · PostgreSQL",
  "React · Next.js · TypeScript",
  "System Design in Arabic",
];

export const heroSocials = [
  { label: "YouTube", href: socialHref("youtube"), Icon: SiYoutube },
  { label: "LinkedIn", href: socialHref("linkedin"), Icon: FaLinkedinIn },
  { label: "GitHub", href: socialHref("github"), Icon: SiGithub },
];

export const photoAlt = "Ziad Hosny smiling, wearing a black blazer and white shirt";

/** Entrance animation: slide up + un-blur, staggered. */
export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
export const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};
