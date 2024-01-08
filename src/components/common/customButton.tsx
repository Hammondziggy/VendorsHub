// CustomButton.js
import React from 'react';
import { CustomButtonTypes } from '@/types/commonTypes/button';

interface CustomButtonProps extends CustomButtonTypes {
  textSize?: string; // Additional Tailwind CSS text size classes
}

const CustomButton: React.FC<CustomButtonProps> = ({
  border = 'none',
  onClick,
  background = '#F5BD02',
  width,
  height,
  textColor = '#1E1E1E',
  padding = '10px 20px',
  borderRadius = '20px',
  cursor = 'pointer',
  children,
  textSize = 'text-base', // Default to base text size
}) => {
  const buttonStyle = {
    border,
    background,
    padding,
    width,
    height,
    borderRadius,
    cursor,
    color: textColor,
  };

  return (
    <button
      className={`center border font-bold w-full hover:scale-95 transition duration-300 ${textSize}`}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;
