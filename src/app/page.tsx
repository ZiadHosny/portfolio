"use client";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { ZButton } from "@/components/ZButton/ZButton";
import "./AboutMe.css";
import { ProfilePicture } from "@/components/profilePicture/ProfilePicture";

const className = {
  aboutMeContainer: `
  flex justify-between items-center w-full flex-col-reverse lg:flex-row
  `,
  aboutMeBody: `
  flex flex-col gap-[10px] text-clearWhite text-normal leading-[25px] mt-[20px] font-light tracking-[.5px]
  lg:text-left text-center break-words w-full md:w-[60ch]
  `,
  aboutMe: `flex flex-col lg:items-start items-center justify-center`,
  buttonsContainer: `w-[75%] flex sm:flex-row flex-col justify-start items-center gap-[15px]`,
};

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className.aboutMeContainer}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "backInOut" }}
        className={className.aboutMe}
      >
        <h1 className="heading">Ziad Hosny</h1>
        <h2 className="subheading">Full-Stack Developer</h2>
        <div className={className.buttonsContainer}>
          <ZButton
            content="Resume"
            direction={"./ZiadHosny.pdf"}
            icon={<HiOutlineDocumentText />}
            document={true}
          ></ZButton>
          <ZButton
            content="Contact me"
            direction="mailto:ziadhosny007@gmail.com"
            icon={<AiOutlineMail />}
          ></ZButton>
        </div>
        <main style={{ wordSpacing: "4px" }} className={className.aboutMeBody}>
          <p>Welcome to my portfolio.</p>

          <p>
            I am a Full Stack Developer with 5+ years of experience building
            scalable and maintainable applications for both back-end and
            front-end.
          </p>

          <p>
            I specialize in Node.js, Express, and NestJS for server-side
            development, and I have solid experience with TypeScript, React, and
            React Native for creating responsive user interfaces.
          </p>

          <p>
            I enjoy solving complex problems, optimizing performance, and
            delivering high-quality solutions. Take a look at my projects to see
            my work in action.
          </p>
        </main>
      </motion.div>
      <ProfilePicture />
    </motion.div>
  );
}
