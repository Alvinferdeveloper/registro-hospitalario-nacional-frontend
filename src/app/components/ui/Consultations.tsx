import { CalendarIcon, StethoscopeIcon, FileTextIcon } from "lucide-react"
import { ConsultationResponse } from "@/app/types/responseTypes"
export default async function Consultations({ consultations, patient }: { consultations: ConsultationResponse[], patient: boolean}) {
      const containerMt = patient ? 'mt-[60px]' : '';
      return (
        <div className={`container mx-auto p-4 ${containerMt}`}>
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Lista de Expedientes</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultations.map((consultation) => (
              <div key={consultation.patientId} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <CalendarIcon className="w-5 h-5" />
                      <span>{consultation.date}</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      #{consultation.id}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">{consultation.patient.name} {consultation.patient.lastName}</h2>
                  <div className="flex items-center space-x-2 text-gray-600 mb-2">
                    <StethoscopeIcon className="w-5 h-5" />
                    <span>{consultation.health_carer.name} {consultation.health_carer.lastName}</span>
                  </div>
                  <div className="flex items-start space-x-2 text-gray-600">
                    <FileTextIcon className="w-5 h-5 mt-1" />
                    <p className="text-sm">{consultation.diagnosis}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-3">
                  <a href={`/healthCarer/Dashboard/ConsultationDetails/${consultation.id}`}>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300">
                    Ver detalles
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }