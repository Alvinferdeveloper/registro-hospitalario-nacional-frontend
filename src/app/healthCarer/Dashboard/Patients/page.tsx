import PatientsTable from '@/app/components/ui/healthCarer/PatientsTable';
import PatientsTableSkeleton from '@/app/components/ui/healthCarer/skeleton/PatientsTableSkeleton';
import axios from '@/app/libs/axiosClientConfig'
import { Suspense } from 'react';
import { fetchPatients } from '@/app/actions/patients';

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


export default async function Patients() {
    const patients = await fetchPatients() as Patient[];
    return <PatientsTable patients={patients} />
        
    


}