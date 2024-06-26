// components/Footer.js
"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionProvider";
import { links, personalDetails, socialMedia } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <footer className="bg-gray-800 p-10 mt-28 dark:bg-gray-900 dark:border-t dark:border-gray-700">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {/* My Infos Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-2xl font-bold mb-6 font-comfortaa gradient-orange">
                        My Informations
                    </h1>
                    <div className="flex items-center mb-2 justify-center text-[#9398A2]">
                        <FaMapMarkerAlt className="mr-2 " />
                        <p className="font-comfortaa">{personalDetails.location}</p>
                    </div>
                    <div className="flex items-center mb-2 justify-center text-[#9398A2]">
                        <FaPhoneAlt className="mr-2" />
                        <p className=" font-comfortaa">{personalDetails.phoneNumber}</p>
                    </div>
                    <div className="flex items-center mb-2 justify-center text-[#9398A2]">
                        <FaEnvelope className="mr-2 " />
                        <a
                            className=" font-comfortaa hover:text-[#B6BBC6] transition-all"
                            href={`mailto:${personalDetails.email}`}
                        >
                            {personalDetails.email}
                        </a>
                    </div>
                </motion.div>

                {/* About Website */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-2xl font-bold mb-6 font-comfortaa gradient-orange">
                        About
                    </h1>
                    <p className="text-[#9398A2] font-comfortaa">
                        built with React & Next.js (App Router & Server Actions), TypeScript,
                        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
                    </p>
                </motion.div>
                {/* Sections */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h1 className="text-2xl font-bold mb-6 font-comfortaa gradient-orange">
                        Sections
                    </h1>
                    <ul className="space-y-2">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.hash}
                                    className={`hover:text-[#B6BBC6] transition-all text-[#9398A2] font-comfortaa`}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                {/* Social Infos */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                >
                    <h1 className="text-2xl font-bold mb-6 font-comfortaa gradient-orange">
                        Socials
                    </h1>
                    <ul className="space-y-2">
                        {socialMedia.map((link) => (
                            <li key={link.name}>
                                <Link
                                    target="_blank"
                                    href={link.href}
                                    className="w-fit mx-auto flex items-center gap-2 text-[#9398A2] hover:text-[#B6BBC6] transition-all duration-200 font-comfortaa justify-center"
                                >
                                    <link.icon className="text-xl" />
                                    <p>{link.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="mt-10 w-[100%] flex-center gap-6 font-comfortaa max-sm:flex-col max-sm:gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h1
                    className="text-2xl font-bold font-itim 
						bg-gradient-to-r bg-clip-text text-transparent from-sky-400 via-teal-300 to-sky-500 uppercase
					"
                >
                    Mohammed Jarrad
                </h1>
                <p className="text-[#9398A2]">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
