import { fetchHealthcareSystemVaccines } from "@/app/actions/patients"
import VaccinateForm from "@/app/components/ui/healthCarer/VaccinateForm";
import { VaccinesResponse } from "@/app/types/responseTypes";

export default async function newVaccination({ params }: { params: { patientId: string, name: string } }) {
    const vaccines = await fetchHealthcareSystemVaccines() as VaccinesResponse[];
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Registro de Vacuna</h2>
            <VaccinateForm vaccines={vaccines} patientId={params.patientId}/>
        </div>
    )
}