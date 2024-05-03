import React from 'react';

type InputProps = {
    label: string;
    placeholder?: string;
    type: string;
    name: string;
    // Add other props if needed
}

export const Input = ({label, placeholder, type, name} : InputProps) => {
    return (
        <div className="text-[10px] md:text-[12px] lg:text-[15px]">
            <label className=' font-medium'>{label}</label>
            <input 
                className="border border-yellow focus:outline-yellow min-w-full px-4 py-3 text-[10px] md:text-[12px] lg:text-[15px] rounded-sm" 
                placeholder={placeholder} 
                type={type} 
                name={name}
                required 
            />
        </div>
    );
}