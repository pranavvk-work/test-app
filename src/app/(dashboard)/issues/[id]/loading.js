import LoadingSkeleton from '@/app/components/ui/LoadingSkeleton';
import Card from '@/app/components/ui/Card';

export default function IssueDetailLoading() {
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-6">
      <div className="mb-6">
        <div className="mb-4">
          <LoadingSkeleton className="h-9 w-32" />
        </div>
        
        <Card className="p-6">
          <div className="flex items-start">
            <div className="mr-4">
              <LoadingSkeleton className="h-10 w-10 rounded-full" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <LoadingSkeleton className="h-7 w-3/4 mb-2" />
                <LoadingSkeleton className="h-6 w-20 rounded-full" />
              </div>
              <LoadingSkeleton className="h-4 w-full mt-2" />
              <LoadingSkeleton className="h-4 w-5/6 mt-2" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 border-t border-gray-200 pt-6">
            <div>
              <LoadingSkeleton className="h-5 w-32 mb-4" />
              <div className="space-y-4">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i}>
                    <LoadingSkeleton className="h-4 w-20 mb-1" />
                    <LoadingSkeleton className="h-5 w-28" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <LoadingSkeleton className="h-5 w-32 mb-4" />
              <div className="space-y-4">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i}>
                    <LoadingSkeleton className="h-4 w-20 mb-1" />
                    <LoadingSkeleton className="h-5 w-32" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <LoadingSkeleton className="h-5 w-32 mb-4" />
              <div className="space-y-4">
                <div>
                  <LoadingSkeleton className="h-4 w-20 mb-1" />
                  <div className="space-y-2">
                    <LoadingSkeleton className="h-5 w-48" />
                    <LoadingSkeleton className="h-5 w-56" />
                  </div>
                </div>
                <div>
                  <LoadingSkeleton className="h-4 w-20 mb-1" />
                  <div className="flex flex-wrap gap-2">
                    <LoadingSkeleton className="h-6 w-20 rounded-full" />
                    <LoadingSkeleton className="h-6 w-16 rounded-full" />
                    <LoadingSkeleton className="h-6 w-24 rounded-full" />
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
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto px-4">
                {Array(4).fill(0).map((_, i) => (
                  <LoadingSkeleton key={i} className="h-10 w-24 mx-1" />
                ))}
              </div>
            </div>
            <div className="p-6">
              <LoadingSkeleton className="h-5 w-40 mb-3" />
              <LoadingSkeleton className="h-4 w-full mb-2" />
              <LoadingSkeleton className="h-4 w-5/6 mb-2" />
              <LoadingSkeleton className="h-4 w-4/6 mb-6" />
              
              <LoadingSkeleton className="h-5 w-40 mb-3" />
              <LoadingSkeleton className="h-32 w-full mb-4" />
            </div>
          </Card>
        </div>
        <div>
          <Card className="p-4">
            <LoadingSkeleton className="h-5 w-24 mb-4" />
            <div className="space-y-4">
              {Array(5).fill(0).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <LoadingSkeleton className="h-6 w-6 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <LoadingSkeleton className="h-4 w-full mb-1" />
                    <LoadingSkeleton className="h-3 w-20" />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 