import type { Project } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

export function Project({
    title,
    description,
    tags,
    image,
    imgLink,
    github,
    githubBackend,
    mainColor,
    index,
}: Project & { index: number }) {
    const articleRef = useRef<HTMLDivElement>(null);
    const { ref: contentRef, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
    const imageVarients = {
        hidden: (index + 1) % 2 == 0 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 },
        visible: (index + 1) % 2 == 0 ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 },
    };
    const headerVarients = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    const elementsVarients = {
        hidden: (index + 1) % 2 == 0 ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    const linkItemsVarients = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };
    const { scrollYProgress } = useScroll({
        target: articleRef,
        offset: ["0 1", "1.1 1"],
    });
    const newScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const newOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.article
            className="group relative rounded-lg shadow-[0px_2px_5px_rgba(0,0,0,0.1)] overflow-hidden mb-4 md:mb-8 md:min-h-[25rem] bg-gray-50 hover:bg-gray-100 transition dark:bg-[#FFFFFF0D] dark:border-gray-600 flex items-center gap-4 lg:even:flex-row-reverse max-lg:flex-col max-lg:justify-between p-4"
            style={{ scale: newScale, opacity: newOpacity }}
            ref={articleRef}
        >
            {/* Content */}
            <div ref={contentRef} className="flex-1 flex flex-col space-y-6">
                {/* Title */}
                <motion.h3
                    variants={headerVarients}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="font-semibold mb-3 text-lg"
                >
                    {title}
                </motion.h3>
                {/* Description */}
                <motion.p
                    variants={elementsVarients}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.2 }}
                    className="text-gray-700 font-comfortaa text-sm max-md:mb-4 dark:text-gray-300"
                >
                    {description}
                </motion.p>
                {/* Tags */}
                <ul className="flex items-center flex-wrap gap-2 mt-auto">
                    {[...tags].map((tag, idx) => (
                        <motion.li
                            key={tag}
                            className="bg-black/60 text-white rounded-lg py-1 px-3 text-center text-[12px] capitalize font-comfortaa dark:bg-white/10"
                            variants={linkItemsVarients}
                            initial={"hidden"}
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.3, delay: 0.18 * (idx + 1) }}
                        >
                            {tag}
                        </motion.li>
                    ))}
                </ul>
                {/* Links */}
                <motion.div
                    variants={elementsVarients}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="flex items-center flex-wrap mt-4 gap-4"
                >
                    {github && (
                        <Link href={github} target="_blank" className="project_button shadow-lg">
                            <AiFillGithub size={18} />
                            {!githubBackend ? "Source Code" : "Frontend"}{" "}
                        </Link>
                    )}
                    {githubBackend && (
                        <Link
                            href={githubBackend}
                            target="_blank"
                            className="project_button shadow-lg"
                        >
                            <AiFillGithub size={18} /> Backend
                        </Link>
                    )}
                    {imgLink && (
                        <Link
                            target="_blank"
                            href={imgLink}
                            className="project_button text-white border-transparent shadow-lg"
                            style={{ background: mainColor }}
                        >
                            <BsGlobe size={16} /> Visit
                        </Link>
                    )}
                </motion.div>
            </div>
            {/* Image */}
            <motion.div
                className="flex-[1.5] overflow-hidden rounded-lg"
                variants={imageVarients}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src={image}
                    alt={`${title} Project Image`}
                    quality={95}
                    className={`
					size-full object-cover rounded-lg shadow-2xl transition group-hover:scale-125
                    `}
                />
            </motion.div>
        </motion.article>
    );
}
