"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionProvider";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const DesktopHeader = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [scrollingUp, setScrollingUp] = useState<boolean>(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious();

        if (latest < prev) setScrollingUp(true);
        else if (latest > prev && latest > 100) setScrollingUp(false);
    });

    const variants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <motion.header
            className={clsx(
                "z-[150] max-sm:hidden fixed inset-x-0 top-0 transition-all duration-300",
                {
                    "!-top-0 w-full": !scrollingUp,
                    // "!top-0": !scrollingUp,
                }
            )}
        >
            {/* NavBar */}
            <motion.nav
                className={clsx(
                    `relative h-[4.5rem] sm:h-[3.25rem] w-full px-1 sm:px-0 transition-all duration-300 flex-center`,
                    {
                        "!w-full": !scrollingUp,
                    }
                )}
            >
                {/* Nav */}
                <ul
                    className="
                        flex-center gap-3 h-full 
                        max-sm:max-w-[22rem] max-sm:w-[22rem] max-sm:flex-wrap max-sm:gap-y-0 max-sm:mx-auto
                    "
                >
                    {links.map((link, index) => (
                        <motion.li
                            key={link.name}
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: [100, -10, 0], opacity: 1 }}
                            transition={{ delay: 0.125 * index, duration: 0.3 }}
                        >
                            <Link
                                href={link.hash}
                                className={clsx(
                                    `hover:text-gray-950 transition-all text-gray-500 text-[.9rem] font-comfortaa py-2 px-3 rounded-full max-sm:py-1
									dark:hover:text-gray-300 
                                `,
                                    {
                                        "!text-gray-50 relative dark:text-gray-300":
                                            link.name == activeSection,
                                    }
                                )}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}
                                {link.name == activeSection && (
                                    <motion.span
                                        layoutId="active section nav item"
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 30,
                                        }}
                                        className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-violet-500 to-violet-700 dark:from-violet-600 dark:to-violet-800"
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
                {/* Background */}
                <motion.div
                    className={clsx(
                        `
                        absolute inset-0 -z-[2] rounded-none shadow-2xl backdrop-blur-2xl sm:bg-opacity-60 transition-all duration-300
						bg-white
						dark:bg-gray-950 dark:sm:bg-opacity-75 dark:backdrop-blur-md dark:max-sm:bg-opacity-90
                    `
                    )}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, ease: "linear" }}
                />
            </motion.nav>
            {/* {
				scrollingUp && (
					<div className="bg-red-200">
						Hello
					</div>
				)
			} */}
        </motion.header>
    );
};

export default DesktopHeader;
