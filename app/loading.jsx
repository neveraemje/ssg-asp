import Spinner from "@/components/ui/spinner"

export default function Loading() {
    // Or a custom loading skeleton component
    return (
    <div className="relative max-w-6xl mx-auto px-4 focus:outline-none sm:px-4 md:px-12 py-20">
        <div className="flex flex-col items-center justify-center text-center">
    <Spinner/>
    <p className=" text-zinc-500 pt-3">Loading...</p>
    </div>
    </div>
    )
    
  }