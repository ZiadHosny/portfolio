import { Project, createProject } from "../utils/Project";
import * as Tech from './Techs'

export const projects: Project[] = [
    createProject({
        title: "David Beckham",
        description: "A Fake official website for the legend David Beckham with Album of his photos and a brief about his life",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Personal",
        description: "Personal Template (Static Responsive HTML Site) Task For ITI",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Productly",
        description: "Productly Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Hotel Website",
        description: "Hotel Website Responsive Landing Page (Static HTML Site)",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Trafalgar",
        description: "Trafalgar Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Alivio",
        description: "Alivio Responsive Landing Page (Static HTML Site)",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Thousand Sunny",
        description: "Thousand Sunny Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "EdgeLedger",
        description: "EdgeLedger Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "NOICELAND",
        description: "NOICELAND Responsive Landing Page (Static HTML Site) Task For ITI",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Landing Page",
        description: "Landing Page Responsive Landing Page (Static HTML Site) FWD Task",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Random Lines",
        description: "Canvas Random Lines",
        icons: Tech.htmlCss,
        imagePath: 'v1694339279/projects/Random-Lines.png'
    }),
    createProject({
        title: "Electric Circles",
        description: "Canvas Electric Circles",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "O",
        description: "Canvas O",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Animated Circles",
        description: "Canvas Animated Circles",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Fish Game",
        description: "Canvas Fish Game",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Analog-Clock",
        description: "Analog Clock Build by just Css and Javascript (Task In iti)",
        icons: Tech.htmlCss,
    }),
    createProject({
        title: "Robot",
        description: "Canvas Robot",
        icons: Tech.htmlCss
    }),
    createProject({
        title: "Pomodoro Timer",
        description: "Pomodoro Timer Task In ITI",
        icons: Tech.htmlCss,
    }),
    createProject({
        title: "Task Manager",
        description: "Task Manager (Local Storage) Task In ITI",
        icons: Tech.htmlCss,
    }),
    createProject({
        title: "Card Game",
        description: "Card Game",
        icons: Tech.htmlCss,
        deploy: 'https://mem0ry-card.vercel.app/'
    }),
    createProject({
        title: "Unsplash Images",
        description: "Search engine For Unsplash Images Using Unsplash Api",
        icons: Tech.reactJs,
    }),
    createProject({
        title: "My Reads",
        description: "Task For Udacity, Fwd",
        icons: Tech.reactJsWithAxios
    }),
    createProject({
        title: "Family Guy",
        description: `Learn NEXT Building Full Stack Application`,
        icons: [
            ...Tech.nextIcons,
            Tech.mui,
        ],
        deploy: "https://family-guy-z.vercel.app/"
    }),
    createProject({
        title: "Netflix",
        description: "Netflix App Use IMDB api",
        icons: Tech.reactJsWithAxios,
        imagePath: 'v1696070899/projects/Netflix_xtcbi7.png',
    }),
    createProject({
        title: "Sara7a",
        description: `Sara7a App `,
        icons: [
            Tech.Mern
        ],
        imagePath: 'v1702975988/projects/Sara7a-App_ht95x3.png',
        deploy: "https://sara7a-z.vercel.app/"
    }),
    createProject({
        title: "Task Manger App",
        description: `MERN Task Manger App`,
        icons: [
            ...Tech.Mern,
            Tech.mui
        ],
        imagePath: 'v1695919424/projects/Task-Manger-App.png',
        deploy: "https://task-manger-z.vercel.app/"
    }),
    createProject({
        title: "Freshio",
        description: "Freshio (Final ITI Project)",
        icons: Tech.reactJsWithAxios
    }),
    createProject({
        title: "Advanced Audio Player",
        description: `
        Full project for playing audios and soundtracks,
         Play audios randomly or on repeat,
          with cool feature that makes you select a specific part of the audio and insert the number of times you want to play it,
           login and make your favorite list`,
        icons: [
            Tech.Mern
        ],
        deploy: "https://advancedaudioplayer.netlify.app/",
    }),
    createProject({
        title: "Pro Shop",
        description: `
       ProShop eCommerce Platform`,
        icons: [
            ...Tech.Mern,
            Tech.Redux
        ],
        imagePath: 'v1695920466/projects/pro-shop_kwlain.png',
        deploy: "https://pro-shop-z.vercel.app/",
    }),
    // createProject({
    //     title: "portfolio",
    //     description: `My personal portfolio to show my progress,
    //      skills and my latest projects,
    //       You can contact with me through it`,
    //     icons: [
    //         ...Tech.nextIcons,
    //         Tech.mui,
    //         Tech.Framer,
    //     ],
    //     deploy: "https://ziadhosny.vercel.app/"
    // }),
    createProject({
        title: "Quran Kareem",
        description: `The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from God. It is organized in 114 chapters which consist of individual verses.
Quran Kareem App aims to provide Quran recitations by famous reciters in different narrations on the web, mobile, watch, and TV devices.
The app is available on mobile, tablet, and Android TV.`,
        icons: [
            ...Tech.Mern,
            Tech.mui,
            Tech.Redux,
        ],
        deploy: "https://quran-app-z.vercel.app/",
        googlePlayLink: "https://play.google.com/store/apps/details?id=app.vercel.quran_app_z"
    }),
    createProject({
        title: "Life Ward",
        description: `Freelance Project for Logex Tech Company`,
        icons: [
            ...Tech.Mern,
            Tech.mui,
            Tech.Redux,
        ],
        deploy: "https://life-ward.com/",
    }),
].reverse()
