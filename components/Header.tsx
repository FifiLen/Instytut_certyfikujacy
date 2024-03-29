'use client'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Poppins } from 'next/font/google';

const poppins = Poppins({subsets: ['latin'], weight: ['500']});

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Kursy', href: '/kursy', current: false },
  { name: 'Zapisy', href: '/zapisy', current: false },
  { name: 'Kontakt', href: '/kontakt', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}


export default function Header() {


  
  return (
    <div className={`  bg-white py-7`}>
    <Disclosure as="nav" className="bg-transparent sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto">
            <div className="relative flex justify-between items-center">
  
              {/* Logo - lewa strona */}
              <div className="">
                <Link href="/">
                  <img
                    width={220}
                    height={220}
                    src="/assets/images/logo.svg"
                    alt="Your Company"
                  />
                </Link>
              </div>
  
              {/* Centrum - Nawigacja */}
              <div className="flex-1 flex justify-center items-center">
  <div className="hidden sm:block">
    <div className="flex space-x-1">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            `${poppins.className} rounded-full py-[6px] px-5 text-[12px] font-medium`,
            item.current ? 'text-black border-[1.9px] border-zinc-600 ' : 'text-black border-[1.9px] border-gray-300 hover:border-black'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
</div>

  
              {/* Prawa strona - Ikona powiadomień */}
             
              <Link
  href={"/kontakt"}
  className="flex items-center justify-between rounded-full border-[1.6px] border-purple-500 py-[8px] pr-2 pl-4 text-purple-500 text-[13px] font-medium"
>
  <p className={`${poppins.className} text-center flex-1`}>Skontaktuj się z nami</p>
  <BsArrowUpRightCircleFill className='text-xl ml-2'/>
</Link>
                
              
            </div>
          </div>
  
          {/* Menu mobilne */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-full px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
  
  )
}
