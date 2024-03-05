
import localFont from 'next/font/local'
import Header from '@/app/component/Header';
import Footer from '@/app/component/Footer';
import Provider from './component/(theme)/Provider';
import './globals.css'
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { maison } from '@/lib/font/font';


const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Font files can be colocated inside of `app`
const maisun = localFont({
  src: '../lib/font/MaisonNeueExtendedWEB-Bold.woff2',
  display: 'swap',
  variable: '--font-maisun',
})

export const metadata = {
  title: {
    default: "asphalt-ds.vercel.app",
    template: "%s | asphalt-ds.vercel.app",
  },
  description: "Gojek Apps design language system ensures consistency across various products, from food and goods delivery to ride-hailing services.",
  openGraph: {
    title: "asphalt-ds.vercel.app",
    description:
      "Gojek Apps design language system ensures consistency across various products, from food and goods delivery to ride-hailing services.",
    url: "https://asphalt-ds.vercel.app/",
    siteName: "asphalt-ds.vercel.app",
    images: [
      {
        url: "https://asphalt-ds.vercel.app/logo/thumbnail.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Asphalt Design System",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/logo/faficon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <body className={` antialiased min-h-screen bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-50 ${inter.className}`}>


        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>



      </body>
      {/* </ThemeProvider> */}

    </html>
  )
}
