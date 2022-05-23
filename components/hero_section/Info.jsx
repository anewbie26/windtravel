import React from 'react'
import Image from "next/image";


function Info() {
  return (
    <div>
      <div className='flex flex-col items-center  py-10 | lg:items-start |'>
          <p className='text-white -mb-4 | sm:pb-0 | | lg:ml-8 lg:mb-0 |'>MOUNTAINS | PLAINS | BEACHES</p>
          <div className='flex items-center justify-center '>
              <h1 className='text-3xl text-white -mr-10 ml-8 | md:text-4xl | | lg:text-5xl |'>Spend your vacation <br/> with our activities</h1>
              <div className='lg:mt-8'>         <Image 
          src="/assets/hero_sec_img/plane.png" height={130} width={140}
          />
          </div>
 
          </div>
      </div>
    </div>
  )
}

export default Info