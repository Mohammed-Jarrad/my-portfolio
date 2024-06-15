"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion, MotionProps } from "framer-motion";
import SectionHeader from "./SectionHeader";

const About = () => {
    const { ref, inView } = useSectionInView("About", 0.9);
    function motionProps(delay: number): MotionProps {
        return {
            variants: {
                hidden: { opacity: 0, x: -200 },
                visible: { opacity: 1, x: 0 },
            },
            initial: "hidden",
            animate: inView ? "visible" : "hidden",
            transition: { delay },
        };
    }
    return (
        <motion.section
            className="text-center leading-8 scroll-mt-28 font-comfortaa overflow-x-hidden"
            ref={ref}
            id="about"
            {...motionProps(0)}
        >
            <SectionHeader>About Me</SectionHeader>

            <motion.p {...motionProps(0.2)} className="mb-3 text-left">
                {`Hi, I'm Mohammed Jarrad, a Full Stack Developer with a degree in Computer Systems Engineering from PTUK. After graduating, I pursued my passion for programming through a coding bootcamp and specialized in full-stack web development.`}
            </motion.p>
            <motion.p {...motionProps(0.4)} className="mb-3 text-left">
                {`I love solving problems and have strong skills in React, Next.js, Node.js, MongoDB, and TypeScript. I've built various web applications, including e-commerce platforms and responsive PWAs.`}
            </motion.p>
            <motion.p {...motionProps(0.6)} className="text-left">
                {`I'm always eager to learn new technologies and enhance my skills. I'm currently looking for a full-time software developer position where I can grow and contribute. Let's connect!`}
            </motion.p>
        </motion.section>
    );
};

export default About;
