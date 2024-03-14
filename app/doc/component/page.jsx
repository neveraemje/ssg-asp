import SideBar from "@/app/component/(content)/Sidebar";
import { Suspense } from "react";
import Card from "@/app/component/ui/Card";
import { maison } from "@/lib/font/font";

async function fetchData() {
  const URL = "https://asphalt-website-okay.vercel.app";
  //const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-component`, {
    next: { revalidate: 3600 }
  });
  const data = await response.json();
  return data;
}


const PageContent = async () => {
  const data = await fetchData();
  const firebaseURL = process.env.FIREBASE_URL
  return (
    <section className="">
      <div>
        <h1 className={`text-4xl font-bold tracking-normal text-gray-700 dark:text-zinc-100 text-left ${maison.className}`}>Component</h1>
        <p className="mt-4 text-lg leading-7 text-gray-600 text-left  dark:text-zinc-200">
        Designed over 40+ components for the Gojek app, emphasizing flexibility, scalability, and practicality.
        </p>
      </div>



      <div className="relative mt-10 md:mt-8">
        <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          {data.map((data) => (
            <li key={data.id}>
              <Card
                title={data.title}
                thumbnail={`${firebaseURL}/o/images%2F${data.id}%2Fcover.png?alt=media`}
                path={`/doc/component/${data.id}`}
              />
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

const Page = async () => {
  const data = await fetchData();

  return (


<div className="mx-auto flex max-w-[90rem]">
<aside className="flex flex-col w-64 border-r border-zinc-100 dark:border-zinc-700">

  <SideBar title={data} />

</aside>
<article className="w-full  my-12 mx-16">
  <Suspense>
    <PageContent/>
  </Suspense>
</article>
</div>
  );
};

export default Page;
// export const runtime = 'edge';