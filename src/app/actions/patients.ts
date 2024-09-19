"use server";
import axios from '@/app/libs/axiosServerConfig'

export async function fetchPatients() {
    const res = await axios.get('/patient/getPatients');
    return res.data;
}