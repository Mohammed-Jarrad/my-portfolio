'use client'
import { useActiveSectionContext } from '@/context/ActiveSectionProvider'
import { personalDetails } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { MdDownload, MdOutlineArrowRightAlt } from 'react-icons/md'

const Intro = () => {
	const { ref: introRef } = useSectionInView('Home', 0.99)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	const [indicator, setIndicator] = useState<number>(0)
	const [indicator2, setIndicator2] = useState<number>(0)
	const [direction, setDirection] = useState<'forward' | 'backward'>('forward')
	const infos = ['Web Developer', 'Frontend Developer', 'Backend Developer'] as const
	const [infoIndex, setInfoIndex] = useState(0)
	const name = useRef<string>('')
	const summary: string = `I'm a Computer System Engineer with a passion for web development, especially within the MERN
    stack. With a hands-on experience in modern web technologies` as const

	useEffect(() => {
		const typingSpeed = direction == 'forward' ? Math.floor(Math.random() * 300) : Math.floor(Math.random() * 100)
		const switchToDeleteDelay = 2000
		const switchToTypingDelay = 1000
		name.current = infos[infoIndex]
		if (direction == 'forward' && indicator < name.current.length) {
			setTimeout(() => {
				setIndicator(p => p + 1)
			}, typingSpeed)
		} else if (direction == 'backward' && indicator > 0) {
			setTimeout(() => {
				setIndicator(p => p - 1)
			}, typingSpeed)
		} else if (indicator == name.current.length) {
			setTimeout(() => {
				setDirection('backward')
			}, switchToDeleteDelay)
		} else if (indicator == 0) {
			setTimeout(() => {
				setDirection('forward')
				setInfoIndex(p => (p + 1) % infos.length)
			}, switchToTypingDelay)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [direction, indicator])

	useEffect(() => {
		if (indicator2 < summary.split(' ').length) {
			setTimeout(() => {
				setIndicator2(p => p + 1)
			}, Math.floor(Math.random() * 300))
		}
	}, [indicator2, summary])

	return (
		<section id="home" className="text-center scroll-mt-28" ref={introRef}>
			<div className="relative flex-center w-fit mx-auto">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ type: 'tween', duration: 0.2 }}
				>
					<motion.img
						src={personalDetails.personalImg.src}
						alt={personalDetails.personalImg.alt}
						className="w-40 rotate-6 h-40 max-w-full rounded-full pt-3 object-contain shadow-xl border-[0.35rem] border-white"
						initial={{ y: 0 }}
						animate={{ y: [-4, 4] }}
						transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
					/>
				</motion.div>
				<motion.span
					className="absolute text-5xl bottom-0 right-0"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'spring',
						stiffness: 125,
						delay: 0.2,
						duration: 0.7,
					}}
				>
					👋
				</motion.span>
			</div>

			<motion.div
				className="mt-6"
				initial={{ x: -200, opacity: 0 }}
				animate={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.3 } }}
			>
				<span className="block text-lg font-rubik mb-5">Hello I'm</span>
				<h1
					className="text-5xl max-sm:text-2xl uppercase tracking-tighter font-bold
					gradient-main font-rubik
				"
				>
					Mohammed Jarrad
				</h1>
			</motion.div>

			<motion.h2 className="flex-center" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
				<div
					className="font-medium text-xl sm:text-2xl font-rubik uppercase bg-clip-text text-transparent 
					bg-gradient-to-r from-gray-600 to-gray-900
				dark:from-rose-300 dark:to-rose-100"
				>
					<AnimatePresence>
						{name.current
							.split('')
							.slice(0, indicator)
							.map((letter, index) => (
								<motion.span
									key={letter + '-' + index}
									initial={{ opacity: 0, y: -50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.1 }}
								>
									{letter}
								</motion.span>
							))}
					</AnimatePresence>
				</div>
				<motion.span
					className={`text-transparent bg-clip-text bg-gradient-to-t text-4xl ${
						direction == 'forward' ? 'from-green-500 via-green-600 to-green-500' : 'from-red-400 via-red-500 to-red-400'
					} rounded-full select-none`}
					initial={{ opacity: 1 }}
					animate={{ opacity: [1, 0.2, 1] }}
					transition={{ duration: 1, repeat: Infinity }}
				>
					|
				</motion.span>
			</motion.h2>

			<motion.p
				className="text-gray-500 font-delius text-lg font-extralight mt-5 max-w-xl dark:text-gray-400"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				<AnimatePresence>
					{summary
						.split(' ')
						.slice(0, indicator2)
						.map((letter, index) => (
							<motion.span
								key={letter + '-' + index}
								initial={{ y: 100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.2 }}
							>
								{letter + ` `}
							</motion.span>
						))}
					<motion.span
						className={`text-transparent bg-clip-text ${
							indicator2 == summary.length ? 'bg-red-700' : 'bg-green-600'
						} rounded-full select-none font-bold ml-1`}
						initial={{ opacity: 1 }}
						animate={{ opacity: [1, 0.2, 1] }}
						transition={{ duration: 1, repeat: Infinity }}
					>
						|
					</motion.span>
				</AnimatePresence>
			</motion.p>

			<motion.div
				className="mt-6 flex-center gap-4 text-[.9rem] max-sm:flex-col"
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, ease: 'easeIn' }}
			>
				<Link
					href={'#contact'}
					className="info_button_inverse group"
					onClick={() => {
						setActiveSection('Contact')
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact Me Here <MdOutlineArrowRightAlt className="group-hover:translate-x-1 transition" />
				</Link>
				<a href={personalDetails.cv.location} download={true} className="info_button group">
					Download CV <MdDownload className="group-hover:translate-y-1 transition" />
				</a>
				<div className="flex-center gap-4">
					<a href={personalDetails.linkdIn.href} target="_blank" className="info_button group">
						<BiLogoLinkedin className="group-hover:scale-[1.1] transition" />
					</a>
					<a href={personalDetails.github.href} target="_blank" className="info_button group">
						<AiFillGithub className="group-hover:scale-[1.1] transition" />
					</a>
				</div>
			</motion.div>
		</section>
	)
}

export default Intro
