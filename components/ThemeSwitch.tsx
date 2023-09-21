'use client'
import { useThemeContext } from '@/context/ThemeProvider'
import { motion } from 'framer-motion'
import { BsMoon, BsSun } from 'react-icons/bs'

const ThemeSwitch = () => {
	const { theme, toggleTheme } = useThemeContext()

	return (
		<motion.button
			className="
    fixed right-3 sm:right-5 bottom-5 sm:bottom-8  w-10 h-10 flex-center rounded-full cursor-pointer z-[200]
    border-2 border-violet-500 border-opacity-60
    transition-all hover:scale-110 active:scale-105
    bg-white bg-opacity-40 backdrop-blur-sm
    dark:bg-gray-950 dark:bg-opacity-70
    "
			onClick={toggleTheme}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			{theme == 'light' ? <BsSun /> : <BsMoon />}
		</motion.button>
	)
}

export default ThemeSwitch
