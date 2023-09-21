'use client'
import { links } from '@/lib/data'
import React from 'react'

export type activeSectionType = (typeof links)[number]['name']
type activeSectionProviderProps = {
	children: React.ReactNode
}
type activeSectionContextType = {
	activeSection: activeSectionType
	setActiveSection: React.Dispatch<React.SetStateAction<activeSectionType>>
	timeOfLastClick: number
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = React.createContext<activeSectionContextType | null>(null)

const ActiveSectionProvider = ({ children }: activeSectionProviderProps) => {
	const [activeSection, setActiveSection] = React.useState<activeSectionType>('Home')
	const [timeOfLastClick, setTimeOfLastClick] = React.useState<number>(0)

	return (
		<ActiveSectionContext.Provider
			value={{ activeSection, setActiveSection, setTimeOfLastClick, timeOfLastClick }}
		>
			{children}
		</ActiveSectionContext.Provider>
	)
}

export function useActiveSectionContext() {
	const context = React.useContext(ActiveSectionContext)
	if (context === null) {
		throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
	}
	return context
}

export default ActiveSectionProvider
