"use server";
import axios from '@/app/libs/axiosServerConfig'
import { cookies } from 'next/headers';

export async function fetchPatients() {
    const res = await axios.get('/patient/getPatients', {
        headers: {
            Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
        }
    });
    return res.data;
}

export async function fetchPatientByHealhCarer(patientId: string){
    const res = await axios.get(`/patient/getPatientByHealthCarer/${patientId}`, {
        headers: {
            Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
        }
    } );
    return res.data;
}


export async function fetchConsultations(patientId: string){
    const res = await axios.get(`/consultation/getConsultations/${patientId}`, {
        headers: {
            Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
        }
    } );
    return res.data;
}