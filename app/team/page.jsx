import React from 'react'
import { CardSpot, ContributorSpot } from './component/CardSpot'
import { maison } from '../../lib/font/font';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'


const team = [
    {
        name: "Jaison Justus",
        job: "Design Manager",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "https://www.linkedin.com/in/jaisonjustus/",
        photo: "/team/jaison.jpeg",
        slack: "jj",
    },
    {
        name: "Keith Vaz",
        job: "Product Designer",
        country: "🇮🇳",
        twitter: "https://twitter.com/keeithlv",
        linkedin: "https://www.linkedin.com/in/keeithvaz/",
        photo: "/team/keith.jpeg",
        slack: "keith",
    },
    {
        name: "Mochamad J Arifin",
        job: "Product Designer",
        country: "🇮🇩",
        twitter: "https://twitter.com/Neveraemje",
        linkedin: "https://www.linkedin.com/in/neveraemje/",
        photo: "/team/mj.png",
        slack: "emje",
    },


    {
        name: "Angga P Sundowo",
        job: "Product Designer",
        country: "🇮🇩",
        twitter: "https://twitter.com/AnggaSevhen",
        linkedin: "https://www.linkedin.com/in/angga-putra/",
        photo: "/team/angga.png",
        slack: "angga",
    },
    {
        name: "Jesslin Jesslin",
        job: "Product Designer",
        country: "🇮🇩",
        twitter: "https://twitter.com/AnggaSevhen",
        linkedin: "https://www.linkedin.com/in/jesslin-lee-57b01b12a/",
        photo: "/team/jeslin.png",
        slack: "angga",
    },
    {
        name: "Denti Iswarini",
        job: "Product Designer",
        country: "🇮🇩",
        twitter: "https://twitter.com/AnggaSevhen",
        linkedin: "https://www.linkedin.com/in/dentiiswarini/",
        photo: "/team/denti.jpg",
        slack: "angga",
    },
    {
        name: "Brinda Desai",
        job: "Product Designer",
        country: "🇮🇩",
        twitter: "https://twitter.com/AnggaSevhen",
        linkedin: "https://www.linkedin.com/in/brinda-desai/",
        photo: "/team/brenda.png",
        slack: "angga",
    },

    {
        name: "Aksay Hedge",
        job: "UXE Manager",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "linkedin.com",
        photo: "/team/akshay.png",
        slack: "Akshay Hegde ",
    },
    {
        name: "Abhishek Jangra",
        job: "UXE Android",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "linkedin.com",
        photo: "/team/abhishek.jpeg",
        slack: "abhisek_j",
    },
    {
        name: "Akanshi Srivastava",
        job: "UXE Android",
        country: "🇮🇳",
        twitter: "https://twitter.com/akanshi_s",
        linkedin: "https://www.linkedin.com/in/akanshi32/?originalSubdomain=in",
        photo: "/team/akhanshi.png",
        slack: "akanshi",
    },
    {
        name: "Ravi Tripathi",
        job: "UXE iOS",
        country: "🇮🇳",
        twitter: "https://twitter.com/RhoTau",
        linkedin: "https://www.linkedin.com/in/ravitripathi1996/",
        photo: "/team/ravi.jpeg",
        slack: "ravi tripathi",
    },
    {
        name: "Sumit Jat",
        job: "UXE Android",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "https://www.linkedin.com/in/sumit-jat/",
        photo: "/team/sumit.jpeg",
        slack: "sumit.jat",
    },
    {
        name: "Simran Rout",
        job: "UXE iOS",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "https://www.linkedin.com/in/simran-rout/",
        photo: "/team/simran.png",
        slack: "simran.rout",
    },
    {
        name: "Aakash Khatter",
        job: "UXE Flutter",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "https://www.linkedin.com/in/aakashkhatter/",
        photo: "/team/akash.jpeg",
        slack: "aakash.khatter",
    },
    {
        name: "Tarun Yadaf",
        job: "UXE iOS",
        country: "🇮🇳",
        twitter: "twitter.com",
        linkedin: "linkedin.com",
        photo: "/team/tarun.jpeg",
        slack: "tarun",
    },



];


const contributor = [
    {
        name: "Mayank S",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/mayank-sagar-6a5b6280/",
        photo: "/team/contributor/mayank.jpeg",
      
    },
    {
        name: "Reza N",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/rezanovriansyah/",
        photo: "/team/contributor/eja.jpeg",
        
    },
    {
        name: "Anton C",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/antonchandra/",
        photo: "/team/contributor/anton.png",
        
    },
    { 
        name: "Manyu V",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/manyuvarma/",
        photo: "/team/contributor/manyu.jpeg",
      
    },
    {
        name: "Ronak M",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/ronak-mokashi/",
        photo: "/team/contributor/ronak.jpeg",
    },
    {
        name: "Abil R",
        job: "Product Engineer",
        linkedin: "https://www.linkedin.com/in/abilreza/",
        photo: "/team/contributor/abil.jpeg",

    },
    {
        name: "Fauzy",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/fauzy-lukman-504625100/",
        photo: "/team/contributor/pojay.png",
    },
    {
        name: "Reihan",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/reihanr/",
        photo: "/team/contributor/reihan.png",
    },
    {
        name: "Sumit R",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/sumitraj/",
        photo: "/team/contributor/sumitraj.jpg",
    },
    {
        name: "Ferik T",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/feriktantomi/",
        photo: "/team/contributor/ferik.jpeg",
    },
    {
        name: "Nandhik",
        job: "Motion Designer",
        linkedin: "https://www.linkedin.com/in/nanda-mahardhika-2ba44561/",
        photo: "/team/contributor/nandhik.png",
    },
    {
        name: "Lui",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/luthfi-eryando-146225147/",
        photo: "/team/contributor/luthfi.jpg",
    },
    {
        name: "Melia P",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/melia-praditya-239510112/",
        photo: "/team/contributor/melia.jpeg",
    },
    {
        name: "Wilhan B",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/wilhanb/",
        photo: "/team/contributor/wilhan.jpeg",
    },
    {
        name: "Payal R",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/payalrodrigues/",
        photo: "/team/contributor/payal.jpeg",
    },
    {
        name: "Meghana",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/meghanapammi/",
        photo: "/team/contributor/megha.jpeg",
    },
    {
        name: "Tanvi M",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/tanvidesign/",
        photo: "/team/contributor/tanvi.png",
    },
    {
        name: "Vinu R",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/vinu-remesan/",
        photo: "/team/contributor/vinu.jpeg",
    },
    {
        name: "Mayank D",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/mak297/",
        photo: "/team/contributor/dingra.png",
    },
    {
        name: "Benson",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/benson-tjio-326086a0/",
        photo: "/team/contributor/benson.png",
    },
    {
        name: "Artisa",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/artisa-t-985840120/",
        photo: "/team/contributor/artisa.jpeg",
    },
    {
        name: "Galih",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/galihpambudi/",
        photo: "/team/contributor/galih.png",
    },
    {
        name: "Shamira",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/shamirandalusia/",
        photo: "/team/contributor/shamira.jpg",
    },
    {
        name: "Binoy C",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/shamirandalusia/",
        photo: "/team/contributor/binoy.png",
    },
    {
        name: "Alfian",
        job: "Product Designer",
        linkedin: "https://www.linkedin.com/in/alfianimanuddin/",
        photo: "/team/contributor/alfian.jpeg",
    },








    


];




const page = () => {
    return (
        <div className='mx-4'>
            <section className=' flex flex-col justify-center max-w-5xl  items-center text-center mt-10 mx-auto'>
                <div className=" prose text-center dark:prose-invert">
                    <div className={`text-4xl font-semibold tracking-normal ${maison.className}`}>Met our team of designers and engineers</div>
                    <div className=' text-lg mt-2 mx-6'>We are located in two different countries, but a shared road unites us. Salam Satu Aspal!</div>
                </div>


                <div className="relative mt-10 md:mt-8 w-full h-full">
                    <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-4 gap-y-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {team.map((menu, index) => (

                            <li key={index}>
                                <CardSpot
                                    name={menu.name}
                                    job={menu.job}
                                    country={menu.country}
                                    photo={menu.photo}
                                    // slack={menu.slack}
                                    twitter={menu.twitter}
                                    linkedin={menu.linkedin}
                                />
                            </li>
                        ))}
                    </ul>
                </div>




            </section>

            <hr className=' my-12 max-w-5xl mx-auto dark:border-zinc-600' />




                

            <section className=' flex flex-col justify-center max-w-5xl items-center text-center mt-10 mx-auto'>
                <h3 className=' text-3xl font-semibold text-l'>Contributor</h3>
                <div className=' text-lg mt-2 mx-10'>The designers and engineers who were previously involved and contributed to our design system.</div>
                <div className=" prose text-left dark:prose-invert">

                </div>


                <div className="relative mt-10 md:mt-8 w-full h-full">
                    <ul className=" grid grid-cols-[repeat(auto-fill, minimax(12rem,1fr))] gap-x-4 gap-y-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                        {contributor.map((menu, index) => (

                            <li key={index}>
                                <ContributorSpot
                                    name={menu.name}
                                    // job={menu.job}
                                    country={menu.country}
                                    photo={menu.photo}
                                    // slack={menu.slack}
                                    twitter={menu.twitter}
                                    linkedin={menu.linkedin}
                                />
                            </li>
                        ))}
                    </ul>
                </div>




            </section>
        </div>


    )
}

export default page