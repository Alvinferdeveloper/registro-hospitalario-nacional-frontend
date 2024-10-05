import { fetchHealthcareSystemVaccines } from "@/app/actions/patients"
import VaccinateForm from "@/app/components/ui/healthCarer/VaccinateForm";
import { VaccinesResponse } from "@/app/types/responseTypes";

export default async function newVaccination({ params, searchParams }: { params: { patientId: string }, searchParams:{ patientName:string, patientLastName:string } }) {
    const vaccines = await fetchHealthcareSystemVaccines() as VaccinesResponse[];
    const patientFullName = `${searchParams.patientName} ${ searchParams.patientLastName}`;
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Registro de Vacuna</h2>
            <h2 className="  text-indigo-600 mb-2">Paciente: <span className=" text-black">{patientFullName}</span></h2>
            <VaccinateForm vaccines={vaccines} patientId={params.patientId}/>
        </div>
    )
}