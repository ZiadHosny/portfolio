import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiFreecodecamp, SiHackerrank, SiCodepen, SiWhatsapp, SiLinktree } from "react-icons/si";
import { FooterIcon } from "./FooterIcon";
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <FooterIcon href="https://wa.me/+201110146112" icon={<SiWhatsapp size={25} />} />
        <FooterIcon href="https://www.linkedin.com/in/ziadhosny" icon={<FaLinkedin size={25} />} />
        <FooterIcon href="https://github.com/ZiadHosny" icon={<FaGithubSquare size={25} />} />
        <FooterIcon href="https://leetcode.com/ZiadHosny/" icon={<SiLeetcode size={25} />} />
        <FooterIcon href="https://www.freecodecamp.org/ziadhosny" icon={<SiFreecodecamp size={25} />} />
        <FooterIcon href="https://www.hackerrank.com/ziadhosny" icon={<SiHackerrank size={25} />} />
        <FooterIcon href="https://codepen.io/ziadhosny" icon={<SiCodepen size={25} />} />
        <FooterIcon href="https://linktr.ee/ziadhosny" icon={<SiLinktree size={25} />} />
      </div>
      <div className="update-info">
        <p>Last update: 11/02/2024</p>
      </div>
    </footer>
  );
};
