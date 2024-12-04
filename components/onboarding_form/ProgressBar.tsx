import React from 'react'

const ProgressBar = ({ currentSection, sections }: { currentSection: string, sections: string[] }) => {
    const currentSectionIndex = sections.indexOf(currentSection);
    const progress = (currentSectionIndex / (sections.length - 1)) * 100;

    return (
        <>
            <div className='w-full h-[5px] z-10 bg-gray-200 rounded-full absolute top-0 left-0'>
                <div className='h-[5px] bg-blue-500 rounded-full transition-all duration-700' style={{ width: `${progress}%` }} ></div>
            </div>
        </>
    )
}

export default ProgressBar