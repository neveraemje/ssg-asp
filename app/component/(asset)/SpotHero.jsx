"use client"
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../public/lottie/ride.json'

const SpotHero = () => {
  return (
    <div className=" bg-red-50">
       <Lottie animationData={animationData} className='w-[240] h-[142px] left-[313px] top-[390px] absolute px-1 rounded-3xl'></Lottie>
    </div>
       
  )
}

export default SpotHero