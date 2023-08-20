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

const express = [
    'node',
    'express'
]

const next = [
    'next',
    'ts',
    ...reactJs,
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
        title: "David Beckham",
        description: "A Fake official website for the legend David Beckham with Album of his photos and a brief about his life",
        icons: htmlCssJs
    }),
    createProject({
        title: "Personal",
        description: "Personal Template (Static Responsive HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Productly",
        description: "Productly Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Trafalgar",
        description: "Trafalgar Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Alivio",
        description: "Alivio Responsive Landing Page (Static HTML Site)",
        icons: htmlCssJs
    }),
    createProject({
        title: "Thousand Sunny",
        description: "Thousand Sunny Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "NOICELAND",
        description: "NOICELAND Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: htmlCssJs
    }),
    createProject({
        title: "Landing Page",
        description: "Landing Page Responsive Landing Page (Static HTML Site) FWD Task",
        icons: htmlCssJs
    }),
    createProject({
        title: "Random Lines",
        description: "Canvas Random Lines",
        icons: htmlCssJs
    }),
    createProject({
        title: "Electric Circles",
        description: "Canvas Electric Circles",
        icons: htmlCssJs
    }),
    createProject({
        title: "O",
        description: "Canvas O",
        icons: htmlCssJs
    }),
    createProject({
        title: "Animated Circles",
        description: "Canvas Animated Circles",
        icons: htmlCssJs
    }),
    createProject({
        title: "Fish Game",
        description: "Canvas Fish Game",
        icons: htmlCssJs
    }),
    createProject({
        title: "Analog-Clock",
        description: "Analog Clock Build by just Css and Javascript (Task In iti)",
        icons: htmlCssJs,
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
        title: "Unsplash Images",
        description: "Search engine For Unsplash Images Using Unsplash Api",
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
        title: "Netflix",
        description: "Netflix App Use IMDB api",
        icons: [
            ...reactJs,
            "axios"
        ],
    }),
    createProject({
        title: "Freshio",
        description: "Freshio (Final ITI Project)",
        icons: [
            ...reactJs,
            "axios"
        ],
    }),
    createProject({
        title: "Advanced Audio Player",
        description: `
        Full project for playing audios and soundtracks,
         Play audios randomly or on repeat,
          with cool feature that makes you select a specific part of the audio and insert the number of times you want to play it,
           login and make your favorite list`,
        icons: [
            ...reactJs,
            'ts',
            ...express,
            'ps'
        ],
        deploy: "https://advancedaudioplayer.netlify.app/",
    }),
    createProject({
        title: "portfolio",
        description: `My personal portfolio to show my progress,
         skills and my latest projects,
          You can contact with me through it`,
        icons: [
            ...next,
            'mui',
        ],
        deploy: "https://ziadhosny.vercel.app/"
    }),
].reverse()
