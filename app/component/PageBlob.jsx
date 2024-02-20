
import Link from "next/link";
import Image from "next/image";

async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-foundation`, {
    cache: "no-cache"
  });
  const data = await response.json();
  return data;
}

const PageBlob = async () => {
  const data = await fetchData();
  return (
    
    <section className="mt-20">
    <div className="max-w-2xl">
    <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">Foundation</p>
  </div>
  <div className="max-w-3xl">
    <p className="mt-4 text-base leading-7 text-slate-700">Foundational elements with specific tokens like color, typography, and spacing have been established in our design system, serving as the basis for our product screens and scalable design components.</p>
  </div>

  
      <div className="relative mt-10 md:mt-8">
        <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         { data.map((data) => (

<li key={data.id}>
<div className="group relative before:absolute before:-inset-2.5 before:rounded-[16px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">

    <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
    <Image
    //src='https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=1675&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ///src='/gambar.avif'
          src=''
    width={200}
height={200}
alt="cover"
className=" absolute inset-0 h-full w-full"
    
    />
    {/* <img 

    src="./gambar.avif"
    className=" absolute inset-0 h-full w-full"
    /> */}
    
  </div>

  
  <h4 className=" mt-3 text-sm font-medium text-slate-900 group-hover:text-green-600">

    <Link href={`/doc/blob/${data.id}`}>
    <span className=" absolute -inset-2.5 z-10"></span>
      <span className=" relative">{data.title}</span>
    </Link>
  </h4>
</div>
</li>

         ))}
         
         
       
        </ul>
      </div>
    </section>


  );
};



export default PageBlob
export const runtime = 'edge';



