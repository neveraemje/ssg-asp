import Card from "./ui/Card";
import { maison } from "../../lib/font/font";


async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-getting`, {
    next: { revalidate: 3600 },
    cache: "no-store"
  });
  const data = await response.json();
  return data;
}

const PageFoundation = async () => {
  const data = await fetchData();
  const firebaseURL = process.env.FIREBASE_URL
  return (
    <section>
      <div>
        <h1 className={`mt-4 text-4xl font-bold tracking-normal text-gray-700 dark:text-zinc-100 text-left ${maison.className}`}>Getting Started</h1>
        <p className="mt-4 text-lg leading-7 text-gray-600 text-left  dark:text-zinc-200">
          Asphalt design system is Gojek apps design language system ensures consistency across various products, from food and goods delivery to ride-hailing services.
        </p>
      </div>



      <div className="relative mt-10 md:mt-8">
        <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-8 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {data.map((data) => (
            <li key={data.id}>
              <Card
                title={data.title}
                // thumbnail={`/images/${data.id}/cover.png`}
                thumbnail={`${firebaseURL}/o/images%2F${data.id}%2Fcover.png?alt=media`}
                path={`/doc/getting-started/${data.id}`}
              />
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  )
}

export default PageFoundation;
export const runtime = "edge";
