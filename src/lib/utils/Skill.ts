import { ReactNode } from "react"

const accentColors = {
    mainColor: "var(--accent-light)",
    lightColor: "var(--accent)",
}

const lightColors = {
    mainColor: "var(--light-main)",
    lightColor: "var(--clear-light)",
}

export type Skill = {
    id: string
    icon: ReactNode
    name: string;
    iconColor: number,
    mainColor: string;
    lightColor: string;
}

type CreateIconProps = {
    icon: ReactNode, name: string, iconColor: number
}

export const createIcon = ({ icon, name, iconColor }: CreateIconProps): Skill => {
    const colors = iconColor % 2 === 0 ? accentColors : lightColors
    return {
        id: crypto.randomUUID(),
        icon,
        name,
        iconColor,
        ...colors
    }
}
