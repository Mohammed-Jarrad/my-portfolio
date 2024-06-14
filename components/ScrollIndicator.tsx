"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        damping: 30,
        stiffness: 100,
        restDelta: 0.001,
    });
    return (
        <div className="w-full fixed top-0 left-0 right-0 h-1 sm:h-2 z-[200]">
            <motion.div
                style={{
                    transformOrigin: "left",
                    scaleX,
                }}
                className=" bg-[#7c3aed] h-full"
            ></motion.div>
        </div>
    );
};

export default ScrollIndicator;
