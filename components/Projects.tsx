'use client'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import React from 'react'
import { Project } from './Project'
import SectionHeader from './SectionHeader'

const Projects = () => {

	return (
		<motion.section
			id="projects"
			className="scroll-mt-28"
		>
			<SectionHeader>My Projects</SectionHeader>

			<div className="overflow-hidden">
				{projectsData.map((project, i) => (
					<React.Fragment key={project.title}>
						<Project {...project} githubBackend={project?.githubBackend ?? undefined} index={i} />
					</React.Fragment>
				))}
			</div>
		</motion.section>
	)
}

export default Projects
