'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { ProjectsCard } from "@/components/projectsCard/ProjectsCard";
import "./Projects.css";
import { projects, } from "@/lib/data/projects";
import { Project } from "@/lib/utils/Project";

export const Projects = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const cardsPerPage = 2;
    const totalPages = Math.ceil(projects.length / cardsPerPage);
    const lasIndex = currentPage * cardsPerPage;
    const firstIndex = lasIndex - cardsPerPage;
    const slicedArray = projects?.slice(firstIndex, lasIndex);

    return (
        <motion.div
            layout="preserve-aspect"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.4, layout: { duration: 0.5 } }}
            className="projects-container"
        >
            <h1 className="heading">My projects</h1>
            <div className="projects-container">
                {slicedArray?.map((props: Project) => (
                    <ProjectsCard {...props} key={props.id} />
                ))}
            </div>
            <div className="controllers">
                <button
                    disabled={currentPage === 1 ? true : false}
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}
                >
                    <BsArrowLeftShort />
                </button>
                <button
                    disabled={currentPage === totalPages ? true : false}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                >
                    <BsArrowRightShort />
                </button>
            </div>
        </motion.div>
    );
};
