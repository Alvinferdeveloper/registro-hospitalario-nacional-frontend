import { string } from "yup";

export interface Patient {
   id: string;
   name: string;
   lastName: string;
   identification: string;
   birth_certificate?: string;
   blood_type: string;
   marital_status: string;
   gender: string;
   address_id: number;
   healthcare_system_id?: number;
   phone_number: string;
   profile_photo: string;
   birthdate: string;
   role: string;
   email: string;
   created_at: string;
   updated_at: string;
}

export interface HealthCarer {
   id: string;
   name: string;
   identification: string;
   lastName: string;
   birthdate: string;
   attention_center_id: string;
   area: string;
   type: string;
   phone_number: string;
   email: string;
}


export interface ConsultationResponse {
   id: string;
   patientId: string;
   summary: string;
   diagnosis: string;
   plan: string;
   date: string;
   health_carer: HealthCarer;
   patient: Patient;
}

export interface VaccinesResponse {
   id: number;
   name: string;
   doses: number;
   healthCare_system_id: string;
}

export interface VaccinationResponse {
   id: number;
   date: string;
   name: string;
   doses: number;
   address: string;
   vaccine_code: string;
   patient: Patient;
   healthcarer: HealthCarer;
   vaccine: VaccinesResponse;
}

export interface ImageResponse {
   id: number;
   image_url: string;
}

export interface DepartamentResponse {
   id: number;
   name: string;
}
export interface AddressResponse {
   id: number;
   departament: DepartamentResponse;
   municipio: string;
   city: string,
   address: string;
}


export interface HospitalResponse {
   id: number;
   image: ImageResponse[];
   address: AddressResponse;
   name: string;
   phone_number: string;
   email: string;
   emergency_number: string;
   lat: string;
   lng: string;
}

e

