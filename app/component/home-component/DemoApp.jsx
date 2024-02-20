
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { maison } from '@/lib/font/font';




const DemoApp = () => {
  return (

    <section className='mx-auto max-w-6x mt-16 mb-16 sm:mt-40 sm:mb-40'>
      <div className=" flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className={`text-4xl font-bold tracking-normal justify-center text-left ${maison.className}`}>Asphalt Aloha Demo App</h1>
          <p className=' text-lg pt-4 text-zinc-600 dark:text-zinc-400'>Download the Asphalt Aloha Demo App to experience the live components directly</p>
          <div className=' mt-6'>
            <Link className="
            inline-flex items-center justify-center rounded-full bg-zinc-800 px-6 py-3 mr-4 text-sm font-semibold text-white hover:bg-zinc-900
            dark:bg-zinc-200
            dark:hover:bg-zinc-300
            dark:text-zinc-800
            
            " href="https://appdistribution.firebase.dev/i/AaoGVsbd">
              <GrAndroid className="mr-2" />
              Android
            </Link>

            <Link className="
                            inline-flex items-center justify-center rounded-full 
                          bg-zinc-800 px-6 py-3 text-sm font-semibold text-white 
                          hover:bg-zinc-900
                          dark:bg-zinc-200
                          dark:hover:bg-zinc-300
                          dark:text-zinc-800
                          "

              href="https://testflight.apple.com/join/QWmh1nVH">
              <FaApple className="mr-2" />
              iOS
            </Link>


          </div>

        </div>

        <div className="flex-1">
          <Image
            src="/demo/asphalt-demo.jpg"
            width={800}
            height={600}
            alt='Asphalt Aloha Demo App'
            className=' rounded-xl'
          />
        </div>

      </div>





    </section>

  )
}

export default DemoApp