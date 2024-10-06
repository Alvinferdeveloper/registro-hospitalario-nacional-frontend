"use client"
import useInsertConsultation from "@/app/Hooks/user/useInsertConsultation";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { CircularProgress } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Plus } from "lucide-react";

export default function ConsultationForm({ patientId }: { patientId: string }) {
  const { loading, insertConsultation, error } = useInsertConsultation();
  const [summary, setSummary] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [plan, setPlan] = useState('');
  const [reason, setReason] = useState('');
  const [patientPlans, setPatientPlans] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    insertConsultation({ summary, diagnosis, plan, patientId, reason, patientPlans });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 light">
      <div className=' '>
        <label htmlFor="summary" className="font-bold text-gray-900">Motivo</label>
        <Input classNames={{
          input: " border-none focus:outline-none focus:ring-0",
          inputWrapper: ' bg-slate-200 focus:bg-slate-800'
        }}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>
      <div className=' h-40'>
        <label htmlFor="summary" className="font-bold text-gray-900">Resumen</label>
        <ReactQuill theme="snow" value={summary} onChange={setSummary} className=' h-[70%]' />
      </div>
      <div className=' h-40 pt-5'>
        <label htmlFor="diagnosis" className="font-bold text-gray-900">Diagnóstico</label>
        <ReactQuill theme="snow" value={diagnosis} onChange={setDiagnosis} className=' h-[70%]' />
      </div>
      <div className=' h-40 pt-5'>
        <label htmlFor="plan" className="font-bold text-gray-900">Plan de Tratamiento</label>
        <ReactQuill theme="snow" value={plan} onChange={setPlan} className=' h-[70%]' />
      </div>
      <label htmlFor="" className="font-bold text-gray-900 block mb-1 pt-5">Plan para paciente</label>
      {
        patientPlans.map((patientPlan, index) => (
          <div className=''>
            <input type="text" className="w-[80%]" value={patientPlans[index]} onChange={(e)=> setPatientPlans(patientPlans => patientPlans.map((patientPlan, i) => index == i ? e.target.value : patientPlan ))} />
          </div>
        ))
      }
      <button type="button" className=" bg-slate-500 p-2 hover:bg-slate-600" onClick={(e)=> {
        setPatientPlans(prev => [...prev, '']);
      }}>
        <Plus color="white" />
      </button>
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