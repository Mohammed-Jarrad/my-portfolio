"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { Project } from "./Project";
import SectionHeader from "./SectionHeader";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.3);

    return (
        <motion.section id="projects" className="scroll-mt-28" ref={ref}>
            <SectionHeader>My Projects</SectionHeader>

            <div className="">
                {projectsData.map((project, i) => (
                    <Project {...project} index={i} key={project.title} />
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
