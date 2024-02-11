import { motion } from "framer-motion";
import "./ProfilePicture.css";

export const ProfilePicture = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className="picture-container"
    >
      <img src={'Zi.png'} alt="avatar" draggable="false"></img>
    </motion.div>
  );
};
