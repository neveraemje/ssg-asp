
import React from 'react'

import Image from 'next/image';
import Link from 'next/link';
import Card from '../ui/Card';
import { maison } from '@/lib/font/font';
import { ChevronRight } from 'lucide-react';


async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/news`, {
    next: { revalidate: 3600 }
  });
  const data = await response.json();

  // Assuming your data has a property called "date" representing the publication date
  // Sort the data based on the date in descending order
  const sortedData = data.sort((a, b) => new Date(b.version.when) - new Date(a.version.when));

  // Take only the first two items
  const latestTwoItems = sortedData.slice(0, 2);

  return latestTwoItems;
}




const News = async () => {
  const data = await fetchData();
  const firebaseURL = process.env.FIREBASE_URL
  return (
    <section>

      <div className=" mt-20 flex justify-between items-center">
        <div>
        <h1 className={`mt-4 text-4xl font-bold tracking-tight text-gray-700 dark:text-zinc-100 text-left ${maison.className}`}>What is new</h1>
        <p className="mt-4 text-lg leading-7 text-gray-600 text-left  dark:text-zinc-200">
          Follow along to learn about documentation updates, new components, events, and more!
        </p>
        </div>
        <div className=' justify-end'>
        <Link className="
            inline-flex items-center justify-center rounded-full bg-zinc-800 pl-6 pr-4 py-2 mr-4 text-sm font-semibold text-white hover:bg-zinc-900
            dark:bg-zinc-200
            dark:hover:bg-zinc-300
            dark:text-zinc-800
             gap-2
            
            " href="/whatnews">
             
              See all <ChevronRight className=' w-4'/>
            </Link>

        </div>
        
      </div>

      <div className="relative mt-10 md:mt-8">
        <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {data.map((data) => (
            <li key={data.id}>
              <Card
                title={data.title}
                thumbnail={`${firebaseURL}/o/images%2F${data.id}%2Fcover.png?alt=media`}
                path={`/whatnews/${data.id}`}
           
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default News
export const runtime = 'edge';