'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export const progress = [
    { title: 'Frontend Web Technologies', Progress: 95 },
    { title: 'Python (data analysis, automation),', Progress: 90 },
    { title: 'Backend Technologies, Javascript/Typescript', Progress: 95 }
];

interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = () => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])
  useEffect(() => {
    // Fetch progress data or use static data (Progress array)
    setProgressValues(progress)
  }, [])

  return (
    <section
      className='scroll-mt-25 dark:bg-darklight bg-section  bg-middlelight py-20'
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-7'>
          <div className='md:col-span-6'>
            <Image
              src='/portfolio1.jpg'
              alt='phone image'
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='md:block hidden'
            />
          </div>
          <div
            className='md:col-span-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-blue-800'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                begin building
              </span>
            </div>
            <h2 className='pt-9 pb-8 text-blue-950/90 font-bold dark:text-white text-4xl'>
              Put your ideas into motion with a stunning website
            </h2>
            <h4 className='text-gray dark:text-white/70 text-base font-semibold my-4'>Medical Doctor • Full-Stack Developer</h4>
            <p className=''>
              Get a website that not only looks great but also performs
              flawlessly across all devices. My expertise in responsive design
              ensures your site will captivate visitors whether they're on a
              desktop, tablet, or smartphone. I also build practical, safe, data-driven digital health tools.
            </p>

            <div className='block mx-auto pt-12'>
              {progressValues.map((item, index) => (
                <div
                  key={index}
                  className='progress_bar_item flex flex-wrap mb-8'>
                  <div className='flex-1 w-auto text-sm font-normal text-grey mb-2 dark:text-white/50'>
                    {item.title}
                  </div>
                  <div className='item_value shrink text-sm font-normal text-grey mb-2 dark:text-white/50'>
                    {item.Progress}%
                  </div>
                  <div className='relative h-1 w-full bg-primary/30 rounded-md'>
                    <div
                      className='progress absolute left-0 top-0 bottom-0 h-full bg-blue-800 rounded-md duration-100 ease-in-out'
                      style={{ width: `${item.Progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
