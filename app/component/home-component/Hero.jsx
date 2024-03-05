import React from 'react'
import { maison } from '@/lib/font/font'
import Banner from './Banner'



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
              <p className="mt-4 text-xl leading-7 text-zinc-700 md dark:text-zinc-100 text-center sm:mx-10">Gojek Apps design language system ensures consistency across various products, from food and goods delivery to ride-hailing services.</p>

            </div>
          </div>
        </div>

      </div>
    </section>




  )
}
export default Hero