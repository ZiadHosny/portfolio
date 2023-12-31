import React from 'react'
import Link from "next/link";

export const Links = () => {
    return (
        <ul className="un-list">
            <li className="item-list">
                <Link href="/" className="item-link">
                    About me
                </Link>
            </li>
            <li className="item-list">
                <Link href="/experience" className="item-link">
                    Experience
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
            <li className="item-list">
                <Link href="/certifications" className="item-link">
                    Certifications
                </Link>
            </li>
        </ul>
    )
}
