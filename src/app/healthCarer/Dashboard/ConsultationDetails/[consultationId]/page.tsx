import { fetchConsultationByHealthCarer } from "@/app/actions/patients";
import ConsultationDetails from "@/app/components/ui/ConsultationDetails";
import { ConsultationResponse } from "@/app/types/responseTypes";
export default async function PatientConsultationDetails({params}: { params: { consultationId: string} }){
    const consultation = await fetchConsultationByHealthCarer(params.consultationId) as ConsultationResponse;
    return <ConsultationDetails consultation={consultation} />;
}