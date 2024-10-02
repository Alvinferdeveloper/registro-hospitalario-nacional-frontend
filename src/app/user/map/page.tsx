import React from 'react';
import 'leaflet/dist/leaflet.css';
import { fetchHospitals } from '@/app/actions/patients';
import { HospitalResponse } from '@/app/types/responseTypes';
import HospitalsMap from '@/app/components/ui/user/HospitalsMap';


export default async function Map(){
  const hospitals = await fetchHospitals() as HospitalResponse[];
  return (
   <HospitalsMap hospitals={hospitals}/>
  );
      
}