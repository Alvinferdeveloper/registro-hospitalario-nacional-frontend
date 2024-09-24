export default function ConsultationsSkeleton() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="container mx-auto">
                <div className="h-8 w-48 bg-gray-300 rounded mb-6 animate-pulse"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                                <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
                                <div className="h-6 w-8 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                            <div className="h-6 w-32 bg-gray-300 rounded mb-2 animate-pulse"></div>
                            <div className="h-4 w-24 bg-gray-300 rounded mb-2 animate-pulse"></div>
                            <div className="h-4 w-48 bg-gray-300 rounded mb-4 animate-pulse"></div>
                            <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}