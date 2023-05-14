'use client'

import Link from 'next/link'
import logoB from 'public/logo-black.png'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import ProgramHead from './programHead'

export default function Layout({ children }: { children: React.ReactNode }) {
  const myRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    if (show === true) {
      myRef.current!.classList.remove('hidden')
    } else {
      myRef.current!.classList.add('hidden')
    }
  })

  return (
    <div>
      <main>
        <div className="">
          <section>
            <div className="flex justify-center ">
              <div className="w-full ">
                <div className=" flex justify-center transition duration-500 bg-red-900 ">
                  <Image src={logoB} alt="smjc" width={55} className="" />
                </div>
                <div className={`font-medium duration-500 drop-shadow-lg transition bg-gray-50 h-10`}>
                  <ul className="flex justify-center ">
                    <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white " onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                      Program
                    </li>
                    <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">
                      <Link href="/#contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div ref={myRef} className="relative hidden" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                  <div className="absolute z-10 right-0 left-0 ml-3">
                    <div className="flex justify-center">
                      <ProgramHead></ProgramHead>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div className="container mx-auto">{children}</div>
    </div>
  )
}
