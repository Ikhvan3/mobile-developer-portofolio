import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center'
    >
      <div className='container-custom grid md:grid-cols-2 gap-16 items-center'>
        <div>
          <p className='text-blue-400 mb-4'>
            Hello, I'm
          </p>

          <h1 className='text-6xl font-bold'>
            Slamet Ikhvan
          </h1>

          <h2 className='text-2xl text-slate-300 mt-4'>
            Web Developer
          </h2>

          <p className='text-slate-400 mt-6 leading-relaxed'>
            Information Systems graduate focused on
            Laravel, PHP, MySQL, and responsive
            website development.
          </p>

          <div className='flex gap-4 mt-8'>
            <a
              href='/cv.pdf'
              className='px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition'
            >
              Download CV
            </a>

            <a
              href='https://github.com/Ikhvan3'
              target='_blank'
              className='px-6 py-3 border border-blue-400 rounded-xl'
            >
              GitHub
            </a>
          </div>
        </div>

        <div className='flex justify-center'>
          <Image
            src='/profile.png'
            alt='profile'
            width={350}
            height={350}
            className='rounded-3xl border border-slate-700'
          />
        </div>
      </div>
    </section>
  );
}