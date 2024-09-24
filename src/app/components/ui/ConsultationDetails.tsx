'use client'
import Image from "next/image";
import '@/app/styles/consultationDetails.css'
import { ConsultationResponse } from "@/app/types/responseTypes";
import { useRef } from "react";
import html2pdf from 'html2pdf.js';
import { Printer, Share2 } from "lucide-react";

export default function ConsultationDetails({consultation}:{consultation: ConsultationResponse}) {
    const ref = useRef(null);
    const handleDownloadPdf = () => {
        const element = ref.current;
    
        // Configuración de html2pdf
        const opt = {
          margin:       0,
          filename:     'expediente.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 3 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
    
        // Generar el PDF
        html2pdf().from(element).set(opt).save();
      };
    
    return (
        <>
        <div className="container" ref={ref}>
            <header>
                <div className="logo">
                    <Image src="/imagenes/DOCLINK2.png" alt="Logo" width={500} height={500}/>
                </div>
                <div className="header-info">
                    <h1>Centro Medico DocLink</h1>
                    <p><strong>Resumen Clínico</strong></p>
                </div>
            </header>
            <h2>Resumen Clinico</h2>
            <strong>Expediente: {consultation.id}</strong>
            <section className="patient-info">
                <p><strong>Apellidos:</strong> <span id="apellidos-paciente">{consultation.patient.lastName}</span></p>
                <p><strong>Cédula:</strong> <span id="cedula-paciente">{consultation.patient.identification}</span></p>
                <p><strong>Nombres:</strong> <span id="nombre-paciente">{consultation.patient.name}</span></p>
                <p><strong>Fecha de Nacimiento:</strong> <span id="fecha-nacimiento">{consultation.patient.birthdate}</span></p>
                <p><strong>Sexo:</strong> <span id="sexo-paciente">{consultation.patient.gender}</span></p>
                <p><strong>Medico:</strong> <span>{consultation.health_carer.name} {consultation.health_carer.lastName}</span></p>
                <p><strong>Servicio:</strong> <span>Medicina Interna</span></p>
                <p><strong>Fecha de consulta:</strong> <span>{consultation.date}</span></p>

            </section>
            <section className="clinical-info">
            <h2>Resumen</h2>
            <div dangerouslySetInnerHTML={{__html:consultation.summary}}/>
            </section>
            <section className="diagnostic-info">
            <h2>Diagnostico</h2>
            <div dangerouslySetInnerHTML={{__html:consultation.diagnosis}}/>
            </section>

            <section className="diagnostic-info">
                <h2>Plan</h2>
                <div dangerouslySetInnerHTML={{__html:consultation.plan}}></div>
            </section>
        </div>
        <div className="mt-6 mx-auto flex space-x-4 w-[60%]">
        <button className="flex items-center px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition duration-300" onClick={handleDownloadPdf}>
          <Printer className="mr-2 h-5 w-5" />
          Imprimir
        </button>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
          <Share2 className="mr-2 h-5 w-5" />
          Compartir
        </button>
      </div>
      </>
    )
}