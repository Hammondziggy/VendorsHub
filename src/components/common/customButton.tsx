// CustomButton.ts

import React from 'react';
import { CustomButtonTypes } from '@/types/commonTypes/button';

interface CustomButtonProps extends CustomButtonTypes {
  textSize?: string; // Additional Tailwind CSS text size classes
  width?: string; 
  height?: string;
  padding?: string;
  className?: string;
  type?: string;
  disabled?: boolean | (() => boolean);
}

const CustomButton: React.FC<CustomButtonProps> = ({
  background = '#F5BD02',
  borderRadius = '20px',
  border = 'none',
  cursor = 'pointer',
  children,
  className,
  height,
  onClick,
  padding,
  textColor = '#1E1E1E',
  textSize = 'text-base', // Default to base text size
  type,
  width,
  disabled,
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
    type,
    disabled,
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