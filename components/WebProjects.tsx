'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { webProjects } from '@/data/webProjects';

export default function WebProjects() {
  return (
    <section
      id='projects'
      className='py-28'
    >
      <div className='container-custom'>
        <div className='mb-14'>
          <p className='text-blue-400 mb-3'>
            Portfolio
          </p>

          <h2 className='text-5xl font-bold'>
            Web Developer Projects
          </h2>
        </div>

        <div className='space-y-16'>
          {webProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className='bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/30 transition'
            >
              {/* IMAGES */}
              <div className='grid md:grid-cols-3 gap-4 p-5 bg-slate-950'>
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className='rounded-2xl overflow-hidden border border-slate-800'
                  >
                    <Image
                      src={img}
                      alt={project.title}
                      width={700}
                      height={400}
                      className='w-full h-[220px] object-cover hover:scale-105 transition duration-300'
                    />
                  </div>
                ))}
              </div>

              {/* CONTENT */}
              <div className='p-8'>
                <span className='inline-block text-xs bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full'>
                  {project.badge}
                </span>

                <h3 className='text-3xl font-bold mt-5'>
                  {project.title}
                </h3>

                <p className='text-slate-400 mt-5 leading-relaxed text-lg'>
                  {project.description}
                </p>

                {/* TECH */}
                <div className='flex flex-wrap gap-3 mt-6'>
                  {project.tech.map(
                    (tech, i) => (
                      <span
                        key={i}
                        className='bg-slate-800 border border-slate-700 px-4 py-2 rounded-full text-sm'
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* BUTTON */}
                <div className='mt-8'>
                  <a
                    href={project.github}
                    target='_blank'
                    className='px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl inline-block'
                  >
                    View GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}