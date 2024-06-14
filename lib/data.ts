import jarradBlogs from '@/public/sites-images/jarrad-blogs.png'
import jarradDelta from '@/public/sites-images/jarrad-delta.png'
import jarradMarbleNet from '@/public/sites-images/jarrad-marble-net.png'
import jarradMercyPharm from '@/public/sites-images/jarrad-mercypharm.png'
import jarradNike from '@/public/sites-images/jarrad-nike.png'
import jarradSocialMedia from '@/public/sites-images/jarrad-socialmedia.png'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaReact, FaWhatsapp } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const socialMedia = [
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/mohammed-jarrad',
		icon: FaLinkedin,
	},
	{
		name: 'GitHub',
		href: 'https://github.com/Mohammed-Jarrad',
		icon: FaGithub,
	},
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/jarrad.1999',
		icon: FaFacebook,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/mohammed_w_jarrad',
		icon: FaInstagram,
	},
	{
		name: 'WhatsApp',
		href: 'https://wa.me/+972568558874',
		icon: FaWhatsapp,
	},
]

export const personalDetails = {
	linkdIn: {
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/mohammed-jarrad',
		icon: React.createElement(FaLinkedin),
	},
	github: {
		name: 'GitHub',
		href: 'https://github.com/Mohammed-Jarrad',
		icon: React.createElement(FaGithub),
	},
	cv: {
		location: '/Mohammed Jarrad Resume.pdf',
	},
	personalImg: {
		src: '/pimage1.png',
		alt: 'Mohammed Jarrad Image',
	},
	phoneNumber: '+972 56-855-8874',
	location: 'Palestine - Tulkarem',
	email: 'mohammed.w.jarrad@gmail.com',
}

export const experiencesData = [
	{
		title: 'Graduated bootcamp',
		location: 'Palestine, Tulkarem.',
		description:
			'I graduated from Computer Systems Engineering department after 5 years of studying where i did the Full MERN Stack graduation project without any partner.',
		icon: React.createElement(LuGraduationCap),
		date: 'June, 2022',
	},
	{
		title: 'Full-Stack Developer',
		location: 'Palestine, Tulkarem.',
		description:
			"I'm now a full-stack (MERN) developer working as a freelancer. My stack includes React, Next.js, Node.js, TypeScript, Tailwind, MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: '2022 - present',
	},
] as const

export const projectsData = [
	{
		title: 'Mercy Pharm',
		description:
			'Developed a MERN stack website for users seeking care products. Used Node.js, Express.js, and MongoDB for backend operations. Integrated Joi for validation and Cloudinary for photo uploads. Frontend built with React.js, Vite, Tailwind CSS, Framer Motion, i18next, and Swiper for a dynamic and intuitive user experience.',
		image: jarradMercyPharm,
		tags: [
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'TailwindCSS',
			'ContextAPI',
			'Cloudinary',
			'i18next',
			'Swiper',
		],
		imgLink: 'https://mercypharm.com',
		github: 'https://github.com/Mohammed-Jarrad/mercypharm-frontend.git',
		githubBackend: 'https://github.com/Mohammed-Jarrad/mercypharm-backend.git',
		mainColor: '#3e6541',
	},
	{
		title: 'Marble Net',
		description:
			'Crafted a marble sales platform using MERN stack. Frontend: React.js with Vite, Axios, Framer Motion, React Router DOM, SweetAlert2. Backend: Express.js, bcryptjs, JWT, Cloudinary with Multer, MongoDB with Mongoose.',
		image: jarradMarbleNet,
		tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'ContextAPI', 'Cloudinary'],
		imgLink: 'https://marblenet.netlify.app',
		github: 'https://github.com/Mohammed-Jarrad/marble-net-frontend.git',
		githubBackend: 'https://github.com/Mohammed-Jarrad/marble-net-backend.git',
		mainColor: '#308faf',
	},
	{
		title: 'Blogs',
		description:
			'Designed a MERN-based blogging platform with security features, SASS styling, React-Query state management, and Axios. Boasts Cloudinary image uploads, user engagement tools, and an integrated admin dashboard for content and user oversight.',
		image: jarradBlogs,
		tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SASS', 'React-Query'],
		imgLink: 'https://jarrad-blogs.netlify.app',
		github: 'https://github.com/Mohammed-Jarrad/Blogs-Frontend-V2.git',
		githubBackend: 'https://github.com/Mohammed-Jarrad/Blogs-Backend.git',
		mainColor: '#d25d59',
	},
	{
		title: 'Social Media',
		description:
			'Crafted a React social media platform with SASS & swiper-js for unique stories, featuring dark mode and polished user interfaces. Highlights immersive web design using modern tools.',
		image: jarradSocialMedia,
		tags: ['React.js', 'SASS', 'Swiper.js'],
		imgLink: 'https://jarrad-socialmedia.netlify.app',
		github: 'https://github.com/Mohammed-Jarrad/social-media-app-front.git',
		mainColor: '#5271ff',
	},
	{
		title: 'Nike Showcase',
		description:
			'Developed a dynamic React single-page application showcasing Nike shoes, styled seamlessly with Tailwind CSS, featuring sections such as Home, Services, and Contact.',
		image: jarradNike,
		tags: ['React.js', 'TailwindCSS'],
		imgLink: 'https://jarrad-nike.netlify.app',
		github: 'https://github.com/Mohammed-Jarrad/Jarrad-Nike.git',
		mainColor: '#ff6452',
	},
	{
		title: 'Delta',
		description:
			'Created a security services Delta App with preset data using React.js. Styled using styled-components library, animations with framer-motion library, and sliders via react-slick library.',
		image: jarradDelta,
		tags: ['React.js', 'Styled-Components', 'Framer-Motion', 'React-Slick'],
		imgLink: 'https://jarrad-delta.netlify.app',
		github: 'https://github.com/Mohammed-Jarrad/react-delta-frontend.git',
		mainColor: '#071c2f',
	},
] 

export const skillsData = [
	'HTML',
	'CSS',
	'TailwindCSS',
	'SASS',
	'JavaScript',
	'TypeScript',
	'React',
	'Node.js',
	'Express.js',
	'MongoDB',
	'Framer Motion',
	'Git',
	'GitHub',
] as const
