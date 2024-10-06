"use client"
import { PatientPlanResponse } from "@/app/types/responseTypes"
import { AnimatePresence, motion } from "framer-motion"
import { Pill, CalendarDays, CheckCircle } from "lucide-react"
export default function PlansTable({ patientPlans }: { patientPlans: PatientPlanResponse[] }) {
    const handleComplete = (id: number) => {
       
      }
    return (
        <div className="min-h-screen bg-gray-100 mt-5 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Mi Plan Médico
                </h1>
                <AnimatePresence>
                    {patientPlans.map((plan) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6"
                        >
                            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                                            <Pill className="h-6 w-6 mr-2 text-blue-500" />
                                            {plan.medicament}
                                        </h2>
                                        <span className="text-sm text-gray-500 flex items-center">
                                            <CalendarDays className="h-4 w-4 mr-1" />
                                            {plan.date}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{plan.prescription}</p>
                                    <button
                                        onClick={() => handleComplete(plan.id)}
                                        className="flex items-center justify-center w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
                                    >
                                        <CheckCircle className="h-5 w-5 mr-2" />
                                        Cumplida
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
                {patientPlans.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">
                        No hay medicamentos pendientes. ¡Buen trabajo!
                    </p>
                )}
            </div>
        </div>
    )
}