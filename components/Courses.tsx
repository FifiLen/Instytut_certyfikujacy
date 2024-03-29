import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { cn } from "@/lib/utils"
import Link from 'next/link';
import courses from '@/components/Details';


import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type CardProps = React.ComponentProps<typeof Card>


export function CourseCard({ course, className, ...props }: { course: typeof courses[0] } & CardProps) {
  return (
    <Card className={cn("w-full bg-indigo-400 text-zinc-800 rounded-[40px]", className)} {...props}>
      <CardHeader>
        <div>
        <img src={course.cardImage} width={120} alt="" />
        </div>
        <CardTitle className={cn(" pb-3 pt-10")}>{course.title}</CardTitle>
        <CardDescription className='text-zinc-800 leading-8'>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        
       
      </CardContent>
      <CardFooter>
      <Link
  href={`/kursy/${course.id}`}
  className="flex items-center justify-between rounded-full border-[1.2px] bg-white border-zinc-800 py-[8px] pr-2 pl-4 text-zinc-800 text-[13px] font-medium"
>
  <p className={` text-center flex-1`}>Sprawdź szczegóły</p>
  <BsArrowUpRightCircleFill className='text-xl ml-2'/>
</Link>
      </CardFooter>
    </Card>
  )
}



export function Courses() {
  return (
    <div>



    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-32 ">
      <div className=" grid grid-cols-2 justify-between">
        <div className="col-span-1 grid justify-start items-center">
      <h4 className=" text-zinc-800 text-6xl font-[700] w-fit pt-10">Nasze <br /><span className={` text-yellow-400`}>najnowsze kursy</span><br /> certyfikowane</h4>
      </div>

      <div className="col-span-1 grid justify-end">
      <img width={400} src="/assets/images/Group9-2.svg"  alt="" />
      </div>

      </div>
      <div className=" flex justify-center items-center">
    <Carousel className="w-full max-w-7xl">
      
      <CarouselContent className="-ml-1 flex">

      
          {courses.map((course, index) => (
            <CarouselItem key={course.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CourseCard key={course.id} course={course} className={`card-special-${index + 1}`}/>
            </CarouselItem>
          ))}
        
          
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
    </div>
    </div>
  )
}