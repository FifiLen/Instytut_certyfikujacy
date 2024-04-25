// 'use client'

// import React, { useState } from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import courses from '@/components/Details';
// import { Card } from '@/components/ui/card';
// import { Label } from '@radix-ui/react-label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { cn } from "@/lib/utils"
// import { BsArrowUpRightCircleFill } from 'react-icons/bs';

  

// interface Course {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   duration: string;
//   mode: string;
//   price: string;
//   points: string[];
// }

// function ContactForm() {
//   const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
//   const [state, handleSubmit] = useForm("yourFormspreeID");

//   const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const courseId = e.target.value;
//     const selected = courses.find(course => course.id === courseId);
//     setSelectedCourse(selected || null);
//   };

//   if (state.succeeded) {
//     return <p className='p-3 bg-green-500 border-green-800 border rounded-lg text-white font-semibold text-xl'>Dziękujemy za przesłanie zgłoszenia! W krótce się z Tobą skontaktujemy.</p>;
//   }

//   return (

//     <div className=' max-w-7xl mx-auto my-20'>
//     <h2 className=" text-zinc-800 text-6xl font-[700] w-fit pb-10 pt-10">Zapisz się na wybrany<span className={` text-yellow-400`}> kurs</span></h2>

   
//     <Card className={cn("w-full p-10 bg-zinc-800 rounded-[40px] border-transparent text-white")}>
//     <form className='text-white space-y-4' onSubmit={handleSubmit}>
//       <div>
//         <Label className=' font-semibold text-2xl' htmlFor="course">Wybierz kurs:</Label>

//         <select className=' bg-purple-600 border-2 rounded-lg border-purple-800 font-semibold p-2 ml-6' id="course" name="course" value={selectedCourse?.id || ''} onChange={handleCourseChange} required>
//           <option value="">Kursy</option>
//           {courses.map((course: Course) => (
//             <option key={course.id} value={course.id}>{course.title}</option>
//           ))}
//         </select>
//       </div>
//       {selectedCourse && (
//         <>
//           <Card className={cn("w-full p-4 bg-zinc-900 border-transparent text-white border space-y-2")}>
//             <h2 className=' font-semibold text-xl'>{selectedCourse.title}</h2>
//             <p className=''>{selectedCourse.description}</p>
//             <ul>
//               {selectedCourse.points.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </Card>
//         </>
//       )}
//      <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
//             <div>
//               <Label className='font-semibold text-lg'  htmlFor="firstName">Imie</Label>
//               <Input id="firstName" type="text" name="firstName" required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
//               <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="lastName">Nazwisko</Label>
//               <Input id="lastName" type="text" name="lastName" required minLength={2} pattern="[A-Za-z]+" className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
//               <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="phone">Numer telefonu</Label>
//               <Input id="phone" type="tel" name="phone" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
//               <ValidationError prefix="Phone" field="phone" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="email">Email</Label>
//               <Input id="email" type="email" name="email" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")}/>
//               <ValidationError prefix="Email" field="email" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="birthDate">Data urodzenia</Label>
//               <Input id="birthDate" type="date" name="birthDate" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
//               <ValidationError prefix="Birth Date" field="birthDate" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="birthPlace">Miejsce urodzenia</Label>
//               <Input id="birthPlace" type="text" name="birthPlace" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
//               <ValidationError prefix="Birth Place" field="birthPlace" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="street">Ulica</Label>
//               <Input id="street" type="text" name="street" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
//               <ValidationError prefix="Street" field="street" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="houseNumber">Numer domu</Label>
//               <Input id="houseNumber" type="text" name="houseNumber" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
//               <ValidationError prefix="House Number" field="houseNumber" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="city">Miasto</Label>
//               <Input id="city" type="text" name="city" required className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2")} />
//               <ValidationError prefix="City" field="city" errors={state.errors} />
//             </div>
//             <div>
//               <Label className='font-semibold text-lg' htmlFor="postalCode">Kod pocztowy</Label>
//               <Input id="postalCode" type="text" name="postalCode" required pattern="[0-9]{2}-[0-9]{3}" className={cn("w-full p-4 bg-yellow-300 border-zinc-800 text-zinc-800 font-semibold space-y-2 mb-6")} />
//               <ValidationError prefix="Postal Code" field="postalCode" errors={state.errors} />
//             </div>
//           </div>
      
//           <Button type="submit" disabled={state.submitting} className={cn("flex items-center justify-between rounded-full border-[1.6px] border-purple-500 bg-purple-500 py-[8px] pr-2 pl-4  text-base font-semibold")}>
        
//         Wyślij zgłoszenie
//         <BsArrowUpRightCircleFill className='text-xl ml-2'/>

//         </Button>    </form>
//     </Card>
//     </div>
    
//   );
// }

// export default ContactForm;
'use client'
import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import courses from '@/components/Details';
import { Card } from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import Rodo from '@/components/RodoClause';

interface Course {
  id: string;
  title: string;
  description: string;
  points: string[];
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate: string;
  birthPlace: string;
  street: string;
  houseNumber: string;
  city: string;
  postalCode: string;
}

function ContactForm() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthDate: "",
    birthPlace: "",
    street: "",
    houseNumber: "",
    city: "",
    postalCode: ""
  });
  const [rodoAccepted, setRodoAccepted] = useState(false);
  const [state, handleSubmit] = useForm("yourFormspreeID");

  if (state.succeeded) {
    return <p className='p-3 bg-green-500 border-green-800 border rounded-lg text-white font-semibold text-xl'>Dziękujemy za przesłanie zgłoszenia! Wkrótce się z Tobą skontaktujemy.</p>;
  }

  const handleRodoAcceptance = (accepted: boolean) => {
    setRodoAccepted(accepted);
  };

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const courseId = e.target.value;
    const selected = courses.find(course => course.id === courseId);
    setSelectedCourse(selected || null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Rodo onAccept={handleRodoAcceptance} />
        );
      case 1:
        return (
          <>
            <Label htmlFor="course" className="block font-semibold text-2xl mb-2 text-white">Wybierz kurs:</Label>
            <select className="bg-gray-200 text-black border-2 rounded-lg p-2 w-full" id="course" name="course" value={selectedCourse?.id || ''} onChange={handleCourseChange} required>
              <option value="">-- Wybierz kurs --</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
            {selectedCourse && (
              <Card className="p-4 bg-zinc-900 text-white mt-4">
                <h3 className="font-bold">{selectedCourse.title}</h3>
                <p>{selectedCourse.description}</p>
                <ul>
                  {selectedCourse.points.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
              </Card>
            )}
          </>
        );
      case 2:
        return (
          <>
            <Label htmlFor="firstName" className="block font-semibold text-xl mb-2 text-white">Imię:</Label>
            <Input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swoje imię..." />
            <Label htmlFor="lastName" className="block font-semibold text-xl mb-2 text-white">Nazwisko:</Label>
            <Input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swoje nazwisko..." />
            <Label htmlFor="phone" className="block font-semibold text-xl mb-2 text-white">Numer telefonu:</Label>
            <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swój numer telefonu..." />
          </>
        );
      case 3:
        return (
          <>
            <Label htmlFor="email" className="block font-semibold text-xl mb-2 text-white">Email:</Label>
            <Input id="email" type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swój email..." />
            <Label htmlFor="birthDate" className="block font-semibold text-xl mb-2 text-white">Data urodzenia:</Label>
            <Input id="birthDate" type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" />
            <Label htmlFor="birthPlace" className="block font-semibold text-xl mb-2 text-white">Miejsce urodzenia:</Label>
            <Input id="birthPlace" type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swoje miejsce urodzenia..." />
            <Label htmlFor="birthPlace" className="block font-semibold text-xl mb-2 text-white">Województwo:</Label>
            <Input id="birthPlace" type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz województwo w którym się urodziłeś/aś..." />
            <Label htmlFor="birthPlace" className="block font-semibold text-xl mb-2 text-white">Kraj:</Label>
            <Input id="birthPlace" type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz kraj w którym się urodziłeś/aś..." />
            <Label htmlFor="birthPlace" className="block font-semibold text-xl mb-2 text-white">Obywatelstwo:</Label>
            <Input id="birthPlace" type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swoje obywatelstwo..." />
            <Label htmlFor="birthPlace" className="block font-semibold text-xl mb-2 text-white">PESEL:</Label>
            <Input id="birthPlace" type="text" name="birthPlace" value={formData.birthPlace} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swój PESEL..." />
            <Label htmlFor="street" className="block font-semibold text-xl mb-2 text-white">Ulica:</Label>
            <Input id="street" type="text" name="street" value={formData.street} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swoją ulicę..." />
            <Label htmlFor="houseNumber" className="block font-semibold text-xl mb-2 text-white">Numer domu:</Label>
            <Input id="houseNumber" type="text" name="houseNumber" value={formData.houseNumber} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz numer domu..." />
            <Label htmlFor="city" className="block font-semibold text-xl mb-2 text-white">Miasto:</Label>
            <Input id="city" type="text" name="city" value={formData.city} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz swoje miasto..." />
            <Label htmlFor="postalCode" className="block font-semibold text-xl mb-2 text-white">Kod pocztowy:</Label>
            <Input id="postalCode" type="text" name="postalCode" pattern="[0-9]{2}-[0-9]{3}" value={formData.postalCode} onChange={handleInputChange} required className="w-full p-2 bg-gray-200 text-black" placeholder="Wpisz kod pocztowy..." />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='max-w-7xl mx-auto my-20'>
      <h2 className="text-zinc-900 text-6xl font-bold pb-10 pt-10">Zapisz się na wybrany <span className="text-purple-500">kurs</span></h2>
      <Card className="w-full p-10 bg-zinc-900 rounded-lg text-white">
        <form className=' space-y-5' onSubmit={handleSubmit}>
          {renderFormStep()}
          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <Button onClick={prevStep} className="bg-gray-300 text-black rounded-lg p-2">Wstecz</Button>
            )}
            {currentStep < 3 && rodoAccepted && (
              <Button onClick={nextStep} disabled={!rodoAccepted || currentStep >= 3} className="bg-purple-500 text-white rounded-lg p-2">
                Dalej
              </Button>
            )}
            {currentStep === 3 && (
              <Button type="submit" disabled={state.submitting} className="bg-purple-500 text-white rounded-lg p-2">
                Wyślij zgłoszenie
                <BsArrowUpRightCircleFill className='ml-2 text-xl'/>
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}

export default ContactForm;
