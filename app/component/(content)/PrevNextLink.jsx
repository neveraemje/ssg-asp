"use client"
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";


const PrevNextPage = ({ title }) => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split('/');
  const segment = `${parts[2]}`;

  const currentIndex = title.findIndex(data => data?.id === id);

  // Calculate the next and previous indices
  const nextIndex = (currentIndex + 1) % title.length;
  const prevIndex = (currentIndex - 1 + title.length) % title.length;

  // Get the next and previous items from the title array
  const nextItem = title[nextIndex];
  const prevItem = title[prevIndex];

  // Determine if the current page is the first or last
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === title.length - 1;

  return (
    <div>
    <div className=" border-[0.5px] border-gray-200 my-4 dark:border-zinc-700 "></div>
    <div className="flex justify-between flex-wrap items-start  mb-14 mt-4 w-full min-w-0 max-w-6xl px-1 py-8 md:px-0">
    {/* Previous Item */}
    {!isFirstPage && prevItem && (
      <div
        className="group flex flex-col hover:cursor-pointer  "
        onClick={() => {
          router.push(`/doc/${segment}/${prevItem.id}`);
        }}
      >
      
        <span className="mb-1  pl-5 text-sm text-gray-600 dark:text-zinc-400">Previous</span>
        <div className="flex centere items-center gap-1">
        <HiChevronLeft className="text-gray-600 dark:text-zinc-200"/>
        <span className="text-gray-600 hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-500 font-semibold">{prevItem.title}</span>
        
        </div>
      </div>
    )}
  
        <div className=""></div>
    {/* Next Item */}
    {!isLastPage && nextItem && (
      
      <div
        className="group flex flex-col items-end hover:cursor-pointer"
        onClick={() => {
          router.push(`/doc/${segment}/${nextItem.id}`);
        }}
      >
        
        <span className="mb-1  pr-5 text-sm text-gray-600 dark:text-zinc-400">Next</span>
        <div className="flex centere items-center gap-1">
        <span className="text-gray-600 hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-500 font-semibold">{nextItem.title}</span>
        <HiChevronRight className="text-gray-600 dark:text-zinc-200"/>
        </div>
        
      </div>
    )}
  </div>
  </div>
        
           
      
    
  );
};

export default PrevNextPage;
