'use client'
import React from 'react';
import Link from 'next/link';
import FooterForm from './FooterForm';
import { Separator } from "@/components/ui/separator";
import courses from './Details';

const Stopka = () => {
  return (
    <footer className='bg-zinc-900 text-gray-300 text-sm'>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8">

        <div className="flex flex-col items-center md:items-start md:col-span-2 lg:col-span-1 mb-8 md:mb-0">
          <img src="/assets/images/logoFooter.svg" alt="Logo" className="mb-4" />
          <p>Odkryj nasze najnowsze kursy i zdobądź certyfikaty.</p>
        </div>

        <div className="md:col-span-1 lg:col-span-3 mb-8 md:mb-0">
          <FooterForm />
        </div>

        <div className="md:col-span-1 hidden lg:col-span-1 mb-8 md:mb-0">
          <h4 className="font-semibold text-xl mb-4">Menu</h4>
          <ul>
            {['/', '/kursy', '/zapisy', '/kontakt'].map((href, idx) => (
              <li key={idx}>
                <Link href={href}>
                  <p className="hover:text-purple-500">{['Strona główna', 'Kursy', 'Zapisy', 'Kontakt'][idx]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 lg:col-span-1 mb-8 md:mb-0">
          <h4 className="font-semibold text-xl mb-4">Kursy</h4>
          <ul>
            {courses.map((course, id) => (
              <li key={id}>
                <Link href={`/kursy/${course.id}`}>
                  <p className="hover:text-purple-500">{course.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          <h4 className="font-semibold text-xl mb-4">Kontakt</h4>
          <ul>
            {['+48 797 173 501', '+48 502 162 365','Magnolii 25, Rybnik'].map((contact, idx) => (
              <li key={idx}>{contact}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-3 lg:col-span-4 text-center md:text-left">
          <Separator />
          <ul className='flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-4'>
            <li>©2024 4Tomorrowrybnik</li>
            <li>Kursy</li>
            <li>Zapisy</li>
            <li>Kontakt</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Stopka;
