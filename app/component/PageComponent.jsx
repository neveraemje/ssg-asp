
import Card from "./ui/Card";
import { maison } from "../../lib/font/font";


async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-component`, {
    next: { 
      revalidate: 3600
    }

  });
  const data = await response.json();
  return data;
}


const PageComponent = async () => {
  const data = await fetchData();
  const firebaseURL = process.env.FIREBASE_URL

  return (
    <section>


      <div className="">
        <h1 className={`mt-4 text-4xl font-bold tracking-normal text-gray-700 dark:text-zinc-100 text-left ${maison.className}`}>Component</h1>
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
                thumbnail={`${firebaseURL}/o/images%2F${data.id}%2Fcover.png?alt=media`}
                path={`/doc/component/${data.id}`}
              />
            </li>
          ))}
        </ul>
      </div>

    </section>


  );
};

export default PageComponent
export const runtime = 'edge';