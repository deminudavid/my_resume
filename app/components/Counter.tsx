import Image from 'next/image'

const count = [
    {
        value: "02+",
        description: "Years of experience in web development",
    },
    {
        value: "20+",
        description: "Happy clients served globally",
    },
    {
        value: "100+",
        description: "Projects completed successfully",
    },
];

const Counter = () => {
  return (
    <section
      className='dark:bg-darklight bg-section bg-midnight_text/10 py-16 mt-20'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-3.5'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <span className='text-5xl font-semibold text-blue-950 dark:text-white'>
                {item.value}
              </span>
              <p className='text-base text-grey text-center max-w-71.25 w-full dark:text-white/50'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter