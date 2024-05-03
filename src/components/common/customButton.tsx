// CustomButton.ts

import React from 'react';
import { CustomButtonTypes } from '@/types/commonTypes/button';

interface CustomButtonProps extends CustomButtonTypes {
  textSize?: string; // Additional Tailwind CSS text size classes
  width?: string; 
  height?: string;
  padding?: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  border = 'none',
  onClick,
  background = '#F5BD02',
  width,
  height,
  textColor = '#1E1E1E',
  padding,
  borderRadius = '20px',
  cursor = 'pointer',
  children,
  textSize = 'text-base', // Default to base text size
  className,
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
    className,
  };

  return (
    <button
      className={`center font-bold hover:scale-95 block transition duration-300 ${textSize} ${className}`}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;