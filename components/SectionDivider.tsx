'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SectionDivider = ({ sectionName }: { sectionName: string }) => {
	const { ref, inView } = useInView({})
	const lineVarients = {
		hidden: { scaleX: 0, originX: 1, opacity: 0 },
		visible: { scaleX: 1, originX: 1, opacity: 1, transition: { duration: 0.5 } },
	}
	const nameVarients = {
		hidden: { y: -50, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.3 } },
	}
	const emojiVarients = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: [1.5, 1],
			opacity: 1,
			transition: { delay: 0.8, duration: 0.3, type: 'spring', stiffness: 125 },
		},
	}
	return (
		<motion.div ref={ref} className="my-24 w-full">
			<div>
				<motion.span
					variants={nameVarients}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
					className="text-lg font-itim"
				>
					{sectionName}
				</motion.span>
				<motion.span
					variants={emojiVarients}
					initial="hidden"
					animate={inView ? 'visible' : 'hidden'}
					className="text-lg font-itim"
				>
					👋
				</motion.span>
			</div>
			<motion.div
				initial={'hidden'}
				animate={inView ? 'visible' : 'hidden'}
				variants={lineVarients}
				className="w-full bg-black/10 h-[2px] rounded-full text-right dark:bg-gray-600"
			></motion.div>
		</motion.div>
	)
}

export default SectionDivider
