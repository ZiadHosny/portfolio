'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ExperienceCard } from "@/components/experienceCard/ExperienceCard";
import { ExperienceType } from "@/lib/utils/Experience";
import "./Experience.css";
import { experiences } from "@/lib/data/Experiences";

export const Experience = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(experiences.length / cardsPerPage);
  const lasIndex = currentPage * cardsPerPage;
  const firstIndex = lasIndex - cardsPerPage;
  const slicedArray = experiences.slice(firstIndex, lasIndex);

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
            slicedArray.map((props: ExperienceType) => (
              <ExperienceCard {...props} key={props.id} />
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
