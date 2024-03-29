import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Textarea } from './ui/textarea';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

function FooterForm() {
  const [state, handleSubmit] = useForm("mbjnkrbv");

  if (state.succeeded) {
    return <p className='p-3 bg-green-500 border-green-800 border rounded-lg text-white font-semibold text-xl'>Dziękujemy za twoją wiadomość! W krótce się z Tobą skontaktujemy.</p>;
  }

  return (
    <div className=' max-w-6xl mx-auto'>

       <h4 className=' text-sm font-bold text-yellow-400'>KONTAKT</h4> 
      <h2 className=' text-5xl font-[450] leading-[4rem] text-white mb-6'>Zapytaj o Kurs</h2>
      <Card className={cn("w-full bg-transparent border-zinc-800 text-white")}>
        {/* ... pozostała część kontaktu, taka jak informacje o adresie, telefon, itp. */}
        
        <form className='text-white space-y-4' onSubmit={handleSubmit}>
          <div className=' grid grid-cols-1 gap-6'>
          <div>
              
              <Input 
                id="email" 
                type="email" 
                name="email" 
                placeholder='Podaj swój email…' 
                required 
                className="w-full p-4 bg-yellow-300 border-black  rounded-xl text-zinc-800"
              />
              <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors} 
              />
            </div>
          <div className='col-span-2'>
               
                <Textarea placeholder='Napisz swoją wiadomość' id="message" name="message" required  className={cn("w-full p-4 bg-yellow-300 border-black rounded-xl text-zinc-800 space-y-2")}/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
           
          </div>
          
          <Button 
            type="submit" 
            disabled={state.submitting} 
            className="flex items-center justify-between rounded-full border-[1.6px] border-purple-500 bg-purple-500 py-[8px] pr-2 pl-4 text-white text-[13px] font-medium"
          >
            Wyślij wiadomość
            <BsArrowUpRightCircleFill className='text-xl ml-2'/>
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default FooterForm;
