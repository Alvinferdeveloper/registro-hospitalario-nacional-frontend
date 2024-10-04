import axios from '@/app/libs/axiosClientConfig'
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useStore } from '@/app/state/zustand';

// Interfaz para la respuesta de error del servidor
interface Error {
    unauthorized: string;
}
export default function useLogin(path: string, redirectUrl: string){
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState<boolean>(false);
    const { setUserLogged  } = useStore();
    const router = useRouter();
    const Login = async (credentials:{userName: string, password:string })=>{
       try{
        setLoading(true);
        const res = await axios.post(path, {
            ...credentials,
        })
        setLoading(false);
        Cookies.set("access_token", res.data.token ,{ expires:1 });
        setUserLogged(res.data.healthCarer || res.data.patient);
        router.push(redirectUrl);
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