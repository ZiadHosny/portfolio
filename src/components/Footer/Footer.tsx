import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiFreecodecamp, SiHackerrank, SiCodepen } from "react-icons/si";
import { FooterIcon } from "./FooterIcon";
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <FooterIcon href="https://www.linkedin.com/in/ziadhosny" icon={<FaLinkedin />} />
        <FooterIcon href="https://github.com/ZiadHosny" icon={<FaGithubSquare />} />
        <FooterIcon href="https://leetcode.com/ZiadHosny/" icon={<SiLeetcode />} />
        <FooterIcon href="https://www.freecodecamp.org/ziadhosny" icon={<SiFreecodecamp />} />
        <FooterIcon href="https://www.hackerrank.com/ziadhosny" icon={<SiHackerrank />} />
        <FooterIcon href="https://codepen.io/ziadhosny" icon={<SiCodepen />} />
      </div>
      <div className="update-info">
        <p>Last update: 03/10/2023</p>
      </div>
    </footer>
  );
};
