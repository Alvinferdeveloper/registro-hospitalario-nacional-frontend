import { fetchPatientVaccinationsByHealthCarer } from "@/app/actions/patients";
import Vaccinations from "@/app/components/ui/Vaccinations";
import { vaccinationResponse } from "@/app/types/responseTypes";

export default async function PatientVaccinations({ params}: { params:{ patientId: string}}){
    const vaccinations = await fetchPatientVaccinationsByHealthCarer(params.patientId) as vaccinationResponse[];
    return <Vaccinations vaccinations={vaccinations}/>
}