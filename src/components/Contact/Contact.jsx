import React from 'react'
import './contact.css';
import Heading from '../Heading/Heading'

import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

import Form from './Form'

function Contact() {
  window.scrollTo(0,0)
    return (
        <div>
           <div className="blogHead">
        <Heading genre="Location" title="Contact Us"/>
       </div> 
       <div className="leaflet-container leaflet-retina">
        <MapContainer center={[12.9716, 77.5946]} zoom={13} scrollWheelZoom={true} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[12.9716, 77.5946]}>
    <Popup style={{display:"block"}}>
    Akshya Nagar 1st Block 1st Cross,<br/>
Rammurthy nagar,
Bangalore-560016
    </Popup>
  </Marker>
</MapContainer>
        </div>
      
<Form/>
        </div>
    )
}

export default Contact
