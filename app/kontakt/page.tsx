'use client'

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import courses from '@/components/Details';
import { Card } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils"

import { Textarea } from '@/components/ui/textarea';
  

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
    return <p className='p-3 bg-green-500 border-green-800 border rounded-lg text-white font-semibold text-xl'>Dziękujemy za twoją wiadomość! W krótce się z Tobą skontaktujemy.</p>;
  }

  return (

    <div className=' max-w-6xl mx-auto my-20'>
    <h2 className='my-10 text-4xl font-bold text-white bg-purple-600/40 w-fit p-2'>Skontaktuj się z nami</h2>
    <Card className={cn("w-full p-10 bg-zinc-950 border-zinc-800 text-white")}>
    <form className='text-white space-y-4' onSubmit={handleSubmit}>
      

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
            <div className='col-span-2'>
                <Label className='font-semibold text-lg' htmlFor="message">Wiadomość</Label>
                <Textarea placeholder='Napisz swoją wiadomość' id="message" name="message" required  className={cn("w-full p-4 bg-zinc-950 border-zinc-800 text-white space-y-2")}/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
           </div>
           
      
      <Button type="submit" disabled={state.submitting} className={cn("w-fit p-4 bg-orange-500/40 border-orange-600 border hover:bg-orange-600")}>Wyślij wiadomość</Button>
    </form>
    </Card>
    </div>
  );
}

export default ContactForm;
