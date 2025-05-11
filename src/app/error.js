'use client';

import { useEffect } from 'react';
import Button from './components/ui/Button';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center border border-border-color">
        <div className="w-16 h-16 bg-red-50 text-error rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-dark-text mb-2">Something went wrong</h2>
        <p className="text-light-text mb-6">
          We're sorry, but there was an error loading this page.
        </p>
        <Button
          onClick={() => reset()}
          variant="primary"
          size="lg"
        >
          Try again
        </Button>
      </div>
    </div>
  );
} 