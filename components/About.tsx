'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const About = () => {
	const firstP = `
    After graduating with a bachelor's degree in Computer Systems Engineering, I decided to
    pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I
    love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar
    with TypeScript. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
    `
	const secondP = `
    When I'm not coding, I enjoy playing video games, watching movies. I also enjoy learning new things. I am currently learning about 2D and 3D Animations.
    `
	const { ref, inView } = useSectionInView('About', 0.9)

	return (
		<motion.section
			className="text-center leading-8 scroll-mt-28 font-comfortaa"
			variants={{
				hidden: { opacity: 0, x: -200 },
				visible: { opacity: 1, x: 0 },
			}}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			transition={{ duration: 0.5 }}
			ref={ref}
			id="about"
		>
			<SectionHeader>About Me</SectionHeader>

			<motion.p
				variants={{
					hidden: { opacity: 0, x: -200 },
					visible: { opacity: 1, x: 0 },
				}}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				transition={{ delay: 0.2 }}
				className="mb-3 text-left"
			>
				{firstP}
			</motion.p>

			<motion.p
				variants={{
					hidden: { opacity: 0, x: -200 },
					visible: { opacity: 1, x: 0 },
				}}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
				transition={{ delay: 0.4 }}
				className="text-left"
			>
				{secondP}
			</motion.p>
		</motion.section>
	)
}

export default About
