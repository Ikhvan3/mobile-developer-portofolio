import { certificates } from '@/data/certificates';

export default function Certificates() {
  return (
    <section
      id='certificates'
      className='py-28'
    >
      <div className='container-custom'>
        <div className='mb-14'>
          <p className='text-blue-400 mb-3'>
            Certificates
          </p>

          <h2 className='text-5xl font-bold'>
            Licenses &
            Certifications
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-6'>
          {certificates.map(
            (certificate, index) => (
              <div
                key={index}
                className='bg-slate-900 border border-slate-800 p-6 rounded-3xl'
              >
                <p className='text-lg'>
                  {certificate}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}