import React from 'react'
import Select from 'react-select';
interface SelectDropdownInputProps {
    htmlFor: string;
    label: string;
    name: string;
    id: string;
    options: { value: string, label: string }[];
    isRequired: boolean;
}



const SelectDropdownInput = ({
    htmlFor,
    label,
    name,
    id,
    options,
    isRequired = false
}: SelectDropdownInputProps) => {
    return (
        <div className='flex flex-col items-start p-0 md:pl-10 justify-center w-[800px] max-w-[80%] mt-4'>
            <label htmlFor={htmlFor} className={`text-xl text-blue-800 font-medium ${isRequired ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}`}>{label}</label>
            <Select
                className="basic-single w-full mt-2 text-xl mx-auto  focus:outline-none outline-none"
                classNamePrefix="select"
                defaultValue={options[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                id={id}
                name={name}
                options={options}
                menuPlacement='top'
            />
        </div>
    )
}

export default SelectDropdownInput