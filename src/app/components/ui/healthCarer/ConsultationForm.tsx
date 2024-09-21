"use client"
import useInsertConsultation from "@/app/Hooks/user/useInsertConsultation";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { CircularProgress } from "@nextui-org/react";

export default function ConsultationForm({patientId}:{patientId:string}){
  const { loading, insertConsultation, error } = useInsertConsultation(); 
    const [summary, setSummary] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [plan, setPlan] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      insertConsultation({summary, diagnosis, plan, patientId})
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
                  <div className=' h-40'>
                    <label htmlFor="summary" className="font-bold text-gray-900">Resumen</label>
                    <ReactQuill theme="snow" value={summary}  onChange={setSummary}  className=' h-[70%]'/>
                  </div>
                  <div className=' h-40 pt-5'>
                    <label htmlFor="diagnosis" className="font-bold text-gray-900">Diagnóstico</label>
                    <ReactQuill theme="snow" value={diagnosis} onChange={setDiagnosis} className=' h-[70%]'/>
                  </div>
                  <div className=' h-40 pt-5'>
                    <label htmlFor="plan" className="font-bold text-gray-900">Plan de Tratamiento</label>
                    <ReactQuill theme="snow" value={plan} onChange={setPlan} className=' h-[70%]'/>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-colors duration-300 mt-10"
                    >
                      Guardar Registro
                    </button>
                    
                  </div>
                  <div className=" w-full flex flex-col items-center">
                  {
                    loading && (
                        <CircularProgress aria-label="Loading..." />
                    )
                }
                {
                    error && (
                        <p className=" text-red-600">{error.insertionError}</p>
                    )
                }
                  </div>
                </form>
    )
}