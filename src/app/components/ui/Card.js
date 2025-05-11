export default function Card({ 
  children, 
  className = '',
  variant = 'default',
  ...props 
}) {
  const baseStyles = 'rounded-lg shadow-sm border border-gray-200';
  
  const variantStyles = {
    default: 'bg-white',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-orange-50 border-orange-200',
    success: 'bg-green-50 border-green-200',
    info: 'bg-blue-50 border-blue-200',
  };
  
  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
} 