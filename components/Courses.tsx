import * as React from "react"
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

type CardProps = React.ComponentProps<typeof Card>


export function CourseCard({ course, className, ...props }: { course: typeof courses[0] } & CardProps) {
  return (
    <Card className={cn("w-full bg-zinc-950 border-zinc-800 text-white hover:border-zinc-600 transition-all duration-500", className)} {...props}>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription className='text-zinc-400'>{course.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        
       
        <div className=" pb-6">
          {course.points.map((point, index) => (
            <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" />
              <div className="space-y-1">
                <p className="text-sm text-zinc-300 leading-none">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/kursy/${course.id}`}>
          <p className="w-full bg-zinc-950 border-zinc-800 border p-3 rounded-md font-semibold text-xs hover:bg-zinc-800 text-white">
            Szczegóły kursu
          </p>
        </Link>
      </CardFooter>
    </Card>
  )
}



export function Courses() {
  return (
    <div className="bg-zinc-950">



    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-32 pt-20">
      <h4 className=" text-white text-4xl font-semibold mb-10 p-2 bg-purple-600/40 w-fit">Kursy</h4>
      <div className=" flex justify-center items-center">
    <Carousel className="w-full max-w-7xl">
      
      <CarouselContent className="-ml-1">

      
          {courses.map((course) => (
            <CarouselItem key={course.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <CourseCard key={course.id} course={course} />
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
