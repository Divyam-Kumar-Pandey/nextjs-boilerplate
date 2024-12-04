import React from 'react'

type TimeInputProps = {
    htmlFor: string,
    label: string,
    isRequired?: boolean,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TimeInput = ({
    htmlFor,
    label,
    isRequired = false,
    value,
    onChange
}: TimeInputProps) => {
    return (
        <div className='flex flex-col items-start pl-0 md:pl-10 justify-center w-[800px] max-w-[80%] mt-4'>
            <label htmlFor={htmlFor} className={`text-xl text-blue-800 font-medium ${isRequired ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>{label}</label>
            <input type="time" id={htmlFor} className='w-full mt-2 text-xl mx-auto border-b-2 bg-transparent border-black focus:outline-none' value={value} onChange={onChange} />
        </div>
    )
}

export default TimeInput