export default function PatientVaccinationsSkeleton() {
    return (
      <div className="container mx-auto p-4">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-1 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }