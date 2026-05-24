import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section
      id='skills'
      className='py-28'
    >
      <div className='container-custom'>
        <div className='mb-14'>
          <p className='text-blue-400 mb-3'>
            Skills
          </p>

          <h2 className='text-5xl font-bold'>
            Technical Skills
          </h2>
        </div>

        <div className='flex flex-wrap gap-4'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='bg-slate-900 border border-slate-800 px-6 py-4 rounded-2xl hover:border-blue-500 transition'
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}