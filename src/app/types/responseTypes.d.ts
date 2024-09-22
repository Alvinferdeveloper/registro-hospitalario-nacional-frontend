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
    email:string;
 }

 inte
 export interface ConsultationResponse {
   id: string;
   patientId: string;
   summary: string;
   diagnosis: string;
   plan:string;
   date:string;
   health_carer: HealthCarer;
   patient:Patient;
}
 