'use client'

import Image from 'next/image'
import smjcLogo from 'public/smjc.png'
import hero from 'public/hero.jpg'
import Link from 'next/link'
import { Fade, Zoom } from 'react-awesome-reveal'
import logoB from 'public/logo-black.png'
import { useInView } from 'react-intersection-observer'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'
import ProgramHead from './(program)/programHead'

const background = {
  backgroundImage: `url(${hero.src})`,
  height: '100vh',
  backgroundPosition: 'center',
}

export default function Home() {
  const { ref: headTask, inView: headOn } = useInView()
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
    <main>
      <nav className="flex justify-center z-10 fixed left-[50vw] ">
        <div className={`transition duration-700 delay-75 fixed left-0 right-0  bg-gradient-to-b from-gray-700 to-transparent  ${headOn ? 'bg-red-900 text-black bg-none' : ''}`}>
          <div className="flex justify-center bg-red-900 bg-opacity-0">
            <Image src={logoB} alt="smjc" width={55} className="" />
          </div>
          <div className={`transition duration-700 font-medium text-white drop-shadow-lg ${headOn ? 'bg-gray-200' : ''}`}>
            <ul className={`flex justify-center ${headOn ? 'text-black' : ''}`}>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">Home</li>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white " onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                Program
              </li>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">Contact Us</li>
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

      <ParallaxProvider scrollAxis="vertical">
        <section className=" bg-cover bg-fixed z-0 relative" style={background}>
          <div className="flex justify-center absolute top-0 bottom-0 left-0 right-0 ">
            <div className={`w-96 flex items-center transition duration-700 delay-300 scale-100 `}>
              <div>
                <Parallax speed={-15}>
                  <Zoom delay={200} triggerOnce>
                    <Image src={smjcLogo} alt="smjc" className="px-11" />
                  </Zoom>
                </Parallax>
                <h2 className="text-white text-center font font-semibold text-lg">Shizuoka Makassar Japanese Center</h2>
              </div>
            </div>
          </div>
        </section>
      </ParallaxProvider>

      <section className="container mx-auto my-9 text-center">
        <div className={`transition duration-1000 `}>
          <Fade direction="left" triggerOnce>
            <div className=" my-4">
              <h1 className="text-center text-4xl font-bold">SMJC</h1>
              <p className="text-sm text-gray-600">(Shizuoka Makassar Japanese Center)</p>
            </div>
            <p className="text-center text-gray-700">
              Lembaga bahasa Jepang bagi para pelajar agar bisa lanjut kuliah di Jepang. SMJC berdiri di Makassar pada tahun 2016 dengan kerja sama dengan beberapa lembaga bahasa Jepang di dalam propinsi Shizuoka. Para lulusannya bukan
              hanya berasal dari kota Makassar tetapi juga ada yang berasal dari berbagai propinsi yang ada di Indonesia.
            </p>
          </Fade>
        </div>
      </section>

      <section className=" bg-gray-300">
        <div className="container mx-auto py-9 text-center">
          <Fade direction="right" triggerOnce>
            <h1 className="text-center text-4xl font-bold my-4">VISI DAN MISI</h1>
            <p className="text-center text-gray-700">
              Membuka satu lagi jendela dunia lewat bahasa Jepang Mempersiapkan pelajar yang ingin melanjutkan kuliah dan seterusnya bekerja di Jepang. Mendukung juga para pelajar yang sedang belajar di Jepang agar cepat beradaptasi dengan
              kehidupan di Jepang.
            </p>
          </Fade>
        </div>
      </section>

      <section ref={headTask} className="bg-red-200">
        <div className="container mx-auto py-9 text-center md:divide-y divide-gray-400">
          <Fade direction="left" triggerOnce>
            <h1 className="text-center text-4xl font-bold my-4">PROGRAM</h1>
          </Fade>
          <div className="md:divide-y divide-gray-400">
            <Fade cascade direction="down" triggerOnce damping={0.1}>
              <ul className="md:grid md:grid-cols-3  my-6 sm:flex sm:flex-row ">
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Pre-college</h4>
                  <p className="text-md text-gray-600">persiapan bahasa jepang level N4 dan N5 </p>
                  <Link href="/kelas-precollege" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Persiapan Test</h4>
                  <p className="text-md text-gray-600">persiapan test bahasa jepang level N3-N5</p>
                  <Link href="/kelas-persiapan-test" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Partnership</h4>
                  <p className="text-md text-gray-600">kelas penunjang/pilihan bahasa jepang dalam sekolah/kampus</p>
                  <Link href="/kelas-partnership" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
              </ul>

              <ul className="md:grid md:grid-cols-3  my-6 sm:flex sm:flex-row">
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Beasiswa Yomiuri</h4>
                  <p className="text-md text-gray-600">kelas persiapan siswa calon penerima beasiswa Yomiuri</p>
                  <Link href="/kelas-beasiswa" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Dasar Bahasa Jepang</h4>
                  <p className="text-md text-gray-600">kelas pembelajaran umum dan untuk semua kalangan umur</p>
                  <Link href="/kelas-dasar" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Vacational School</h4>
                  <p className="text-md text-red-500">under development</p>
                </li>
              </ul>
            </Fade>
            <div></div>
          </div>
        </div>
      </section>

      <section className="h-96">
        <div className="container mx-auto py-9 text-center">
          <h1 className="text-center text-4xl font-bold my-4">Contact Us</h1>
        </div>
      </section>
    </main>
  )
}
