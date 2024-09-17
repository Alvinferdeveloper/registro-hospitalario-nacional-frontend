"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";

interface Patient{
    id: string;
    name: string;
    lastName: string;
    identification: string;
    birth_certificate?:string;
    blood_type: string;
    marital_status: string;
    gender: string;
    address_id: number;
    healthcare_system_id?:number;
    phone_number: string;
    profile_photo:string;
    birthdate:string;
    role:string;
    email: string;
    created_at: string;
    updated_at: string;
}
const columns = [
    { uid: "name", name: "Nombres" },
    { uid: "cedula", name: "Cedula" },
    { uid: "blood", name: "Tipo Sangre" },
    { uid: "gender", name: "Genero" },
    { uid: "phoneNumber", name: "Telefono" }
];

export default function PatientsTable({patients}:{patients:Patient[]}){
    return (
        <Table aria-label="Static table with 4 columns and 4 users">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align="start">
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={patients}>
                {(patient) => (
                    <TableRow key={patient.id}>
                        <TableCell>
                            <User
                                avatarProps={{ radius: "lg", src: patient.profile_photo }}
                                description={patient.email}
                                name={patient.name}
                            >
                                {patient.email}
                            </User>
                        </TableCell>
                        <TableCell>
                            <p className="text-bold text-sm capitalize">{patient.identification}</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-bold text-sm capitalize">{patient.blood_type}</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-bold text-sm capitalize">{patient.gender}</p>
                        </TableCell>
                        <TableCell>
                            <p className="text-bold text-sm capitalize">{patient.phone_number}</p>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>

    )
}