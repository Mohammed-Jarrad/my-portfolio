import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Mohammed Jarrad | Portfolio',
	description: 'Mohammed Jarrad Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-all duration-200`}
			>
				<div className=" absolute bg-[#fbcfe8] w-[31.25rem] h-[31.25rem] rounded-full top-[-6rem] right-[11rem] blur-[10rem] sm:w-[68.75rem] z-[-10] dark:bg-[#452a2b] transition-all dark:hidden" />

				<div className="absolute bg-[#dbd7fb] w-[50rem] h-[31.25rem] rounded-full top-[-1rem] left-[-35rem] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] z-[-10] dark:bg-[#403d62] transition-all dark:hidden" />

				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
