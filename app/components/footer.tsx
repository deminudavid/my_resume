import Link from "next/link";
import Logo from "./Logo";


/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "#home" },
  { id: 2, name: "About", url: "#about" },
  { id: 3, name: "Services", url: "#services" },
  { id: 4, name: "Portfolio", url: "#portfolio" },
  { id: 7, name: "Contact", url: "#contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="  bg-blue-900 dark:bg-white/10 px-2 py-10 md:p-10 ">
      <div className="flex p-2 md:p-20 justify-between mx-0 items-center h-full border-b border-white/20 pb-10">
        <Link href="#" className="flex items-center border-0">
          <Logo />
          <p className="text-3xl sm:text-[32px] my-auto ms-3 font-semibold">
            Deminu David
          </p>
        </Link>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={item.url}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Rx-Tech.
        </p>
      </div>
      
    </div>
  );
};

export default Footer;
