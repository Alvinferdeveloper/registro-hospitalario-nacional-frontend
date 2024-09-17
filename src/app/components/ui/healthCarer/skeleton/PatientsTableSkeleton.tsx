export default function PatientsTableSkeleton() {
    return (
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 mb-4 text-gray-400 text-sm">
          <div>Nombres</div>
          <div>Cedula</div>
          <div>Tipo Sangre</div>
          <div>Genero</div>
          <div>Telefono</div>
        </div>
        
        {/* Skeleton rows */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 bg-gray-800 p-4 rounded-lg mb-2 items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full animate-pulse"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded w-1/6 animate-pulse"></div>
            <div className="flex justify-end space-x-2">
              <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="w-6 h-6 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }