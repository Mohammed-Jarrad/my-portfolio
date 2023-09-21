'use client'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import { Project } from './Project'
import SectionHeader from './SectionHeader'

const Projects = () => {
	const { ref: mainRef, inView } = useSectionInView('Projects', 0.05)
	const varients = {
		hidden: { x: -200, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}

	return (
		<motion.section
			id="projects"
			className="scroll-mt-28"
			variants={varients}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			transition={{ duration: 0.5 }}
			ref={mainRef}
		>
			<SectionHeader>My Projects</SectionHeader>

			<div className="overflow-hidden">
				{projectsData.map((project, i) => (
					<React.Fragment key={project.title}>
						<Project {...project} index={i} />
					</React.Fragment>
				))}
			</div>
		</motion.section>
	)
}

export default Projects
