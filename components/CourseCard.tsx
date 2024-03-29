import { cn } from "@/lib/utils"
import Link from 'next/link';
import courses from '@/components/Details';

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type CardProps = React.ComponentProps<typeof Card>

export default function CourseCard({ course, index, className, ...props }: { course: typeof courses[0], index: number } & CardProps) {
  return (
    <Card className={cn(`w-full bg-indigo-400 text-zinc-800 rounded-[40px] card-special-${index + 1}`, className)} {...props}>
      <CardHeader>
        <div>
          <img src={course.cardImage} width={120} alt="" />
        </div>
        <CardTitle className="pb-3 pt-10">{course.title}</CardTitle>
        <p className="text-zinc-800 pb-4">{course.subtitle}</p>

        <CardDescription className="text-zinc-800 leading-8">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="pb-6">
          {course.points.map((point, index) => (
            <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-zinc-800" />
              <div className="space-y-1">
                <p className="text-sm text-zinc-800 leading-none">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/kursy/${course.id}`}>
          <div className="flex items-center justify-between rounded-full border-[1.2px] bg-white border-zinc-800 py-[8px] pr-2 pl-4 text-zinc-800 text-[13px] font-medium hover:bg-zinc-800 hover:text-white">
            <p className="text-center flex-1">Sprawdź szczegóły</p>
            <BsArrowUpRightCircleFill className="text-xl ml-2"/>
          </div>
        </Link>
      </CardFooter>
    </Card>
  )
}
