import axios from '@/app/libs/axiosConfig'
import { AxiosError } from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { UserRegisterInputs } from '@/app/types/types';

interface Error {
    email?: string;
    identification?: string;
}

interface ValidationErrors {
    [key: string]: string[]; // Clave es el nombre del campo y el valor es un array de mensajes de error
}

// Interfaz para la respuesta de error del servidor
interface ErrorResponseData {
    data: any;                   // Puede ser cualquier cosa o null
    status: string;              // Estado del error
    message: string;             // Mensaje de error general
    validation?: ValidationErrors; // Errores de validación específicos por campo (opcional)
}

export default function useRegister() {
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const register = async (body: UserRegisterInputs) => {
        try {
            setLoading(true)
            await axios.post('/auth/register', {
                ...body,
                departament_id: body.departament,
                blood_type: body.bloodType,
                marital_status: body.maritalStatus,
                phone_number: body.phoneNumber
            })
            setLoading(false);
            router.push('/user/map');
        } catch (err) {
            setLoading(false);
            const axiosError = err as AxiosError;
            const errorData = axiosError.response?.data as ErrorResponseData;
            if (axiosError.response) {
                if (axiosError.response.status == 400) {
                    errorData.validation?.email && setError(error => ({ ...error, ['email']: 'Este email ya existe' }));
                    errorData.validation?.identification && setError(error => ({ ...error, ['identification']: 'Esta cedula ya existe' }))
                }
            }
        }
    }

    return { register, error, loading }
}