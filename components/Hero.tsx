'use client'
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, RocketIcon, MobileIcon } from '@radix-ui/react-icons';
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import React from 'react';
import { Just_Another_Hand } from 'next/font/google';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const justAnotherHand = Just_Another_Hand({ weight: ['400']});

import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['500']});
const boldpoppins = Poppins({ weight: ['700']});

// Definicje wariantów animacji dla kontenera i poszczególnych elementów
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }
};

const buttonVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
};

const backgroundVariants = {
  animate: {
    scale: [1, 1.05, 1], // Delikatne powiększanie i zmniejszanie
    rotate: [0, 5, -5, 0], // Delikatne obracanie w obie strony
    transition: { 
      duration: 10, // Czas trwania jednej pełnej animacji
      ease: "linear", // Typ easingu (w tym przypadku liniowy, dla płynnej animacji)
      repeat: Infinity, // Powtarzanie animacji w nieskończoność
    },
  },
};

const containerVariants2 = {
  initial: { scale: 1 },
  inView: { 
    scale: 1.05, // Lekkie powiększenie kontenera
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

// Definicje wariantów dla animacji tekstu i obrazu
const splitVariants = {
  initial: { width: '100%' },
  fullView: { 
    width: '50%', // Podział na pół przy końcu sekcji
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

export default function Hero() {


  
  return (
    <div className=' grid grid-cols-10 pb-20'>
    <div className='hidden md:block col-span-2 bg-white'>
    <img src="/assets/images/Group8.svg" alt="" className=' w-96 pl-20 pt-20' />
      
    </div>

    <div className='col-span-10 md:col-span-6'>
    <motion.div 
    className="isolate bg-white"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <motion.div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" 
      aria-hidden="true"
      variants={backgroundVariants}
      animate="animate"
    >
   
    </motion.div>

      <motion.div className="mx-auto max-w-[88rem] py-24 sm:px-6 lg:px-8" variants={containerVariants}>
        <motion.div className="flex justify-center items-center mb-6" variants={badgeVariants}>
        <Link href="/kursy">
  
</Link>
        </motion.div>

        <motion.div className="flex justify-center items-center mb-4" variants={itemVariants}>
          <h1 className={` ${boldpoppins.className} text-7xl font-semibold text-zinc-800 text-center z-50`}>ProfiMerit to droga</h1>
        </motion.div>
        <motion.div className="flex justify-center items-center mb-4" variants={itemVariants}>
          <img src="/assets/images/rozwoj.svg" alt="" className=' scale-125'/>
          <h1 className={` ${boldpoppins.className} text-7xl font-semibold text-zinc-800 text-center z-50 mx-10`}> &</h1>
          <img src="/assets/images/sukces.svg" alt="" className=' scale-125'/>
        </motion.div>
        <motion.div className="flex justify-center items-center mb-4" variants={itemVariants}>
          <h1 className={`${boldpoppins.className} text-7xl font-semibold text-zinc-800 text-center z-50`}>idealna dla Ciebie</h1>
        </motion.div>

        <motion.div className="max-w-xl mx-auto mb-6 mt-10 " variants={itemVariants}>
          <p className={`${poppins.className} text-lg text-zinc-950/70 text-center leading-loose`}>Odkryj nasze najnowsze kursy i zdobądź certyfikaty, które otworzą przed Tobą nowe możliwości.</p>
        </motion.div>

        <motion.div className="flex justify-center items-center mb-32 gap-3" variants={buttonVariants}>
        


          
          <Sheet>
  <SheetTrigger asChild>
  <Link
  href={"/kontakt"}
  className="scale-up mt-5 flex items-center justify-between rounded-full border-[1.6px] border-purple-500 py-[8px] pr-2 pl-4 text-purple-500 text-[11px] font-medium bg-purple-500 shadow-xl"
>
  <p className={` ${poppins.className} text-center text-white flex-1`}>Zobacz kursy</p>
  <BsArrowUpRightCircleFill className='text-xl text-white ml-2'/>
</Link>
  </SheetTrigger>
            <SheetContent className="bg-gray-600/20 text-gray-100 border-l border-gray-600">
              <SheetHeader>
                <SheetTitle className="text-gray-100">Skontaktuj się z nami</SheetTitle>
                <SheetDescription className="text-gray-400">+ 788 966 344</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </motion.div>




  
  
      </motion.div>
    </motion.div>
    </div>

    <div className='hidden md:block col-span-2 bg-white'>
      <div>
        <img width={200} src="/assets/images/Vector.svg" alt="" />
      </div>
      
      <div className='mt-20'>
      <img width={150} src="/assets/images/Arc.png" className='rotating'  alt="" />
      </div>

      <div>
      <img width={200} src="/assets/images/Group-2.svg" className=' mt-40' alt="" />
      </div>
      
      
    </div>
    </div>
  );
}
