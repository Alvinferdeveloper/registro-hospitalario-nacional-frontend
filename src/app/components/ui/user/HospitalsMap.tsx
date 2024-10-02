'use client'
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import MapSidebarInfo from '@/app/components/mapSidebarInfo';
import { HospitalResponse } from '@/app/types/responseTypes';
import L from 'leaflet'



const defaultIcon = L.icon({
  iconUrl: "/hospital.png",
  shadowUrl: markerShadow.src,
  iconSize: [25, 41], // Tamaño del ícono
  iconAnchor: [12, 41], // Punto del ícono que apunta a la ubicación en el mapa
  popupAnchor: [1, -34], // Punto de anclaje del popup
  shadowSize: [41, 41]  // Tamaño de la sombra
});

export default function HospitalsMap({hospitals}:{ hospitals: HospitalResponse[]}){
  const [hospital, setHospital] = useState(hospitals[0]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSideBar = ()=> setIsSideBarOpen(false);
  const onSetHospital = (index:number)=> {
    setHospital(hospitals[index]);
    setIsSideBarOpen(true);
   }
  return (
    <div className=' w-screen h-screen flex'>
    <MapSidebarInfo hospital={hospital} isOpen={isSideBarOpen} closeSideBar={closeSideBar}/>
    <MapContainer center={[12.7938379, -85.2245743]} zoom={8} style={{ height: "100vh", width: '100%', zIndex:0 }}>
      <a href="https://www.flaticon.com/free-icons/hospital" title="hospital icons">Hospital icons created by juicy_fish - Flaticon</a>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        hospitals.map((hospital, index)=>(
        <Marker position={[parseFloat(hospital.lat), parseFloat(hospital.lng)]} key={index} icon={defaultIcon} >
        <Popup className=' cursor-pointer'>
         <p className=' hover: text-blue-500' onClick={()=> onSetHospital(index)}>Informacion del hospital</p>
        </Popup>
      </Marker>
        ))
      }
    </MapContainer>
    </div>
  );
      
}