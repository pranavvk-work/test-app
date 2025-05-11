'use client';

export default function Select({ 
  children, 
  className = '',
  ...props 
}) {
  return (
    <select 
      className={`px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}