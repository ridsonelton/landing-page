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
import ContactUs from './[contactUs]'
import socialMedia from './[socialMedia]'
import SocialMedia from './[socialMedia]'

const background = {
  backgroundImage: `url(${hero.src})`,
  height: '100vh',
  backgroundPosition: 'center',
}

export default function Home() {
  const { ref: headTask, inView: headOn } = useInView()
  const { ref: headTask1, inView: headOn1 } = useInView()
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
        <div className={`transition duration-700 delay-75 fixed left-0 right-0  bg-gradient-to-b from-gray-700 to-transparent  ${headOn ? 'bg-red-900 text-black bg-none' : ''} ${headOn1 ? 'bg-red-900 text-black bg-none' : ''}`}>
          <div className="flex justify-center bg-red-900 bg-opacity-0">
            <Image src={logoB} alt="smjc" width={55} className="" />
          </div>
          <div className={`transition duration-700 font-medium text-white drop-shadow-lg ${headOn ? 'bg-gray-200' : ''} ${headOn1 ? 'bg-gray-200' : ''}`}>
            <ul className={`flex justify-center ${headOn ? 'text-black' : ''}  ${headOn1 ? 'text-black' : ''}`}>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">Home</li>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white " onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                Program
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
              <h1 className="text-center text-4xl font-bold">
                <span className="drop-shadow-lg shadow-gray-900 text-5xl">SMJC</span>
              </h1>
              <p className="text-sm text-red-400">(Shizuoka Makassar Japanese Center)</p>
            </div>
            <p className="text-center text-gray-700">
              Lembaga pendidikan bahasa Jepang yang bekerja profesional terpercaya sejak tahun 2016. SMJC saat ini tengah membangun hubungan kerja sama baik dalam negeri maupun luar negeri, khususnya lembaga/institusi/perusahaan di dalam
              propinsi Shizuoka Jepang. Lulusan SMJC adalah para siswa/mahasiswa yang berasal dari berbagai propinsi di Indonesia dan sekarang sebagian besar sudah kuliah bahkan telah bekerja di Jepang.
            </p>
          </Fade>
        </div>
      </section>

      <section className=" bg-gray-300">
        <div className="container mx-auto py-9 text-center">
          <Fade direction="right" triggerOnce>
            <h1 className="text-center text-4xl font-bold my-4">VISI DAN MISI</h1>
            <div className="flex text-blue-600 justify-center">
              <ul className="list-disc text-start">
                <li>Membuka satu lagi jendela dunia lewat bahasa Jepang.</li>
                <li>Mempersiapkan pelajar untuk lanjut kuliah dan selanjutnya bekerja di Jepang.</li>
                <li> Membimbing/mensupport pelajar agar cepat beradaptasi di Jepang.</li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>

      <section ref={headTask} className="bg-red-200">
        <div className="container mx-auto py-9 text-center md:divide-y divide-gray-400">
          <Fade direction="left" triggerOnce>
            <h1 className="text-center text-4xl font-bold my-4">
              {' '}
              <span className="text-green-900 drop-shadow-md ">PROGRAM</span>{' '}
            </h1>
          </Fade>
          <div className="md:divide-y divide-gray-400">
            <Fade cascade direction="down" triggerOnce damping={0.1}>
              <ul className="md:grid md:grid-cols-3  my-6 sm:flex sm:flex-row text-green-700">
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Intensif Pre-college</h4>
                  <p className="text-md text-gray-600 ">Persiapan lanjut kuliah di Jepang (sekolah bahasa) </p>
                  <Link href="/kelas-precollege" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Persiapan Test</h4>
                  <p className="text-md text-gray-600 ">Persiapan test bahasa jepang (能力試験)</p>
                  <Link href="/kelas-persiapan-test" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Partnership</h4>
                  <p className="text-md text-gray-600">Kelas tambahan di SMA/ mata kuliah pilihan di Universitas</p>
                  <Link href="/kelas-partnership" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
              </ul>

              <ul className="md:grid md:grid-cols-3  my-6 sm:flex sm:flex-row text-green-700">
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Beasiswa Yomiuri Shinbun</h4>
                  <p className="text-md text-gray-600">Kelas orientasi bagi penerima beasiswa Yomiuri Shinbun</p>
                  <Link href="/kelas-beasiswa" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Kelas Dasar Bahasa Jepang</h4>
                  <p className="text-md text-gray-600">Kelas pembelajaran bahasa Jepang untuk umum</p>
                  <Link href="/kelas-dasar" className="rounded-lg px-2 text-gray-400 outline outline-1 mr-4">
                    details
                  </Link>
                </li>
                <li className="mx-2 my-3">
                  <h4 className="font-bold text-xl">Vacational School</h4>
                  <p className="text-md text-red-500">(under development)</p>
                </li>
              </ul>
            </Fade>
            <div></div>
          </div>
        </div>
      </section>

      <section className="my-9" id="contact-us">
        <ContactUs></ContactUs>
        <div ref={headTask1}></div>
        <SocialMedia></SocialMedia>
      </section>
    </main>
  )
}
