import { fetchPatientVaccinationsByHealthCarer } from "@/app/actions/patients";
import Vaccinations from "@/app/components/ui/Vaccinations";
import { VaccinationResponse } from "@/app/types/responseTypes";

export default async function PatientVaccinations({ params}: { params:{ patientId: string}}){
    const vaccinations = await fetchPatientVaccinationsByHealthCarer(params.patientId) as VaccinationResponse[];
    return <Vaccinations vaccinations={vaccinations}/>
}