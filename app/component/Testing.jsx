"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Card from './ui/Card'

const Testing = () => {
    const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const URL = process.env.NEXT_PUBLIC_URL;
 
  useEffect(() => {
    fetch('/api/api-component', {cache: 'no-store'})
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
 
  return (
    <section>


      <div className="">
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-700 dark:text-zinc-100 text-left">Component</h1>
        <p className="mt-4 text-lg leading-7 text-gray-600 text-left  dark:text-zinc-200">
          Designed over 40+ components for the Gojek app, emphasizing flexibility, scalability, and practicality.
        </p>
      </div>



      <div className="relative mt-10 md:mt-8">
        <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((data) => (
            <li key={data.id}>
              <Card
                title={data.title}
                thumbnail={`/images/${data.id}/cover.png`}
                path={`/doc/component/${data.id}`}
              />
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Testing