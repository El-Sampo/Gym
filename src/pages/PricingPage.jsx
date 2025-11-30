import React from 'react'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import StickyContactChannel from '../components/StickyContactChannel'

const PricingPage = ({ onAuthSuccess, currentUser }) => {
  return (
    <div id="pricing" className='mt-[70px]'>
        <Pricing onAuthSuccess={onAuthSuccess} currentUser={currentUser} />
        <Testimonials />
        <StickyContactChannel/>
    </div>
  )
}

export default PricingPage