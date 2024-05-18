'use client'

import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const Skills = () => {
	const { ref, inView } = useSectionInView('Skills', 0.3)

	return (
		<section ref={ref} id="skills" className="scroll-mt-28">
			<motion.div
				initial={{ x: -200, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
                transition={{duration: 0.5}}
			>
				<SectionHeader>My Skills</SectionHeader>
			</motion.div>
			<ul className="flex-center flex-wrap gap-4 max-w-lg">
				{skillsData.map((skill, idx) => (
					<motion.li
						key={skill}
						variants={{
							hidden: { translateX: -50, translateY: -50, opacity: 0 },
							visible: { translateX: 0, translateY: 0, opacity: 1 },
						}}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
 						transition={{ delay: idx * 0.03 }}
					>
						<motion.span
							className="inline-block bg-white  shadow-2xl text-gray-800 border border-black/10 py-1 px-3 capitalize rounded-lg font-comfortaa dark:bg-white/10 dark:text-gray-300 "
							variants={{
								hidden: { scale: 0 },
								visible: { scale: [1.03, 0.97] },
							}}
							initial="hidden"
							whileInView='visible'
							transition={{ repeat: Infinity, duration: 0.5, delay: idx * 0.1, repeatType: 'reverse' }}
						>
							{skill}
						</motion.span>
					</motion.li>
				))}
			</ul>
		</section>
	)
}

export default Skills
