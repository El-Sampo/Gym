import React from 'react'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import StickyContactChannel from '../components/StickyContactChannel'
const PricingPage = () => {
  return (
    <div id = "pricing" className='mt-[70px]'>
        <Pricing />
        <Testimonials />
        <StickyContactChannel/>
    </div>
  )
}

export default PricingPage