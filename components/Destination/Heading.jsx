import React from 'react'
import { Fade } from 'react-reveal'

function Heading() {
  return (
    <div className=' mb-16 text-center mt-14 lg:text-center lg:ml-0 md:mt-12'>
      <p className='xl:text-[18px] font-semibold text-[#5E6282] font-poppins '>Top Selling</p>
      <Fade left big cascade timeout={1700}>
      <h1 className='text-2xl mt-2 font-volk | sm:mt-0 sm:text-3xl | md:text-3xl | xl:text-[50px] xl:font-bold text-[#14183E] xl:mt-6 |'>Top Destinations</h1>
      </Fade>
    </div>
  )
}

export default Heading
