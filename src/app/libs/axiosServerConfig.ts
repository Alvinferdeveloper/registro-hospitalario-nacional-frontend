import axios from 'axios';


// Crear una instancia de Axios con configuración global
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // URL base para todas las peticiones
  timeout: 50000, // Tiempo máximo de espera para una petición
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
