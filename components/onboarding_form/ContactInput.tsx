import React from 'react'
import Image from 'next/image'

interface ContactInputProps {
    htmlFor: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired: boolean;
}

const ContactInput = ({
    htmlFor,
    label,
    placeholder,
    value,
    onChange,
    isRequired = false,
}: ContactInputProps) => {
    return (
        <div className='flex flex-col items-start p-0 md:pl-10 justify-center w-[800px] max-w-[80%] mt-4'>
            <label htmlFor={htmlFor} className={`text-xl text-blue-800 font-medium ${isRequired ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>{label}</label>
            <div className='w-full flex gap-2'>
                <select name="countryCode" id="countryCode" className='w-[15%] min-w-[60px] text-xl mx-auto border-b-2 border-black focus:outline-none' disabled>
                    <option value="+91">+91</option>
                </select>
                <input
                    type="text"
                className='w-full mt-2 text-xl mx-auto border-b-2 border-black focus:outline-none'
                id={htmlFor}
                placeholder={placeholder}
                value={value}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default ContactInput