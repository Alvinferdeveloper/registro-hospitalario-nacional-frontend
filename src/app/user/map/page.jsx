'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const ubicaciones = [
  {
      "Nombre": "Ehodra",
      "Latitud": 12.434885414384183,
      "Longitud": -86.87784176747388,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Leon"
  },
  {
      "Nombre": "Hospitalito de sustiaba",
      "Latitud": 12.438284297413004,
      "Longitud": -86.90070748381538,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Leon"
  },
  {
      "Nombre": "Hospital Manolo Morales Peralta",
      "Latitud": 12.122595366502509,
      "Longitud": -86.2450946714231,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Managua"
  },
  {
      "Nombre": "Hospital Solidaridad",
      "Latitud": 12.153689201717572,
      "Longitud": -86.2489414240757,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Managua"
  },
  {
      "Nombre": "Hospital Occidental de Managua \"Dr. Fernando Velez Paiz\"",
      "Latitud": 12.12683763630852,
      "Longitud": -86.30627632313086,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Managua"
  },
  {
      "Nombre": "Hospital Militar Escuela Dr. Alejandro Dávila Bolaños",
      "Latitud": 12.136907290537605,
      "Longitud": -86.27915382597303,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Managua"
  },
  {
      "Nombre": "Hospital España Chinandega",
      "Latitud": 12.63357537205124,
      "Longitud": -87.12977886414032,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Chinandega"
  },
  {
      "Nombre": "Amocsa Chinandega",
      "Latitud": 12.628565040562128,
      "Longitud": -87.13045740936973,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Chinandega"
  },
  {
      "Nombre": "Centro De Salud Jose Rubi",
      "Latitud": 12.667800505184195,
      "Longitud": -87.17126848014347,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Chinandega"
  },
  {
      "Nombre": "Centro de salud Roberto Cortez",
      "Latitud": 12.632324084853275,
      "Longitud": -87.13171529228029,
      "Hora_de_atencion": "12am/12pm",
      "Ubicacion": "Chinandega"
  }
]

const defaultIcon = L.icon({
  iconUrl: "/hospital.png",
  shadowUrl: markerShadow.src,
  iconSize: [25, 41], // Tamaño del ícono
  iconAnchor: [12, 41], // Punto del ícono que apunta a la ubicación en el mapa
  popupAnchor: [1, -34], // Punto de anclaje del popup
  shadowSize: [41, 41]  // Tamaño de la sombra
});

export default function Map(){
  return (
    <MapContainer center={[12.7938379, -85.2245743]} zoom={8} style={{ height: "100vh", width: "100%" }}>
      <a href="https://www.flaticon.com/free-icons/hospital" title="hospital icons">Hospital icons created by juicy_fish - Flaticon</a>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {
        ubicaciones.map((ubicacion, index)=>(
        <Marker position={[ubicacion.Latitud, ubicacion.Longitud]} key={index} icon={defaultIcon}>
        <Popup>
         <a href="/hola">Informacion del hospital</a>
        </Popup>
      </Marker>
        ))
      }
    </MapContainer>
  );
      
}