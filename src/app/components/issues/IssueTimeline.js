'use client';

export default function IssueTimeline({ issue }) {
  // Mock timeline events
  const timelineEvents = [
    {
      id: 1,
      date: '2023-11-15 09:45 AM',
      type: 'created',
      description: 'Issue was created',
      user: 'Security Scanner'
    },
    {
      id: 2,
      date: '2023-11-15 10:30 AM',
      type: 'assigned',
      description: 'Assigned to Alex Johnson',
      user: 'System'
    },
    {
      id: 3,
      date: '2023-11-15 11:20 AM',
      type: 'update',
      description: 'Status updated to "In Progress"',
      user: 'Alex Johnson'
    },
    {
      id: 4,
      date: '2023-11-15 02:15 PM',
      type: 'comment',
      description: 'Added a comment',
      user: 'Alex Johnson'
    },
    {
      id: 5,
      date: '2023-11-16 09:10 AM',
      type: 'comment',
      description: 'Added a comment',
      user: 'Pranav Skysecure'
    }
  ];

  // Get icon and color for event type
  const getEventStyles = (type) => {
    switch (type) {
      case 'created':
        return {
          bgColor: 'bg-blue-50',
          textColor: 'text-primary',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          )
        };
      case 'assigned':
        return {
          bgColor: 'bg-purple-50',
          textColor: 'text-purple-600',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        };
      case 'update':
        return {
          bgColor: 'bg-orange-50',
          textColor: 'text-warning',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          )
        };
      case 'comment':
        return {
          bgColor: 'bg-green-50',
          textColor: 'text-success',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          )
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          textColor: 'text-muted-text',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        };
    }
  };

  return (
    <div className="space-y-4">
      {timelineEvents.map((event) => {
        const { bgColor, textColor, icon } = getEventStyles(event.type);
        
        return (
          <div key={event.id} className="flex gap-3">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center ${bgColor} ${textColor} flex-shrink-0 mt-0.5`}>
              {icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-dark-text">
                {event.description}
                <span className="text-muted-text"> by </span>
                <span className="font-medium">{event.user}</span>
              </p>
              <p className="text-xs text-muted-text mt-0.5">{event.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
} 