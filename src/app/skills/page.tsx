'use client'
import { motion } from "framer-motion";
import { SkillsCard } from "@/components/skillsCard/SkillsCard"
import "./Skills.css";
import { backendData, frontEndData, programmingLanguagesData, toolsData } from "@/lib/data/Skills";
import { Skill } from "@/lib/utils/Skill";


const SkillsSection = ({ heading, data }: { heading: string, data: Skill[] }) => {
    return (
        <div className="skills-card-container">
            <h2 className="category-heading">{heading}</h2>
            <div className="skill">
                {data.map((props, index) => (
                    <SkillsCard {...props} index={index} key={props.id} />
                ))}
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="skills-container"
        >
            <h1 className="heading">My skills tree</h1>
            <div className="all-skills-card-container">
                <SkillsSection heading="Programming languages" data={programmingLanguagesData} />
                <SkillsSection heading="Front-end" data={frontEndData} />
                <SkillsSection heading="back-end" data={backendData} />
                <SkillsSection heading="Other tools" data={toolsData} />
            </div>
        </motion.div>
    );
};