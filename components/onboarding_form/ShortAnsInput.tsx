import React from 'react'

type ShortAnsInputProps = {
    htmlFor: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
}
// style similar to typeform

const ShortAnsInput = ({
    htmlFor,
    label,
    placeholder,
    value,
    onChange,
    isRequired = false,
}: ShortAnsInputProps) => {
  return (
      <div className='flex flex-col items-start p-0 md:pl-10 justify-center w-[800px] max-w-[80%] mt-4'>
          <label htmlFor={htmlFor} className={`text-xl text-blue-800 font-medium ${isRequired ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>{label}</label>
          <input
              type="text"
              className='w-full mt-2 text-xl mx-auto border-b-2 border-black focus:outline-none'
              id={htmlFor}
              placeholder={placeholder}
              value={value}
              onChange={onChange} />
      </div>
  )
}

export default ShortAnsInput