'use client'
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, RocketIcon, MobileIcon } from '@radix-ui/react-icons';
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import React from 'react';

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
    <motion.div 
    className="isolate bg-zinc-950"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <motion.div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" 
      aria-hidden="true"
      variants={backgroundVariants}
      animate="animate"
    >
      <div
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </motion.div>

      <motion.div className="mx-auto max-w-[88rem] py-24 sm:px-6 sm:py-32 lg:px-8" variants={containerVariants}>
        <motion.div className="flex justify-center items-center mb-6" variants={badgeVariants}>
          <Link href="/kursy">
            <Badge className="rounded-md px-3 text-sm border-[0.1px] border-zinc-50/20 bg-transparent font-normal text-gray-100 hover:bg-zinc-950 cursor-pointer">
              <RocketIcon className="text-white mr-4"/>Sprawdź najnowsze kursy i zdobądź certyfikaty.<ArrowRightIcon className="text-white ml-2"/>
            </Badge>
          </Link>
        </motion.div>

        <motion.div className="flex justify-center items-center mb-4" variants={itemVariants}>
          <h1 className="text-6xl font-bold text-white text-center z-50">Instytut Certyfikujący</h1>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto mb-6" variants={itemVariants}>
          <h1 className="text-lg text-gray-200/90 text-center">Odkryj nasze najnowsze kursy i zdobądź certyfikaty, które otworzą przed Tobą nowe możliwości. Wspieramy Cię w rozwoju umiejętności niezbędnych na dzisiejszym rynku pracy. Nie czekaj - dołącz do naszej społeczności i zacznij realizować swoje zawodowe cele już dziś!</h1>
        </motion.div>

        <motion.div className="flex justify-center items-center mb-32 gap-3" variants={buttonVariants}>
          <Link href="#About" scroll={true} className="scroll-smooth bg-white rounded-md">
            <Button variant="secondary">O serwisie</Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-transparent text-gray-100 border-gray-600 transition-all duration-500">
                <MobileIcon className="mr-2"/>Skontaktuj się
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-600/20 text-gray-100 border-l border-gray-600">
              <SheetHeader>
                <SheetTitle className="text-gray-100">Skontaktuj się z nami</SheetTitle>
                <SheetDescription className="text-gray-400">+ 788 966 344</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </motion.div>




        <motion.div
      className="relative isolate overflow-hidden bg-gray-800/30 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      variants={containerVariants2}
      initial="initial"
      whileInView="inView"
      viewport={{ once: false }}
    >
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>

      <motion.div
        className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
        variants={splitVariants}
        whileInView="fullView"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Krztałć się. Rozwijaj. <br />Bądź dumny.
        </h2>
        <p className="mt-6 text-lg leading-6 text-zinc-300">
        Rozwój osobisty to klucz do sukcesu w dzisiejszym dynamicznym świecie. Nie ma granic dla Twojego potencjału. Zdobywaj nowe umiejętności, eksploruj nieznane obszary i poszerzaj swoje horyzonty, ponieważ tylko w ten sposób będziesz w stanie utrzymać krok z szybko zmieniającym się światem zawodowym.
        </p>
      </motion.div>

      <motion.div
        className="relative mt-16 h-80 lg:mt-8"
        variants={splitVariants}
        whileInView="fullView"
        viewport={{ once: false, amount: 0.5 }}
      >
        <img
          className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt="App screenshot"
          width={1824}
          height={1080}
        />
      </motion.div>
    </motion.div>
  
      </motion.div>
    </motion.div>
  );
}
