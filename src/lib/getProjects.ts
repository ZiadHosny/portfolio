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
    "js",
    "css",
    "html"
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
        title: "My Reads",
        description: "Task For Udacity, Fwd",
        icons: [
            ...reactJs,
            "axios"
        ],
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


const fdfs = [
    {
        id: 2,
        title: "Analog-Clock",
        description: "Analog Clock with Javascript (Task In iti)",
        icons: htmlCssJs,
        imagePath: `${imagesHost}/Clock.png`,

        repository: `${githubRepos}/Analog-Clock`,
        deploy: `${githubHost}/Analog-Clock/`
    },
    {
        id: 3,
        title: "Robo Friends",
        description: "Task For Jonas Course",
        icons: [
            "react",
            "javascript",
            "css",
            "tachyons",
            "html"
        ],
        imagePath: `${imagesHost}/Robo-Friends.png`,

        repository: `${githubHost}/RoboFriends`,
        deploy: "https://ziadhosny.github.io/RoboFriends/"
    },
    {
        id: 2,
        title: "Unsplash Images",
        description: "Search For Unsplash Images Using Unsplash Api",
        icons: reactJs,
        imagePath: `${imagesHost}/Unsplash-Images.png`,

        repository: `${githubRepos}/Unsplash-Images`,
        deploy: `${githubHost}/Unsplash-Images/`
    },]