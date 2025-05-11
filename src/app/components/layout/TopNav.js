'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import { useAuth } from '@/app/context/AuthContext';

export default function TopNav() {
  const { logout, user } = useAuth();

  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center shadow-sm h-16">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-semibold text-gray-900">Issues</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button 
          variant="secondary" 
          icon="/images/export_icon.svg"
        >
          Export
        </Button>
        
        <Button 
          variant="secondary"
          icon="/images/refresh_icon.svg"
        >
          Refresh
        </Button>

        <div className="ml-6 flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 mr-2">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <span className="text-sm font-medium text-gray-700">{user?.name || 'User'}</span>
          </div>
          
          <Button 
            variant="ghost"
            className="text-sm"
            onClick={logout}
          >
            Logout
          </Button>
          
          <Image 
            src="/images/realize_logo.svg" 
            alt="Realize Logo" 
            width={100} 
            height={28} 
          />
        </div>
      </div>
    </div>
  );
} 