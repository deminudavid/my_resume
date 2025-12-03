import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";


const WorkTogether = () => {
  return (
    <section id="contact" className="py-20 w-full mx-auto px-2  dark:bg-white/60 shadow-lg md:px-8 lg:px-20">
      <div className="text-center">
        <p className="text-blue-800/80 dark:text-black font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Want to put together something great or give your business more visibility?
        </p>
        <p className="text-blue/60 text-xs sm:text-lg font-normal text-center pb-8">
          Let's collaborate to create impactful solutions that drive success. I'm excited to hear about your project and explore how we can work together to achieve your goals.
        </p>
        <Link
          href="#"
          className="container flex flex-row justify-center items-center px-6 py-3  text-blue-800 dark:text-gray-950 font-semibold rounded-md shadow-md hover:bg-white hover:dark:bg-gray-900 transition-colors duration-300"
          
        >
          Let's work Together
          <ArrowRightIcon
            strokeWidth={3}
            className="h-2 w-4 md:h-6 md:w-6 text-black dark:text-white ml-3"
          />
        </Link>
      </div>
    </section>
  );
};

export default WorkTogether;
