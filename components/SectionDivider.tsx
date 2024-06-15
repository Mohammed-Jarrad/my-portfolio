"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <motion.div className="my-24 w-full">
            <motion.div
                initial={{ scaleX: 0, originX: 1, opacity: 0 }}
                whileInView={{ scaleX: 1, originX: 1, opacity: 1, transition: { duration: 0.5 } }}
                className="w-full bg-black/10 h-[2px] rounded-full text-right dark:bg-gray-600"
            ></motion.div>
        </motion.div>
    );
};

export default SectionDivider;
