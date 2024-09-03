export interface UserRegisterInputs {
    name: string;
    lastName: string;
    identification: string;
    departament: number;
    bloodType: string;
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