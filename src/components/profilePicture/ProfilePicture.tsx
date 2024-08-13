import { motion } from "framer-motion";
import "./ProfilePicture.css";
import Image from "next/image";

export const ProfilePicture = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.4 }}
      className={'pictureContainer'}
    >
      <Image
        className={'image'}
        width={250} height={250}
        src={'/Zi.png'}
        alt="avatar"
        draggable="false" />
    </motion.div>
  );
};
