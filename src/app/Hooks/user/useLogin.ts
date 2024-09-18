import axios from '@/app/libs/axiosConfig'
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { useState } from 'react';

// Interfaz para la respuesta de error del servidor
interface Error {
    unauthorized: string;
}
export default function useLogin(path: string){
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const Login = async (credentials:{userName: string, password:string })=>{
       try{
        setLoading(true);
        const res = await axios.post(path, {
            ...credentials,
        })
        setLoading(false);
        localStorage.setItem('token',res.data.token)
        router.push('/user/map');
       }
       catch(err){
        setLoading(false);
        const axiosError = err as AxiosError;
            if (axiosError.response) {
                console.log(axiosError.response?.status);
                if (axiosError.response.status == 401) {
                    setError({unauthorized:"Credenciales incorrectas"});
                }
            }
       }
    }

    return {Login, error, loading}
}