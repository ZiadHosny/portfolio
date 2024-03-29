import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import "./ExperienceCertificate.css";

type CertificateProps = {
  close: any;
  image?: string;
  link?: string;
};

export const ExperienceCertificate = ({ close, image, link }: CertificateProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const second: number = 0;
  window.scrollTo(0, 0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, second);
  }, []);

  return (
    <>
      <motion.div
        key={image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="overlay"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="certificate-container"
      >
        <AiOutlineClose
          className="certificate-close"
          onClick={() => {
            close();
          }}
        />
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={"90%"}
            className="certificate-skeleton"
          />
        ) : (
          <img src={image} alt="certificate" draggable={false} />
        )}

        {link ?
          <a href={link} target="_blank" className="certificate-link">
            <BiLink />
            Certificate's URL
          </a> : null
        }
      </motion.div>
    </>
  );
};
