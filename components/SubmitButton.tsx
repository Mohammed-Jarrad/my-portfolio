import { experimental_useFormStatus } from "react-dom"
import { FaPaperPlane } from "react-icons/fa"

const SubmitButton = () => {
	const { pending } = experimental_useFormStatus()

	return (
		<button
			className="flex items-center gap-2 bg-gray-700 text-white py-2 px-4 font-delius rounded-full w-fit group hover:bg-gray-900 active:scale-105 hover:ring-4 hover:ring-violet-300 transition-all duration-300 disabled:scale-100 disabled:bg-gray-600 dark:bg-violet-800 dark:hover:ring-0 dark:hover:scale-105"
			type="submit"
			disabled={pending}
		>
			{pending ? (
				<div className="h-5 w-5 animate-spin border-b-2 rounded-full"></div>
			) : (
				<>
					Submit{' '}
					<FaPaperPlane className="group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition duration-[.4]" />
				</>
			)}
		</button>
	)
}

export default SubmitButton
