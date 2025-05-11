'use client';

import { useState, useEffect } from 'react';

// Mock data representing issues from the Figma design
const initialIssues = [
  {
    id: 1,
    title: 'AWS S3 bucket policy allows public access',
    description: 'The security policy for the S3 bucket "backup-data" explicitly allows public access to its content.',
    priority: 'High',
    status: 'Open',
    severity: 'Critical',
    lastUpdated: '2 days ago',
    type: 'error'
  },
  {
    id: 2,
    title: 'Expired SSL certificate on api.skysecure.com',
    description: 'The SSL certificate for api.skysecure.com has expired on May 10, 2023.',
    priority: 'High',
    status: 'Open',
    severity: 'High',
    lastUpdated: '4 days ago',
    type: 'warning'
  },
  {
    id: 3,
    title: 'Sensitive data in code repository',
    description: 'API keys and credentials were found in the main branch of the "backend-services" repository.',
    priority: 'Medium',
    status: 'In progress',
    severity: 'Medium',
    lastUpdated: '1 week ago',
    type: 'warning'
  },
  {
    id: 4,
    title: 'Outdated dependencies with security vulnerabilities',
    description: 'Multiple third-party dependencies with known security vulnerabilities were detected in the application.',
    priority: 'Medium',
    status: 'Open',
    severity: 'Medium',
    lastUpdated: '1 week ago',
    type: 'warning'
  },
  {
    id: 5,
    title: 'Missing rate limiting on authentication endpoints',
    description: 'The authentication API does not implement rate limiting, making it vulnerable to brute force attacks.',
    priority: 'Low',
    status: 'Resolved',
    severity: 'Low',
    lastUpdated: '2 weeks ago',
    type: 'info'
  },
];

export default function useIssues() {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All Issues');
  const [priorityFilter, setPriorityFilter] = useState('All Priorities');

  // Fetch issues - in a real app, this would be an API call
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setIssues(initialIssues);
        setFilteredIssues(initialIssues);
      } catch (err) {
        setError('Failed to fetch issues');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  // Apply filters when they change
  useEffect(() => {
    let result = [...issues];
    
    // Apply status filter
    if (statusFilter !== 'All Issues') {
      result = result.filter(issue => 
        issue.status.toLowerCase() === statusFilter.toLowerCase().replace(' issues', '')
      );
    }
    
    // Apply priority filter
    if (priorityFilter !== 'All Priorities') {
      result = result.filter(issue => 
        issue.priority.toLowerCase() === priorityFilter.toLowerCase().replace(' priorities', '')
      );
    }
    
    setFilteredIssues(result);
  }, [issues, statusFilter, priorityFilter]);

  // Get statistics
  const getStats = () => {
    const stats = [
      { title: 'Critical', count: issues.filter(i => i.severity === 'Critical').length, type: 'error' },
      { title: 'High', count: issues.filter(i => i.severity === 'High').length, type: 'warning' },
      { title: 'Medium', count: issues.filter(i => i.severity === 'Medium').length, type: 'warning' },
      { title: 'Low', count: issues.filter(i => i.severity === 'Low').length, type: 'info' },
    ];
    return stats;
  };

  return {
    issues: filteredIssues,
    loading,
    error,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    stats: getStats()
  };
} 