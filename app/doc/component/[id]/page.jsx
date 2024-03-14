
import { Suspense } from "react";
import SideBar from "@/app/component/(content)/Sidebar";
import PreviousNextLinks from "@/app/component/(content)/PrevNextLink";
import React from "react";
import { TwoSidesLayout } from "@/app/component/ui/Layout";
import Content from "@/app/component/(content)/ContentComponent-2";

async function fetchData() {
   //const URL = process.env.NEXT_PUBLIC_URL;
   const URL = "https://asphalt-website-okay.vercel.app";
  const response = await fetch(`${URL}/api/api-component`, {
    next: { revalidate: 3600 }
  });
  const data = await response.json();
  return data;
}


const Page = async ({ params: { id } }) => {
  //console.log('ini id',id)
  try {
    const data = await fetchData();
    const selectedContent = data.find((item) => item.id === id);

    if (!selectedContent) {
      throw new Error(`Content with ID ${id} not found.`);
    }

    return (
       <div className="mx-auto flex max-w-[90rem]">
       <aside className="flex flex-col w-64 border-r border-zinc-100 dark:border-zinc-700">
 
         <SideBar title={data} />
 
       </aside>
       <article className="w-full ml-16 mr-0  my-12">
         <Suspense>
           <Content content={selectedContent} id={id} />
           <div className="max-w-[50rem]">
             <PreviousNextLinks title={data} />
           </div>
         </Suspense>
       </article>
     </div>
     
    );
  } catch (error) {
    console.error("Page loading error:", error);
    
  }
};

export default Page;


export async function generateStaticParams() {
  const data = await fetchData();

  return data.map(content => ({
    id: content.id,
  }));
}