"use server";
import axios from '@/app/libs/axiosServerConfig'
import { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import catchAsync from '../utils/catchAsync';

export async function fetchPatients() {

    const data = await catchAsync(async()=>{
        const res = await axios.get('/patient/getPatients', {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        });
        return res.data;
    }, '/healthCarer/login');
    return data;
}

export async function fetchPatientByHealhCarer(patientId: string){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/patient/getPatientByHealthCarer/${patientId}`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
    }, '/healthCarer/login');
    return data;
}


export async function fetchConsultations(patientId: string){
   const data = await catchAsync(async()=>{
    const res = await axios.get(`/consultation/getConsultationsByHealthCarer/${patientId}`, {
        headers: {
            Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
        }
    } );
    return res.data;
   },'/healthCarer/login');
   return data;
}


export async function fetchPatientConsultations(){
   const data = await catchAsync(async()=>{
    const res = await axios.get('/consultation/getConsultationsByPatient', {
        headers: {
            Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
        }
    } );
    return res.data;
   }, '/user/login');
   return data;
}

export async function fetchConsultationByHealthCarer(consultationId: string){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/consultation/getConsultationDetailsByHealthCarer/${consultationId}`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
       }, '/user/login');
       return data;
}

