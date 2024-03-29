'use client'
import React from 'react'
import courses from './Details';
import Link from 'next/link';
import FooterForm from './FooterForm';
import { Separator } from "@/components/ui/separator"


const Stopka = () => {
  return (
    <footer className=' bg-zinc-800 w-full '>
  
    <div className="grid grid-cols-4 grid-rows-7">

        <div className="col-span-2 row-span-2 bg-zinc-800  border-r flex items-center">
          <div className='max-w-2xl mx-auto gap-5'>

            <div className='flex justify-center items-center'>
            <img src="/assets/images/logoFooter.svg" alt="Logo" width={250} />
            </div>

            <div className='flex items-center pt-4'>
              <p className=' text-sm font-[400] text-gray-300'>Odkryj nasze najnowsze kursy i zdobądź certyfikaty.</p>
            </div>

          </div>
        </div>


        <div className="col-span-2 row-span-4 col-start-3 bg-zinc-800 flex items-center mx-32">
       
       <div>
      <FooterForm />
      </div>


        </div>





        <div className="col-span-2 row-span-2 row-start-3 bg-zinc-800 border-t border-r flex items-center">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-2xl mx-auto my-10">
        
          <div className="">
            <h4 className="font-semibold mb-4 text-xl">Menu</h4>
            <ul className="list-none p-0">
              {['/', '/kursy','/zapisy', '/kontakt'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-zinc-300 font-[400] text-sm hover:text-purple-500">
                      
                      <span>{['Strona główna', 'Kursy','Zapisy', 'Kontakt'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="">
  <h4 className="font-semibold mb-4 text-xl">Kursy</h4>
  <ul className="list-none p-0">
    {courses.map((course, id) => (
      <li key={id} className='mb-2'>
        <Link href={`/kursy/${course.id}`}>
          <span className="flex items-center space-x-2 text-zinc-300 font-[400] text-sm hover:text-purple-500">
            
            <span>{course.title}</span>
          </span>
        </Link>
      </li>
    ))}
  </ul>
</div>




          <div className="">
            <h4 className="font-semibold mb-4 text-xl">Kontakt</h4>
            <ul className="list-none p-0">
              {['/', '/','/','/','/','/'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-zinc-300 font-[400] text-sm hover:text-purple-500">
                      
                      <span>{['+48 797 173 501', '+48 502 162 365','Magnolii 25, Rybnik', ][idx]}</span>
                      
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>




        



          



        </div>
        </div>

        <div className="footerBg col-span-4 row-span-3 row-start-5 bg-zinc-800 border-t grid justify-start pl-32 pb-10 items-end">
          <div className='max-w-7xl mx-auto'>
          <ul className=' flex gap-6 text-sm font-bold'>
            <li>©2024 4Tomorrowrybnik</li>
            <li><Separator orientation="vertical" /></li>
            <li>Kursy</li>
            <li><Separator orientation="vertical" /></li>
            <li>Zapisy</li>
            <li><Separator orientation="vertical" /></li>
            <li>Kontakt</li>




            
          </ul>
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Stopka