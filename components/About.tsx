import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function About() {
  return (
    <div className=" bg-zinc-950 pt-20 pb-40">
    <div id="About" className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  text-white">
    <h2 className=" my-3 text-4xl font-semibold p-2 w-fit bg-purple-600/40">O serwisie</h2>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Wprowadzenie systemu opartego na ramie kwalifikacji</AccordionTrigger>
        <AccordionContent>
        Ma to na celu zwiększenie liczby osób zainteresowanych formalnym uznawaniem kompetencji i podnoszeniem kwalifikacji, co przyczyni się do poprawy sytuacji zawodowej ludzi oraz ich poczucia bezpieczeństwa na rynku pracy.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Ułatwienie porównywania kwalifikacji</AccordionTrigger>
        <AccordionContent>
        ZSK umożliwia lepsze porównywanie dyplomów i kwalifikacji wydawanych w różnych krajach, co jest szczególnie ważne dla osób szukających pracy za granicą oraz dla pracodawców zatrudniających obcokrajowców.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Wysokie standardy kwalifikacji</AccordionTrigger>
        <AccordionContent>
        System zwraca uwagę na kwalifikacje nadawane zarówno w ramach oświaty i szkolnictwa wyższego, jak i przez stowarzyszenia oraz organizacje branżowe, podkreślając potrzebę spełniania wysokich standardów jakości.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Współpraca z partnerami społecznymi</AccordionTrigger>
        <AccordionContent>
        Prace nad ZSK były prowadzone w ścisłej współpracy z przedstawicielami pracodawców, związków zawodowych, organizacji branżowych, organizacji pozarządowych, instytucji edukacyjnych i naukowo-badawczych oraz firm szkoleniowych, co miało istotny wpływ na kształt systemu.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Znaczenie efektów uczenia się</AccordionTrigger>
        <AccordionContent>
        W ZSK kluczowe stają się konkretne efekty uczenia się - wiedza, umiejętności i kompetencje, które posiadamy oraz sposób, w jaki potrafimy je wykorzystać w życiu zawodowym i społecznym.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
    </div>
  )
}
