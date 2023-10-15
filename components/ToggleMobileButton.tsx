import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

type ButtonType = {
	show: boolean
	setShow: Dispatch<SetStateAction<boolean>>
}

const ToggleMobileButton = ({ show, setShow }: ButtonType) => {
	return (
		<div className="relative h-[24px] w-[24px] cursor-pointer " onClick={() => setShow(p => !p)}>
			<motion.span
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0, duration: 0.3 }}
				className={clsx(
					`absolute top-[4px] left-0 w-[17px] h-[2px] bg-gray-900 rounded-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-violet-700`,
					{
						'!top-[12px] !w-[95%] !origin-center !rotate-45 !left-1/2 -translate-x-1/2 ': show,
					},
				)}
			></motion.span>
			<motion.span
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.1, duration: 0.3 }}
				className={clsx(
					`absolute top-[12px] left-0 -translate-y-1/2 w-full h-[2px] bg-gray-900 rounded-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-violet-700`,
					{
						'!opacity-0': show,
					},
				)}
			></motion.span>
			<motion.span
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2, duration: 0.3 }}
				className={clsx(
					`absolute top-[20px] left-0 w-[17px] h-[2px] bg-gray-900 rounded-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-violet-700`,
					{
						' !top-[12px] !w-[95%] !origin-center !-rotate-45 left-1/2 -translate-x-1/2  ': show,
					},
				)}
			></motion.span>
		</div>
	)
}

export default ToggleMobileButton
