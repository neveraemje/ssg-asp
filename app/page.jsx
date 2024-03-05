
import React from 'react'
import Hero from '@/app/component/home-component/Hero';
import Menu from './component/home-component/Menu';
import DemoApp from './component/home-component/DemoApp';
import News from './component/home-component/whatNew';




export default function Home() {
  return (
  
    
    <main className="relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-4 md:px-12">


    <Hero/>
    <Menu/>
    <News/>
    <DemoApp/>



    
    </main>

    
  )
}
// export const runtime = 'edge';

