import { VaccinationResponse } from "@/app/types/responseTypes"
import Link from "next/link"

  export default function Vaccinations({ vaccinations}:{ vaccinations: VaccinationResponse[]}) {
    return (
      <div className="container mx-auto p-4 ">
        <h1 className="text-2xl font-bold mb-4 text-white ">Lista de Vacunaciones</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vaccinations.map((vaccination) => (
            <Link href={`/healthCarer/Dashboard/Vaccine/VaccinationDetails/${vaccination.patient.id}/${vaccination.vaccine.id}`}>
            <div key={vaccination.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2 text-black">{vaccination.patient.name} {vaccination.patient.lastName}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Doctor:</span> Dr. {vaccination.healthcarer.name} {vaccination.healthcarer.lastName}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Fecha:</span> {vaccination.date}
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {vaccination.vaccine.name}
                </span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }