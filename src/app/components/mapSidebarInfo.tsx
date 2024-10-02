import { Building2, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function MapSideBarInfo() {
  return (
    <div className="bg-primary text-white p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">Informacion del Hospital</h2>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Building2 className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Hospital Nacional</h3>
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
            <p className="text-sm text-red-100">+505 2222-3333</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-red-100">info@hospitalnacional.ni</p>
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