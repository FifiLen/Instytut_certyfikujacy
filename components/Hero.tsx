'use client'
import { motion } from 'framer-motion';
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { Poppins } from 'next/font/google';

const poppins = Poppins({subsets: ["latin"], weight: ['500']});
const boldpoppins = Poppins({subsets: ["latin"], weight: ['700']});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const buttonVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }
};

export default function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-10 pb-20'>
      <div className='hidden lg:block lg:col-span-2 bg-white'>
        <img src="/assets/images/Group8.svg" alt="" className='w-96 pl-20 pt-20' />
      </div>

      <div className='col-span-1 lg:col-span-6'>
        <motion.div 
          className="isolate bg-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mx-auto max-w-[88rem] py-24 sm:px-6 lg:px-8" variants={containerVariants}>
            <motion.div className="flex justify-center items-center mb-6" variants={itemVariants}>
              <h1 className={`${boldpoppins.className} text-4xl lg:text-7xl font-semibold text-zinc-800 text-center z-50`}>ProfiMerit to droga</h1>
            </motion.div>
            <motion.div className="flex justify-center items-center mb-4" variants={itemVariants}>
              <img src="/assets/images/rozwoj.svg" alt="" className='scale-125'/>
              <h1 className={`${boldpoppins.className} text-4xl lg:text-7xl font-semibold text-zinc-800 text-center z-50 mx-10`}> &</h1>
              <img src="/assets/images/sukces.svg" alt="" className='scale-125'/>
            </motion.div>
            <motion.div className="flex justify-center items-center mb-4" variants={itemVariants}>
              <h1 className={`${boldpoppins.className} text-4xl lg:text-7xl font-semibold text-zinc-800 text-center z-50`}>idealna dla Ciebie</h1>
            </motion.div>
            <motion.div className="max-w-xl mx-auto mb-6 mt-10 " variants={itemVariants}>
              <p className={`${poppins.className} text-lg text-zinc-950/70 text-center leading-loose`}>Odkryj nasze najnowsze kursy i zdobądź certyfikaty, które otworzą przed Tobą nowe możliwości.</p>
            </motion.div>
            <motion.div className="flex justify-center items-center mb-32 gap-3" variants={buttonVariants}>
              <Link href="/kontakt">
                <div className="scale-up mt-5 flex items-center justify-between rounded-full border-[1.6px] border-purple-500 py-[8px] pr-2 pl-4 text-purple-500 text-[11px] font-medium bg-purple-500 shadow-xl">
                  <p className={`${poppins.className} text-center text-white flex-1`}>Zobacz kursy</p>
                  <BsArrowUpRightCircleFill className='text-xl text-white ml-2'/>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className='hidden lg:block lg:col-span-2 bg-white'>
        <img width={200} src="/assets/images/Vector.svg" alt="" />
        <img width={150} src="/assets/images/Arc.png" className='rotating mt-20' alt="" />
        <img width={200} src="/assets/images/Group-2.svg" className='mt-40' alt="" />
      </div>
    </div>
  );
}
