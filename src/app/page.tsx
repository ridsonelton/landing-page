'use client'

import Image from 'next/image'
import smjcLogo from 'public/smjc.png'
import hero from 'public/hero.jpg'
import Link from 'next/link'
import { Fade, Zoom } from 'react-awesome-reveal'
import logoB from 'public/logo-black.png'
import logoA from 'public/logo.png'
import { useInView } from 'react-intersection-observer'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'
import ProgramHead from './(program)/programHead'
import ContactUs from './[contactUs]'
import SocialMedia from './[socialMedia]'
import Globe from 'public/globe.svg'
import Consult from 'public/consult.svg'
import Study from 'public/study.svg'
import { NewsComponent } from './components/news'

const background = {
  backgroundImage: `url(${hero.src})`,
  height: '100vh',
  width: 'full',
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
      <nav className=" justify-center z-10 fixed left-[50vw] flex">
        <div
          className={`hidden sm:block transition duration-700 delay-75 fixed left-0 right-0 bg-gradient-to-b from-gray-700 to-transparent  ${headOn ? 'bg-red-900 text-black bg-none' : ''} ${headOn1 ? 'bg-red-900 text-black bg-none' : ''}`}
        >
          <div className="flex justify-center bg-red-900 bg-opacity-0">
            <Image src={logoB} alt="smjc" width={55} className="" />
          </div>
          <div className={`transition duration-700 font-medium text-white drop-shadow-lg ${headOn ? 'bg-gray-200' : ''} ${headOn1 ? 'bg-gray-200' : ''}`}>
            <ul className={`flex justify-center ${headOn ? 'text-black' : ''}  ${headOn1 ? 'text-black' : ''}`}>
              <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">
                <Link href="#">Home</Link>
              </li>
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
        <div className="sm:hidden block bg-gray-800 py-2 fixed left-0 right-0 top-0">
          <div className="flex justify-between px-4 items-center">
            <Image src={logoA} alt="smjc" width={40} className="" />
            <div className="text-white text-2xl hover:-rotate-90 transition">X</div>
          </div>
        </div>
      </nav>

      <ParallaxProvider scrollAxis="vertical">
        <section className="bg-center bg-cover bg-fixed z-0 relative" style={background}>
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

      <NewsComponent></NewsComponent>
      <section className="bg-gray-200">
        <div className="container mx-auto py-9 text-center">
          <div className={`transition duration-1000 `}>
            <Fade direction="left" triggerOnce>
              <div className=" my-4">
                <h1 className="text-center text-4xl font-bold">
                  <span className="drop-shadow-lg shadow-gray-900 text-5xl">SMJC</span>
                </h1>
                <p className="text-lg text-red-500 font-semibold">(Shizuoka Makassar Japanese Center)</p>
              </div>
              <p className="text-center text-gray-700 mx-auto md:w-[55vw]">
                Lembaga pendidikan bahasa Jepang yang bekerja profesional terpercaya sejak tahun 2016.
                <br /> SMJC saat ini tengah membangun hubungan kerja sama baik dalam negeri maupun luar negeri, khususnya lembaga/institusi/perusahaan di dalam propinsi Shizuoka Jepang. <br /> Lulusan SMJC adalah para siswa/mahasiswa yang
                berasal dari berbagai propinsi di Indonesia dan sekarang sebagian besar sudah kuliah bahkan telah bekerja di Jepang.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      <div ref={headTask}>
        <section className="">
          <div className="container mx-auto py-9 text-center">
            <Fade direction="right" triggerOnce>
              <h1 className="text-center text-4xl font-bold my-4">VISI DAN MISI</h1>
              <div className="flex  justify-center">
                <ul className="text-start md:flex justify-center flex-wrap gap-3 items-start font-semibold text-red-900 text-lg">
                  <li className=" flex items-center flex-col justify-center basis-1/4 my-4 shadow-md p-3">
                    <Image src={Study} height={100} alt="globe"></Image>
                    <p className="text-center">Mempersiapkan pelajar untuk lanjut kuliah dan selanjutnya bekerja di Jepang.</p>
                  </li>

                  <li className=" flex items-center flex-col justify-center basis-1/4 my-4 shadow-md p-3">
                    <Image src={Globe} height={100} alt="globe"></Image>
                    <p className="text-center">Membuka satu lagi jendela dunia lewat bahasa Jepang.</p>
                  </li>

                  <li className=" flex items-center flex-col justify-center basis-1/4  my-4 shadow-md p-3">
                    <Image src={Consult} height={100} alt="globe"></Image>
                    <p className="text-center">Membimbing/mensupport pelajar agar cepat beradaptasi di Jepang.</p>
                  </li>
                </ul>
              </div>
            </Fade>
          </div>
        </section>

        <section className="bg-gray-200 p-4 sm:p-0">
          <div className="container mx-auto py-9 text-center md:divide-y divide-gray-400 ">
            <Fade direction="left" triggerOnce>
              <h1 className="text-center text-4xl font-bold my-4">
                {' '}
                <span className=" drop-shadow-md ">PROGRAM</span>{' '}
              </h1>
            </Fade>
            <div className="md:divide-y divide-gray-400">
              <Fade cascade direction="down" triggerOnce damping={0.1}>
                <ul className="lg:flex flex-wrap justify-center gap-4">
                  <li className=" my-3 lg:basis-1/4 p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Intensif </h4>
                    <p className="text-gray-300 group-hover:text-gray-600 ">Persiapan lanjut kuliah ke Jepang</p>
                    <Link href="/kelas-persiapan-test" className="rounded-lg px-2 text-red-600 outline outline-1 mr-4 hover:bg-red-900 outline-red-900 hover:text-white  transition duration-500   ">
                      Detail Program
                    </Link>
                  </li>
                  <li className=" my-3 lg:basis-1/4 p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas JLPT/NAT </h4>
                    <p className="text-gray-300 group-hover:text-gray-600 ">Persiapan test kemampuan bahasa</p>
                    <Link href="/kelas-persiapan-test" className="rounded-lg px-2 text-red-600 outline outline-1 mr-4 hover:bg-red-900 outline-red-900 hover:text-white  transition duration-500   ">
                      Detail Program
                    </Link>
                  </li>
                  <li className=" my-3 lg:basis-1/4 p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Partnership</h4>
                    <p className="text-gray-300 group-hover:text-gray-600">Bahasa Jepang dalam sekolah atau kampus</p>
                    <Link href="/kelas-partnership" className="rounded-lg px-2 text-red-600 outline outline-1 mr-4 hover:bg-red-900 outline-red-900  hover:text-white  transition duration-500  ">
                      Detail Program
                    </Link>
                  </li>
                </ul>

                <ul className="lg:flex justify-center flex-wrap gap-4">
                  <li className=" my-3 lg:basis-1/4   p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Beasiswa </h4>
                    <p className="text-gray-300 group-hover:text-gray-600">Orientasi bagi penerima beasiswa</p>
                    <Link href="/kelas-beasiswa" className="rounded-lg px-2 text-red-600 outline outline-1 mr-4 hover:bg-red-900 outline-red-900 hover:text-white  transition duration-500   ">
                      Detail Program
                    </Link>
                  </li>
                  <li className=" my-3 lg:basis-1/4   p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Reguler</h4>
                    <p className="text-md text-gray-300 group-hover:text-gray-600">Bahasa Jepang untuk umum</p>
                    <Link href="/kelas-dasar" className="rounded-lg px-2 text-red-600 outline outline-1 mr-4 hover:bg-red-900 outline-red-900 hover:text-white  transition duration-500   ">
                      Detail Program
                    </Link>
                  </li>
                  <li className=" my-3 lg:basis-1/4   p-4 hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg  ">
                    <h4 className="font-bold text-2xl">Vacational School</h4>
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
          <div></div>
          <SocialMedia></SocialMedia>
        </section>
      </div>
    </main>
  )
}
