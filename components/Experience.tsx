import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section
      id='experience'
      className='py-28'
    >
      <div className='container-custom'>
        <div className='mb-14'>
          <p className='text-blue-400 mb-3'>
            Experience
          </p>

          <h2 className='text-5xl font-bold'>
            Internship &
            <br />
            Professional Experience
          </h2>
        </div>

        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='bg-slate-900 border border-slate-800 rounded-3xl p-8'
            >
              <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div>
                  <h3 className='text-2xl font-bold'>
                    {exp.role}
                  </h3>

                  <p className='text-blue-400 mt-2'>
                    {exp.company}
                  </p>
                </div>

                <div>
                  <p className='text-slate-500'>
                    {exp.period}
                  </p>
                </div>
              </div>

              <p className='text-slate-400 leading-relaxed mt-6'>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}