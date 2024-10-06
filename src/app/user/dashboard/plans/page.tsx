import { fetchPatientPlansByPatient } from "@/app/actions/patients";
import PlansTable from "@/app/components/ui/user/PlansTable";
import { PatientPlanResponse } from "@/app/types/responseTypes";

export default async  function plans(){
    const patientPlans = await fetchPatientPlansByPatient() as PatientPlanResponse[];
    return <PlansTable patientPlans={patientPlans}/>
}