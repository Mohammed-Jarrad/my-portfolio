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
        hidden: (index + 1) % 2 == 0 ? { right: "100%", opacity: 0 } : { left: "100%", opacity: 0 },
        visible: (index + 1) % 2 == 0 ? { right: "50%", opacity: 1 } : { left: "50%", opacity: 1 },
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
            className="group relative overflow-hidden mb-4 md:mb-8 last:mb-0 border-2 border-black/5 rounded-lg md:min-h-[20rem]  bg-gray-100 hover:bg-gray-200 transition max-sm:min-h-[65vh] max-md:flex max-md:flex-col max-md:justify-between dark:bg-[#FFFFFF0D] dark:border-gray-600 dark:border-1 dark:border-opacity-10"
            style={{ scale: newScale, opacity: newOpacity }}
            ref={articleRef}
        >
            <div
                ref={contentRef}
                className="p-4 max-w-[50%] flex flex-col h-full max-md:max-w-full group-even:ml-auto max-md:flex-1 space-y-6"
            >
                <motion.h3
                    variants={headerVarients}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="font-semibold font-comfortaa mb-3 text-lg"
                >
                    {title}
                </motion.h3>
                <motion.p
                    variants={elementsVarients}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.2 }}
                    className="text-gray-700 font-comfortaa text-sm max-md:mb-4 dark:text-gray-300"
                >
                    {description}
                </motion.p>
                <ul className="flex items-center flex-wrap gap-3 mt-auto">
                    {[...tags].map((tag, idx) => (
                        <motion.li
                            key={tag}
                            className="bg-black/60 text-white rounded-full py-1 px-3 text-center text-[13px] capitalize font-comfortaa dark:bg-white/10"
                            variants={linkItemsVarients}
                            initial={"hidden"}
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.3, delay: 0.18 * (idx + 1) }}
                        >
                            {tag}
                        </motion.li>
                    ))}
                </ul>
                <motion.div
                    variants={elementsVarients}
                    initial={"hidden"}
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mt-4 gap-3"
                >
                    {imgLink && (
                        <Link
                            target="_blank"
                            href={imgLink}
                            className="project_button text-white border-transparent shadow-lg"
                            style={{ background: mainColor }}
                        >
                            Visit <BsGlobe />
                        </Link>
                    )}
                    {github && (
                        <Link href={github} target="_blank" className="project_button shadow-lg">
                            {!githubBackend ? "Source Code" : "Frontend"}{" "}
                            <AiFillGithub className="text-[16px]" />
                        </Link>
                    )}
                    {githubBackend && (
                        <Link
                            href={githubBackend}
                            target="_blank"
                            className="project_button shadow-lg"
                        >
                            Backend <AiFillGithub className="text-[16px]" />
                        </Link>
                    )}
                </motion.div>
            </div>

            <motion.div
                className="absolute top-16 w-[95%] mx-auto max-md:mb-2 md:w-[80%] max-md:static"
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
                    rounded-lg shadow-2xl transition 
                    md:group-hover:-translate-x-1
                    md:group-hover:translate-y-3
                    md:group-hover:-rotate-2
                    md:group-hover:group-even:rotate-2
                    md:group-hover:group-even:translate-x-1
                    md:group-hover:group-even:translate-y-3
                    `}
                />
            </motion.div>
        </motion.article>
    );
}
