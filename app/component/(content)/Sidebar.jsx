
// "use client";
// import { useEffect, useState } from "react";
// import { useParams, usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

// const SideBar = ({ title }) => {
//   const params = useParams();
//   const id = params.id;
//   const router = useRouter();
//   const pathname = usePathname();
//   const parts = pathname.split('/');
//   const segment = `${parts[2]}`;
//   const groupedItems = {};


//   title.forEach(data => {
//     const firstName = data.title.split(' ')[0];
//     if (!groupedItems[firstName]) {
//       groupedItems[firstName] = [data];
//     } else {
//       groupedItems[firstName].push(data);
//     }
//   });

//   const [openGroup, setOpenGroup] = useState(null);

//   useEffect(() => {
//     const storedOpenGroup = localStorage.getItem("openGroup");
//     setOpenGroup(storedOpenGroup || segment);
//   }, [segment]);

//   const toggleGroup = (groupName) => {
//     const newOpenGroup = openGroup === groupName ? null : groupName;
//     localStorage.setItem("openGroup", newOpenGroup);
//     setOpenGroup(newOpenGroup);
//   };
//   // h-[calc(100vh-121px)]
//   return (
//     <div className="sticky top-[120px] hidden h-[calc(100vh-121px)] w-[200px] md:flex md:shrink-0 md:flex-col md:justify-between">
//       <div className="relative overflow-hidden">
//         <nav className="styled-scrollbar flex h-[calc(100vh-50px)] flex-col overflow-y-scroll pr-2 pb-4">
//           <h2 className="title-bar">
//             {segment}
//           </h2>
//           <ul>
//             {Object.entries(groupedItems).map(([groupName, groupItems], index) => (
//               <li key={index}>
//                 {groupItems.length > 1 ? (
//                   <>
//                     <div className="flex items-center justify-between list-bar" onClick={() => toggleGroup(groupName)}>
//                       <span>{groupName}</span>
//                       {openGroup === groupName ? <HiChevronUp/> : <HiChevronDown/>}
//                     </div>
//                     {openGroup === groupName && (
//                       <ul className="border-l my-3 border-zinc-200 dark:border-zinc-700">
//                         {groupItems.map((data, index) => (
//                           <li key={index}>
//                             <div
//                               className={`link my-2
//                                ${data?.id === id ? "text-green-600 font-semibold dark:text-green-500" : ""}`}
//                               onClick={() => {
//                                 router.push(`/doc/${segment}/${data?.id}`);
//                               }}
//                             >
//                               {data?.title}
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <div
//                     className={`list-bar ${groupItems[0]?.id === id ? "active-link" : ""}`}
//                     onClick={() => {
//                       router.push(`/doc/${segment}/${groupItems[0]?.id}`);
//                     }}
//                   >
//                     {groupItems[0]?.title}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SideBar;


"use client";
import { useEffect, useState } from "react";

import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";



const SideBar = ({ title }) => {
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split('/');
  const segment = `${parts[2]}`;

 
  const groupedItems = {};


  title.forEach(data => {
    const firstName = data.title.split(' ')[0];
    if (!groupedItems[firstName]) {
      groupedItems[firstName] = [data];
    } else {
      groupedItems[firstName].push(data);
    }
  });

  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const storedOpenGroup = localStorage.getItem("openGroup");
    setOpenGroup(storedOpenGroup || segment);
  }, [segment]);

  const toggleGroup = (groupName) => {
    const newOpenGroup = openGroup === groupName ? null : groupName;
    localStorage.setItem("openGroup", newOpenGroup);
    setOpenGroup(newOpenGroup);
  };
  // h-[calc(100vh-121px)]
  return (
    // <section className="w-64">
    // <div className="sticky top-[120px] hidden h-[calc(100vh-121px)] md:flex md:shrink-0 md:flex-col md:justify-between">
    //   <div className="relative overflow-hidden">
    //     <nav className="styled-scrollbar flex h-[calc(100vh-50px)] flex-col overflow-y-scroll pr-6 pb-4 pl-4">
    //       <h2 className="title-bar">
    //         {segment}
    //       </h2>
    //       <ul>
    //         {Object.entries(groupedItems).map(([groupName, groupItems], index) => (
    //           <li key={index}>
    //             {groupItems.length > 1 ? (
    //               <>
    //                 <div className="flex items-center justify-between text-sm pl-2 text-zinc-700 dark:text-zinc-200" onClick={() => toggleGroup(groupName)}>
    //                   <span>{groupName}</span>
                   
    //                 </div>
    //                 {groupName && (
    //                   <ul className="border-l  ml-3 border-zinc-200 dark:border-zinc-700">
    //                     {groupItems.map((data, index) => (
    //                       <li key={index}>
    //                         <div
    //                           className={`sidebar-item ml-2
    //                            ${data?.id === id ? " sidebar-active" : ""}`}
    //                           onClick={() => {
    //                             router.push(`/doc/${segment}/${data?.id}`);
    //                           }}
    //                         >
    //                           {data?.title}
    //                         </div>
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 )}
    //               </>
    //             ) : (
    //               <div
    //                 className={`sidebar-item ${groupItems[0]?.id === id ? "sidebar-active" : ""}`}
    //                 onClick={() => {
    //                   router.push(`/doc/${segment}/${groupItems[0]?.id}`);
    //                 }}
    //               >
    //                 {groupItems[0]?.title}
    //               </div>
    //             )}
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
    // </section>
    <div className="sticky top-[120px] hidden h-[calc(100vh-121px)] w-64 md:flex md:shrink-0 md:flex-col md:justify-between">
    <div className="relative overflow-hidden">
      <nav className="styled-scrollbar flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pr-2 pb-4">
        <h2 className="title-bar">
        {segment}
        </h2>
              <ul>
           {Object.entries(groupedItems).map(([groupName, groupItems], index) => (
              <li key={index}>
                {groupItems.length > 1 ? (
                  <>
                    <div className="flex items-center justify-between text-sm pl-2 text-zinc-700 dark:text-zinc-200" onClick={() => toggleGroup(groupName)}>
                      <span>{groupName}</span>
                   
                    </div>
                    {groupName && (
                      <ul className="border-l  ml-3 border-zinc-200 dark:border-zinc-700">
                        {groupItems.map((data, index) => (
                          <li key={index}>
                            <div
                              className={`sidebar-item ml-2
                               ${data?.id === id ? " sidebar-active" : ""}`}
                              onClick={() => {
                                router.push(`/doc/${segment}/${data?.id}`);
                              }}
                            >
                              {data?.title}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <div
                    className={`sidebar-item ${groupItems[0]?.id === id ? "sidebar-active" : ""}`}
                    onClick={() => {
                      router.push(`/doc/${segment}/${groupItems[0]?.id}`);
                    }}
                  >
                    {groupItems[0]?.title}
                  </div>
                )}
              </li>
            ))}
          </ul>

      </nav>
    </div>
  </div>
  );
};

export default SideBar;


// "use client";
// import { useEffect, useState } from "react";
// import { useParams, usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
// import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

// const SideBar = ({ title }) => {
//   const params = useParams();
//   const id = params.id;
//   const router = useRouter();
//   const pathname = usePathname();
//   const parts = pathname.split('/');
//   const segment = `${parts[2]}`;
//   const groupedItems = {};


//   title.forEach(data => {
//     const firstName = data.title.split(' ')[0];
//     if (!groupedItems[firstName]) {
//       groupedItems[firstName] = [data];
//     } else {
//       groupedItems[firstName].push(data);
//     }
//   });

//   const [openGroup, setOpenGroup] = useState(null);

//   useEffect(() => {
//     const storedOpenGroup = localStorage.getItem("openGroup");
//     setOpenGroup(storedOpenGroup || segment);
//   }, [segment]);

//   const toggleGroup = (groupName) => {
//     const newOpenGroup = openGroup === groupName ? null : groupName;
//     localStorage.setItem("openGroup", newOpenGroup);
//     setOpenGroup(newOpenGroup);
//   };
//   // h-[calc(100vh-121px)]
//   return (
//     <div className="sticky top-[120px] hidden w-[200px] md:flex md:shrink-0 md:flex-col md:justify-between">
//       <div className="relative overflow-hidden">
//         <nav className="styled-scrollbar flex  flex-col overflow-y-scroll pr-2 pb-4">
//           <h2 className="title-bar">
//             {segment}
//           </h2>
//           <ul>
//             {Object.entries(groupedItems).map(([groupName, groupItems], index) => (
//               <li key={index}>
//                 {groupItems.length > 1 ? (
//                   <>
//                     <div className="flex text-sm items-center p-2 text-zinc-800 rounded-lg dark:text-white group" onClick={() => toggleGroup(groupName)}>
//                       <span>{groupName}</span>
                      
//                     </div>
//                     { groupName && (
//                       <ul className="border-l ml-3 border-zinc-200 dark:border-zinc-700">
//                         {groupItems.map((data, index) => (
//                           <li key={index}>
//                             <div
//                               className={` ml-2 flex text-sm items-center p-2 text-zinc-800 rounded-xl dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group cursor-pointer my-[2px]
                               
//                               ${data?.id === id ? 
//                                 " flex text-sm items-center p-2 text-green-800  bg-green-100 rounded-xl dark:bg-green-800 dark:text-white hover:bg-green-100 dark:hover:bg-green-800 group cursor-pointer " : ""}`}
//                               onClick={() => {
//                                 router.push(`/doc/${segment}/${data?.id}`);
//                               }}
//                             >
//                               {data?.title}
//                             </div>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <div
//                     className={`flex text-sm items-center p-2 text-zinc-800 rounded-xl dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-700 group cursor-pointer my-[2px] ${groupItems[0]?.id === id ? 
//                       "flex text-sm items-center p-2 text-green-800  bg-green-100 rounded-xl dark:text-white dark:bg-green-800 hover:bg-zinc-100 dark:hover:bg-green-800 group cursor-pointer " : ""}`}
//                     onClick={() => {
//                       router.push(`/doc/${segment}/${groupItems[0]?.id}`);
//                     }}
//                   >
//                     {groupItems[0]?.title}
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default SideBar;
