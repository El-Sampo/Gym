import React from 'react'
import Contact from '../components/Contact';
import Map from '../components/Map';
import StickyContactChannel from '../components/StickyContactChannel';

const ContactPage = () => {
  return (
    <div id = "contact" className='mt-[70px]'>
        <Contact/>
        <Map/> 
        <StickyContactChannel/>
    </div>
  )
}

export default ContactPage