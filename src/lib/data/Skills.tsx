import * as Icons from './Icons'
import { Skill, createIcon } from "../utils/Skill";

let inc = 0

export const programmingLanguagesData: Skill[] = [
    createIcon({ iconColor: inc++, icon: <Icons.Js />, name: "JavaScript" }),
    createIcon({ iconColor: inc++, icon: <Icons.Ts />, name: "TypeScript" }),
    createIcon({ iconColor: inc++, icon: <Icons.Python />, name: "Python" }),
];

export const frontEndData: Skill[] = [
    createIcon({ iconColor: inc++, icon: <Icons.React />, name: "React" }),
    createIcon({ iconColor: inc++, icon: <Icons.Next />, name: "NextJs" }),
    createIcon({ iconColor: inc++, icon: <Icons.Angular />, name: "Angular" }),
    createIcon({ iconColor: inc++, icon: <Icons.Redux />, name: "Redux" }),
    createIcon({ iconColor: inc++, icon: <Icons.Html5 />, name: "HTML" }),
    createIcon({ iconColor: inc++, icon: <Icons.Css3 />, name: "CSS" }),
    createIcon({ iconColor: inc++, icon: <Icons.Mui />, name: "MaterialUI" }),
    createIcon({ iconColor: inc++, icon: <Icons.Jest />, name: "Jest" }),
    createIcon({ iconColor: inc++, icon: <Icons.ChakraUi />, name: "Chakra UI" }),
    createIcon({ iconColor: inc++, icon: <Icons.ReactHookform />, name: "React Hook From" }),
    createIcon({ iconColor: inc++, icon: <Icons.Styledcomponents />, name: "StyledComponents" }),
    createIcon({ iconColor: inc++, icon: <Icons.Bootstrap />, name: "Bootstrap" }),
    createIcon({ iconColor: inc++, icon: <Icons.Sass />, name: "Sass" }),
    createIcon({ iconColor: inc++, icon: <Icons.Tailwind />, name: "Tailwind" }),
    createIcon({ iconColor: inc++, icon: <Icons.AntDesign />, name: "Ant Design" }),
    createIcon({ iconColor: inc++, icon: <Icons.Framer />, name: "Framer" }),
    createIcon({ iconColor: inc++, icon: <Icons.Gatsby />, name: "Gatsby" }),
    createIcon({ iconColor: inc++, icon: <Icons.Backstage />, name: "BackstageJS" }),
];

export const backendData: Skill[] = [
    createIcon({ iconColor: inc++, icon: <Icons.NodeJs />, name: "Node Js" }),
    createIcon({ iconColor: inc++, icon: <Icons.Express />, name: "Express" }),
    createIcon({ iconColor: inc++, icon: <Icons.NestJs />, name: "Nest JS" }),
    createIcon({ iconColor: inc++, icon: <Icons.Mongodb />, name: "Mongodb" }),
    createIcon({ iconColor: inc++, icon: <Icons.Mongoose />, name: "Mongoose" }),
    createIcon({ iconColor: inc++, icon: <Icons.Postgresql />, name: "Postgresql" }),
    createIcon({ iconColor: inc++, icon: <Icons.Sql />, name: "Sql" }),
    createIcon({ iconColor: inc++, icon: <Icons.MicrosoftSqlServer />, name: "Microsoft Sql Server" }),
    createIcon({ iconColor: inc++, icon: <Icons.Sequelize />, name: "Sequelize" }),
    createIcon({ iconColor: inc++, icon: <Icons.Docker />, name: "Docker" }),
    createIcon({ iconColor: inc++, icon: <Icons.JWT />, name: "JWT" }),
    createIcon({ iconColor: inc++, icon: <Icons.Firebase />, name: "Firebase" }),
];

export const toolsData: Skill[] = [
    createIcon({ iconColor: inc++, icon: <Icons.Postman />, name: "Postman" }),
    createIcon({ iconColor: inc++, icon: <Icons.Git />, name: "Git" }),
    createIcon({ iconColor: inc++, icon: <Icons.GitHub />, name: "GitHub" }),
    createIcon({ iconColor: inc++, icon: <Icons.GithubActions />, name: "GitHub Actions" }),
    createIcon({ iconColor: inc++, icon: <Icons.Gitlab />, name: "Gitlab" }),
    createIcon({ iconColor: inc++, icon: <Icons.Npm />, name: "NPM" }),
    createIcon({ iconColor: inc++, icon: <Icons.Figma />, name: "Figma" }),
    createIcon({ iconColor: inc++, icon: <Icons.Canva />, name: "Canva" }),
    createIcon({ iconColor: inc++, icon: <Icons.Notion />, name: "Notion" }),

];