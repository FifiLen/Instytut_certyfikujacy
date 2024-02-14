import courses from '@/components/Details';
import CourseCard from '@/components/CourseCard';

export default function Kursy() {
  return (
    <div className='bg-zinc-950 h-fit md:h-screen'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20 ">
        <div className=' bg-zinc-950 w-fit'>
        <h4 className=" text-white text-4xl font-semibold mb-10 p-2 bg-purple-600/40 w-fit">Kursy</h4>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
