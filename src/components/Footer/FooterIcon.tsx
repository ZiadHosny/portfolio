import { ReactNode } from "react";

type FooterIconProps = {
    href: string;
    icon: ReactNode;
}

export const FooterIcon = ({ href, icon }: FooterIconProps) => {
    return (
        <span>
            <a
                className="contact-link"
                href={href}
                target="_blank"
            >
                {icon}
            </a>
        </span>
    )
}
