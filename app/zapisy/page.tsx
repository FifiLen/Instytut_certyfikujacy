'use client'

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import courses from '@/components/Details';
import { Card } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils"
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

  

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  mode: string;
  price: string;
  points: string[];
}

function ContactForm() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [state, handleSubmit] = useForm("yourFormspreeID");

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value;
    const selected = courses.find(course => course.id === courseId);
    setSelectedCourse(selected || null);
  };

  if (state.succeeded) {
    return <p className='p-3 bg-green-500 border-green-800 border rounded-lg text-white font-semibold text-xl'>Dziękujemy za przesłanie zgłoszenia! W krótce się z Tobą skontaktujemy.</p>;
  }

  return (

    <div className=' max-w-7xl mx-auto my-20'>
    <h2 className=" text-zinc-800 text-6xl font-[700] w-fit pb-10 pt-10">Zapisz się na wybrany<span className={` text-yellow-400`}> kurs</span></h2>
    <Card className={cn("w-full p-10 bg-zinc-800 rounded-[40px] border-transparent text-white")}>
    <form className='text-white space-y-4' onSubmit={handleSubmit}>
      <div>
        <Label className=' font-semibold text-2xl' htmlFor="course">Wybierz kurs:</Label>

        <select className=' bg-purple-600 border-2 rounded-lg border-purple-800 font-semibold p-2 ml-6' id="course" name="course" value={selectedCourse?.id || ''} onChange={handleCourseChange} required>
          <option value="">Kursy</option>
          {courses.map((course: Course) => (
            <option key={course.id} value={course.id}>{course.title}</option>
          ))}
        </select>
      </div>
      {selectedCourse && (
        <>
          <Card className={cn("w-full p-4 bg-yellow-300 border-transparent text-zinc-800 space-y-2")}>
            <h2 className=' font-semibold text-xl'>{selectedCourse.title}</h2>
            <p className=''>{selectedCourse.description}</p>
            <ul>
              {selectedCourse.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </Card>
        </>
      )}
     <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <Label className='font-semibold text-lg'  htmlFor="firstName">Imie</Label>
              <Input id="firstName" type="text" name="firstName" required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="lastName">Nazwisko</Label>
              <Input id="lastName" type="text" name="lastName" required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="phone">Numer telefonu</Label>
              <Input id="phone" type="tel" name="phone" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="birthDate">Data urodzenia</Label>
              <Input id="birthDate" type="date" name="birthDate" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
              <ValidationError prefix="Birth Date" field="birthDate" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="birthPlace">Miejsce urodzenia</Label>
              <Input id="birthPlace" type="text" name="birthPlace" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
              <ValidationError prefix="Birth Place" field="birthPlace" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="street">Ulica</Label>
              <Input id="street" type="text" name="street" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
              <ValidationError prefix="Street" field="street" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="houseNumber">Numer domu</Label>
              <Input id="houseNumber" type="text" name="houseNumber" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
              <ValidationError prefix="House Number" field="houseNumber" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="city">Miasto</Label>
              <Input id="city" type="text" name="city" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
              <ValidationError prefix="City" field="city" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="postalCode">Kod pocztowy</Label>
              <Input id="postalCode" type="text" name="postalCode" required pattern="[0-9]{2}-[0-9]{3}" className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2 mb-6")} />
              <ValidationError prefix="Postal Code" field="postalCode" errors={state.errors} />
            </div>
          </div>
      
          <Button type="submit" disabled={state.submitting} className={cn("flex items-center justify-between rounded-full border-[1.6px] border-purple-500 bg-purple-500 py-[8px] pr-2 pl-4  text-base font-semibold")}>
        
        Wyślij zgłoszenie
        <BsArrowUpRightCircleFill className='text-xl ml-2'/>

        </Button>    </form>
    </Card>
    </div>
  );
}

export default ContactForm;
