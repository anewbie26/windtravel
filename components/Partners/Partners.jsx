import React from 'react'
import Image from "next/image";
function Partners() {
  return (
    <div>
      <div className='text-3xl font-bold my-12 ml-8'>
        {/* Heading */}
        <h1>Trusted By Companies</h1>
      </div>
      <div className='flex flex-col items-center justify-between h-[350px] | md:flex-row md:justify-evenly |'>
        {/* Logo */}
        <Image src="/assets/partners_img/logo1.png" height={51} width = {343} />
        <Image src="/assets/partners_img/logo2.png" height={107} width = {231} />
        <Image src="/assets/partners_img/logo3.png" height={125} width = {125} />
      </div>
    </div>
  )
}

export default Partners
