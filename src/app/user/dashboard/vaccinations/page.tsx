import { fetchPatientVaccinationsByPatient } from "@/app/actions/patients";
import Vaccinations from "@/app/components/ui/Vaccinations";
import { vaccinationResponse } from "@/app/types/responseTypes";

export default async function PatientVaccinations(){
    const vaccinations = await fetchPatientVaccinationsByPatient() as vaccinationResponse[];
    return <Vaccinations vaccinations={vaccinations}/>
}