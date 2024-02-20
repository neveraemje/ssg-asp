
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

const menu = [
  {
    title: " Getting started",
    description:"A comprehensive guide on using and contributing to the Asphalt Design System with our concise starter pack.",
    thumbnail:"/pagelist/getting.jpg",
    path: "/doc/getting-started",
  },
  {
    title: "Foundation",
    description:"Established design elements like color, typography, and shadows form the foundation for our product screens.",
    thumbnail:"/pagelist/fd.jpg",
    path: "/doc/foundation",
  },
  {
    title: "Component",
    description:"Designed over 40+ components for the Gojek app, emphasizing flexibility, scalability, and practicality.",
    thumbnail:"/pagelist/cm.jpg",
    path: "/doc/component",
  },
];


const Menu = () => {
  return (
    <section>
   

    <div className="relative mt-10 md:mt-8">
      <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"> 
      { menu.map((menu, index) => ( 
      
      <li key={index}>
          <div className="group relative before:absolute before:-inset-2.5 before:rounded-[16px] 
          before:bg-zinc-100/80 before:opacity-0 hover:before:opacity-100 
          dark:before:bg-zinc-700/50 dark:before:opacity-0 dark:hover:before:opacity-100 ">
            <div className="relative aspect-[3/2]  overflow-hidden rounded-lg bg-gray-100">
              <Image src={menu.thumbnail} 
              className="absolute inset-0 h-full w-full object-cover" 
              width={1200} 
              height={800} 
              loading="lazy" 
              alt="cover" />
            </div>
            
            <div className=" mt-5">
              <Link href={menu.path}>
              <span className=" absolute -inset-2.5 z-10"></span>
              <h4 className="relative text-xl font-semibold">{menu.title}</h4>
              <p className='relative pt-2 text-zinc-500 dark:text-zinc-400'>{menu.description}</p>
              </Link>
            </div>
          </div>
        </li>
         ))} 
      </ul>
    </div>
  
  </section>
  


  )
}

export default Menu