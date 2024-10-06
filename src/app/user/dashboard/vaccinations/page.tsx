import { fetchPatientVaccinationsByPatient } from "@/app/actions/patients";
import Vaccinations from "@/app/components/ui/Vaccinations";
import { VaccinationResponse } from "@/app/types/responseTypes";

export default async function PatientVaccinations(){
    const vaccinations = await fetchPatientVaccinationsByPatient() as VaccinationResponse[];
    return <Vaccinations vaccinations={vaccinations}/>
}