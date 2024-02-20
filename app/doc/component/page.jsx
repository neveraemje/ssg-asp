// import PageComponent from "@/app/component/PageComponent";

// const Page = async () => {
//   return (
    
//     <section className="relative max-w-5xl mt-10 mx-auto px-4 focus:outline-none sm:px-3 md:px-5 pb-16">
//       <PageComponent/>
      
//     </section>

   
//   );
// };

// export default Page;
// // export const runtime = 'edge';

import PageComponent from "@/app/component/PageComponent";

import SideBar from "@/app/component/Sidebar";
import { TwoSidesLayout } from "@/app/component/ui/Layout";
import { Suspense } from "react";

async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-component`, {
    next: { revalidate: 0 },
  });
  const data = await response.json();
  return data;
}


const Page = async () => {
  const data = await fetchData();

  return (
    <TwoSidesLayout>
      <TwoSidesLayout.Left>
        <SideBar title={data} />
      </TwoSidesLayout.Left>

      <TwoSidesLayout.Middle>
        <Suspense>
        <div className=" pt-6">
        <PageComponent/>
        {/* <Testing/> */}
        </div>
        </Suspense>
      </TwoSidesLayout.Middle>
      
    </TwoSidesLayout>
  );
};

export default Page;
export const runtime = 'edge';