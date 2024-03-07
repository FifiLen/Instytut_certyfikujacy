'use client'

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import courses from '@/components/Details';
import { Card } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils"

  

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
  const [state, handleSubmit] = useForm("mbjnkrbv");

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value;
    const selected = courses.find(course => course.id === courseId);
    setSelectedCourse(selected || null);
  };

  if (state.succeeded) {
    return <p className='p-3 bg-green-500 border-green-800 border rounded-lg text-white font-semibold text-xl'>Dziękujemy za przesłanie zgłoszenia! W krótce się z Tobą skontaktujemy.</p>;
  }

  return (

    <div className=' max-w-6xl mx-auto my-20'>
    <h2 className='my-10 text-4xl font-bold text-white bg-purple-600/40 w-fit p-2'>Zapisz się na wybrany kurs</h2>
    <Card className={cn("w-full p-10 bg-zinc-950 border-zinc-800 text-white")}>
    <form className='text-white space-y-4' onSubmit={handleSubmit}>
      <div>
        <Label className=' font-semibold text-xl' htmlFor="course">Wybierz kurs:</Label>

        <select className=' bg-zinc-900 border rounded-lg border-orange-500 p-2 ml-6' id="course" name="course" value={selectedCourse?.id || ''} onChange={handleCourseChange} required>
          <option value="">Kursy</option>
          {courses.map((course: Course) => (
            <option key={course.id} value={course.id}>{course.title}</option>
          ))}
        </select>
      </div>
      {selectedCourse && (
        <>
          <Card className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")}>
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
     <div className=' grid grid-cols-2 gap-6'>
            <div>
              <Label className='font-semibold text-lg'  htmlFor="firstName">Imie</Label>
              <Input id="firstName" type="text" name="firstName" required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")}/>
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="lastName">Nazwisko</Label>
              <Input id="lastName" type="text" name="lastName" required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")}/>
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="phone">Numer telefonu</Label>
              <Input id="phone" type="tel" name="phone" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")}/>
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")}/>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="birthDate">Data urodzenia</Label>
              <Input id="birthDate" type="date" name="birthDate" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")} />
              <ValidationError prefix="Birth Date" field="birthDate" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="birthPlace">Miejsce urodzenia</Label>
              <Input id="birthPlace" type="text" name="birthPlace" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")} />
              <ValidationError prefix="Birth Place" field="birthPlace" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="street">Ulica</Label>
              <Input id="street" type="text" name="street" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")} />
              <ValidationError prefix="Street" field="street" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="houseNumber">Numer domu</Label>
              <Input id="houseNumber" type="text" name="houseNumber" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")} />
              <ValidationError prefix="House Number" field="houseNumber" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="city">Miasto</Label>
              <Input id="city" type="text" name="city" required className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")} />
              <ValidationError prefix="City" field="city" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="postalCode">Kod pocztowy</Label>
              <Input id="postalCode" type="text" name="postalCode" required pattern="[0-9]{2}-[0-9]{3}" className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")} />
              <ValidationError prefix="Postal Code" field="postalCode" errors={state.errors} />
            </div>
          </div>
      
      <Button type="submit" disabled={state.submitting} className={cn("w-fit p-4 bg-orange-500/40 border-orange-600 border hover:bg-orange-600")}>Wyślij zgłoszenie</Button>
    </form>
    </Card>
    </div>
  );
}

export default ContactForm;
