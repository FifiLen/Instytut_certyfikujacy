import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function About() {
  return (
    <div className="bg-zinc-950 pt-20 pb-40">
      <div id="About" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white">
        <h2 className="my-3 text-4xl font-semibold p-2 w-fit bg-purple-600/40">Informacje o ZSK</h2>
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
      </div>
    </div>
  )
}
