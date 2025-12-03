'use client'
import { useEffect } from "react";
// @ts-expect-error - AOS has no TS types
import AOS from "aos"
import 'aos/dist/aos.css';

const Aoscompo = ({children}:any) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])
  return (
    <div>
      {children}
    </div>
  )
}

export default Aoscompo
