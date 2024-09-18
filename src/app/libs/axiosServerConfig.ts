"use server"
import axios from 'axios';
import { cookies } from 'next/headers';

// Crear una instancia de Axios con configuración global

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // URL base para todas las peticiones
  timeout: 20000, // Tiempo máximo de espera para una petición
  headers: {
    'Content-Type': 'application/json',
    'Authorization': cookies().get('access_token')?.value ? 'Bearer ' + cookies().get('access_token') : null,
  },
});

export default instance;
