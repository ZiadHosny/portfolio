'use client'
import { useEffect, useState } from "react";
import './Navbar.css'
import { Links } from "./Links";


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
