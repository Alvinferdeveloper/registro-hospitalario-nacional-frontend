"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip } from "@nextui-org/react";
import { EyeIcon } from "../icons/EyeIcon";
import { EditIcon } from "../icons/EditIcon";
import Link from "next/link";
import { Patient } from "@/app/types/responseTypes";
const columns = [
    { uid: "name", name: "Nombres" },
    { uid: "cedula", name: "Cedula" },
    { uid: "blood", name: "Tipo Sangre" },
    { uid: "gender", name: "Genero" },
    { uid: "phoneNumber", name: "Telefono" }
];

export default function PatientsTable({ patients }: { patients: Patient[] }) {
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
                            <div className="relative flex items-center gap-5">
                                <Tooltip content="Ver Expedientes" className=" text-black">
                                    <span className="text-lg text-default cursor-pointer active:opacity-50">
                                        <EyeIcon />
                                    </span>
                                </Tooltip>
                                <Link href={`/healthCarer/Dashboard/Patients/PatientConsultation/${patient.id}`}>
                                    <Tooltip content="Nuevo Expediente " className=" text-black">
                                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                            <EditIcon />
                                        </span>
                                    </Tooltip>
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>

    )
}