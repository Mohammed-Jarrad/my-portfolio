'use client'
import React, { useContext, useEffect, useState } from 'react'

type ThemeContextType = {
	theme: Theme
	toggleTheme: () => void
}
type Theme = 'light' | 'dark'

export const ThemeContext = React.createContext<ThemeContextType | null>(null)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light')

	const toggleTheme = () => {
		if (theme == 'dark') {
			setTheme('light')
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		} else if (theme == 'light') {
			setTheme('dark')
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		}
	}

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme') as Theme | null

		if (localTheme) {
			setTheme(localTheme)

			if (localTheme === 'dark') {
				document.documentElement.classList.add('dark')
			}
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
			document.documentElement.classList.add('dark')
		}
	}, [])

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
	const context = useContext(ThemeContext)
	if (context === null) {
		throw new Error('useThemeContext must be used within an ThemeProvider')
	}
	return context
}

export default ThemeProvider
