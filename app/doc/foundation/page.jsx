
import PageFoundation from "@/app/component/PageFoundation";
import SideBar from "@/app/component/Sidebar";
import { TwoSidesLayout } from "@/app/component/ui/Layout";
import { Suspense } from "react";

async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-foundation`, {
    next: { revalidate: 0 }
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
          <PageFoundation />
        </div>
        </Suspense>

      </TwoSidesLayout.Middle>

    </TwoSidesLayout>
  );
};

export default Page;
export const runtime = 'edge';