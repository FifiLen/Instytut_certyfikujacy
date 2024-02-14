import courses from "@/components/Details";
import { ArrowRightIcon} from '@heroicons/react/20/solid'

import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge";


export default function Kursy({ params }: { params: { id: string } }) {
  const course = courses.find(course => course.id === params.id);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
      </svg>
      </div>


      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-purple-600">{`{ ${course?.id} }`}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{course?.title}</h1>
              <p className="mt-6 text-lg font-medium italic leading-8 text-zinc-800">
                {course?.subtitle}
              </p>
            </div>
          </div>
        </div>
       
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
<img
  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
  src={`/assets/images/${course?.image}`}
  alt=""
/>
</div>
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                {course?.description}
              </p>
              {/* Lista punktów kursu */}
              <ul role="list" className="mt-8 space-y-8 font-medium text-zinc-600">
                {course?.points.map((point, index) => (
                  <li key={index} className="flex gap-x-3">
                    <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Moduły kursu */}
        
              {course?.modules.map((module, index) => (
                <div key={index}>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-3">{module.title}</h2>
                  <ul>
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}


              {/* Wymagania kursu */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 mb-3">Wymagania</h2>
              <ul>
                {course?.requirements.map((requirement, reqIndex) => (
                  <li key={reqIndex}>{requirement}</li>
                ))}
              </ul>
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











