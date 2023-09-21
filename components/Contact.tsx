'use client'
import { sendEmail } from '@/actions/sendEmail'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import toast from "react-hot-toast"
import SectionHeader from './SectionHeader'
import SubmitButton from "./SubmitButton"

const Contact = () => {
	const { ref, inView } = useSectionInView('Contact', 0.3)

	const variants = {
		hidden: { x: -200, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}

	return (
		<motion.section
			variants={variants}
			initial="hidden"
			animate={inView ? 'visible' : 'hidden'}
			transition={{ duration: 0.5 }}
			ref={ref}
			className="scroll-mt-28 w-full"
			id="contact"
		>
			<SectionHeader>Contact Me</SectionHeader>

			<p className="font-rubik text-center text-gray-500 sm:max-w-md sm:mx-auto">
				Please reach me out directly at{' '}
				<a href="mailto:mohammed.w.jarrad@gmail.com" className="underline font-medium">
					mohammed.w.jarrad@gmail.com
				</a>{' '}
				or through this form.
			</p>

			<form className="w-full flex flex-col gap-2 mt-7" action={async formData => {
				const { error } = await sendEmail(formData)
				if(error) {
					toast.error(error)
					return;
				}
				toast.success('Your email sent successfully!')
			}}>
				<input
					placeholder="Your email"
					type="email"
					className="text-sm rounded-[6px] outline-none py-3 px-2 border border-black/10 trasition-all duration-300 focus:caret-violet-500 hover:border-black/20 focus:border-black/20 focus:pl-4  font-delius w-full dark:caret-gray-50 dark:bg-[#FFFFFF0D]"
					required
					maxLength={500}
					name="senderEmail"
				/>
				<textarea
					placeholder="Your Message"
					className="text-sm rounded-[6px] resize-none h-[200px] outline-none py-2 px-3 border border-black/10 focus:caret-violet-500 hover:border-black/20 focus:border-black/20  font-delius trasition-all duration-300 focus:pl-4 w-full dark:caret-gray-50 dark:bg-[#FFFFFF0D]"
					required
					maxLength={5000}
					name="message"
				/>
				<SubmitButton />
			</form>
		</motion.section>
	)
}

export default Contact
