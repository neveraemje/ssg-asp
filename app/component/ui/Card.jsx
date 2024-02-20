import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({thumbnail, title, path, desc}) => {
  return (
    <div className="group relative before:absolute before:-inset-2.5 before:rounded-[16px] before:bg-zinc-100 before:opacity-0 hover:before:opacity-100 dark:before:bg-zinc-700/50 dark:before:opacity-0 dark:hover:before:opacity-100 ">
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
            <Image src={thumbnail} 
            className="absolute inset-0 h-full w-full" 
            width={500} 
            height={500} 
            loading="lazy" 
            alt="cover" />
          </div>
          <h4 className=" mt-3 text-lg font-medium text-gray-600 group-hover:text-green-600 dark:text-zinc-100 group-hover:dark:text-green-500">
            <Link href={path}>
            <span className=" absolute -inset-2.5 z-10"></span>
            <span className="relative">{title}</span>
           
            </Link>
          </h4>
        </div>
  )
}

export default Card