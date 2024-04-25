import React from 'react'
import courses from './Details'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

const CourseNav = () => {
  return (
    <><h2 className=' text-5xl font-semibold tracking-tight bg-zinc-900 text-center pt-20 pb-6'>Sprawdź pozostałe kursy</h2>
    <div className="w-full flex justify-center items-center py-4 bg-zinc-900 text-white">
          <NavigationMenu>
              {courses.map((course, id) => (
                  <NavigationMenuList key={id}>
                      <NavigationMenuItem>
                          <NavigationMenuLink
                              href={`/kursy/${course.id}`}
                              className="px-4 py-2 mx-1 border-white border hover:text-pink-500 hover:bg-white rounded-lg transition-all duration-200"
                          >
                              {course.title}
                          </NavigationMenuLink>
                      </NavigationMenuItem>
                  </NavigationMenuList>
              ))}
          </NavigationMenu>
      </div></>
  )
}

export default CourseNav