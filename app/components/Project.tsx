"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    img: "/collage-renzy.jpg",
    title: "Full stack Question & Answer Platform",
    desc: "Database-driven Q&A platform for PMP certification, built with React, Next.js, and PostgreSQL.",
    href: "https://pmp-questions-susk.vercel.app",
  },
  {
    img: "/collage-akin.jpg",
    title: "Business Page Development",
    desc: "Promotional business page for an electronics and installation business. Functionalities include service listings and pages",
    href: "https://akins-extreme.vercel.app",
  },
  {
    img: "/collage-kemi.jpg",
    title: "Personal Webpage Development for a Professional",
    desc: "Personal portfolio website for a professional showcasing skills, projects, and contact info.",
    href: "https://theoluwakemimakinde.vercel.app/",
  },
  {
    img: "/collage-ami.jpg",
    title: "Educative Interactive Linguistic App",
    desc: "An interactive web app to help users get familiar with Nigerian languages, eg yoruba through engaging lessons and quizzes.",
    href: "https://rx-tech-ami-yoruba.onrender.com/",
  },
  {
    img: "/collage-map.jpg",
    title: "Educative Interactive Geography App",
    desc: "An interactive web app to help users get familiar with world geography, starting with Nigeria, through engaging lessons and quizzes.",
    href: "https://rx-tech-map-nigeria.onrender.com/",
  },
  {
    img: "/collage-renzy.jpg",
    title: "Full stack Website with Authentication",
    desc: "Database-driven Q&A platform for PMP certification, built with React, Next.js, and PostgreSQL.",
    href: "https://pmp-questions-susk.vercel.app",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-2 md:px-8 bg-darkmode dark:bg-white/5" id="portfolio">
      <div className="container mx-auto mb-5 text-center">
        <div className='container mx-auto max-w-6xl px-4'>
            <div
            className='flex gap-2 items-center justify-center'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <span className='w-3 h-3 rounded-full bg-blue-800'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                Some of My Works
            </span>
            </div>
            <h2
            className='sm:text-4xl text-[28px] leading-tight font-bold text-blue-950 md:text-center text-start pt-7 pb-4 md:w-4/6 w-full m-auto dark:text-white'
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-duration='1000'>
            My Recent Projects
            </h2>
            <p
            className='sm:text-xl text-[14px] leading-tight text-midnight_text md:text-center text-start pb-20 md:w-4/6 w-full m-auto dark:text-white'>
            From concept to launch, I deliver impactful projects that drive results. Whether it's a web app, website, or custom software solution, I bring ideas to life with code.
            </p>
        </div>
      </div>
      <div className="container px-5 md:px-15 mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <>
          <Link href={props.href} key={idx}
           className="group">
            <Card className=" shadow-lg rounded-lg overflow-hidden border border-blue-700 dark:border-white hover:shadow-2xl transition-shadow duration-300   bg-darkmode dark:bg-white/5">
            <CardHeader className="mx-0 px-2 mt-0 h-70 shadow-lg  ">
                <Image
                src={props.img}
                alt={props.title}
                width={768}
                height={768}
                className="h-full w-full object-cover border border-black dark:border-white"
                />
            </CardHeader>
            <CardContent className="p-0 px-4 pb-6 space-y-2  ">
                <div className="mb-2 text-lg md:text-xl lg:text-2xl font-bold text-blue-700/80 ">
                    {props.title}
                </div>
                <div 
                className="mb-2 mt-3 w-full font-normal text-midnight_text dark:text-gray-200"
                >
                {props.desc}
                </div>
                <Button size="sm"
                variant="default"
                className="flex items-center gap-2 bg-blue-700/80 dark:bg-gray-200"
                >
                view
                <ArrowRightIcon
                    strokeWidth={3}
                    className="h-3.5 w-3.5 text-midnight_text dark:white"
                />
                </Button>
            </CardContent>
            </Card>
          </Link>
          </>
        ))}
      </div>
    </section>
  );
}

export default Projects;
