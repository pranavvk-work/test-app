'use client';

import { useState } from 'react';
import Button from '../ui/Button';

export default function IssueDetailTabs({ issue }) {
  const [activeTab, setActiveTab] = useState('description');
  
  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'remediation', label: 'Remediation' },
    { id: 'evidence', label: 'Evidence' },
    { id: 'comments', label: 'Comments' },
  ];
  
  return (
    <div>
      <div className="border-b border-border-color">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-text hover:text-dark-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        {activeTab === 'description' && (
          <div>
            <h3 className="text-sm font-medium text-dark-text mb-3">Issue Description</h3>
            <p className="text-sm text-light-text mb-6">{issue.description}</p>
            
            <h3 className="text-sm font-medium text-dark-text mb-3">Technical Details</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-border-color mb-6">
              <pre className="text-xs text-light-text overflow-x-auto whitespace-pre-wrap">
{`{
  "bucketName": "backup-data",
  "policy": {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::backup-data/*"
      }
    ]
  },
  "publicAccessBlockConfiguration": {
    "BlockPublicAcls": false,
    "IgnorePublicAcls": false,
    "BlockPublicPolicy": false,
    "RestrictPublicBuckets": false
  }
}`}
              </pre>
            </div>
            
            <h3 className="text-sm font-medium text-dark-text mb-3">Risk Assessment</h3>
            <p className="text-sm text-light-text mb-4">
              This configuration allows any unauthenticated user to access objects in the bucket. 
              Since this bucket contains backup data, it potentially includes sensitive information 
              that should not be publicly accessible.
            </p>
          </div>
        )}
        
        {activeTab === 'remediation' && (
          <div>
            <h3 className="text-sm font-medium text-dark-text mb-3">Recommended Actions</h3>
            <ol className="list-decimal list-inside space-y-3 mb-6">
              <li className="text-sm text-light-text">
                Update the bucket policy to restrict access to authorized principals only, removing the wildcard principal.
              </li>
              <li className="text-sm text-light-text">
                Enable S3 Block Public Access at the bucket level with the following settings:
                <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                  <li>BlockPublicAcls: true</li>
                  <li>IgnorePublicAcls: true</li>
                  <li>BlockPublicPolicy: true</li>
                  <li>RestrictPublicBuckets: true</li>
                </ul>
              </li>
              <li className="text-sm text-light-text">
                Audit all objects in the bucket to ensure sensitive data has not been exposed.
              </li>
              <li className="text-sm text-light-text">
                Set up CloudTrail monitoring to track access to the bucket.
              </li>
            </ol>
            
            <h3 className="text-sm font-medium text-dark-text mb-3">Example Code</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-border-color mb-6">
              <pre className="text-xs text-light-text overflow-x-auto whitespace-pre-wrap">
{`# AWS CLI Command to update S3 Block Public Access
aws s3api put-public-access-block \\
  --bucket backup-data \\
  --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# AWS CLI Command to update bucket policy
aws s3api put-bucket-policy \\
  --bucket backup-data \\
  --policy '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {"AWS": "arn:aws:iam::123456789012:role/BackupAccessRole"},
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::backup-data/*"
      }
    ]
  }'`}
              </pre>
            </div>
            
            <div className="flex justify-end">
              <Button variant="primary">Mark as Resolved</Button>
            </div>
          </div>
        )}
        
        {activeTab === 'evidence' && (
          <div>
            <h3 className="text-sm font-medium text-dark-text mb-3">Evidence</h3>
            <div className="border border-border-color rounded-lg mb-6">
              <table className="min-w-full divide-y divide-border-color">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-text uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-text uppercase tracking-wider">
                      Source
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-muted-text uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-border-color">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-dark-text">
                      2023-11-15
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-dark-text">
                      AWS Config
                    </td>
                    <td className="px-4 py-3 text-sm text-dark-text">
                      Configuration snapshot shows bucket policy with public access
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-dark-text">
                      2023-11-15
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-dark-text">
                      CloudTrail
                    </td>
                    <td className="px-4 py-3 text-sm text-dark-text">
                      PutBucketPolicy event from user admin@example.com
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-sm font-medium text-dark-text mb-3">Screenshots</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-border-color rounded-lg overflow-hidden bg-gray-50 h-48 flex items-center justify-center">
                <p className="text-sm text-muted-text">AWS Console Screenshot</p>
              </div>
              <div className="border border-border-color rounded-lg overflow-hidden bg-gray-50 h-48 flex items-center justify-center">
                <p className="text-sm text-muted-text">CloudTrail Log Screenshot</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'comments' && (
          <div>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm flex-shrink-0">
                  AJ
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium text-dark-text">Alex Johnson</p>
                      <p className="text-xs text-muted-text">2 days ago</p>
                    </div>
                    <p className="text-sm text-light-text">
                      I've identified the issue and will be implementing the fixes according to the remediation plan.
                    </p>
                  </div>
                  <div className="flex gap-2 mt-1 ml-1">
                    <button className="text-xs text-muted-text hover:text-dark-text">Reply</button>
                    <button className="text-xs text-muted-text hover:text-dark-text">Edit</button>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium text-sm flex-shrink-0">
                  PS
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium text-dark-text">Pranav Skysecure</p>
                      <p className="text-xs text-muted-text">1 day ago</p>
                    </div>
                    <p className="text-sm text-light-text">
                      Please make sure to also review all access logs to identify if there were any unauthorized accesses.
                    </p>
                  </div>
                  <div className="flex gap-2 mt-1 ml-1">
                    <button className="text-xs text-muted-text hover:text-dark-text">Reply</button>
                    <button className="text-xs text-muted-text hover:text-dark-text">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border-color pt-4">
              <h3 className="text-sm font-medium text-dark-text mb-3">Add Comment</h3>
              <textarea 
                className="w-full border border-border-color rounded-lg p-3 text-sm text-dark-text focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-25"
                placeholder="Write your comment here..."
                rows={4}
              ></textarea>
              <div className="flex justify-end mt-3">
                <Button variant="primary">Submit Comment</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 