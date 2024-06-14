import React from "react";

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className="text-4xl mb-8 font-bold font-itim uppercase text-center w-fit mx-auto gradient-black dark:from-orange-200  dark:to-orange-400">
            {children}
        </h2>
    );
};

export default SectionHeader;
