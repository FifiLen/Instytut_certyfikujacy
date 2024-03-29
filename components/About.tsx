import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link"

import courses from "./Details"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { BsArrowUpRightCircleFill } from "react-icons/bs"

export function About() {
  return (
    

    <div className="mx-auto max-w-7xl grid grid-cols-2 mt-20 mb-40 gap-10">

      <div id="About" className=" px-2 sm:px-6 lg:px-8 text-black">
      <h4 className=" text-zinc-800 text-6xl font-[700] w-fit pb-10">Informacje o<span className={` text-red-500/60`}> ZSK</span></h4>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Wprowadzenie Zintegrowanego Systemu Kwalifikacji</AccordionTrigger>
            <AccordionContent>
              15 stycznia 2016 r. weszła w życie Ustawa z dnia 22 grudnia 2015 r. o Zintegrowanym Systemie Kwalifikacji. Zintegrowany System Kwalifikacji (ZSK) służyć ma wielu osobom i instytucjom: uczniom, pracodawcom, związkom zawodowym, organizacjom branżowym, ale przede wszystkim polskim pracownikom – zarówno tym, którzy pracują w Polsce, jak i wyjeżdżającym do pracy w krajach Unii Europejskiej.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Zmiany na rynku pracy i w gospodarce</AccordionTrigger>
            <AccordionContent>
              Rozwiązania, które wprowadza Zintegrowany System Kwalifikacji, to odpowiedź na zmiany zachodzące na rynku pracy i w gospodarce. Jak wskazują doświadczenia innych krajów europejskich, dzięki wprowadzeniu systemu opartego na ramie kwalifikacji powinna wzrastać liczba osób zainteresowanych uczeniem się i zdobywaniem kolejnych kwalifikacji, co wpłynie nie tylko na ich sytuację zawodową, lecz także na ich poczucie bezpieczeństwa na rynku pracy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Jakość kwalifikacji</AccordionTrigger>
            <AccordionContent>
              W Polsce kwalifikacje nadawane są w systemach oświaty i szkolnictwa wyższego, ale także przez stowarzyszenia i organizacje branżowe, funkcjonujące na podstawie różnych przepisów. Niektóre z kwalifikacji nadawanych poza systemami oświaty i szkolnictwa wyższego odpowiadają wysokim standardom jakości, ale nie wszystkie. Zintegrowany System Kwalifikacji wprowadził mechanizmy zapewniające jakość włączonych do systemu kwalifikacji.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Rola Polskiej Ramy Kwalifikacji</AccordionTrigger>
            <AccordionContent>
              W Zintegrowanym Systemie Kwalifikacji bardzo ważną rolę pełni Polska Rama Kwalifikacji (PRK), która jest odniesiona do ramy europejskiej. Każda kwalifikacja włączona do zintegrowanego systemu ma przypisany odpowiedni poziom PRK. Dzięki temu polskie świadectwa i certyfikaty są bardziej czytelne zagranicą. Ma to duże znaczenie dla Polaków, którzy będą  szukać pracy poza krajem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Współpraca przy tworzeniu systemu</AccordionTrigger>
            <AccordionContent>
              Prace nad stworzeniem Zintegrowanego Systemu Kwalifikacji w Polsce prowadzone były pod kierunkiem Ministra Edukacji w stałej współpracy z partnerami społecznymi. Byli to przedstawiciele pracodawców, związków zawodowych, organizacji branżowych, organizacji pozarządowych, instytucji edukacyjnych i naukowo-badawczych, firm szkoleniowych. Ich opinie miały istotny wpływ na kształt wielu rozwiązań w ZSK.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Znaczenie efektów uczenia się</AccordionTrigger>
            <AccordionContent>
              Zintegrowany system kwalifikacji dotyczy tych, którzy chcą się uczyć i rozwijać przez całe życie, a także pokoleń, które dopiero przygotowują się do wejścia na rynek pracy. W zintegrowanym systemie większego znaczenia nabierają konkretne efekty uczenia się, czyli to, co wiemy, jakie umiejętności i kompetencje posiadamy oraz jak potrafimy je wykorzystać w życiu zawodowym i społecznym.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-5">
  <iframe
    className="rounded-[30px] border border-zinc-800"
    width="100%"
    height="197"
    src="https://www.youtube.com/embed/RhW5C8_VVso"
    title="Nowe możliwości rozwoju zawodowego - era walidacji"
    
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>
        
      </div>
    

    <div>
    <Card className="w-full bg-red-500/60 text-zinc-800 rounded-[40px] card-special-zsk">
          <CardHeader>
            <div>
              <img src="/assets/images/cardImgZsk.svg" width={120} alt="Opis obrazu" />
            </div>
            <CardTitle className="pb-3 pt-10">Czym właściwie jest ZSK?</CardTitle>

            <CardDescription className="text-zinc-800 leading-8">
            ZSK, czyli Zintegrowany System Kwalifikacji, to innowacyjne narzędzie służące uporządkowaniu i ustandaryzowaniu procesu potwierdzania kompetencji w Polsce. Zintegruje on różnorodne kwalifikacje w jednym, łatwo dostępnym rejestrze, zapewniając jednocześnie przejrzyste i jednolite zasady ich weryfikacji. Dzięki ZSK, zarówno pracownicy, jak i pracodawcy zyskują narzędzie, które pozwala na wiarygodne prezentowanie i rozpoznawanie kompetencji, niezależnie od sposobu, w jaki zostały one zdobyte. System ten, wprowadzony w odpowiedzi na dynamiczne zmiany na rynku pracy, ma na celu nie tylko podniesienie poziomu kapitału ludzkiego w Polsce, ale także ułatwienie mobilności zawodowej zarówno na terenie kraju, jak i w Unii Europejskiej.
            </CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter>
            <Link href="#twoj-link">
              <div className="flex items-center justify-between rounded-full border-[1.2px] bg-white border-zinc-800 py-[8px] pr-2 pl-4 text-zinc-800 text-[13px] font-medium hover:bg-zinc-800 hover:text-white">
                <p className="text-center flex-1">Dowiedz się więcej o ZSK</p>
                <BsArrowUpRightCircleFill className="text-xl ml-2"/>
              </div>
            </Link>
          </CardFooter>
        </Card>
    </div>
    </div>
    
  )
}
