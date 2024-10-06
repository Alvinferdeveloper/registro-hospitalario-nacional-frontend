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

export async function fetchConsultationByPatient(consultationId: string){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/consultation/getConsultationDetailsByPatient/${consultationId}`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
       }, '/user/login');
       return data;
}

export async function fetchHealthcareSystemVaccines(){
    const data = await catchAsync(async()=>{
        const res = await axios.get('/vaccines/getHealthcareSystemVaccines', {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
       }, '/healthCarer/login');
       return data;
}

export async function fetchPatientVaccinationsByHealthCarer(patientId:string){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/vaccinations/getVaccinationsByHealthCarer/${patientId}`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
       }, '/healthCarer/login');
       return data;
}

export async function fetchPatientVaccinationsByPatient(){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/vaccinations/getVaccinationsByPatient`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
       }, '/user/login');
       return data;
}


export async function fetchPatientVaccinationDetailsByHealthCarer(patientId:string, vaccineId:string){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/vaccination/getVaccinationDetailsByHealthCarer/${patientId}/${vaccineId}`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        } );
        return res.data;
       }, '/user/login');
       return data;
}


export async function fetchHospitals(){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/hospital/getHospitals`);
        return res.data;
       }, '/');
       return data;
}


export async function fetchPatientPlansByPatient(){
    const data = await catchAsync(async()=>{
        const res = await axios.get(`/patientPlans/getPatientPlansByPatient`, {
            headers: {
                Authorization: cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token')?.value : null,
            }
        });
        return res.data;
       }, '/');
       return data;
}






