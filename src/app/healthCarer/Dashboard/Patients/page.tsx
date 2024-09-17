import PatientsTable from '@/app/components/ui/healthCarer/PatientsTable';
import PatientsTableSkeleton from '@/app/components/ui/healthCarer/skeleton/PatientsTableSkeleton';
import axios from '@/app/libs/axiosConfig'
import { Suspense } from 'react';

export interface Patient {
    id: string;
    name: string;
    lastName: string;
    identification: string;
    birth_certificate?: string;
    blood_type: string;
    marital_status: string;
    gender: string;
    address_id: number;
    healthcare_system_id?: number;
    phone_number: string;
    profile_photo: string;
    birthdate: string;
    role: string;
    email: string;
    created_at: string;
    updated_at: string;
}

async function fecthPatients() {
    const res = await axios.get('/patient/getPatients');
    return res.data;
}
export default async function Patients() {
    const patients = await fecthPatients() as Patient[];
    return <PatientsTable patients={patients} />
        
    


}