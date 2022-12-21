import React from 'react'
import "./style.css"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export const Map= () => {

  const center = {lat: -22.531438428612805, lng: -43.209287230684815}

  const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyAeqyf8HQIZfvKl2DO4OytJxasGDx1lE4I"});

  if(!isLoaded){
    return <div>Loading...</div>
  }else{

    return <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
        <Marker position={{lat: -22.531438428612805, lng: -43.209287230684815}} />
      </GoogleMap>
  }
}



