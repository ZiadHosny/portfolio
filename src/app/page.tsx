'use client'
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
// import CvEn from '../../assets/ziadHosny.pdf'
// import { ZButton } from "../../components";
// import './AboutMe.css';
import { ZButton } from "@/components/ZButton/ZButton";


export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="about-me"
    >
      <h1 className="heading">Ziad Hosny</h1>
      <h2 className="subheading">Full-Stack Dev</h2>
      <div className="buttons-container">
        <ZButton
          content="Resume"
          direction={'CvEn'}
          icon={<HiOutlineDocumentText />}
          document={true}
        ></ZButton>
        <ZButton
          content="Contact me"
          direction="mailto:ziadhosny007@gmail.com"
          icon={<AiOutlineMail />}
          document={false}
        ></ZButton>
      </div>
      <main className="aboutme-body">
        <p>
          Welcome to my portfolio!
        </p>
        <p>
          I have 2+ years of Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications. Experience in developing application using TypeScript, React, ReactNative, NodeJs, Express.
        </p>
        <p>
          I am currently expanding my skills by studying Docker and kubernetes, and I am
          always eager to apply my knowledge and experience to new projects. I strive
          to consistently produce high-quality code that not only functions well, but
          also looks great.
        </p>
        <p>
          I am excited to share my projects with you and I look forward to the
          opportunity to work together.
        </p>
      </main>
    </motion.div>
  );
};
