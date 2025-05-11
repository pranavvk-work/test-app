import Image from 'next/image';
import Link from 'next/link';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import IssueDetailTabs from '../../components/issues/IssueDetailTabs';
import IssueTimeline from '../../components/issues/IssueTimeline';

// This would normally come from a database or API
const getIssueById = (id) => {
  const issues = [
    {
      id: 1,
      title: 'AWS S3 bucket policy allows public access',
      description: 'The security policy for the S3 bucket "backup-data" explicitly allows public access to its content. This poses a significant security risk as sensitive data could be exposed to unauthorized users.',
      priority: 'High',
      status: 'Open',
      severity: 'Critical',
      lastUpdated: '2 days ago',
      type: 'error',
      assignedTo: 'Alex Johnson',
      reportedBy: 'Security Scanner',
      reportedDate: '2023-11-15',
      affectedResources: ['backup-data', 's3://backup-data/*'],
      recommendedAction: 'Update the bucket policy to restrict public access. Use AWS S3 Block Public Access feature.',
      riskScore: 92,
      complianceImpact: ['PCI-DSS 3.2.1', 'HIPAA', 'GDPR Article 32']
    },
  ];
  
  return issues.find(issue => issue.id.toString() === id) || null;
};

export default function IssueDetailPage({ params }) {
  const issue = getIssueById(params.id);
  
  if (!issue) {
    return (
      <div className="flex-1 p-6 bg-gray-50">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold text-dark-text mb-2">Issue Not Found</h2>
          <p className="text-light-text mb-6">The issue you're looking for doesn't exist or has been removed.</p>
          <Link href="/">
            <Button variant="primary">Return to Dashboard</Button>
          </Link>
        </Card>
      </div>
    );
  }
  
  // Get icon based on issue type
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
        return 'text-error bg-red-50 border border-red-200';
      case 'in progress':
        return 'text-warning bg-orange-50 border border-orange-200';
      case 'resolved':
        return 'text-success bg-green-50 border border-green-200';
      default:
        return 'text-muted-text bg-gray-100 border border-gray-200';
    }
  };
  
  // Get the severity styling
  const getSeverityStyles = () => {
    switch (issue.severity.toLowerCase()) {
      case 'critical':
        return 'text-error';
      case 'high':
        return 'text-error';
      case 'medium':
        return 'text-warning';
      case 'low':
        return 'text-success';
      default:
        return 'text-muted-text';
    }
  };
  
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-6">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Issues
          </Button>
        </Link>
        
        <Card className="p-6">
          <div className="flex items-start">
            <div className="mr-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${issue.type === 'error' ? 'bg-red-50' : issue.type === 'warning' ? 'bg-orange-50' : 'bg-blue-50'} shadow-sm`}>
                <Image 
                  src={getTypeIcon()} 
                  alt={issue.type} 
                  width={20} 
                  height={20} 
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h1 className="text-xl font-semibold text-dark-text">{issue.title}</h1>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStatusStyles()}`}>
                  {issue.status}
                </span>
              </div>
              <p className="text-sm text-light-text mt-2">{issue.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 border-t border-border-color pt-6">
            <div>
              <h3 className="text-sm font-medium text-dark-text mb-4">Issue Details</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-text">Priority</p>
                  <p className="text-sm font-medium text-dark-text">{issue.priority}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text">Severity</p>
                  <p className={`text-sm font-medium ${getSeverityStyles()}`}>{issue.severity}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text">Reported By</p>
                  <p className="text-sm font-medium text-dark-text">{issue.reportedBy}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text">Reported Date</p>
                  <p className="text-sm font-medium text-dark-text">{issue.reportedDate}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-dark-text mb-4">Assignment</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-text">Assigned To</p>
                  <p className="text-sm font-medium text-dark-text">{issue.assignedTo || 'Unassigned'}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text">Last Updated</p>
                  <p className="text-sm font-medium text-dark-text">{issue.lastUpdated}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text">Risk Score</p>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-error">{issue.riskScore}/100</span>
                    <div className="ml-2 h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-error" 
                        style={{ width: `${issue.riskScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-dark-text mb-4">Resources</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-text">Affected Resources</p>
                  <ul className="mt-1 space-y-1">
                    {issue.affectedResources.map((resource, index) => (
                      <li key={index} className="text-sm font-medium text-dark-text flex items-center">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-error mr-2"></span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-muted-text">Compliance Impact</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {issue.complianceImpact.map((item, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-muted-text px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <IssueDetailTabs issue={issue} />
          </Card>
        </div>
        <div>
          <Card className="p-4">
            <h3 className="text-sm font-medium text-dark-text mb-4">Timeline</h3>
            <IssueTimeline issue={issue} />
          </Card>
        </div>
      </div>
    </div>
  );
} 