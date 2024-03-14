import React from 'react'

import Card from '../component/ui/Card';
import { maison } from '../../lib/font/font';
import { Suspense } from 'react';

async function fetchData() {
  const URL = "https://asphalt-ds.vercel.app";
    const response = await fetch(`${URL}/api/news`, {
      next: { revalidate: 3600 }
    });
    const data = await response.json();
    const sortedData = data.sort((a, b) => new Date(b.version.when) - new Date(a.version.when));
    return sortedData;
  }

  const Page = async () => {
    const data = await fetchData();
    const firebaseURL = process.env.FIREBASE_URL

    return (
      <section className='relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-4 md:px-12 my-14'>
        <div className=" mt-6">
          <h1 className={`mt-4 text-4xl font-bold tracking-normal text-gray-700 dark:text-zinc-100 text-left ${maison.className}`}>What is new</h1>
          <p className="mt-4 text-lg leading-7 text-gray-600 text-left  dark:text-zinc-200">
          Follow along to learn about documentation updates, new components, events, and more!
          </p>
        </div>
  
      <Suspense>
  
  
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
        </Suspense>
  
      </section>
  
    );
  };
  
  
  
  export default Page
  // export const runtime = 'edge';