'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41], // Tamaño del ícono
  iconAnchor: [12, 41], // Punto del ícono que apunta a la ubicación en el mapa
  popupAnchor: [1, -34], // Punto de anclaje del popup
  shadowSize: [41, 41]  // Tamaño de la sombra
});

export default function Map(){
  return (
    <MapContainer center={[12.7938379, -85.2245743]} zoom={8} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[12.7938379, -85.2245743]} icon={defaultIcon}>
        <Popup>
         <a href="/hola">Informacion del hospital</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
      
}