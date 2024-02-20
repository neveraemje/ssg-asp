
"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { LuSunMedium, LuMoonStar } from 'react-icons/lu';

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // This useEffect ensures that the component is mounted before triggering theme changes
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="rounded-full w-7 h-7 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-zinc-700"
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== 'dark' ? (
        <LuMoonStar className="w-[18px] h-[18px] stroke-zinc-600" />
      ) : (
        <LuSunMedium className="w-5 h-5 stroke-zinc-300" />
      )}
    </button>
  );
};

export default ModeToggle;
