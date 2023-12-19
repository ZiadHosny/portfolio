import { cloudinary } from "./getImages"

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
    { title, description, icons, deploy, imagePath, }:
        { title: string, description: string, icons: string[], deploy?: string, imagePath?: string, }): Project => {

    id++;

    const repoTitle = title.replaceAll(' ', '-')
    const deployUrl = deploy ? deploy : `${githubHost}/${repoTitle}/`

    return {
        id,
        title,
        description,
        icons,
        imagePath: imagePath ? `${cloudinary}/${imagePath}` : `${imagesHost}/${repoTitle}.png`,
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
        title: "Hotel Website",
        description: "Hotel Website Responsive Landing Page (Static HTML Site)",
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
        title: "EdgeLedger",
        description: "EdgeLedger Responsive Landing Page (Static HTML Site) Task For ITI",
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
        icons: htmlCssJs,
        imagePath: 'v1694339279/projects/Random-Lines.png'
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
    createProject({
        title: "Pomodoro Timer",
        description: "Pomodoro Timer Task In ITI",
        icons: htmlCssJs,
    }),
    createProject({
        title: "Task Manager",
        description: "Task Manager (Local Storage) Task In ITI",
        icons: htmlCssJs,
    }),
    createProject({
        title: "Card Game",
        description: "Card Game",
        icons: htmlCssJs,
        deploy: 'https://mem0ry-card.vercel.app/'
    }),
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
        imagePath: 'v1696070899/projects/Netflix_xtcbi7.png',
    }),
    createProject({
        title: "Sara7a",
        description: `Sara7a App `,
        icons: [
            ...reactJs,
            ...express,
            'ts',
        ],
        imagePath: 'v1702975988/projects/Sara7a-App_ht95x3.png',
        deploy: "https://sara7a-z.vercel.app/"
    }),
    createProject({
        title: "Task Manger App",
        description: `MERN Task Manger App`,
        icons: [
            ...reactJs,
            ...express,
            'ts',
            'mui',
        ],
        imagePath: 'v1695919424/projects/Task-Manger-App.png',
        deploy: "https://task-manger-z.vercel.app/"
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
        title: "Pro Shop",
        description: `
       ProShop eCommerce Platform`,
        icons: [
            ...reactJs,
            ...express,
            'mongodb'
        ],
        imagePath: 'v1695920466/projects/pro-shop_kwlain.png',
        deploy: "https://pro-shop-z.vercel.app/",
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
