'use client';

import Image from 'next/image';
import Card from '../ui/Card';

export default function IssueStatusCard({ title, count, type }) {
  // Different styles based on type (error, warning, info)
  const getTypeStyles = () => {
    switch (type) {
      case 'error':
        return {
          variant: 'error',
          textColor: 'text-red-600',
          icon: '/images/warning_icon.svg',
          iconBg: 'bg-white'
        };
      case 'warning':
        return {
          variant: 'warning',
          textColor: 'text-orange-600',
          icon: '/images/warning_icon.svg',
          iconBg: 'bg-white'
        };
      case 'info':
        return {
          variant: 'info',
          textColor: 'text-blue-600',
          icon: '/images/info_icon.svg',
          iconBg: 'bg-white'
        };
      default:
        return {
          variant: 'success',
          textColor: 'text-green-600',
          icon: '/images/checkmark_icon.svg',
          iconBg: 'bg-white'
        };
    }
  };

  const { variant, textColor, icon, iconBg } = getTypeStyles();

  return (
    <Card variant={variant} className="p-4 flex items-center space-x-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg} shadow-sm`}>
        <Image 
          src={icon} 
          alt={title} 
          width={20} 
          height={20} 
        />
      </div>
      <div>
        <p className="text-sm text-gray-900 font-medium">{title}</p>
        <p className={`text-lg font-bold ${textColor}`}>{count}</p>
      </div>
    </Card>
  );
} 