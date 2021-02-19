import React from 'react'
import './contact.css';
import Heading from '../Heading/Heading'

import { Map, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as Icons from 'akar-icons';

function Contact() {
  window.scrollTo(0,0)
    return (
        <div>
        <Heading genre="Location" title="Contact Us"/>
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
      
<div className="contactDiv row">
  <div className="leftDiv col-md-4">
    <h3 className="contactTitle">Contact info</h3>
    <div className="contactInfo">
      <div className="contactDetail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque!
      </div>
      <div className="phone contactDetail">
        <Icons.Phone size={22}color={`gray`}/><span> 9xxx-xxx-xxx</span>
      </div>
      <div className="email contactDetail">
      <Icons.Envelope size={22}color={`gray`}/><span> demo@example.com</span>

      </div>
      <div className="address contactDetail">
        <Icons.Location size={22}color={`gray`}/><span>Akshya Nagar 1st Block 1st Cross,<br/>
Rammurthy nagar,
Bangalore-560016</span>
      </div>
    </div>
  </div>
  <div className="formDiv col-md-6">
  <h3 className="contactTitle">Contact form</h3>
  <p>We would love to hear from you</p>
  <form action="#" className="gform contactform">
    <div className="inputWrapper col-md-9">
    <label htmlFor="name">Your Name (required)</label>
    <input type="text" className="inputBox col-md-10" name='name'id="name" required />
    </div>

    <div className="inputWrapper col-md-9">
    <label htmlFor="email">Your Email (required)</label>
    <input type="email" className="inputBox col-md-10" name='email'id="email" required />
    </div>

    
    <div className="inputWrapper col-md-9">
    <label htmlFor="phone">Your Contact No. (required)</label>
    <input type="text" className="inputBox col-md-10" name='phone'id="phone" required />
    </div>

    
    <div className="inputWrapper col-md-9">
    <label htmlFor="subject">Subject </label>
    <input type="text" className="inputBox col-md-10" name='subject'id="subject"  />
    </div>

    <div className="inputWrapper col-md-9">
    <label htmlFor="message">Message </label>
    <textarea className="col-md-10 inputBox " name='message'id="message"  />
    </div>
    <div className="inputWrapper col-md-9">
      <input type="submit" value="Submit" className="submitbtn"/>
    </div>
  </form>

  </div>
</div>
        </div>
    )
}

export default Contact
