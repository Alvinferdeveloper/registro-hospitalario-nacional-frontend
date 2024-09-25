"use client"
import { VaccinesResponse } from "@/app/types/responseTypes";
import { useState } from "react";
import useInsertVaccination from "@/app/Hooks/user/useInsertVaccination";
import { CircularProgress } from "@nextui-org/react";


export default function VaccinateForm({ vaccines, patientId }: { vaccines: VaccinesResponse[], patientId: string }) {
    const [vaccineId, setVaccineId] = useState<number>(vaccines[0].id);
    const [dose, setDose] = useState('');
    const [vaccineCode, setVaccineCode] = useState('');
    const { loading, insertVaccination, error } = useInsertVaccination();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        insertVaccination({ vaccineId, dose, vaccineCode, patientId });
    }
    return (
        <form className="space-y-4 text-black" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="vaccine-select" className="block text-sm font-medium text-gray-700 mb-1">
                    Seleccionar Vacuna
                </label>
                <select
                    id="vaccine-select"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-black"
                    value={vaccineId}
                    onChange={(e) => setVaccineId(parseInt(e.target.value))}
                >
                    <option value="">Seleccione una vacuna</option>
                    {vaccines.map((vaccine) => (
                        <option key={vaccine.name} value={vaccine.id}>
                            {vaccine.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="vaccine-code" className="block text-sm font-medium text-gray-700 mb-1">
                    Código de Vacuna
                </label>
                <input
                    type="text"
                    id="vaccine-code"
                    onChange={(e) => { setVaccineCode(e.target.value) }}
                    value={vaccineCode}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Ingrese el código de la vacuna"
                />
            </div>
            <div>
                <label htmlFor="vaccine-dose" className="block text-sm font-medium text-gray-700 mb-1">
                    Dosis de Vacuna
                </label>
                <input
                    type="text"
                    id="vaccine-dose"
                    value={vaccines.find(v => v.id == vaccineId)?.doses}
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
                    placeholder="Dosis de la vacuna seleccionada"
                />
            </div>
            <div>
                <label htmlFor="vaccine-dose" className="block text-sm font-medium text-gray-700 mb-1">
                    Dosi a aplicar
                </label>
                <input
                    type="text"
                    id="vaccine-dose"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 sm:text-sm"
                    placeholder="Dosis a aplicar"
                    onChange={(e) => setDose(e.target.value)}
                    value={dose}
                />
            </div>
            <div className="pt-4">
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Registrar Vacuna
                </button>
            </div>
            <div className=" w-full flex flex-col items-center">
                {
                    loading && (
                        <CircularProgress aria-label="Loading..." />
                    )
                }
                {
                    error && (
                        <p className=" text-red-600">{error?.insertionError}</p>
                    )
                }
            </div>
        </form>
    )
}