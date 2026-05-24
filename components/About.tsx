export default function About() {
  return (
    <section
      id='about'
      className='py-28'
    >
      <div className='container-custom'>
        <div className='grid md:grid-cols-2 gap-10'>
          {/* LEFT */}
          <div>
            <p className='text-blue-400 mb-3'>
              About Me
            </p>

            <h2 className='text-5xl font-bold leading-tight'>
              Web Developer &
              <br />
              Software Engineer
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className='text-slate-400 leading-relaxed text-lg'>
              I am an Information Systems graduate
              from Universitas Dian Nuswantoro with
              strong passion in web development using
              Laravel, PHP, MySQL, and responsive
              website architecture.
            </p>

            <p className='text-slate-400 leading-relaxed text-lg mt-6'>
              Experienced in developing admin
              dashboard systems, CRUD management,
              authentication systems, and modern web
              interfaces with focus on performance,
              scalability, and user experience.
            </p>

            {/* INFO CARD */}
            <div className='grid grid-cols-2 gap-5 mt-10'>
              <div className='bg-slate-900 border border-slate-800 p-6 rounded-2xl'>
                <h3 className='text-blue-400 text-3xl font-bold'>
                  3.76
                </h3>

                <p className='text-slate-400 mt-2'>
                  GPA
                </p>
              </div>

              <div className='bg-slate-900 border border-slate-800 p-6 rounded-2xl'>
                <h3 className='text-blue-400 text-3xl font-bold'>
                  5+
                </h3>

                <p className='text-slate-400 mt-2'>
                  Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}