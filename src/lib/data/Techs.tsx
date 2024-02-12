import * as Icons from "../data/Icons"

const html = <Icons.Html5 key={'html'} />
const css = <Icons.Css3 key={'css'} />
const js = <Icons.Js key={'js'} />
const react = <Icons.React key={'react'} />
const ts = <Icons.Ts key={'ts'} />
const axios = <Icons.Axios key={'axios'} />
const node = <Icons.NodeJs key={'NodeJs'} />
const express = <Icons.Express key={'NodExpressJs'} />
const next = <Icons.Next key={'Next'} />
export const mui = <Icons.Mui key={'mui'} />
const mongo = <Icons.Mongodb key={'mongo'} />
const Mongoose = <Icons.Mongoose key={'Mongoose'} />
export const Bootstrap = <Icons.Bootstrap key={'Bootstrap'} />
export const Framer = <Icons.Framer key={'Framer'} />
export const Redux = <Icons.Redux key='redux'/>


export const htmlCss = [css, html]

export const htmlCssJs = [js, ...htmlCss]

export const reactJs = [react, ...htmlCssJs]

export const reactJsWithAxios = [...reactJs, axios]

export const reactTs = [...reactJs, ts]

export const expressJs = [js, node, express]

export const expressWithTs = [...expressJs, ts]

export const nextIcons = [
    next,
    reactTs
]

export const reactTsWithMui = [reactTs, mui]

export const Mern = [...reactTs, node, express, mongo, Mongoose]