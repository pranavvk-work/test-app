'use client';

import Image from 'next/image';
import Card from '../ui/Card';
import Link from 'next/link';

export default function IssueCard({ issue }) {
  // Get the icon based on the issue type
  const getTypeIcon = () => {
    switch (issue.type) {
      case 'error':
        return '/images/warning_icon.svg';
      case 'warning':
        return '/images/warning_icon.svg';
      default:
        return '/images/info_icon.svg';
    }
  };

  // Get the status styling
  const getStatusStyles = () => {
    switch (issue.status.toLowerCase()) {
      case 'open':
        return 'text-red-600 bg-red-50 border border-red-200';
      case 'in progress':
        return 'text-orange-600 bg-orange-50 border border-orange-200';
      case 'resolved':
        return 'text-green-600 bg-green-50 border border-green-200';
      default:
        return 'text-gray-600 bg-gray-100 border border-gray-200';
    }
  };

  // Get the priority styling
  const getPriorityStyles = () => {
    switch (issue.priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-orange-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  // Get icon background
  const getIconBg = () => {
    switch (issue.type) {
      case 'error':
        return 'bg-red-50';
      case 'warning':
        return 'bg-orange-50';
      default:
        return 'bg-blue-50';
    }
  };

  return (
    <Card className="p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <div className="mr-4">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center ${getIconBg()} shadow-sm`}>
            <Image 
              src={getTypeIcon()} 
              alt={issue.type} 
              width={18} 
              height={18} 
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-gray-900">{issue.title}</h3>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusStyles()}`}>
              {issue.status}
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2 mb-4">{issue.description}</p>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className={`font-medium ${getPriorityStyles()}`}>
                {issue.priority} Priority
              </span>
              <span>{issue.severity} Severity</span>
              <span>Updated {issue.lastUpdated}</span>
            </div>
            <Link 
              href={`/dashboard/issues/${issue.id}`}
              className="text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
            >
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
} 