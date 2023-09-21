'use client'
import { useActiveSectionContext } from "@/context/ActiveSectionProvider"
import clsx from 'clsx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { LuArrowBigUp } from 'react-icons/lu'

const ScrollToTop = () => {
	const { scrollY, scrollYProgress } = useScroll()
	const [show, setShow] = useState<boolean>(false)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > 200) {
			setShow(true)
		} else {
			setShow(false)
		}
	})

	useMotionValueEvent(scrollYProgress, 'change', latest => {
		if (latest >= 0.97) {
			setShow(false)
		} 
 	})

	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setActiveSection('Home')
        setTimeOfLastClick(Date.now())
	}

	return (
		<motion.div
			className={clsx(
				`fixed right-3 sm:right-5 bottom-16 sm:bottom-20 bg-violet-500 w-10 h-10 flex-center rounded-full cursor-pointer z-[200] bg-opacity-60 backdrop-blur-sm`,
				{
					'!hidden': !show,
				},
			)}
			onClick={handleClick}
		>
			<motion.span
				initial={{ translateY: -4 }}
				animate={{ translateY: 0}}
				transition={{ repeat: Infinity, repeatType: 'reverse', ease: 'easeIn', duration: 0.4 }}
			>
				<LuArrowBigUp size="25px" color="white" />
			</motion.span>
		</motion.div>
	)
}

export default ScrollToTop
