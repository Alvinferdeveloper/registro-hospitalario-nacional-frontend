import { fetchPatientByHealhCarer } from '@/app/actions/patients';
import ConsultationForm from '@/app/components/ui/healthCarer/ConsultationForm';
import ConsultationFormHeader from '@/app/components/ui/healthCarer/ConsultationFormHeader';

export default async function PatientConsultation({ params }: { params: { patientId: string } }) {
  const data = await fetchPatientByHealhCarer(params.patientId);
  return (
    <ConsultationFormHeader data={data} >
      <ConsultationForm />
    </ConsultationFormHeader>

  )
}