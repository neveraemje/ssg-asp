// "use client"
// import { ThemeProvider } from "next-themes"

// const Provider = ({children}) => {
//   return <ThemeProvider>{children}</ThemeProvider>
// }

// export default Provider


"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export default function Providers({ children}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}


// "use client"
// import { useEffect, useState } from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";

// export function ThemeProvider({ children, ...props }) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }