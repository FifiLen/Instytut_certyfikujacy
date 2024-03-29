'use client'

import courses from "@/components/Details";
import { ArrowRightIcon} from '@heroicons/react/20/solid'

import { Righteous } from "next/font/google";

import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";

const righteous = Righteous({ weight: ['400']})


export default function Kursy({ params }: { params: { id: string } }) {
  const course = courses.find(course => course.id === params.id);


  const MotionAccordion = motion(Accordion);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Your SVG background code */}
    </div>

    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
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
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {course?.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`${righteous.className} mt-6 text-lg font-medium italic leading-8 text-zinc-800`}
            >
              {course?.subtitle}
            </motion.p>
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
          alt=""
        />
      </motion.div>
        
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}>
                {course?.description}
              </motion.p>


              
              {/* Lista punktów kursu */}
              <ul role="list" className="mt-8 space-y-8 font-medium text-zinc-600">
                {course?.points.map((point, index) => (
                  <motion.li key={index} className="flex gap-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: 1.0 }}>
                    <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Moduły kursu */}
              <motion.h2 className=" mt-16 text-3xl font-bold text-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}>Program kursu:</motion.h2>
        
              {course?.modules.map((module, index) => (
                <MotionAccordion key={index} type="single" collapsible
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                >
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" font-semibold">{module.title}</AccordionTrigger>
                  <AccordionContent>
                  <ul>
                   {module.topics.map((topic, topicIndex) => (
                       <li key={topicIndex}>{topic}</li>
                   ))}
                   </ul>
                  </AccordionContent>
                </AccordionItem>
              </MotionAccordion>
              ))}




              {/* Wymagania kursu */}
              <h2 className=" mt-16 text-3xl font-bold text-purple-600">Informacje dodatkowe:</h2>

              {course?.additionalInfo.map((module, index) => (
                <Accordion key={index} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" font-semibold">{module.title}</AccordionTrigger>
                  <AccordionContent>
                  <ul>
                   {module.topics.map((topic, topicIndex) => (
                       <li key={topicIndex}>{topic}</li>
                   ))}
                   </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              ))}


              {/* Grupa docelowa */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-3">Grupa docelowa</h2>
              <ul>
                {course?.target?.map((target, tarIndex) => (
                  <li key={tarIndex}>{target}</li>
                ))}
              </ul>

              {/* Rezultaty */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-3">Rezultaty</h2>
              <div className="flex flex-wrap gap-2">
                {course?.outcomes.map((outcome, outIndex) => (
                  <Badge
                    className={`p-2 bg-transparent border text-center ${
                      outIndex % 2 === 0 ? 'bg-zinc-800/90 text-white' : 'bg-purple-600/80 text-white'
                    }`}
                    key={outIndex}
                  >
                    {outcome}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}