import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GrCertificate } from "react-icons/gr";
import { TbCertificateOff } from "react-icons/tb";
import { EducationCertificate } from "../educationCertificate/EducationCertificate";

type LinkProp = {
  certificateLink: string;
  certificateAvailable: boolean;
  certificateImage: string;
};

export const ExperienceCardButton = ({
  certificateLink,
  certificateAvailable,
  certificateImage,
}: LinkProp) => {
  const [certificate, setCertificate] = useState<boolean>(false);

  const closeCertificate = () => {
    return setCertificate(false);
  };

  return (
    <>
      <button
        className="certificate-button"
        onClick={() => {
          setCertificate(true);
        }}
        disabled={!certificateAvailable}
      >
        {certificateAvailable ? <GrCertificate /> : <TbCertificateOff />}
        {certificateAvailable ? "Show certificate" : "In progress"}
      </button>
      <AnimatePresence>
        {certificate ? (
          <EducationCertificate
            close={closeCertificate}
            image={certificateImage}
            link={certificateLink}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
};
