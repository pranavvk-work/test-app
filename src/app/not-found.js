'use client';

import Link from 'next/link';
import Button from './components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center border border-border-color">
        <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M12 14a2 2 0 100-4 2 2 0 000 4z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-dark-text mb-2">Page Not Found</h2>
        <p className="text-light-text mb-6">
          We're sorry, but the page you're looking for doesn't exist.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="primary" size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
} 