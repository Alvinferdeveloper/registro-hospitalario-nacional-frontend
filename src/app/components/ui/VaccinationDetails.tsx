export default function VaccinationDetails() {
    return (
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-300">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre:</label>
              <div className="mt-1 border-b border-gray-300 pb-1"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Edad:</label>
              <div className="mt-1 border-b border-gray-300 pb-1"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Cedula:</label>
              <div className="mt-1 border-b border-gray-300 pb-1"></div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Sexo:</label>
              <div className="flex mt-1 space-x-4">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">M</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">F</span>
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Lugar de vacunación:</label>
            <div className="mt-1 border-b border-gray-300 pb-1"></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Unidad de Salud:</label>
            <div className="mt-1 border-b border-gray-300 pb-1"></div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700">Cita para 2da. dosis</label>
              <div className="mt-1 border-b border-gray-300 pb-1 w-24"></div>
            </div>
            <div className="border border-gray-300 p-2 text-sm">Sello</div>
          </div>
          
          {/* Cuadro inferior */}
          <div className="mt-6 border border-gray-300 text-black">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="border-b border-r border-gray-300 p-2 text-left">NOMBRE DE VACUNA</th>
                  <th className="border-b border-r border-gray-300 p-2 text-left">LOTE</th>
                  <th className="border-b border-r border-gray-300 p-2 text-left">FECHA</th>
                  <th className="border-b border-r border-gray-300 p-2 text-left">DOSIS</th>
                  <th className="border-b border-gray-300 p-2 text-left">NOMBRE DEL VACUNADOR FIRMA Y CODIGO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-gray-300 p-2 h-10"></td>
                  <td className="border-r border-gray-300 p-2"></td>
                  <td className="border-r border-gray-300 p-2"></td>
                  <td className="border-r border-gray-300 p-2">
                    <div>1era.</div>
                    <div className="mt-1">2da.</div>
                  </td>
                  <td className="p-2"></td>
                </tr>
                <tr className="border-t border-gray-300">
                  <td className="border-r border-gray-300 p-2 h-10"></td>
                  <td className="border-r border-gray-300 p-2"></td>
                  <td className="border-r border-gray-300 p-2"></td>
                  <td className="border-r border-gray-300 p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }