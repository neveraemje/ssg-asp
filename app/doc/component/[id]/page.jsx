
import { Suspense } from "react";
import SideBar from "@/app/component/Sidebar";
import PreviousNextLinks from "@/app/component/PrevNextLink";
import TableOfContents from "@/app/component/TableOfContent";
import parse from "html-react-parser";
import React from "react";
import { ReplaceAttachment } from "@/app/component/ReplaceAttachment";
import { TwoSidesLayout } from "@/app/component/ui/Layout";
import Content from "@/app/component/ContentComponent-2";

async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
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

      <TwoSidesLayout>
      <TwoSidesLayout.Left>
        <SideBar title={data} />
      </TwoSidesLayout.Left>
      <TwoSidesLayout.Middle>
      <Suspense>
      <Content content={selectedContent} id={id} />
        
        <div className=" max-w-3xl">
        <PreviousNextLinks title={data} />
        </div>
        </Suspense>
      </TwoSidesLayout.Middle>

    </TwoSidesLayout>

     
    );
  } catch (error) {
    console.error("Page loading error:", error);
    
  }
};

export default Page;