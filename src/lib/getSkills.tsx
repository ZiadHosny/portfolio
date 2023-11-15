import {
    SiPostman,
    SiGitlab,
    SiAngular,
    SiBootstrap,
    SiCanva,
    SiChakraui,
    SiMongodb,
    SiMongoose,
    SiCss3,
    SiNodedotjs,
    SiFigma,
    SiGit,
    SiGithub,
    SiHtml5,
    SiGatsby,
    SiBackstage,
    SiJavascript,
    SiMui,
    SiNotion,
    SiNpm,
    SiExpress,
    SiPython,
    SiDocker,
    SiReact,
    SiJsonwebtokens,
    SiPostgresql,
    SiSass,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
    SiGithubactions
} from "react-icons/si";

import { TbBrandNextjs } from 'react-icons/tb'

import { GrMysql } from "react-icons/gr";

import { ReactNode } from "react";

export type SkillType = {
    icon: ReactNode;
    name: string;
    mainColor: string;
    ligthColor: string;
}

const accentColors = {
    mainColor: "var(--accent-ligth)",
    ligthColor: "var(--accent)",
}

const lightColors = {
    mainColor: "var(--ligth-main)",
    ligthColor: "var(--clear-ligth)",
}

const createIcon = ({ icon, name, id }: { icon: ReactNode, name: string, id: number }): SkillType => {
    const colors = id % 2 === 0 ? accentColors : lightColors
    return {
        icon,
        name,
        ...colors
    }
}

export const programmingLanguagesData: SkillType[] = [
    createIcon({ id: 1, icon: <SiJavascript />, name: "JavaScript" }),
    createIcon({ id: 2, icon: <SiTypescript />, name: "TypeScript" }),
    createIcon({ id: 3, icon: <SiPython />, name: "Python" }),
];

export const frontEndData: SkillType[] = [
    createIcon({ id: 1, icon: <SiReact />, name: "React" }),
    createIcon({ id: 2, icon: <TbBrandNextjs />, name: "NextJs" }),
    createIcon({ id: 3, icon: <SiAngular />, name: "Angular" }),
    createIcon({ id: 4, icon: <SiHtml5 />, name: "HTML" }),
    createIcon({ id: 3, icon: <SiCss3 />, name: "CSS" }),
    createIcon({ id: 4, icon: <SiMui />, name: "MaterialUI" }),
    createIcon({ id: 3, icon: <SiChakraui />, name: "Chakra UI" }),
    createIcon({ id: 4, icon: <SiStyledcomponents />, name: "StyledComponents" }),
    createIcon({ id: 3, icon: <SiBootstrap />, name: "Bootstrap" }),
    createIcon({ id: 4, icon: <SiSass />, name: "Sass" }),
    createIcon({ id: 5, icon: <SiTailwindcss />, name: "Tailwind" }),
    createIcon({ id: 6, icon: <SiGatsby />, name: "Gatsby" }),
    createIcon({ id: 7, icon: <SiBackstage />, name: "BackstageJS" }),
];

export const backendData: SkillType[] = [
    createIcon({ id: 1, icon: <SiNodedotjs />, name: "NodeJs" }),
    createIcon({ id: 2, icon: <SiExpress />, name: "Express" }),
    createIcon({ id: 3, icon: <SiMongodb />, name: "Mongodb" }),
    createIcon({ id: 4, icon: <SiMongoose />, name: "Mongoose" }),
    createIcon({ id: 5, icon: <SiPostgresql />, name: "Postgresql" }),
    createIcon({ id: 6, icon: <GrMysql />, name: "Mysql" }),
    createIcon({ id: 7, icon: <SiDocker />, name: "Docker" }),
    createIcon({ id: 8, icon: <SiJsonwebtokens />, name: "JWT" }),

];

export const toolsData: SkillType[] = [
    createIcon({ id: 8, icon: <SiPostman />, name: "Postman" }),
    createIcon({ id: 1, icon: <SiGit />, name: "Git" }),
    createIcon({ id: 2, icon: <SiGithub />, name: "GitHub" }),
    createIcon({ id: 9, icon: <SiGithubactions />, name: "GitHub Actions" }),
    createIcon({ id: 3, icon: <SiGitlab />, name: "Gitlab" }),
    createIcon({ id: 4, icon: <SiNpm />, name: "NPM" }),
    createIcon({ id: 5, icon: <SiFigma />, name: "Figma" }),
    createIcon({ id: 6, icon: <SiCanva />, name: "Canva" }),
    createIcon({ id: 7, icon: <SiNotion />, name: "Notion" }),

];


