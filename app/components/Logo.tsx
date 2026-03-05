import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Image
        src="/dd_brand1.png"
        alt="Logo"
        width={40}
        height={40}
      />
      {/* <span className="text-primary"> Deminu David</span> */}
    </>
  );
}
