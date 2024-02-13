import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon, RocketIcon, MobileIcon } from '@radix-ui/react-icons'
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import Contact from "./Contact"


export default function Hero() {
  
  return (
    <div className="isolate bg-zinc-950">
       <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> 
      
      <div className="mx-auto max-w-[88rem] py-24 sm:px-6 sm:py-32 lg:px-8">

        <div className=" flex justify-center items-center mb-6">
          <Link href="/kursy"><Badge className=" rounded-md px-3 text-sm border-[0.1px] border-zinc-50/20 bg-transparent font-normal text-gray-100 hover:bg-zinc-950 cursor-pointer"><RocketIcon className="text-white mr-4"/>Sprawdź najnowsze kursy i zdobądź certyfikaty.<ArrowRightIcon className=" text-white ml-2"/></Badge></Link>
        </div>

        <div className=" flex justify-center items-center mb-4">
          <h1 className=" text-6xl font-bold text-white text-center z-50">Instytut Certyfikujący</h1>
        </div>

        <div className=" max-w-3xl mx-auto mb-6">
          <h1 className=" text-lg text-gray-300/70 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quam aperiam nulla, optio ipsa veritatis. Consectetur ratione soluta error laudantium.</h1>
        </div>

        <div className=" flex justify-center items-center mb-32 gap-3">
          <Link href="#About" scroll={true} className=" scroll-smooth"><Button variant="secondary">O serwisie</Button></Link>



          <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className=" bg-transparent text-gray-100 border-gray-600 transition-all duration-500"><MobileIcon className=" mr-2"/>Skontaktuj się</Button>
      </SheetTrigger>
      <SheetContent className=" bg-gray-600/20 text-gray-100 border-l border-gray-600">
        <SheetHeader>
          <SheetTitle className=" text-gray-100">Skontaktuj się z nami</SheetTitle>
          <SheetDescription className=" text-gray-400">
            + 788 966 344
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
      
        </div>
       

        <div className="relative isolate overflow-hidden bg-gray-800/30 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Krztałć się. Rozwijaj. <br />Bądź dumny.
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Twój rozwój nie zna limitów. Zdobywaj nowe umiejętności i rozpychaj się łokciami na rynku pracy.
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
