import { fetchPatientByHealhCarer } from '@/app/actions/patients';
import ConsultationForm from '@/app/components/ui/healthCarer/ConsultationForm';
import ConsultationFormHeader from '@/app/components/ui/healthCarer/ConsultationFormHeader';
import { HealthCarer, Patient } from '@/app/types/responseTypes';

export default async function PatientConsultation({ params }: { params: { patientId: string } }) {
  const data = await fetchPatientByHealhCarer(params.patientId) as { patient: Patient, healthCarer: HealthCarer};
  return (
    <ConsultationFormHeader data={data} >
      <ConsultationForm patientId = { params.patientId} />
    </ConsultationFormHeader>

  )
}