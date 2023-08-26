import {
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiAxios,
    SiNodedotjs,
    SiMui,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs } from 'react-icons/tb'

const React = <SiReact key={'react'} />
const JavaScript = <SiJavascript key={'js'} />
const TypeScript = <SiTypescript key={'ts'} />
const Css = <SiCss3 key={'css'} />
const Html = <SiHtml5 key={'html'} />
const Axios = <SiAxios key={'axios'} />
const Next = <TbBrandNextjs key={'next'} />
const Node = <SiNodedotjs key={'node'} />
const Mui = <SiMui key={'mui'} />
const Postgresql = <SiPostgresql key={'postgresql'} />


const allIcons = [
    {
        title: 'react',
        icon: React
    },
    {
        title: 'js',
        icon: JavaScript
    },
    {
        title: 'ts',
        icon: TypeScript
    },
    {
        title: 'css',
        icon: Css
    },
    {
        title: 'html',
        icon: Html
    },
    {
        title: 'axios',
        icon: Axios
    },
    {
        title: 'next',
        icon: Next
    },
    {
        title: 'node',
        icon: Node
    },
    {
        title: 'mui',
        icon: Mui
    },
    {
        title: 'ps',
        icon: Postgresql
    }
]


export const Icons = ({ icons }: { icons: string[] }) => {

    let filteredIcon: React.ReactNode[] = []

    allIcons.forEach(({ title, icon }) => {
        if (icons.includes(title))
            filteredIcon.push(icon)
    })

    return (
        <>
            {filteredIcon}
        </>)
}