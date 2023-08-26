import { motion } from "framer-motion";
import "./ExperienceCard.css";
import { ExperienceCardButton } from "./experienceCardButton/ExperienceCardButton";

type CardProps = {
  title: string;
  courseType: string;
  description: string;
  place: string;
  date: string;
  certificateLink: string;
  certificateAvailable: boolean;
  certificateImage: string;
};

export const ExperienceCard = ({
  title,
  courseType,
  description,
  place,
  date,
  certificateLink,
  certificateAvailable,
  certificateImage,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="study-card"
    >
      <div className="head">
        <h2 className="card-heading">{title}</h2>
        <h3 className="card-subheading">{courseType}</h3>
        <span className="card-info">
          {place} | {date}
        </span>
      </div>
      <p className="card-description">{description}</p>
      {
        certificateAvailable ? <ExperienceCardButton
          certificateLink={certificateLink}
          certificateAvailable={certificateAvailable}
          certificateImage={certificateImage}
        /> : null
      }
    </motion.div>
  );
};
