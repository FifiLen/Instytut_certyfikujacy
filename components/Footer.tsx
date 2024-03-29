import React from 'react';
import Link from 'next/link';
import { FaAngleRight, FaFacebookF, FaInstagram, FaPhone, FaMailBulk } from 'react-icons/fa';
import courses from './Details';

const Footer = () => {
  return (
    <footer className="py-16 bg-zinc-950 border-t">
      <div className="container mx-auto max-w-6xl px-4 xl:px-0 text-white justify-between">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-10 justify-between">
          <div className="footer-section text-center">
            <img src="/assets/images/logo.svg" alt="Logo" width={400} />
          </div>
          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Menu</h4>
            <ul className="list-none p-0">
              {['/', '/kursy','/zapisy', '/kontakt'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-zinc-300 font-medium hover:text-purple-500">
                      <FaAngleRight />
                      <span>{['Strona główna', 'Kursy','Zapisy', 'Kontakt'][idx]}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="footer-section">
  <h4 className="font-semibold mb-4 text-lg">Kursy</h4>
  <ul className="list-none p-0">
    {courses.map((course, id) => (
      <li key={id} className='mb-2'>
        <Link href={`/kursy/${course.id}`}>
          <span className="flex items-center space-x-2 text-zinc-300 font-medium hover:text-purple-500">
            <FaAngleRight />
            <span>{course.title}</span>
          </span>
        </Link>
      </li>
    ))}
  </ul>
</div>




          <div className="footer-section">
            <h4 className="font-semibold mb-4 text-lg">Kontakt</h4>
            <ul className="list-none p-0">
              {['/', '/','/','/','/','/'].map((href, idx) => (
                <li key={idx} className='mb-2'>
                  <Link href={href}>
                    <span className="flex items-center space-x-2 text-zinc-300 font-medium hover:text-purple-500">
                      
                      <span>{['+48 797 173 501', '+48 502 162 365', '+48 690 515 224', '+48 503 192 950','Magnolii 25, Rybnik','4tomorrowrybnik@gmail.com', ][idx]}</span>
                      
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>




        



          



        </div>
      </div>
    </footer>
  );
};

export default Footer;
