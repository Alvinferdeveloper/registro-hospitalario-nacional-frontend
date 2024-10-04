import { Building2, MapPin, Phone, Mail, Clock, X } from "lucide-react"
import { HospitalResponse } from "../types/responseTypes"
import Carousel from "./ui/Carousel"

export default function MapSideBarInfo({hospital, isOpen, closeSideBar}: { hospital:HospitalResponse, isOpen: boolean, closeSideBar:()=>void}) {
  const images = hospital.images.map(image => {return {original:image.image_url, thumbnail: image.image_url}})
  return (
    <div className={`bg-primary left-0 w-[30%] text-white p-6 h-screen overflow-auto overflow-y-auto z-50 absolute transition-all duration-300 ease-in-out ${!isOpen && " left-[-100%]"}`}>
      <X className=" absolute right-7 hover:bg-blue-950 cursor-pointer" onClick={closeSideBar}/>
      <h2 className="text-2xl font-bold mb-6">Informacion del Hospital</h2>
      <div className="space-y-4">
      <div className="flex">
     <Carousel images={images}/>
     </div>
        <div className="flex items-start ">
          <Building2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">{hospital.name}</h3>
            <p className="text-sm text-red-100">Sirviendo nuestra comunidad desde 1950</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Dirreccion</h3>
            <p className="text-sm text-red-100">123 Salud calle, Managua, Nicaragua</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Telefono</h3>
            <p className="text-sm text-red-100">{hospital.phone_number}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-red-100">{hospital.email}</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p className="text-sm text-red-100">Abierto 24/7 para emergencias</p>
            <p className="text-sm text-red-100">Ambulatorio: Mon-Fri 8am-5pm</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-blue-900 rounded-lg">
        <h3 className="font-semibold mb-2">Servicios de emergencia</h3>
        <p className="text-sm text-red-100">Para atencion inmediata, por favor llama a nuestra linea de emergencia:</p>
        <p className="text-lg font-bold mt-2">+505 9999-0000</p>
      </div>
    </div>
  )
}