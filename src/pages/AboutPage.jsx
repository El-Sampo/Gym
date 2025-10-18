import React from 'react'
import About from '../components/About'
import Features  from '../components/Features'
import Trainers from '../components/Trainers'

const AboutPage = () => {
  return (
    <div id="about" className='mt-[70px]'>
      <About />
      <Features />
      <Trainers />
    </div>
  )
}

export default AboutPage