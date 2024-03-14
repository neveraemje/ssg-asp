
import parse from "html-react-parser";
import React from "react";
import { ReplaceAttachment } from "@/app/component/(content)/ReplaceAttachment";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { maison } from "@/lib/font/font";
import { Suspense } from "react";

async function fetchData() {
    const URL = "https://asphalt-ds.vercel.app";
    const response = await fetch(`${URL}/api/news`, {
        next: { revalidate: 3600 }
    });
    const data = await response.json();
    return data;
}


const Content = ({ content, id }) => {
    const replacedContent = ReplaceAttachment(content.body.view.value, id);
    const parsedContent = parse(replacedContent);
    return (
        <div>
            <article
                className="mt-4 w-full min-w-0 pt-0 pb-8"
                style={{ minHeight: "calc(100vh - 103px)" }}
            >
                <div>
                    <>
                        <h1 className={`text-3xl font-semibold text-gray-800 mb-6 dark:text-zinc-100 ${maison.className}`}>{content.title}</h1>
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
        // Parsing the date string and formatting it
        const formattedDate = new Date(selectedContent.version.when).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            // hour: 'numeric',
            // minute: 'numeric',
            // second: 'numeric',
            timeZone: 'UTC' // Adjust as per your timezone
        });

        return (
            <section className=" mt-6 xl:relative flex flex-col md:flex-row gap-1 max-w-5xl mx-auto py-8">
                <Suspense>
                    <div className="relative mx-auto px-8 w-full md:w-1/4 py-4">
                        <div className="">
                            <Link className="
                            inline-flex items-center justify-center rounded-full bg-zinc-100 pl-4 pr-4 py-2 mr-4 text-sm font-semibold text-zinc-600 hover:bg-zinc-300 hover:text-zinc-800
                            dark:bg-zinc-700
                            dark:hover:bg-zinc-600
                            dark:text-zinc-400
                            dark:hover:text-zinc-100
                            gap-2
                            " href="/whatnews">
                            <ChevronLeft className='w-4' />
                                Back 
                            </Link>

                        </div>
                        <div className=" mt-8">
                            <div>Published at</div>
                            <div className=" flex items-center gap-2 font-medium mt-1">{formattedDate}</div>
                        </div>
                        <div className=" mt-4">
                            <div>Author</div>
                            <div className=" flex items-center gap-2 mt-1">
                                <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white">
                                    {selectedContent.version.by.publicName.charAt(0)}
                                </div>
                                <div className="font-medium">
                                    {selectedContent.version.by.publicName}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto px-8 w-full md:w-3/4">
                        <Content content={selectedContent} id={id} />
                    </div>
                </Suspense>

            </section>



        );
    } catch (error) {
        console.error("Page loading error:", error);

    }
};

export default Page;
// export const runtime = 'edge';


export async function generateStaticParams() {
    const data = await fetchData();
  
    return data.map(content => ({
      id: content.id,
    }));
  }