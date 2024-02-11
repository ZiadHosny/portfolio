'use client'
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { ZButton } from "@/components/ZButton/ZButton";
import './AboutMe.css';
import { ProfilePicture } from "@/components/profilePicture/ProfilePicture";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="aboutme-container"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className="about-me"
      >
        <h1 className="heading">Ziad Hosny</h1>
        <h2 className="subheading">Full-Stack Developer</h2>
        <div className="buttons-container">
          <ZButton
            content="Resume"
            direction={'./ZiadHosny.pdf'}
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
            I have 2+ years of Experience in Analyzing, Designing, Developing and Integrating Front-End & Back-End based applications.
          </p>
          <p>
            Experience in developing application using TypeScript, React, ReactNative, NodeJs, Express. Seeking a role
            as Front-end and Nodejs Developer.
          </p>
          <p>
            I am excited to share my projects with you and I look forward to the
            opportunity to work together.
          </p>
        </main>
      </motion.div>
      <ProfilePicture />
    </motion.div>
  );
};
