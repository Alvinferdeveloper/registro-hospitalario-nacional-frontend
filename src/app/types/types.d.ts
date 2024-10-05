export interface UserRegisterInputs {
    name: string;
    lastName: string;
    identification: string;
    departament: number;
    bloodType?: string;
    gender: string;
    municipio: string;
    city: string;
    address: string;
    phoneNumber?: string;
    email: string;
    password: string;
    birthDate: Date;
    maritalStatus: string;
}

export interface UserLoginInputs {
    userName: string;
    password: string;
}

export interface HealthCarerLoginInputs {
    userName: string;
    password: string;
}

export interface Consultation {
    reason:string;
    patientId: string;
    summary: string;
    diagnosis: string;
    plan:string;
}

export interface Vaccination {
    patientId: string;
    vaccineId:number;
    dose:string;
    vaccineCode:string;
    address:string;
}