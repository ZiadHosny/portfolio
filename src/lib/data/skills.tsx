import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiAntdesign,
  SiAxios,
  SiBackstage,
  SiBootstrap,
  SiChakraui,
  SiClaude,
  SiCss,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGithubcopilot,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiSass,
  SiSentry,
  SiSequelize,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql, GrOracle } from "react-icons/gr";
import { TbBrandOpenai, TbPalette } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FiDatabase, FiMonitor, FiServer, FiTool } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export type Skill = { name: string; Icon: IconType };
export type SkillGroup = {
  title: string;
  icon: ReactNode;
  top: Skill[];
  more: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: <FiMonitor />,
    top: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React Native", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Redux", Icon: SiRedux },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Material UI", Icon: SiMui },
    ],
    more: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "Angular", Icon: SiAngular },
      { name: "Sass", Icon: SiSass },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Chakra UI", Icon: SiChakraui },
      { name: "Ant Design", Icon: SiAntdesign },
      { name: "Styled Components", Icon: SiStyledcomponents },
      { name: "React Hook Form", Icon: SiReacthookform },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "Jest", Icon: SiJest },
      { name: "Axios", Icon: SiAxios },
      { name: "Gatsby", Icon: SiGatsby },
      { name: "Backstage", Icon: SiBackstage },
    ],
  },
  {
    title: "Backend",
    icon: <FiServer />,
    top: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "Express", Icon: SiExpress },
      { name: "Strapi", Icon: SiStrapi },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Sequelize", Icon: SiSequelize },
      { name: "Mongoose", Icon: SiMongoose },
      { name: "JWT", Icon: SiJsonwebtokens },
    ],
    more: [
      { name: "Python", Icon: SiPython },
      { name: "PHP", Icon: SiPhp },
    ],
  },
  {
    title: "Databases",
    icon: <FiDatabase />,
    top: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "SQL Server", Icon: DiMsqlServer },
      { name: "SQL", Icon: GrMysql },
      { name: "Firebase", Icon: SiFirebase },
    ],
    more: [],
  },
  {
    title: "Tools",
    icon: <FiTool />,
    top: [
      { name: "Docker", Icon: SiDocker },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "GitLab", Icon: SiGitlab },
      { name: "Postman", Icon: SiPostman },
      { name: "Oracle APEX", Icon: GrOracle },
      { name: "Sentry", Icon: SiSentry },
    ],
    more: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "npm", Icon: SiNpm },
      { name: "VS Code", Icon: VscVscode },
      { name: "Figma", Icon: SiFigma },
      { name: "Canva", Icon: TbPalette },
      { name: "Notion", Icon: SiNotion },
    ],
  },
  {
    title: "AI",
    icon: <HiSparkles />,
    top: [
      { name: "Claude", Icon: SiClaude },
      { name: "ChatGPT", Icon: TbBrandOpenai },
      { name: "GitHub Copilot", Icon: SiGithubcopilot },
    ],
    more: [],
  },
];
