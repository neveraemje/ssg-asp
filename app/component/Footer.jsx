import React from 'react'
import Ring from './(asset)/Ring'
import { HiLockClosed } from 'react-icons/hi2'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const figma = [
    {
        link: 'Main component',
        path: 'https://www.figma.com/file/7p3Fhdc0wFMDmVKilgnhoA/Main-Library-%5BAsphalt-Aloha%5D?type=design&node-id=46%3A2807&mode=design&t=16OiRlP4ENmsWW0z-1" className=" hover:text-green-600 dark:hover:text-green-500',
        internal: 'yes',
    },
    {
        link: 'Workshop component',
        path: 'https://www.figma.com/file/ABVzoSqaf4RdClDNqQPzPG/Workshop-Library-%5BAsphalt-Aloha%5D?type=design&node-id=231%3A18093&mode=design&t=zwaRDbVAsgqked7C-1',
        internal: 'yes',
    },

]

const token = [
    {
        link: 'Functional color',
        path: 'https://www.figma.com/file/MN9gffrfEeZaX9Tv0iL1z5/Asphalt-Functional-Colors-%5BAsphalt-Aloha%5D?type=design&node-id=0%3A1&mode=design&t=6Hyu5I1QWsE2DPJh-1',
        internal: 'yes',
    },
    {
        link: 'Brand color',
        path: 'https://www.figma.com/file/WW2zlpy7TavtFgNxu3r2NX/Asphalt-Brand-Colors-%5BAsphalt-Aloha%5D?type=design&node-id=202%3A422&mode=design&t=doHBi0SDUNi8wFs7-1" className="hover:text-green-600 dark:hover:text-green-500',
        internal: 'yes',
    },
    {
        link: 'Typography',
        path: 'https://www.figma.com/file/MgP1cIlWmClFb1cjGugVKT/Typography-%5BAsphalt-Aloha%5D?type=design&node-id=144%3A0&mode=design&t=byjj70rGU9fLWJnE-1',
        internal: 'yes',
    },
    {
        link: 'Shadow',
        path: 'https://www.figma.com/file/vaoq8aew6Tm7AtZ2skB6LB/Shadow-%5BAsphalt-Aloha%5D?type=design&node-id=1%3A11&mode=design&t=NvjX7Y6SnoixuTEp-1',
        internal: 'yes',
    },
    {
        link: 'Illustration',
        path: '',
        internal: 'yes',
    },
    {
        link: 'Iconography',
        path: '',
        internal: 'yes',
    },

]

const plugin = [
    {
        link: 'Design lint',
        path: 'https://www.figma.com/community/plugin/1198218359844106610/beta-asphalt-design-lint',
        internal: 'yes',
    },
    {
        link: 'Text editor',
        path: 'https://www.figma.com/community/plugin/1176471486375560529/asphalt-text-editor',
        internal: 'yes',
    },
    {
        link: 'Motion spec',
        path: 'https://www.figma.com/community/plugin/1180446034657645741/motion-spec',
        internal: 'no',
    },
    {
        link: 'Color grade',
        path: 'https://www.figma.com/community/plugin/1134704770739880058/asphalt-color-grading-based-on-uswds',
        internal: 'no',
    }

]

const channel = [
    {
        link: 'Design',
        path: 'ask-asphalt-design-aaaahxmbvt6cmhchpc53o64kxy@gojek.slack.com',
        internal: 'yes',
    },
    {
        link: 'Engineering',
        path: 'https://join.slack.com/share/enQtNjExMjU1NjE1MzQxNS0yMzFjZTk1YjZiMTQ0MzIxZDk1NzZjMmNhMmRkNDQ5NmIzZDVhODljNzZmMDlhMmI1N2JkODczODFmMjZmMTk4',
        internal: 'yes',
    },
]

const engineering = [
    {
        link: 'Android',
        path: '',
        internal: 'yes',
    },
    {
        link: 'iOS',
        path: '',
        internal: 'yes',
    },
    {
        link: 'Flutter',
        path: '',
        internal: 'yes',
    },
]

const about = [
    {
        link: 'Our team',
        path: '/team',
    },
    {
        link: 'Career',
        path: 'https://www.gojek.io/careers',
    },

]


const TooltipFooter = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>

                    <div className=" group h-6 w-6 rounded-full bg-transparent items-center flex justify-center hover:bg-zinc-200 dark:hover:bg-zinc-700">
                        <HiLockClosed className=' text-zinc-400/50 group-hover:text-zinc-500 dark:text-zinc-700 ' /></div>

                </TooltipTrigger>
                <TooltipContent>
                    <p>Access only for Gojek employee</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}



const Footer = () => {
    return (
        <footer className="py-14 border-t border-zinc-100  dark:border-zinc-700">
            <div className="mx-auto max-w-6xl w-full sm:px-4 md:px-12">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-6">
                    <div>
                        <div className=" pt-2">
                            <Ring />
                        </div>

                    </div>

                    <div>
                        <h2 className=" mb-4 text-sm font-semibold text-gray-700 dark:text-zinc-200 flex items-center">Figma library
                        </h2>
                        <ul className="text-gray-600 text-sm font-[450] space-y-4 dark:text-zinc-200">
                            {figma.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        target="_blank"
                                        className=' hover:text-green-600 dark:hover:text-green-500'
                                    >
                                        {item.link}
                                    </Link>
                                    {item.internal === 'yes' && <TooltipFooter />}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className=" mb-4 text-sm font-semibold text-gray-700 dark:text-zinc-200 flex items-center">Token library
                        </h2>
                        <ul className="text-gray-600 text-sm font-[450] space-y-4 dark:text-zinc-200">
                            {token.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        target="_blank"
                                        className=' hover:text-green-600 dark:hover:text-green-500'
                                    >
                                        {item.link}
                                    </Link>
                                    {item.internal === 'yes' && <TooltipFooter />}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className=" mb-4 text-sm font-semibold text-gray-700 dark:text-zinc-200 flex items-center">Figma plugin
                        </h2>
                        <ul className="text-gray-600 text-sm font-[450] space-y-4 dark:text-zinc-200">
                            {plugin.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        target="_blank"
                                        className=' hover:text-green-600 dark:hover:text-green-500'
                                    >
                                        {item.link}
                                    </Link>
                                    {item.internal === 'yes' && <TooltipFooter />}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className=" mb-4 text-sm font-semibold text-gray-700 dark:text-zinc-200 flex items-center">Slack channel

                        </h2>
                        <ul className="text-gray-600 text-sm font-[450] space-y-4 dark:text-zinc-200">
                            {channel.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        target="_blank"
                                        className=' hover:text-green-600 dark:hover:text-green-500'
                                    >
                                        {item.link}
                                    </Link>
                                    {item.internal === 'yes' && <TooltipFooter />}
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>
                        <h2 className=" mb-4 text-sm font-semibold text-gray-700 dark:text-zinc-200 flex items-center">Engineering

                        </h2>
                        <ul className="text-gray-600 text-sm font-[450] space-y-4 dark:text-zinc-200">
                            {engineering.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        target="_blank"
                                        className=' hover:text-green-600 dark:hover:text-green-500'
                                    >
                                        {item.link}
                                    </Link>
                                    {item.internal === 'yes' && <TooltipFooter />}
                                </li>
                            ))}
                        </ul>
                    </div>



                </div>

                <div className=" px-8 py-6 bg-gray-100  md:flex md:items-center md:justify-between sm:rounded-full rounded-lg dark:bg-zinc-700">

                    <div className=" flex items-center gap-1 sm:flex-row flex-col">
                        <div className="text-sm text-gray-700 sm:text-center dark:text-zinc-200">© 2023 <span>
                            Made with ♥ </span>
                        </div>
                        <div className="text-sm text-gray-700 sm:text-center dark:text-zinc-200">
                            by Asphalt Design System team
                        </div>
                    </div>
                    <div className="flex items-center gap-2 justify-center sm:mt-0 mt-4 sm:flex-row flex-col">
                        <div className=" flex gap-4 mr-4">
                            <div className="text-zinc-600 text-sm hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-500">
                                <Link href='/team'>
                                    Our team
                                </Link>
                            </div>
                            <div className="text-zinc-600 text-sm hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-500">
                                <Link href='https://www.gojek.io/careers/' target="_blank">
                                    Career
                                </Link>
                            </div>
                            <div className="text-zinc-600 text-sm hover:text-green-600 dark:text-zinc-200 dark:hover:text-green-500">
                                <Link href='https://forms.gle/62EPCuUEF11vKauc8' target="_blank">
                                    Feedback
                                </Link>
                            </div>
                        </div>

                        <div className=" flex gap-4">
                        <div className="h-5 w-5 text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300">
                            <Link href='https://twitter.com/gojekdesign?lang=en' target="_blank">
                                <FaTwitter className=' h-full w-full' />
                            </Link>
                        </div>
                        <div className="h-5 w-5 text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300">
                            <Link href='https://www.instagram.com/designatgojek' target="_blank">
                                <FaInstagram className=' h-full w-full' />
                            </Link>
                        </div>
                        <div className="h-5 w-5 text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300">
                            <Link href='https://www.linkedin.com/company/gojek' target="_blank">
                                <FaLinkedin className=' h-full w-full' />
                            </Link>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

// This is footer