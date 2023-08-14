'use client'
import { useEffect, useState } from "react";
import './NavBar.css'
import Link from "next/link";

const Links = () => {
    return (
        <ul className="un-list">
            <li className="item-list">
                <Link href="/" className="item-link">
                    About me
                </Link>
            </li>
            <li className="item-list">
                <Link href="/education" className="item-link">
                    Education
                </Link>
            </li>
            <li className="item-list">
                <Link href="/skills" className="item-link">
                    Skills
                </Link>
            </li>
            <li className="item-list">
                <Link href="/projects" className="item-link">
                    Projects
                </Link>
            </li>
        </ul>
    )
}

export const NavBar = () => {
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        const handdleClose = (e: any) => {
            if (!activeClass) return;
            if (
                !e.target.className.includes("hamburguer-menu-shown") &&
                !e.target.className.includes("hamburguer-container")
            ) {
                setActiveClass(false);
            }
        };

        document.addEventListener("click", handdleClose);

        return () => document.removeEventListener("click", handdleClose);
    }, [activeClass]);

    return (
        <header>
            <div
                className={
                    activeClass
                        ? "hamburguer-container hamburguer-active"
                        : "hamburguer-container"
                }
                onClick={() => {
                    setActiveClass((activeClass) => !activeClass);
                }}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav
                className={
                    activeClass ? "hamburguer-menu hamburguer-menu-shown" : "hamburguer-menu"
                }
            >
                <Links />
            </nav>
            <nav className="desktop-menu">
                <Links />
            </nav>
        </header>
    );
};
