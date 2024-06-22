import React from 'react';

type InputProps = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, name, className, onChange }) => {
  return (
    <div className="text-[10px] md:text-[12px] lg:text-[15px]">
        <label htmlFor={name} className='font-medium'>{label}</label>
        <div className="relative mt-2">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={className}
          />
        </div>
    </div>
  );
};

export default Input;
