import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollToTop from "@/components/ScrollToTop";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Toaster } from "react-hot-toast";

export default function Home() {
    return (
        <main className="flex-col flex-center w-full sm:max-w-screen-lg px-3 sm:px-1 mx-auto overflow-x-hidden">
            <Toaster position="bottom-left" />
            <ScrollToTop />
            <ScrollIndicator />
            <ThemeSwitch />

            <Intro />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Contact />
        </main>
    );
}
