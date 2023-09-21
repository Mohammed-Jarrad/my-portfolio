import { activeSectionType, useActiveSectionContext } from "@/context/ActiveSectionProvider"
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function useSectionInView(sectionName: activeSectionType, threshold?: number) {

    const {ref, inView} = useInView({ triggerOnce: false, threshold})
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, sectionName, setActiveSection, timeOfLastClick])
    
    return {
        ref, inView
    }

}