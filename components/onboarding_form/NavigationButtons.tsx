import React, { MouseEvent } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

interface NavigationButtonsProps {
    currentSection: string;
    sections: string[];
    scrollToPreviousSection: (event: MouseEvent<HTMLButtonElement>) => void;
    scrollToNextSection: (event: MouseEvent<HTMLButtonElement>) => void;
}

const sectionButtons = ['Get Started', 'Next', 'Enter Vehicle Details'];

const NavigationButtons = ({
    currentSection,
    sections,
    scrollToPreviousSection,
    scrollToNextSection
}: NavigationButtonsProps) => {
    let index = sections.indexOf(currentSection);
    return (
        <div className='absolute z-10 bottom-[25px] left-0 right-0 *:h-[50px] mx-auto w-[90%] max-w-[800px] flex gap-4 *:bg-blue-500 text-white cursor-pointer *:rounded-[4px] motion-scale-in-[0.5]'>
            {currentSection !== sections[0] && <button onClick={(event) => scrollToPreviousSection(event)} className='w-[60px] cursor-pointer flex items-center justify-center active:bg-blue-600 transition-all duration-100 motion-scale-in-[1] motion-translate-x-in-[100%] '><IoChevronBackOutline className='text-2xl' /></button>}
            <button onClick={(event) => scrollToNextSection(event)} className='w-full cursor-pointer text-center active:bg-blue-600 transition-all duration-100 motion-scale-in-[1]'>{ sectionButtons[index] }</button>
        </div>
    )
}

export default NavigationButtons