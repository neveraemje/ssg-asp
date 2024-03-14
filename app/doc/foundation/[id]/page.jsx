import { Suspense } from "react";
import SideBar from "@/app/component/(content)/Sidebar";
import PreviousNextLinks from "@/app/component/(content)/PrevNextLink";
import TableOfContents from "@/app/component/(content)/TableOfContent";
import parse from "html-react-parser";
import React from "react";
import { ReplaceAttachment } from "@/app/component/(content)/ReplaceAttachment";
import { maison } from "@/lib/font/font";


async function fetchData() {
const URL = "https://asphalt-ds.vercel.app";
  // const URL = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(`${URL}/api/api-foundation`, {
    next: { revalidate: 3600 }
  });
  const data = await response.json();

  return data;
}

const parseHexColors = (text) => {
  const colorRegex = /(?:#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|hsla?\((?:\s*\d+%?(?:\s*,\s*\d+%?(?:\s*,\s*\d+%?(?:\s*,\s*(?:0?\.\d+|1(?:\.0+)?))?)?)?)?\))|linear-gradient\([\s\S]*?\)/g;
  return text.replace(colorRegex, (match) => {
    if (match.startsWith("#")) {
      // Hex color
      return `<span className="hexa-preview" style="background-color: ${match};"></span>`;
    } else if (match.startsWith("hsl")) {
      // HSL or HSLA color
      return `<span className="hexa-preview" style="background-color: ${match};"></span>`;
    } else if (match.startsWith("linear-gradient")) {
      // Gradient color
      return `<span className="gradient-preview" style="background: ${match};"></span>`;
    }
    return match; // Return unchanged if it doesn't match any pattern
  });
};


const Content = ({ content, id }) => {
  const replacedContent = ReplaceAttachment(content.body.view.value, id);
  const parsedContent = parse(parseHexColors(replacedContent));

  return (
    <div>
      <article
        className=""
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




export default async function Page({ params: { id } }) {
  try {
    const data = await fetchData();
    const selectedData = data.find((item) => item.id === id);

    if (!selectedData) {
      throw new Error(`Content with ID ${id} not found.`);
    }

    return (
      <div className="mx-auto flex max-w-[90rem]">
      <aside className="flex flex-col w-64 border-r border-zinc-100 dark:border-zinc-700">

        <SideBar title={data} />

      </aside>
      <article className="w-full mx-16 my-12">
        <Suspense>
          <Content content={selectedData} id={id} />
          <div className="">
            <PreviousNextLinks title={data} />
          </div>
        </Suspense>
      </article>
      <nav className="flex flex-col w-64 my-12">
        <TableOfContents content={selectedData} />
      </nav>
    </div>
    

     
    );
  } catch (error) {
    console.error("Page loading error:", error);
    
  }
}


export async function generateStaticParams() {
  const data = await fetchData();

  return data.map(content => ({
    id: content.id,
  }));
}