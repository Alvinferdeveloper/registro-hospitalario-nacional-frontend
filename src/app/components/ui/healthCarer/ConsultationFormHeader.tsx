"use client"
import { HealthCarer, Patient } from '@/app/types/responseTypes'
import { UserIcon, GraduationCapIcon} from 'lucide-react'
export default function ConsultationFormHeader({children, data:{ patient, healthCarer}}: { children: React.ReactNode, data:{ patient: Patient, healthCarer: HealthCarer}}){
   const healthCarerTypeAbbreviation = healthCarer.type == "DOCTOR" ? "Dr"  : "Enf"
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex justify-between items-center gap-8">
                    <div className="flex items-center space-x-3 ">
                      <UserIcon className="h-10 w-10 text-cyan-500" />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{patient.name} {patient.lastName}</h2>
                        <p className="text-gray-500 text-sm">Phone: {patient.phone_number}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GraduationCapIcon className="h-10 w-10 text-cyan-500" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{healthCarerTypeAbbreviation}. {healthCarer.name}</h3>
                        <p className="text-gray-500">{healthCarer.area}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}