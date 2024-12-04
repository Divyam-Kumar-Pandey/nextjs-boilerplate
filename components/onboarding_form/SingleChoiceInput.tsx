import React from 'react'

type SingleChoiceInputProps = {
    htmlFor: string,
    label: string,
    isRequired?: boolean,
    value: string,
    formData: any,
    setFormData: any
}

const SingleChoiceInput = ({
    htmlFor,
    label,
    isRequired = false,
    value,
    formData,
    setFormData
}: SingleChoiceInputProps) => {
    const buttonStyle = 'w-[100px] h-[40px] flex items-center justify-center cursor-pointer transition-all duration-100 active:scale-[0.98] rounded-sm ring-1 ring-gray-400 ring-offset-1';
    
  return (
    <div className='flex flex-col items-start pl-0 md:pl-10 justify-center w-[800px] max-w-[80%] mt-4'>
        <label htmlFor={htmlFor} className={`text-xl text-blue-800 font-medium ${isRequired ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>{label}</label>
        <div className='flex flex-col gap-4 mt-2'>
            {
                [1, 2, 3, 4].map((num) => (
                    <div key={num} className={`${buttonStyle} ${value.toString() == num.toString() ? 'bg-blue-600 text-white ring-blue-600' : 'bg-gray-300 text-black ring-gray-400'}`} onClick={() => setFormData({ ...formData, numberOfVehicles: num.toString() })}>
                        <input type='radio' id={num.toString()} name='vehicles' value={num.toString()} className='hidden' onChange={(event) => setFormData({ ...formData, numberOfVehicles: event.target.value })} checked={value === num.toString()} /> 
                        <label htmlFor={num.toString()}>{num}</label>
                    </div>
                  ))
              }
        </div>
    </div>
  )
}

export default SingleChoiceInput