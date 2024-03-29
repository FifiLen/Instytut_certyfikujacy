import courses from '@/components/Details';
import CourseCard from '@/components/CourseCard';

export default function Kursy() {
  return (
    <div className=' h-fit'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20 ">
        <div className='  w-fit'>
        <h4 className=" text-zinc-800 text-6xl font-[700] w-fit pt-6 mb-14">Nasza <span className={` text-yellow-400`}>oferta</span></h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            // Dodanie prop 'index' do każdego komponentu CourseCard
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
