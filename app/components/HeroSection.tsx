"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative hero-section overflow-hidden pt-15 md:pt-20 pb-12 lg:pb-20 xl:pt-32"
    >
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10">

        {/* LEFT SIDE */}
        <div
          className="md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {/* label */}
          <div className="flex gap-2 items-center">
            <span className="w-3 h-3 rounded-full bg-sidebar-primary"></span>
            <span className="font-medium text-midnight_text text-sm dark:text-white/50">
              build everything
            </span>
          </div>

          {/* headline */}
          <h1 className="text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]">
            Deminu, Tech Doctor 🩺
          </h1>

          {/* subtext */}
          <p className="text-grey dark:text-white/70 text-xl font-semibold">
            Where Medicine Meets Software
          </p>

          <p className="text-base dark:text-white/80">
            Doctor + Full-Stack Developer creating real-world solutions for
            patients, clinicians, and care systems.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 p-4 justify-center">

            {/* Accessible anchor button */}
            <a
              href="#learn-more"
              className="py-3 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Get Started
            </a>

            {/* Accessible button */}
            <Button
              onClick={() => window.print()}
              className="py-6 focus-visible:ring-2 focus-visible:ring-ring"
            >
              Download Resume PDF
            </Button>
          </div>

          {/* Intro text */}
          <div className="flex items-center mt-12 gap-4">
            <div>
              <p className="font-normal text-grey dark:text-white/70 mb-2">
                I am{" "}
                <span className="text-midnight_text font-bold dark:text-white text-xl md:text-2xl opacity-50">
                  David Ogbondeminu
                </span>
                , a medical doctor who builds full-stack solutions in Python,
                JavaScript, and TypeScript to solve real-world healthcare
                problems.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:col-span-6 col-span-12 relative before:absolute before:content-[''] border-4 border-solid border-black dark:border-white">
          <Image
            src="/profile_1.jpg"
            alt="Portrait of David Ogbondeminu"
            width={350}
            height={150}
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
