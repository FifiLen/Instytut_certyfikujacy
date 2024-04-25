'use client'

import courses from "@/components/Details";
import { ArrowRightIcon, CheckIcon} from '@heroicons/react/20/solid'


import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";
import CourseNav from "@/components/CourseNav";
import Link from "next/link";




export default function Kursy({ params }: { params: { id: string } }) {
  const course = courses.find(course => course.id === params.id);



  return (

    <div>
      <CourseNav />
    <div className="relative isolate overflow-hidden bg-zinc-900 px-6 pb-24 py-32 lg:overflow-visible lg:px-0">
     

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-6">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:pr-4"
          >
            <div className="lg:max-w-lg">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 tracking-tight sm:text-5xl`}
              >
                {course?.title}
              </motion.h1>

            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={`/assets/images/${course?.image}`}
            alt="" />
        </motion.div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base font-medium leading-7 text-white lg:max-w-lg">

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                {course?.description}
              </motion.p>




              {/* Lista punktów kursu */}
              {/* <ul role="list" className="mt-8 space-y-8 font-medium text-zinc-600">
      {course?.points.map((point, index) => (
        <motion.li key={index} className="flex gap-x-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 1.0 }}>
          <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
          <span>{point}</span>
        </motion.li>
      ))}
    </ul> */}


              {/* Organizacja kursu */}
              <div className=" my-20">
                <h2 className=" mt-10 mb-4 text-4xl font-bold text-pink-400">Organizacja kursu</h2>

                  <ol type="a" className="custom-list-style space-y-4 mt-6 ">
                    {course?.organization?.map((item, index) => (

                      <li className=" font-medium" key={index}>{item} <hr className=" mt-4" /></li>

                    ))}
                  </ol>
              </div>

              <div>
              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Organizacja zadań praktycznych</h2>

              <ol type="a" className="custom-list-style space-y-4 mt-10">
                {course?.practises?.map((item, index) => (

                  <li className="font-medium" key={index}>{item} <hr className=" mt-4" /></li>

                ))}
              </ol>
              </div>

              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Kadra prowadząca zajęcia</h2>
              <p className=" font-medium">{course?.mentor}</p>



              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Dokumentcaja kursu</h2>
              <ol className="custom-list-style space-y-4 mt-6">
                {course?.doc?.map((item, index) => (

                  <li className=" flex gap-3 font-medium" key={index}><CheckIcon className="mt-1 h-5 w-5 flex-none  text-pink-400" aria-hidden="true" />
                    {item} <hr className=" mt-4" /></li>

                ))}
              </ol>


              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Forma zajęć</h2>
              <p className=" font-medium">Forma zajęć hybrydowa:</p>
              <ol className="custom-list-style space-y-4 mt-6">
                {course?.formOf?.map((item, index) => (

                  <li className=" flex gap-3 font-medium" key={index}><ArrowRightIcon className="mt-1 h-5 w-5 flex-none  text-pink-400" aria-hidden="true" />
                    {item} <hr className=" mt-4" /></li>

                ))}
              </ol>


              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Ilość godzin praktyk kierunkowych</h2>
              <ol type="a" className="custom-list-style space-y-4 mt-6">
                {course?.time?.map((item, index) => (

                  <li className=" flex gap-3 font-medium" key={index}><CheckIcon className="mt-1 h-5 w-5 flex-none text-pink-400" aria-hidden="true" />
                    {item} <hr className=" mt-4" /></li>

                ))}
              </ol>


              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Materiały dydaktyczne</h2>
              <p className=" font-medium">{course?.material}</p>


              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Walidacja</h2>
              <p className=" font-medium">{course?.validation}</p>

              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Potwierdzenie kwalifikacji</h2>
              <p className=" font-medium">{course?.confirmation}</p>


              <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Główny cel kursu</h2>
              <p className=" font-medium">Celem głównym jest przygotowanie specjalistów z zakresu psychologii, pedagogiki, terapii oraz innych dziedzin pokrewnych do skutecznego wykorzystania technologii wirtualnej rzeczywistości (VR) w celach terapeutycznych. Program ma na celu wyposażenie uczestników w kompleksową wiedzę teoretyczną oraz praktyczne umiejętności niezbędne do projektowania, implementacji i oceny interwencji terapeutycznych z wykorzystaniem VR, zgodnie z najnowszymi badaniami i standardami etycznymi. Kurs ma również na celu promowanie innowacyjności i kreatywności w rozwiązywaniu problemów terapeutycznych oraz podnoszenie jakości opieki psychologicznej i pedagogicznej poprzez integrację nowoczesnych technologii.</p>


              <h2 className="mt-16 text-4xl font-bold text-pink-400">Cele szczegółowe</h2>
              {course?.mainPurpose?.map((main, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className=" font-medium">{main.title}</AccordionTrigger>
                    <AccordionContent>

                      <ul className=" space-y-5">
                        {main.content.map((content, contentIndex) => (
                          <li key={contentIndex}>{content}</li>
                        ))}
                      </ul>

                      <ul className=" space-y-5 mt-4">
                        {main.list.map((list, listIndex) => (
                          <li className=" flex gap-3 font-medium" key={listIndex}><CheckIcon className="mt-1 h-5 w-5 flex-none text-pink-400" aria-hidden="true" />{list} </li>

                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}




              <h2 className="mt-16 text-4xl font-bold text-pink-400">Program Kursu</h2>
              {course?.modules2?.map((main, index) => (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="font-medium">{main.title}</AccordionTrigger>
                    <AccordionContent>
                      {main.contains.map((contains, containsIndex) => (
                        <div key={containsIndex} className=" mb-6">
                          {/* Pierwsza lista z treściami */}
                          <ul className="space-y-5">
                            {contains.content.map((content, contentIndex) => (
                              <li key={contentIndex} className=" font-semibold tracking-wide text-pink-300">{content}</li>
                            ))}
                          </ul>

                          {/* Druga lista z elementami list */}
                          <ul className="space-y-5 mt-4">
                            {contains.list.map((list, listIndex) => (
                              <li
                                key={listIndex}
                                className="flex gap-3 font-medium"
                              >
                                <CheckIcon
                                  className="mt-1 h-5 w-5 flex-none text-pink-400"
                                  aria-hidden="true" />
                                {list}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}




              {/* Moduły kursu
    <h2 className=" mt-16 mb-4 text-4xl font-bold text-pink-400">Program kursu</h2>


    
    {course?.modules.map((module, index) => (

      

      <Accordion key={index} type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className=" font-medium">{module.title}</AccordionTrigger>
        <AccordionContent>
        <ul className=" space-y-5">
         {module.topics.map((topic, topicIndex) => (
             <li key={topicIndex}>{topic}</li>
         ))}
         </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>




    ))} */}





              <h2 className=" mt-16 text-4xl font-bold text-pink-400">Dodatkowe elementy kursu</h2>
              <ul className=" space-y-4 mt-6">
                {course?.addinf?.map((additional, infoIndex) => (
                  <li className=" flex gap-3 text-lg font-medium" key={infoIndex}><ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-pink-400" aria-hidden="true" />{additional}</li>
                ))}
              </ul>


              {/* Grupa docelowa */}
              <h2 className="mt-16 text-4xl font-bold tracking-tight text-pink-400 ">Uczestnicy kursu</h2>
              <p className="mb-5 font-medium">Uczestnikami kursu mogą być:</p>
              <ul className=" space-y-4">
                {course?.target?.map((target, tarIndex) => (
                  <li className=" flex gap-3 text-lg font-medium" key={tarIndex}><ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-pink-400" aria-hidden="true" />{target}</li>
                ))}
              </ul>

              {/* Rezultaty */}
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-3">Rezultaty</h2>
    <div className="flex flex-wrap gap-2">
      {course?.outcomes.map((outcome, outIndex) => (
        <Badge
          className={`p-2 bg-transparent border text-center ${
            outIndex % 2 === 0 ? 'bg-yellow-200 text-black' : 'bg-purple-600/80 text-white'
          }`}
          key={outIndex}
        >
          {outcome}
        </Badge>
      ))}
    </div> */}

              
                <Link href={'/zapisy'} >
                  <p className="p-5 rounded-md bg-pink-500 text-xl w-fit mt-8">Zapisz się na kurs  &rarr;</p>
                </Link>
              

            </div>
          </div>
        </div>



      </div>
    </div>
    </div>
  );
}