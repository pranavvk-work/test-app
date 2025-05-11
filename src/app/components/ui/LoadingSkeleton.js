export default function LoadingSkeleton({ className = 'h-20' }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`}></div>
  );
} 