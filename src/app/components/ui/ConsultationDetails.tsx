import Image from "next/image";
import '@/app/styles/consultationDetails.css'
import { ConsultationResponse } from "@/app/types/responseTypes";

export default function ConsultationDetails({consultation}:{consultation: ConsultationResponse}) {
    return (
        <div className="container">
            <header>
                <div className="logo">

                </div>
                <div className="header-info">
                    <h1>Centro Medico DocLink</h1>
                    <p><strong>Resumen Clínico</strong></p>

                </div>
            </header>
            <h2>Datos del Paciente</h2>
            <section className="patient-info">
                <p><strong>Nombre:</strong> <span id="nombre-paciente">{consultation.patient.name}</span></p>
                <p><strong>Apellidos:</strong> <span id="apellidos-paciente">{consultation.patient.lastName}</span></p>
                <p><strong>Cédula:</strong> <span id="cedula-paciente">{consultation.patient.identification}</span></p>
                <p><strong>Fecha de Nacimiento:</strong> <span id="fecha-nacimiento">{consultation.patient.birthdate}</span></p>
                <p><strong>Sexo:</strong> <span id="sexo-paciente">{consultation.patient.gender}</span></p>

            </section>


            <section className="clinical-info">
            <h2>Resumen Médico</h2>
            <div dangerouslySetInnerHTML={{__html:consultation.summary}}/>
            </section>
            <section className="diagnostic-info">
            <h2>Resumen Médico</h2>
            <div dangerouslySetInnerHTML={{__html:consultation.diagnosis}}/>
            </section>

            <section className="diagnostic-info">
                <h2>Resumen Médico</h2>
                <p><strong>Dx:</strong> AR desde los 17 años. Tratamiento suspendido...</p>
                <h3>Metas</h3>
                <ul>
                    <li>DAS 28 menor o igual a 3.2</li>
                    <li>CDAI menor o igual a 10</li>
                    <li>PCR negativo</li>
                    <li>FR negativo</li>
                </ul>
            </section>

            <footer>
                <p>Servicio: Medicina Interna</p>

            </footer>
        </div>
    )
}