// "use client"
// import { useRef, useState } from "react";
// import React from "react";

// export const CardSpot = () => {
//   const divRef = useRef(null);
//     const [isFocused, setIsFocused] = useState(false);
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [opacity, setOpacity] = useState(0);

//     // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     //   if (!divRef.current || isFocused) return;

//     //   const div = divRef.current;
//     //   const rect = div.getBoundingClientRect();

//     //   setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//     // };

//     const handleMouseMove = (e) => {
//         if (!divRef.current || isFocused) return;

//         const div = divRef.current;
//         const rect = div.getBoundingClientRect();

//         setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       };


//     const handleFocus = () => {
//       setIsFocused(true);
//       setOpacity(1);
//     };

//     const handleBlur = () => {
//       setIsFocused(false);
//       setOpacity(0);
//     };

//     const handleMouseEnter = () => {
//       setOpacity(1);
//     };

//     const handleMouseLeave = () => {
//       setOpacity(0);
//     };

//     return (
//       <div
//         ref={divRef}
//         onMouseMove={handleMouseMove}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className="to-slate-950 relative max-w-md overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 px-8 py-16 shadow-2xl"
//       >
//         <div
//           className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//           style={{
//             opacity,
//             background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
//           }}
//         />
//         <span className="mb-4 inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
//           <svg
//             className="h-6 w-6 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             aria-hidden="true"
//           />
//         </span>
//         <h3 className="mb-2 font-medium tracking-tight text-white">Hello!</h3>
//         <p className="text-sm text-slate-400">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
//           obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil
//           quod quibusdam expedita nemo.
//         </p>
//       </div>
//     );

//   };

"use client"

import { useRef, useState } from "react";
import React from "react";
import Image from "next/image";
import { FaSlack, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'


export const CardSpot = ({ name, job, country, photo, twitter, linkedin, slack }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(isMouseOver ? 1 : 0);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setOpacity(isFocused ? 1 : 0);
  };

  return (

    <div className="group relative p-2 border border-zinc-200 rounded-xl
   from-zinc-200  to-zinc-300 overflow-hidden bg-gradient-to-rshadow-lg
    dark:border-zinc-700 dark:from-zinc-700 dark:to-zinc-600
  "
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter: `grayscale(0%)`,
        transition: "filter 0.3s ease-in-out", // Apply grayscale filter
      }}

    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.20), transparent 70%)`,
        }}
      />

      <div className="relative aspect-square  overflow-hidden rounded-lg bg-gray-100 -z-50">
        <Image src={photo}
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={1600}
          loading="lazy"
          alt="cover" />
      </div>

      <div className=" mt-2 p-2">

        <div className="flex items-center">
          <h4 className="relative text-base font-semibold text-st">{name}</h4>

        </div>

        <div className=" flex items-center justify-between">
          <p className='relative  text-zinc-500 dark:text-zinc-400 text-sm'>{job}</p>
          {/* <p className='relative  text-zinc-500 dark:text-zinc-400 ml-auto text-xl'>{country}</p> */}
          <Link href={linkedin} target="_blank" className=" elative h-5 w-5">
            <FaLinkedin className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>
        </div>
        {/* <div className=" flex items-center gap-2 mt-4">
          <Link href={twitter} target="_blank" className=" h-5 w-5">
            <FaTwitter className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>

          <Link href={linkedin} target="_blank" className=" h-5 w-5">
            <FaLinkedin className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>


          <div className=" flex items-center  ml-auto gap-1">
            <FaSlack className=" text-zinc-400" />
            <p className='relative text-zinc-500 dark:text-zinc-400 flex items-center gap-1 text-sm'>
              {slack}</p>
            <p className='relative  text-zinc-500 dark:text-zinc-400 ml-auto text-xl'>{country}</p>
          </div>
        </div> */}


      </div>


    </div>


  );
};


export const ContributorSpot = ({ name, job, country, photo, twitter, linkedin, slack }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(isMouseOver ? 1 : 0);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setOpacity(isFocused ? 1 : 0);
  };

  return (

    <div className="group relative p-2 border border-zinc-200 rounded-xl
   from-zinc-200  to-zinc-300 overflow-hidden bg-gradient-to-rshadow-lg
    dark:border-zinc-700 dark:from-zinc-700 dark:to-zinc-600
  "
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter: `grayscale(0%)`,
        transition: "filter 0.3s ease-in-out", // Apply grayscale filter
      }}

    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.20), transparent 70%)`,
        }}
      />

      <div className="relative aspect-square  overflow-hidden rounded-lg bg-gray-100 -z-50">
        <Image src={photo}
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={1600}
          loading="lazy"
          alt="cover" />
      </div>

      <div className=" mt-2 p-1">

        <div className="flex items-center justify-between">
          <h4 className="relative font-semibold text-sm">{name}</h4>
          <Link href={linkedin} target="_blank" className=" elative h-5 w-5">
            <FaLinkedin className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>

        </div>

        {/* <div className=" flex items-center justify-between">
          <p className='relative  text-zinc-500 dark:text-zinc-400 text-sm'>{job}</p>
          <p className='relative  text-zinc-500 dark:text-zinc-400 ml-auto text-xl'>{country}</p>
          <Link href={linkedin} target="_blank" className=" elative h-5 w-5">
            <FaLinkedin className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>
        </div> */}
        {/* <div className=" flex items-center gap-2 mt-4">
          <Link href={twitter} target="_blank" className=" h-5 w-5">
            <FaTwitter className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>

          <Link href={linkedin} target="_blank" className=" h-5 w-5">
            <FaLinkedin className=" h-full w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200" />
          </Link>


          <div className=" flex items-center  ml-auto gap-1">
            <FaSlack className=" text-zinc-400" />
            <p className='relative text-zinc-500 dark:text-zinc-400 flex items-center gap-1 text-sm'>
              {slack}</p>
            <p className='relative  text-zinc-500 dark:text-zinc-400 ml-auto text-xl'>{country}</p>
          </div>
        </div> */}


      </div>


    </div>


  );
};



export const LegendSpot = ({ name, photo }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(isMouseOver ? 1 : 0);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setOpacity(isFocused ? 1 : 0);
  };

  return (




    <div className="group relative border border-zinc-200 rounded-full
   from-zinc-200  to-zinc-300 overflow-hidden bg-gradient-to-rshadow-lg
    dark:border-zinc-700 dark:from-zinc-700 dark:to-zinc-600
  "
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        filter: `grayscale(${isMouseOver ? "0%" : "100%"})`,
        transition: "filter 0.3s ease-in-out", // Apply grayscale filter
      }}

    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.20), transparent 70%)`,
        }}
      />

      <div className="relative aspect-square  overflow-hidden rounded-lg bg-gray-100 -z-50">
        <Image src={photo}
          className="absolute inset-0 h-full w-full object-cover"
          width={1200}
          height={1600}
          loading="lazy"
          alt="cover" />
      </div>

      {/* <div className=" mt-2 p-2">

        <div className="flex items-center">
          <h4 className="relative text-base font-semibold text-st">{name}</h4>

        </div>

        


      </div> */}


    </div>


  );
};
