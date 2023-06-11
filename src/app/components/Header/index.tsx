'use clien'

import logoB from 'public/logo-black.png'
import Menu from 'public/bars.svg'
import close from 'public/close.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ProgramHead from '@/app/(program)/programHead'
import Link from 'next/link'

export default function Header({ headOn }: any) {
  const myRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  const [menuBar, setMenuBar] = useState(false)
  useEffect(() => {
    if (show === true) {
      myRef.current!.classList.remove('hidden')
    } else {
      myRef.current!.classList.add('hidden')
    }
  })

  return (
    <div>
      <nav className=" justify-center z-10 fixed left-[50vw] flex">
        <div className={`hidden sm:block transition duration-700 delay-75 fixed left-0 right-0 text-black ${headOn ? 'bg-gradient-to-b from-gray-700 to-transparent ' : 'bg-red-900 bg-none'} `}>
          <div className="flex justify-center bg-red-900 bg-opacity-0">
            <Image src={logoB} alt="smjc" width={55} className="" />
          </div>
          <div className={`transition duration-700 font-medium text-white drop-shadow-lg  ${headOn ? '' : 'bg-gray-200'} `}>
            <ul className={`flex justify-center text-black ${headOn ? 'text-white' : ''} `}>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">
                <Link href="#home">Home</Link>
              </li>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white " onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                Program
              </li>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">
                <Link href="/galery">Galery</Link>
              </li>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">
                <Link href="#contact-us">Contact Us</Link>
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
      </nav>
      <div className="sm:hidden block ">
        <div className="flex fixed z-10 left-0 right-0 top-0 justify-between px-4 py-2 bg-red-900 items-center ">
          <Link href="#">
            <Image src={logoB} alt="smjc" width={40} className="" />
          </Link>
          <div onClick={() => setMenuBar(!menuBar)} className="text-white text-2xl border-2 p-1 rounded-md transition cursor-pointer">
            {menuBar ? (
              <Image className={` ${menuBar ? 'rotate-90' : ''} transition duration-300`} src={close} width={25} height={25} alt="menubar"></Image>
            ) : (
              <Image className={` ${menuBar ? 'rotate-90' : ''} transition duration-300`} src={Menu} width={25} height={25} alt="menubar"></Image>
            )}
          </div>
        </div>
        <div className={`fixed bottom-0 top-14 z-30 left-0 right-0 transition duration-500 ${menuBar ? 'block' : 'hidden'} `}>
          <div onClick={() => setMenuBar(!menuBar)} className="fixed bottom-0 bg-opacity-50 bg-slate-900 top-14 z-20 left-0 right-0 backdrop-blur-sm"></div>
          <div className="bg-gray-200 h-[35vh] z-30 absolute right-0 left-0">
            <ul className="p-6 font-semibold flex flex-col">
              <li>
                Program
                <ul className="ml-3 font-normal flex flex-col">
                  <li className="  inline-block ">
                    <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="/kelas-precollege">
                      Kelas Intensif
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="/kelas-persiapan-test">
                      Kelas JLPT/NAT
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="/kelas-partnership">
                      Kelas Partnerhip
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="/kelas-beasiswa">
                      Kelas Beasiswa
                    </Link>
                  </li>
                  <li className="inline-block">
                    <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="/kelas-dasar">
                      Kelas Reguler
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="inline-block">
                <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="/galery">
                  Galery
                </Link>
              </li>
              <li className="inline-block">
                <Link onClick={() => setMenuBar(!menuBar)} className="cursor-pointer hover:opacity-50" href="#contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
