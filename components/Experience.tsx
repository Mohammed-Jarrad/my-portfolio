"use client";
import { useThemeContext } from "@/context/ThemeProvider";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeader from "./SectionHeader";

const Experience = () => {
    const { theme } = useThemeContext();
    const { ref } = useSectionInView("Experience");

    return (
        <motion.section
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            ref={ref}
            id="experience"
            className="scroll-mt-28"
        >
            <SectionHeader>My Experience</SectionHeader>

            <VerticalTimeline lineColor="" animate={true}>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === "light" ? "#f0f0f0" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                fontFamily: "rubik",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === "light"
                                        ? "0.4rem solid #9ca3af"
                                        : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                                zIndex: theme === "dark" ? 100 : 1,
                            }}
                            dateClassName="lg:mx-3 font-comfortaa"
                        >
                            <h3 className="font-semibold capitalize font-comfortaa">
                                {item.title}
                            </h3>
                            <p className="font-normal !mt-0 font-comfortaa !text-[13px]">
                                {item.location}
                            </p>
                            <p className="!mt-2 !font-normal text-gray-700 font-comfortaa dark:text-gray-400 ">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </motion.section>
    );
};

export default Experience;
