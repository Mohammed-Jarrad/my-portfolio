"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Skills = () => {
    const { ref, inView } = useSectionInView("Skills");

    return (
        <section ref={ref} id="skills" className="scroll-mt-28">
            <SectionHeader>My Skills</SectionHeader>

            <ul className="flex-center flex-wrap gap-4 max-w-lg">
                {skillsData.map((skill, idx) => (
                    <motion.li
                        key={skill}
                        initial={{ translateX: -50, translateY: -50, opacity: 0 }}
                        whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                    >
                        <span className="inline-block bg-white  shadow-2xl text-gray-800 border border-black/10 py-1 px-3 capitalize rounded-lg font-comfortaa dark:bg-white/10 dark:text-gray-300 ">
                            {skill}
                        </span>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
