'use client'
import React from 'react';
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
  return (
    <div className=' w-screen h-screen flex'>
    <MapSidebarInfo/>
    <MapContainer center={[12.7938379, -85.2245743]} zoom={8} style={{ height: "100vh", width: "80%" }}>
      <a href="https://www.flaticon.com/free-icons/hospital" title="hospital icons">Hospital icons created by juicy_fish - Flaticon</a>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        hospitals.map((ubicacion, index)=>(
        <Marker position={[parseFloat(ubicacion.lat), parseFloat(ubicacion.lng)]} key={index} icon={defaultIcon}>
        <Popup>
         <a href="/hola">Informacion del hospital</a>
        </Popup>
      </Marker>
        ))
      }
    </MapContainer>
    </div>
  );
      
}