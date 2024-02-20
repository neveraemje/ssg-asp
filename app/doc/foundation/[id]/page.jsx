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
  const response = await fetch(`${URL}/api/api-foundation`, {
    next: { revalidate: 0 }
  });
  const data = await response.json();
  return data;
}

// const parseHexColors = (text) => {
//   const colorRegex = /(?:#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|linear-gradient\([\s\S]*?\))/g;
//   return text.replace(colorRegex, (match) => {
//     if (match.startsWith("#")) {
//       // Hex color
//       return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
//     } else if (match.startsWith("linear-gradient")) {
//       // Gradient color
//       return `<span class="gradient-preview" style="background: ${match};"></span>`;
//     }
//     return match; // Return unchanged if it doesn't match either pattern
//   });
// };

const parseHexColors = (text) => {
  const colorRegex = /(?:#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})|hsla?\((?:\s*\d+%?(?:\s*,\s*\d+%?(?:\s*,\s*\d+%?(?:\s*,\s*(?:0?\.\d+|1(?:\.0+)?))?)?)?)?\))|linear-gradient\([\s\S]*?\)/g;
  return text.replace(colorRegex, (match) => {
    if (match.startsWith("#")) {
      // Hex color
      return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
    } else if (match.startsWith("hsl")) {
      // HSL or HSLA color
      return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
    } else if (match.startsWith("linear-gradient")) {
      // Gradient color
      return `<span class="gradient-preview" style="background: ${match};"></span>`;
    }
    return match; // Return unchanged if it doesn't match any pattern
  });
};



// const parseHexColors = (text) => {
//   const hexColorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
//   return text.replace(hexColorRegex, (match) => {
//     return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
//   });
// };

// const parseHexColors = (text) => {
//   const hexColorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;
//   const gradientColorRegex = /(linear-gradient\([^)]+\))/g;

//   // // Replace hex colors
//   // text = text.replace(hexColorRegex, (match) => {
//   //   return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
//   // });

//   // Replace gradient colors
//   text = text.replace(gradientColorRegex, (match) => {
//     return `<span class="hexa-preview" style="background: ${match};"></span>`;
//   });

//   return text;
// };


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

      // <div className="relative mx-auto max-w-7xl md:flex md:flex-row md:py-0 px-1 py-8 sm:px-4 md:px-12">
      //   <SideBar title={data} />
      //   <Suspense>
      //     <div>
      //     <Content content={selectedContent} id={id} />
        
      //       <PreviousNextLinks title={data} />
      //     </div>
      //   </Suspense>
      //   <TableOfContents content={selectedContent} />
      // </div>
  //     <div className="relative mx-auto max-w-7xl md:flex md:flex-row md:py-0 px-1 py-8 sm:px-4 md:px-12">
  // {/* Sidebar */}
  // <div className="md:w-1/4 lg:w-1/5 xl:w-1/6">
  //   <SideBar title={data} />
  // </div>

  // {/* Content and Table of Contents */}
  // <div className="md:w-3/4 lg:w-4/5 xl:w-5/6">
  //   <Suspense>
  //     <div>
  //       {/* Content */}
  //       <Content content={selectedContent} id={id} />

  //       {/* Divider */}
  //       <div className="border-[0.5px] border-gray-200 my-4"></div>

  //       {/* Previous and Next Links */}
  //       <PreviousNextLinks title={data} />
  //     </div>
  //   </Suspense>

  //   {/* Table of Contents (hidden on smaller screens) */}
  //   <div className="md:hidden">
  //     <TableOfContents content={selectedContent} />
  //   </div>
  // </div>
  //     </div>
    );
  } catch (error) {
    console.error("Page loading error:", error);
    // Handle the error gracefully, e.g., display an error message or redirect to an error page.
    // You can also consider setting an appropriate HTTP status code in the response.
  }
};

export default Page;