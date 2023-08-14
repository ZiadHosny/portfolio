import { FooterIconProps } from "../../utils/types"

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
