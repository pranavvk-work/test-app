'use client';

import IssueCard from './IssueCard';
import IssueStatusCard from './IssueStatusCard';
import useIssues from '../../hooks/useIssues';
import LoadingSkeleton from '../ui/LoadingSkeleton';
import Card from '../ui/Card';
import Select from '../ui/Select';

export default function Dashboard() {
  const { 
    issues, 
    loading, 
    error, 
    statusFilter, 
    setStatusFilter, 
    priorityFilter, 
    setPriorityFilter, 
    stats 
  } = useIssues();

  if (error) {
    return (
      <div className="flex-1 overflow-auto bg-gray-50 p-6">
        <Card variant="error" className="p-8 text-center">
          <p className="font-medium">Error loading issues</p>
          <p className="text-sm mt-2">{error}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-6">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Issue Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {loading ? (
            Array(4).fill(0).map((_, index) => (
              <LoadingSkeleton key={index} className="h-24" />
            ))
          ) : (
            stats.map((stat) => (
              <IssueStatusCard 
                key={stat.title}
                title={stat.title}
                count={stat.count}
                type={stat.type}
              />
            ))
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-medium text-gray-900">Issues</h2>
          <div className="flex items-center gap-3">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Issues</option>
              <option>Open Issues</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </Select>
            <Select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {loading ? (
            Array(5).fill(0).map((_, index) => (
              <LoadingSkeleton key={index} className="h-32" />
            ))
          ) : issues.length === 0 ? (
            <Card className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M12 14a2 2 0 100-4 2 2 0 000 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium mb-1">No issues match your current filters</p>
              <p className="text-sm text-gray-500">Try adjusting your filters to see more results</p>
            </Card>
          ) : (
            issues.map((issue) => (
              <IssueCard 
                key={issue.id}
                issue={issue}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
} 