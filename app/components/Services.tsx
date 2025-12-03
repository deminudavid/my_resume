import React from 'react'
import Link from 'next/link'
import {
  Code2,
  Gauge,
  Server,
  Database,
  Workflow,
  LayoutPanelLeft,
} from "lucide-react";

export const Servicebox = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    description:
      "Creating beautiful and functional web experiences using React, Next.js, Node.js, Python, and Django.",
  },
  {
    title: "Web Optimization",
    icon: Gauge,
    description:
      "Enhancing performance with code splitting, lazy loading, image optimization, and best practices for fast UX.",
  },
  {
    title: "Backend Development",
    icon: Server,
    description:
      "Building robust backend systems using Node.js, Express, Python, and Django to power modern applications.",
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description:
      "Managing data effectively with MySQL, PostgreSQL, MongoDB, and cloud storage systems.",
  },
  {
    title: "Data Automation",
    icon: Workflow,
    description:
      "Automating workflows and data pipelines to improve operational efficiency and reduce manual overhead.",
  },
  {
    title: "Web Application Development",
    icon: LayoutPanelLeft,
    description:
      "Crafting responsive and intuitive web applications using React, Next.js, and TypeScript.",
  },
];



const Services = () => {
  return (
    <section className='bg-section dark:bg-darklight py-10 md:py-20' id='services' >
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-blue-800'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            What I Do
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-blue-950 md:text-center text-start pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Whatever the industry, soar with the power of technology
        </h2>
        <p
          className='sm:text-xl text-[14px] leading-tight text-midnight_text md:text-center text-start pb-20 md:w-4/6 w-full m-auto dark:text-white'>
          I can get your business to the next level with innovative tech solutions.
        </p>
        <div className='grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7'>
          {Servicebox.map((item, index) => (
            <div
              key={index}
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'
              data-aos-offset='300'
              className='col-span-4 border border-black dark:border-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-darkmode'>
              <item.icon className="w-10 h-10 text-blue-700 dark:text-white" />
              <h3 className='max-w-44 mx-auto text-2xl font-bold text-blue-700/90'>
                {item.title}
              </h3>
              <p className='dark:text-white/50 text-base font-normal'>
                {item.description}
              </p>
              <Link
                href='#'
                className='hover:text-blue-700 text-lg font-medium text-primary group flex items-center'>
                Get Started
                <span>
                  {/* <Icon
                    icon='ei:chevron-right'
                    width='30'
                    height='30'
                    className=''
                  /> */}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
