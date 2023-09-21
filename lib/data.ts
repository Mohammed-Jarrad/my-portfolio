import jarradBlogs from '@/public/sites-images/jarrad-blogs.png'
import jarradDelta from '@/public/sites-images/jarrad-delta.png'
import jarradEcommerce from '@/public/sites-images/jarrad-ecommerce.png'
import jarradNike from '@/public/sites-images/jarrad-nike.png'
import jarradPromtopia from '@/public/sites-images/jarrad-promptopia.png'
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
		location: '/Mohammed Jarrad-CV.pdf',
	},
	personalImg: {
		src: '/pimage.png',
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
		title: 'E-Commerce',
		description:
			'Built a MERN e-commerce platform with SASS & dark mode & Swiper-js, offering user verification, product categorization, and filtering. Features an admin dashboard for streamlined order and product management.',
		image: jarradEcommerce,
		tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SASS', 'ContextAPI'],
		imgLink: 'https://momenstore.com',
		github: 'https://github.com/Mohammed-Jarrad/react-shopping-cart.git',
		mainColor: '#00a28b',
	},
	{
		title: 'Blogs',
		description:
			'Designed a MERN-based blogging platform with security features, SASS styling, React-Query state management, and Axios. Boasts Cloudinary image uploads, user engagement tools, and an integrated admin dashboard for content and user oversight.',
		image: jarradBlogs,
		tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SASS', 'React-Query'],
		imgLink: 'https://jarrad-blogs.netlify.app',
		github: 'https://github.com/Mohammed-Jarrad/Blogs-Frontend-V2.git',
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
	{
		title: 'Promptopia',
		description:
			'Built a "Shared-Prompts" web app using Next.js 13 and Tailwind CSS, integrating Google Sign-In via next-auth. The full-stack platform supports extensive CRUD operations, allowing users to manage prompts and access personalized profiles efficiently.',
		image: jarradPromtopia,
		tags: ['Next.js', 'TailwindCSS', 'Next-Auth', 'MongoDB', 'Mongoose'],
		imgLink: 'https://jarrad-promptopia.vercel.app',
		github: 'https://github.com/Mohammed-Jarrad/promptopia.git',
		mainColor: '#ff5722',
	},
] as const

export const skillsData = [
	'Java',
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Express.js',
	'MongoDB',
	'Redux',
	'Framer Motion',
	'Tailwind',
	'SASS',
	'Git',
	'GitHub',
] as const
