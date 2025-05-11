import LoadingSkeleton from './components/ui/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="flex h-screen">
      {/* Sidebar skeleton */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full p-4">
        <div className="mb-8">
          <LoadingSkeleton className="h-10 w-40" />
        </div>
        
        <div className="space-y-3">
          {Array(6).fill(0).map((_, i) => (
            <LoadingSkeleton key={i} className="h-10" />
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* TopNav skeleton */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between">
            <LoadingSkeleton className="h-8 w-40" />
            <div className="flex space-x-4">
              <LoadingSkeleton className="h-8 w-24" />
              <LoadingSkeleton className="h-8 w-24" />
              <LoadingSkeleton className="h-8 w-32" />
            </div>
          </div>
        </div>

        {/* Dashboard skeleton */}
        <div className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="mb-6">
            <LoadingSkeleton className="h-8 w-40 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array(4).fill(0).map((_, i) => (
                <LoadingSkeleton key={i} className="h-24" />
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <LoadingSkeleton className="h-8 w-24" />
              <div className="flex space-x-2">
                <LoadingSkeleton className="h-8 w-32" />
                <LoadingSkeleton className="h-8 w-32" />
              </div>
            </div>

            <div className="space-y-4">
              {Array(5).fill(0).map((_, i) => (
                <LoadingSkeleton key={i} className="h-32" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 