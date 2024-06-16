"use client";
import { useSectionInView } from "@/lib/hooks";
import { motion, MotionProps } from "framer-motion";
import SectionHeader from "./SectionHeader";

const About = () => {
    const { ref } = useSectionInView("About");
    const motionProps: MotionProps = {
        initial: { opacity: 0, x: -200 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.5 },
    };
    return (
        <motion.section
            className="text-center leading-8 scroll-mt-28 font-comfortaa"
            ref={ref}
            id="about"
            {...motionProps}
        >
            <SectionHeader>About Me</SectionHeader>

            <motion.p {...motionProps} className="mb-3 text-left">
                {`Hi, I'm Mohammed Jarrad, a Full Stack Developer with a degree in Computer Systems Engineering from PTUK. After graduating, I pursued my passion for programming through a coding bootcamp and specialized in full-stack web development.`}
            </motion.p>
            <motion.p {...motionProps} className="mb-3 text-left">
                {`I love solving problems and have strong skills in React, Next.js, Node.js, MongoDB, and TypeScript. I've built various web applications, including e-commerce platforms and responsive PWAs.`}
            </motion.p>
            <motion.p {...motionProps} className="text-left">
                {`I'm always eager to learn new technologies and enhance my skills. I'm currently looking for a full-time software developer position where I can grow and contribute. Let's connect!`}
            </motion.p>
        </motion.section>
    );
};

export default About;
