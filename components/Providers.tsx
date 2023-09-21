import ActiveSectionProvider from '@/context/ActiveSectionProvider'
import ThemeProvider from '@/context/ThemeProvider'
import React from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<ActiveSectionProvider>{children}</ActiveSectionProvider>
		</ThemeProvider>
	)
}

export default Providers
