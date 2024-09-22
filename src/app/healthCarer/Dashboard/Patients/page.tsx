import PatientsTable from '@/app/components/ui/healthCarer/PatientsTable';
import { fetchPatients } from '@/app/actions/patients';
import { Patient} from '@/app/types/responseTypes'




export default async function Patients() {
    const patients = await fetchPatients() as Patient[];
    return <PatientsTable patients={patients} />
        
    


}