'use client'
import { useActiveSectionContext } from '@/context/ActiveSectionProvider'
import { links } from '@/lib/data'
import clsx from 'clsx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const DesktopHeader = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	const [scrollingUp, setScrollingUp] = useState<boolean>(true)
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, 'change', latest => {
		const prev = scrollY.getPrevious()

		if (latest < prev) setScrollingUp(true)
		else if (latest > prev && latest > 100) setScrollingUp(false)
	})

	const variants = {
		hidden: { x: -100, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}
    
  return (
    <header className="relative z-[150] max-sm:hidden">
			<motion.nav
				className={clsx(
					`fixed top-0 left-1/2 !-translate-x-1/2 h-[4.5rem] sm:top-6 sm:h-[3.25rem] w-full px-1 sm:w-[35rem] sm:px-0
					transition-all duration-300
					flex-center 
					`,
					{
						' sm:!top-0 sm:h-[3.65rem] transition-all duration-300 max-sm:!h-0 max-sm:!overflow-hidden':
							!scrollingUp,
					},
				)}
			>
				<ul
					className="
                        flex-center gap-3 h-full 
                        max-sm:max-w-[22rem] max-sm:w-[22rem] max-sm:flex-wrap max-sm:gap-y-0 max-sm:mx-auto
                    "
				>
					{links.map((link, index) => (
						<motion.li
							key={link.name}
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: [100, -10, 0], opacity: 1 }}
							transition={{ delay: 0.125 * index, duration: 0.3 }}
						>
							<Link
								href={link.hash}
								className={clsx(
									`hover:text-gray-950 transition-all text-gray-500 text-[.9rem] font-rubik py-2 px-3 rounded-full max-sm:py-1
									dark:hover:text-gray-300 
                                `,
									{
										'!text-gray-50 relative dark:text-gray-300': link.name == activeSection,
									},
								)}
								onClick={() => {
									setActiveSection(link.name)
									setTimeOfLastClick(Date.now())
								}}
							>
								{link.name}
								{link.name == activeSection && (
									<motion.span
										layoutId="active section nav item"
										transition={{
											type: 'spring',
											stiffness: 200,
											damping: 30,
										}}
										className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-violet-500 to-violet-700 dark:from-violet-600 dark:to-violet-800"
									/>
								)}
							</Link>
						</motion.li>
					))}

					
				</ul>

				<motion.div
						className={clsx(
							`
                        absolute inset-0 -z-[2] rounded-none sm:rounded-full shadow-2xl backdrop-blur-2xl sm:bg-opacity-60 transition-all duration-300
						bg-white
						dark:bg-gray-950
						dark:sm:bg-opacity-75 dark:backdrop-blur-md dark:max-sm:bg-opacity-90
                    `,
							{
								'sm:!rounded-none sm:!rounded-bl-full sm:!rounded-br-full ':
									!scrollingUp,
							},
						)}
						variants={variants}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.3, ease: 'linear' }}
					/>
			</motion.nav>
		</header>
  )
}

export default DesktopHeader
