'use client';

import React from 'react';
import Image from 'next/image';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  className = '',
  ...props 
}) {
  const baseStyles = 'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-25 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-blue-600 text-white shadow-sm focus:ring-blue-500',
    secondary: 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm focus:ring-blue-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-sm focus:ring-green-500',
    ghost: 'bg-transparent hover:bg-gray-50 text-gray-900',
    link: 'bg-transparent text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline p-0'
  };
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-2.5'
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={buttonStyles} {...props}>
      {icon && (
        <span className="mr-2">
          {typeof icon === 'string' ? (
            <Image src={icon} alt="" width={18} height={18} />
          ) : (
            icon
          )}
        </span>
      )}
      {children}
    </button>
  );
} 