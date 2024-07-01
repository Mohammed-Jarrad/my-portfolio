import jarradDelta from "@/public/sites-images/delta.png";
import jarradMarbleNet from "@/public/sites-images/marblenet.png";
import jarradMercyPharm from "@/public/sites-images/mercypharm.png";
import jarradNike from "@/public/sites-images/nikeShowcasing.png";
import jarradSocialMedia from "@/public/sites-images/socialapp.png";
import memobookImage from "@/public/sites-images/memobook.png";
import mernEcommerceImage from "@/public/sites-images/ecommerce.png";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaReact, FaWhatsapp } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdVilla } from "react-icons/md";
import { StaticImageData } from "next/image";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const socialMedia = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mohammed-jarrad",
        icon: FaLinkedin,
    },
    {
        name: "GitHub",
        href: "https://github.com/Mohammed-Jarrad",
        icon: FaGithub,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/mohammed.w.jarrad",
        icon: FaFacebook,
    },
    // {
    //     name: "Instagram",
    //     href: "https://www.instagram.com/mohammed.w.jarrad",
    //     icon: FaInstagram,
    // },
    {
        name: "WhatsApp",
        href: "https://wa.me/+972568558874",
        icon: FaWhatsapp,
    },
];

export const personalDetails = {
    linkdIn: {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mohammed-jarrad",
        icon: React.createElement(FaLinkedin),
    },
    github: {
        name: "GitHub",
        href: "https://github.com/Mohammed-Jarrad",
        icon: React.createElement(FaGithub),
    },
    cv: {
        location: "/Mohammed Jarrad-CV.pdf",
    },
    personalImg: {
        src: "/pimage1.png",
        alt: "Mohammed Jarrad Image",
    },
    phoneNumber: "+972 56-855-8874",
    location: "Palestine - Tulkarem",
    email: "mohammed.w.jarrad@gmail.com",
};

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Palestine, Tulkarem.",
        description:
            "I graduated from Computer Systems Engineering department after 5 years of studying where i did the Full MERN Stack graduation project without any partner.",
        icon: React.createElement(LuGraduationCap),
        date: "June, 2022",
    },
    {
        title: "Independent Contract and Freelancer",
        location: "Remote",
        description:
            "I'm now a full-stack (MERN) developer working as a freelancer. Building comprehensive full stack websites for local businesses and individual clients. Delivering tailored web solutions to meet diverse needs and objectives. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2022 - present",
    },
    {
        title: "Full Stack Super Visor",
        location: "Remote | Knowledge Academy",
        description:
            "Supervising, providing follow-up, delivering lectures to participants, and offering guidance on appropriate solutions and best practices.",
        icon: React.createElement(MdVilla),
        date: "Oct, 2023 - present",
    },
] as const;

export interface Project {
    title: string;
    description: string;
    image: StaticImageData;
    tags: string[];
    imgLink?: string;
    mainColor: string;
    github?: string;
    githubBackend?: string;
}

export const projectsData: Project[] = [
    {
        title: "Memo Book",
        description:
            "Memo Book is a web app for creating digital memory books with custom, editable and downloadable covers and pages using a Fabric.js-based editor. It supports sharing and is a fully responsive PWA with multiple languages.",
        image: memobookImage,
        tags: [
            "Next.js",
            "TypeScript",
            "React-Query",
            "TailwindCSS",
            "Shadcn/UI",
            "Framer Motion",
            "Fabric.js",
            "i18n",
            "Swiper",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Cloudinary",
        ],
        imgLink: "https://wwww.memobook.cloud",
        mainColor: "#7B7FEF",
    },
    {
        title: "Mern Stack E-Commerce",
        description:
            "Developed a comprehensive e-commerce web application with full-featured user and admin functionalities.",
        image: mernEcommerceImage,
        tags: [
            "React",
            "TypeScript",
            "React Query",
            "TailwindCSS",
            "Shadcn/UI",
            "Framer Motion",
            "Swiper",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Cloudinary",
        ],
        mainColor: "#7C3AED",
        github: "https://github.com/Mohammed-Jarrad/jamela-frontend",
        githubBackend: "https://github.com/Mohammed-Jarrad/jamela-backend",
    },
    {
        title: "Mercy Pharm",
        description:
            "Developed a MERN stack website for users seeking care products. Used Node.js, Express.js, and MongoDB for backend operations. Integrated Joi for validation and Cloudinary for photo uploads. Frontend built with React.js, Vite, Tailwind CSS, Framer Motion, i18next, and Swiper for a dynamic and intuitive user experience.",
        image: jarradMercyPharm,
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
            "ContextAPI",
            "Cloudinary",
            "i18next",
            "Swiper",
        ],
        imgLink: "https://mercypharm.com",
        github: "https://github.com/Mohammed-Jarrad/mercypharm-frontend.git",
        githubBackend: "https://github.com/Mohammed-Jarrad/mercypharm-backend.git",
        mainColor: "#3e6541",
    },
    {
        title: "Marble Net",
        description:
            "Crafted a marble sales platform using MERN stack. Frontend: React.js with Vite, Axios, Framer Motion, React Router DOM, SweetAlert2. Backend: Express.js, bcryptjs, JWT, Cloudinary with Multer, MongoDB with Mongoose.",
        image: jarradMarbleNet,
        tags: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TailwindCSS",
            "ContextAPI",
            "Cloudinary",
        ],
        imgLink: "https://marblenet.netlify.app",
        github: "https://github.com/Mohammed-Jarrad/marble-net-frontend.git",
        githubBackend: "https://github.com/Mohammed-Jarrad/marble-net-backend.git",
        mainColor: "#308faf",
    },
    // {
    //     title: "Blogs",
    //     description:
    //         "Designed a MERN-based blogging platform with security features, SASS styling, React-Query state management, and Axios. Boasts Cloudinary image uploads, user engagement tools, and an integrated admin dashboard for content and user oversight.",
    //     image: jarradBlogs,
    //     tags: ["React.js", "Node.js", "Express.js", "MongoDB", "SASS", "React-Query"],
    //     github: "https://github.com/Mohammed-Jarrad/Blogs-Frontend-V2.git",
    //     githubBackend: "https://github.com/Mohammed-Jarrad/Blogs-Backend.git",
    //     mainColor: "#d25d59",
    // },
    {
        title: "Nike Showcase",
        description:
            "Developed a dynamic React single-page application showcasing Nike shoes, styled seamlessly with Tailwind CSS, featuring sections such as Home, Services, and Contact.",
        image: jarradNike,
        tags: ["React.js", "TailwindCSS"],
        imgLink: "https://jarrad-nike.netlify.app",
        github: "https://github.com/Mohammed-Jarrad/Jarrad-Nike.git",
        mainColor: "#ff6452",
    },
    {
        title: "Delta",
        description:
            "Created a security services Delta App with preset data using React.js. Styled using styled-components library, animations with framer-motion library, and sliders via react-slick library.",
        image: jarradDelta,
        tags: ["React.js", "Styled-Components", "Framer-Motion", "React-Slick"],
        imgLink: "https://jarrad-delta.netlify.app",
        github: "https://github.com/Mohammed-Jarrad/react-delta-frontend.git",
        mainColor: "#071c2f",
    },
    {
        title: "Social Media",
        description:
            "Crafted a React social media platform with SASS & swiper-js for unique stories, featuring dark mode and polished user interfaces. Highlights immersive web design using modern tools.",
        image: jarradSocialMedia,
        tags: ["React.js", "SASS", "Swiper.js"],
        imgLink: "https://jarrad-socialmedia.netlify.app",
        github: "https://github.com/Mohammed-Jarrad/social-media-app-front.git",
        mainColor: "#5271ff",
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next",
    "React Query",
    "TailwindCSS",
    "SCSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
] as const;
