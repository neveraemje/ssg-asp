import React from 'react'
import HeroImage from '../HeroImage'
import { maison } from '@/lib/font/font'
import Ring from '../(asset)/Ring'
import Banner from './Banner'
import { Ban } from 'lucide-react'



// const Hero = () => {
//   return (

// <section className=' mt-16 mb-16'>
// <div className="relative">
//   <div className="max-w-container mx-auto lg:flex gap-6">
//     <div className="relative z-20 max-w-xl pb-16 pt-16 flex items-center justify-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex ">
//       <div className='w-full'>
//        <p className="mt-4 font-extrabold tracking-[-0.02em] text-3xl lg:text-6xl md:text-5xl sm:text-2xl">
//         <span className=' text-green-700 dark:text-green-500'>Crafting, </span>
//         <span className=' text-sky-500 dark:text-sky-400'> Collaborating,</span>
//         <span className=' text-pink-600 dark:text-pink-500'> Evolving.</span></p>
//        <p className="mt-4 text-lg leading-7 text-zinc-700 md dark:text-zinc-100">Gojek Apps design language system ensures consistency across various products, from food and goods delivery to ride-hailing services.</p>

//        <div className="mt-8 flex gap-4">
//          <a className="
//          inline-flex items-center justify-center rounded-full 
//          bg-zinc-800 px-6 py-3 text-sm font-semibold text-white 
//          hover:bg-zinc-900
//          dark:bg-zinc-200
//          dark:hover:bg-zinc-300
//          dark:text-zinc-800
//           " href="/doc/component">
//            <span>See our component</span>
//          </a>
//        </div>

//      </div>
//     </div>

//     <div className="relative z-20 max-w-xl pb-16 pt-16 flex items-center justify-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex">
//        {/* <HeroImage/> */}
//     </div>
//   </div>

// </div>
// </section>




//   )
// }


const Hero = () => {
  return (

    <section className=''>
      <div className="">
        <div className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <Banner />

            <div className='w-full text-center'>
              <p className={`mt-4 font-extrabold tracking-wide sm:text-7xl text-4xl ${maison.className}`}>
                <span className=' text-green-700 dark:text-green-500'>CRAFTING</span>
                <span className=' text-sky-500 dark:text-sky-400 '> COLLABORATING</span>
                <span className=' text-pink-600 dark:text-pink-500'> EVOLVING</span></p>
              <p className="mt-4 text-xl leading-7 text-zinc-700 md dark:text-zinc-100 text-center sm:mx-10 ">Gojek Apps design language system ensures consistency across various products, from food and goods delivery to ride-hailing services.</p>

            </div>
          </div>
        </div>

      </div>
    </section>




  )
}
export default Hero