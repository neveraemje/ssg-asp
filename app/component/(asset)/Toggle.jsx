import React from 'react'

const Toggle = () => {
  return (
    <div className="w-12 h-7 left-[170px] top-[26px] absolute rounded-[10px] flex-col justify-center items-center inline-flex">
    <div className="w-12 h-7 relative">
      <div className="w-12 h-7 left-0 top-0 absolute bg-green-700 rounded-3xl" />
      <div className="w-px h-8 left-[12px] top-[9px] absolute bg-white rounded-[1px]" />
      <div className="w-2.5 h-2.5 left-[29px] top-[9px] absolute rounded-full border border-stone-300" />
      <div className="w-6 h-6 left-[22px] top-[2px] absolute bg-white rounded-full shadow" />
    </div>

  </div>

  )
}

export default Toggle

