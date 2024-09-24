import { fetchPatientConsultations } from "@/app/actions/patients"
import Consultations from "@/app/components/ui/Consultations";
import { ConsultationResponse } from "@/app/types/responseTypes";

export default async function UserConsultations(){
    const consultations = await fetchPatientConsultations() as ConsultationResponse[];
    return <Consultations consultations={consultations} patient={true}/>
}