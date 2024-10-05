"use client"
import { EyeIcon } from "../icons/EyeIcon";
import { EditIcon } from "../icons/EditIcon";
import Link from "next/link";
import { Patient } from "@/app/types/responseTypes";
import { Syringe, View , Pencil, Eye} from "lucide-react";
import Image from "next/image";

export default function PatientsTable({ patients }: { patients: Patient[] }) {
    return (
        <div className=" rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Informacion de Los pacientes</h2>
            <div className="overflow-x-auto rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cedula</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de sangre</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genero</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefono</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expediente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vacuna</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {patients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image src={patient.profile_photo} width={500} height={500} alt="profile"></Image>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                            <div className="text-sm text-gray-500">{patient.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.identification}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {patient.blood_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.gender}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patient.phone_number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/healthCarer/Dashboard/Patients/Consultation/${patient.id}`}>
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                          <Eye className="w-5 h-5" />
                        </button>
                        </Link>
                       <Link href={`/healthCarer/Dashboard/Patients/PatientConsultation/${patient.id}`}>
                       <button className="text-green-600 hover:text-green-900 mr-2">
                          <Pencil className="w-5 h-5" />
                        </button>
                       </Link>
                       
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        
                       <Link href={{pathname:`/healthCarer/Dashboard/Vaccine/NewVaccination/${patient.id}`, query:{patientName: patient.name, patientLastName:patient.lastName}}}>
                       <button className="text-green-600 hover:text-green-900 mr-2">
                          <Syringe className="w-5 h-5" />
                        </button>
                       </Link>
                       <Link href={`/healthCarer/Dashboard/Vaccine/Vaccinations/${patient.id}`}>
                       <button className="text-green-600 hover:text-green-900 mr-2" >
                          <View className="w-5 h-5"   />
                        </button>
                       </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
}