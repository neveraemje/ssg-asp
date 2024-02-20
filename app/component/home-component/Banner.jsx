import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react';

// async function fetchData() {
//     const URL = process.env.NEXT_PUBLIC_URL;
//     const response = await fetch(`${URL}/api/news`, {
//         next: { revalidate: 0 }
//     });
//     const data = await response.json();
//     return data;
// }

async function fetchData() {
    const URL = process.env.NEXT_PUBLIC_URL;
    const response = await fetch(`${URL}/api/news`, {
        next: { revalidate: 3600 }
    });
    const data = await response.json();

    const sortedData = data.sort((a,b) => new Date(b.version.when) - new Date(a.version.when))
    return [sortedData[0]];
}



// const Banner = async () => {
//     const [data] = await fetchData();
//     return (
//         <>

//             {data && (
//                 <Link key={data.id} href={`/whatnews/${data.id}`} 
//                 className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-zinc-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'>
//                     <span class="text-xs font-medium bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
//                     <span class="text-sm font-medium">{data.title}</span>

//                     <ChevronRight className=' h-4'/>
//                 </Link>
//             )}

//         </>
//     )
// }

const Banner = async () => {
    const [data] = await fetchData();
    return (
        <>

            {data && (
                <Link key={data.id} href={`/whatnews/${data.id}`} 
                className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-zinc-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'>
                    <span className="text-xs font-medium bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
                    <span className="text-sm font-medium">{data.title}</span>

                    <ChevronRight className=' h-4'/>
                </Link>
            )}

        </>
    )
}


export default Banner


