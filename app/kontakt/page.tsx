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
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
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

    <div className=' max-w-7xl mx-auto my-20'>
    <h2 className=" text-zinc-800 text-6xl font-[700] w-fit pb-10 pt-10">Skontaktuj się<span className={` text-yellow-400`}> z nami</span></h2>
    <Card className={cn("w-full p-10 bg-zinc-800 border-transparent text-white rounded-[40px]")}>
    <div className=" flex-col justify-center items-center">
        <img src="/assets/images/logoFooter.svg" alt="" className=' mb-5'/>
        
        <ul className=' space-y-1 font-medium '>
          <li className=' flex justify-start items-center gap-2'><FaPhoneAlt />+48 797 173 501</li>
          <li className=' flex justify-start items-center gap-2'><FaPhoneAlt />+48 502 162 365</li>
          <li className=' flex justify-start items-center gap-2'><FaEnvelope />4tomorrowrybnik@gmail.com</li>
          <li className=' flex justify-start items-center gap-2'><FaMapMarkerAlt />Magnolii 25, 44-207 Rybnik</li>
        </ul>

        <p className='  text-md font-medium mt-3'>Godziny otwarcia:</p>
        <p className='  mb-4'>Poniedziałek - Czwartek: 8:00 - 16:00</p>
        <hr className=' bg-zinc-800 mb-8'/>
      </div>
    <form className='text-white space-y-4' onSubmit={handleSubmit}>
      

     <div className=' grid grid-cols-2 gap-6'>
            <div>
              <Label className='font-semibold text-lg'  htmlFor="firstName">Imie</Label>
              <Input id="firstName" type="text" name="firstName" placeholder='Podaj swoje imię' required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-yellow-300 border-yellow-400 text-zinc-800 font-semibold space-y-2 rounded-xl")}/>
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="lastName">Nazwisko</Label>
              <Input id="lastName" type="text" name="lastName" placeholder='Podaj swoje nazwisko' required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-yellow-300 border-yellow-400 text-zinc-800 font-semibold space-y-2 rounded-xl")}/>
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="phone">Numer telefonu</Label>
              <Input id="phone" type="tel" name="phone" placeholder='Podaj swój numer telefonu' required className={cn("w-full p-4 bg-yellow-300 border-yellow-400 text-zinc-800 font-semibold space-y-2 rounded-xl")}/>
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
            <div>
              <Label className='font-semibold text-lg' htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder='Podaj swój adres email' required className={cn("w-full p-4 bg-yellow-300 border-yellow-400 text-zinc-800 font-semibold space-y-2 rounded-xl")}/>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className='col-span-2 mb-4'>
                <Label className='font-semibold text-lg' htmlFor="message">Wiadomość</Label>
                <Textarea placeholder='Napisz swoją wiadomość…' id="message" name="message" required  className={cn("w-full p-4 bg-yellow-300 border-yellow-400 text-zinc-800 font-semibold space-y-2 rounded-xl")}/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
           </div>
           
      
      <Button type="submit" disabled={state.submitting} className={cn("flex items-center justify-between rounded-full border-[1.6px] border-purple-500 bg-purple-500 py-[8px] pr-2 pl-4 text-white text-[13px] font-medium")}>
        
        Wyślij wiadomość
        <BsArrowUpRightCircleFill className='text-xl ml-2'/>

        </Button>
    </form>
    </Card>
    </div>
  );
}

export default ContactForm;
