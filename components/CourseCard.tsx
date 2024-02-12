import { cn } from "@/lib/utils"
import Link from 'next/link';
import courses from '@/components/Details';

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>


export default function CourseCard({ course, className, ...props }: { course: typeof courses[0] } & CardProps) {
  return (
    <Card className={cn("w-full bg-zinc-950 border-zinc-800 text-white", className)} {...props}>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription className='text-zinc-400'>{course.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className=" text-zinc-100 pb-10">{course.description}</p>
       
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
          <p className="w-full bg-zinc-950 border-zinc-800 border p-2 rounded-md text-sm hover:bg-zinc-800 text-white">
            Szczegóły kursu
          </p>
        </Link>
      </CardFooter>
    </Card>
  )
}