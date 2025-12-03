"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BriefcaseMedical, Laptop, Activity, ArrowRightIcon } from "lucide-react";

const RESUME_ITEMS = [
  {
    icon: BriefcaseMedical,
    children: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
  },
  {
    icon: Activity,
    children: "Intern, Renzy Acedemy. 2023",
  },
  {
    icon: Laptop,
    children: "Tech Instructor, Renzy Academy. 2024 - Present",
  },
];

export function Resume() {
  return (
    <section className="px-8 md:px-20 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="col-span-1 space-y-6">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700/80 dark:text-white">
            My Resume
          </div>
          <div className="container p-5 justify-center border backdrop-blur-2xl border-black dark:border-white rounded-md shadow-md">
            <div className="mb-4 mt-3 w-full font-normal text-midnight_text dark:text-gray-200">
            I’m a medical doctor and full-stack engineer working at the intersection of clinical practice and modern software. After years at the bedside, I saw how slow systems, fractured workflows, and inaccessible data limit patient care.
            That led me into engineering — building tools with Python, JavaScript, and TypeScript that simplify processes, support decision-making, and move healthcare toward clarity.
          </div>
          </div>
          <Button
            variant="default"
            color="blue"
            className="flex items-center gap-2 bg-blue-700/80 dark:bg-gray-200"
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-midnight_text dark:text-gray-200"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <>
            <div className="flex items-start gap-4" key={idx}>
                <div
                    className="h-12 w-12 shrink-0 items-center justify-center rounded-lg"
                >
                    <props.icon className="w-10 h-10 text-blue-700 dark:text-white" />
                </div>
                <div className="w-full font-normal text-midnight_text dark:text-gray-200">
                    {props.children}
                </div>
            </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
