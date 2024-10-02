import { fetchPatientVaccinationDetailsByHealthCarer } from "@/app/actions/patients";
import VaccinationDetails from "@/app/components/ui/VaccinationDetails";
import { VaccinationResponse } from "@/app/types/responseTypes";

export default async function PatientVaccineDetails({ params}: { params:{ params:string[]}}){
    const vaccinationDetails = await fetchPatientVaccinationDetailsByHealthCarer(params.params[0], params.params[1]) as VaccinationResponse[];
    return <VaccinationDetails vaccinationDetails={vaccinationDetails} />
}