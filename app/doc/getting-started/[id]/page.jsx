import { Suspense } from "react";
import SideBar from "@/app/component/Sidebar";
import PreviousNextLinks from "@/app/component/PrevNextLink";
import TableOfContents from "@/app/component/TableOfContent";
import parse from "html-react-parser";
import React from "react";
import { ReplaceAttachment } from "@/app/component/ReplaceAttachment";
import { ThreeSidesLayout } from "@/app/component/ui/Layout";
import { maison } from "@/lib/font/font";


async function fetchData() {
  const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-getting`, {
    next: { revalidate: 3600 }
  });
  const data = await response.json();
  return data;
}

const parseHexColors = (text) => {
  const colorRegex = /(?:#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|linear-gradient\([\s\S]*?\))/g;
  return text.replace(colorRegex, (match) => {
    if (match.startsWith("#")) {
      // Hex color
      return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
    } else if (match.startsWith("linear-gradient")) {
      // Gradient color
      return `<span class="gradient-preview" style="background: ${match};"></span>`;
    }
    return match; // Return unchanged if it doesn't match either pattern
  });
};


const Content = ({ content, id  }) => {
  const replacedContent = ReplaceAttachment(content.body.view.value, id );
  const parsedContent = parse(parseHexColors(replacedContent));

  return (
    <div>
      <article
        className="mt-4 w-full min-w-0 py-8"
        style={{ minHeight: "calc(100vh - 103px)" }}
      >
        <div>
          <>
          <h1 className={`text-3xl font-semibold text-gray-800 mb-6 dark:text-zinc-100 tracking-wide ${maison.className}`}>{content.title}</h1>
            <div className="prose max-w-none">{parsedContent}</div>
          </>
        </div>
      </article>
    </div>
  );
};


const Page = async ({ params: { id } }) => {
  //console.log('ini id',id)
  try {
    const data = await fetchData();
    const selectedContent = data.find((item) => item.id === id);

    if (!selectedContent) {
      throw new Error(`Content with ID ${id} not found.`);
    }

    return (

      <ThreeSidesLayout>
      <ThreeSidesLayout.Left>
        <SideBar title={data} />
      </ThreeSidesLayout.Left>

      <ThreeSidesLayout.Middle>
      <Suspense>
      <Content content={selectedContent} id={id} />
        <PreviousNextLinks title={data} />
        </Suspense>
      </ThreeSidesLayout.Middle>

      <ThreeSidesLayout.Right>
      <TableOfContents content={selectedContent} />
      </ThreeSidesLayout.Right>
    </ThreeSidesLayout>

     
    );
  } catch (error) {
    console.error("Page loading error:", error);
    
  }
};

export default Page;