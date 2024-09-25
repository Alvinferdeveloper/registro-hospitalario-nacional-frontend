import axios from '@/app/libs/axiosClientConfig'
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { useState } from 'react';
import { Consultation, Vaccination } from '@/app/types/types';

// Interfaz para la respuesta de error del servidor
interface Error {
    insertionError: string;
}

export default function useInsertVaccination(){
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const insertVaccination  = async ( vaccination: Vaccination)=>{
       try{
        setLoading(true);
        const res = await axios.post('/vaccines/newVaccination', {
            ...vaccination,
        })
        setLoading(false);
        router.push('/healthCarer/Dashboard/Patients');
       }
       catch(err){
        setLoading(false);
        const axiosError = err as AxiosError;
            if (axiosError.response) {
                setError({insertionError: "Ocurrio un error al insertar la vacunacion"})
            }
       }
    }

    return {insertVaccination, error, loading}
}