'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ExperienceCard } from "@/components/experienceCard/ExperienceCard";
import { experienceData } from "@/lib/getExperience";
import "./Experience.css";

export const Experience = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(experienceData.length / cardsPerPage);
  const lasIndex = currentPage * cardsPerPage;
  const firstIndex = lasIndex - cardsPerPage;
  const slicedArray = experienceData.slice(firstIndex, lasIndex);

  return (
    <AnimatePresence>
      <motion.div
        layout="preserve-aspect"
        initial={{ opacity: 0, y: -200 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, layout: { duration: 0.2 } }}
        className="experience-container"
      >
        <h1 className="heading" > My experience </h1>
        < div className="cards-container" >
          {
            slicedArray.map((props: any) => (
              <ExperienceCard {...props} key={crypto.randomUUID()} />
            ))
          }
        </div>
        < div className="controllers" >
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            <BsArrowLeftShort />
          </button>
          < button
            disabled={currentPage === totalPages ? true : false}
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            <BsArrowRightShort />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
