import { ConsultationResponse } from "@/app/types/responseTypes";
import { fetchConsultations } from "@/app/actions/patients"
import Consultations from "@/app/components/ui/Consultations";
export default async function patientConsultations({ params }: { params: { patientId: string } }) {
  const consultations = await fetchConsultations(params.patientId) as ConsultationResponse[];
    return <Consultations consultations={consultations} patient={false}/>
  }