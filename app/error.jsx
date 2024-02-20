'use client' // Error components must be Client Components

import { maison } from '../lib/font/font'
 
export default function Error({ error, reset }) {
    const refresh = () => window.location.reload(true)


  return (
    <div className='relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-4 md:px-12 pt-12'>
        <div className=" flex-row items-center text-center">
      <h2 className={`${maison.className} text-2xl`}>Something is wrong</h2>
      <p className=' mt-2'>We were unable to connect to the service. Click retry to try again.</p>
      <button
          className="
            inline-flex items-center justify-center rounded-full mt-2
            bg-zinc-800 px-6 py-2 text-sm font-semibold text-white 
            hover:bg-zinc-900
            dark:bg-zinc-200
            dark:hover:bg-zinc-300
            dark:text-zinc-800
          "
          onClick={refresh}
        >
          Retry
        </button>

      </div>
     
    </div>
  )
}