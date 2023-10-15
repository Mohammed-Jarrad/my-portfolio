'use client'
import { useActiveSectionContext } from '@/context/ActiveSectionProvider'
import { links } from '@/lib/data'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import ToggleMobileButton from './ToggleMobileButton'

const MobileHeader = () => {
	const [show, setShow] = useState<boolean>(false)
	const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<>
			<header
				className={`sm:hidden fixed top-2 left-2 right-2 rounded-xl h-[50px] flex items-center justify-between px-5 !z-[150] bg-white bg-opacity-60 backdrop-blur-md shadow-md dark:bg-gray-950 dark:bg-opacity-80 dark:backdrop-blur-md`}
			>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="bg-gradient-to-r from-violet-500 to-violet-700 text-white w-8 h-8 rounded-full flex-center font-itim cursor-pointer"
					onClick={() => {
						setActiveSection('Home')
						setTimeOfLastClick(Date.now())
						setShow(false)
					}}
				>
					<Link href={'#home'}>MJ</Link>
				</motion.div>

				<ToggleMobileButton setShow={setShow} show={show} />

				{/* List */}
				<motion.ul
					className={clsx('absolute left-0 right-0 bg-white bg-opacity-90 backdrop-blur-2xl px-8 py-8 z-[150] shadow-lg rounded-xl dark:bg-gray-950 dark:bg-opacity-90 dark:backdrop-blur-md', {
						'': !show,
					})}
					variants={{
						visible: { opacity: 1, top: 55, pointerEvents: 'auto' },
						hidden: { opacity: [0.9, 0.5, 0], top: 400, pointerEvents: 'none' },
					}}
					initial="hidden"
					animate={show ? 'visible' : 'hidden'}
					transition={{ duration: 0.4 }}
				>
					{links.map(link => (
						<li
							key={link.hash}
							className={clsx(
								`mb-3 py-1 px-3 font-delius relative text-gray-900 w-40 mx-auto text-center dark:text-gray-50`,
								{
									'!text-gray-50': activeSection == link.name,
								},
							)}
							onClick={() => {
								setActiveSection(link.name)
								setTimeOfLastClick(Date.now())
								setShow(false)
							}}
						>
							<Link href={link.hash}>{link.name}</Link>

							{activeSection == link.name && (
								<motion.span
									layoutId="layout"
									className="absolute inset-0 bg-gradient-to-r from-violet-500 to-violet-700 -z-[1] rounded-xl shadow-xl"
								></motion.span>
							)}
						</li>
					))}
				</motion.ul>
			</header>

			{/* Overlay */}
			<div
				className={clsx(`fixed top-[0px] left-0 bottom-0 right-0 bg-black/50 backdrop-blur-sm z-[100] sm:hidden dark:bg-gray-800 dark:bg-opacity-50`, {
					hidden: !show,
				})}
				onClick={() => setShow(false)}
			/>
		</>
	)
}

export default MobileHeader
