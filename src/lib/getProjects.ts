type Project = {
    id: number,
    title: string,
    description: string,
    icons: string[],
    imagePath: string,
    repository: string,
    deploy: string
}

const imagesHost = './images'
const githubHost = 'https://ziadhosny.github.io'
const githubRepos = 'https://github.com/ZiadHosny'


const htmlCss = [
    "css",
    "html",
]

const htmlCssJs = [
    "js",
    ...htmlCss
]

const reactJs = [
    "react",
    ...htmlCssJs
]

let id = 0

const createProject = (
    { title, description, icons, deploy }:
        { title: string, description: string, icons: string[], deploy?: string }): Project => {

    id++;

    const repoTitle = title.replaceAll(' ', '-')
    const deployUrl = deploy ? deploy : `${githubHost}/${repoTitle}/`

    return {
        id,
        title,
        description,
        icons,
        imagePath: `${imagesHost}/${repoTitle}.png`,
        repository: `${githubRepos}/${repoTitle}`,
        deploy: deployUrl,
    }
}

export const projects: Project[] = [
    createProject({
        title: "Personal",
        description: "Personal Template (Static Responsive HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Alivio",
        description: "Alivio Responsive Landing Page (Static HTML Site)",
        icons: htmlCssJs
    }),
    createProject({
        title: "Productly",
        description: "Productly Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Thousand Sunny",
        description: "Thousand Sunny Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Random Lines",
        description: "Canvas Random Lines",
        icons: htmlCssJs
    }),
    createProject({
        title: "Fish Game",
        description: "Canvas Fish Game",
        icons: htmlCssJs
    }),
    createProject({
        title: "Robot",
        description: "Canvas Robot",
        icons: htmlCssJs
    }),
    // createProject({
    //     title: "Robo Friends",
    //     description: "Task For Jonas Course",
    //     icons: reactJs
    // }),
    createProject({
        title: "Analog-Clock",
        description: "Analog Clock Build by just Css and Javascript (Task In iti)",
        icons: htmlCssJs,
    }),
    createProject({
        title: "Unsplash Images",
        description: "Search For Unsplash Images Using Unsplash Api",
        icons: [...reactJs, 'axios'],
    }),
    createProject({
        title: "My Reads",
        description: "Task For Udacity, Fwd",
        icons: [
            ...reactJs,
            "axios"
        ],
    }),
    createProject({
        title: "Advanced Audio Player",
        description: "Advanced Audio Player",
        icons: [
            'react',
            "ts",
            "react",
            'mui',
        ],
        deploy: "https://advancedaudioplayer.netlify.app/",

    }),
    createProject({
        title: "portfolio",
        description: "My Portfolio",
        icons: [
            'next',
            "ts",
            "react",
            'mui',
        ],
        deploy: "https://ziadhosny.vercel.app/"
    }),
].reverse()
