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
import Header from './components/Header'
import { IonIcon } from '@ionic/react'
const background = {
  backgroundImage: `url(${hero.src})`,
  height: '100vh',
  width: 'full',
}

export default function Home() {
  const { ref: headTask, inView: headOn } = useInView()

  return (
    <main>
      <Header headOn={headOn}></Header>
      <ParallaxProvider scrollAxis="vertical">
        <section ref={headTask} id="home" className="bg-center bg-cover bg-fixed z-0 relative" style={background}>
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

      <div>
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

        <section className="bg-gray-200 p-4 sm:px-4">
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
                    <div className="flex justify-center">
                      <Link href="/kelas-precollege">
                        <p className="rounded-lg px-2 text-red-600 border-2 border-red-900 mr-4 hover:bg-red-900  hover:text-white  transition duration-500 hover:scale-105 w-max text-center ">Detail Program</p>
                      </Link>
                    </div>
                  </li>
                  <li className=" my-3 lg:basis-1/4 p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas JLPT/NAT </h4>
                    <p className="text-gray-300 group-hover:text-gray-600 ">Persiapan test kemampuan bahasa</p>
                    <div className="flex justify-center">
                      <Link href="/kelas-persiapan-test">
                        <p className="rounded-lg px-2 text-red-600 border-2 border-red-900 mr-4 hover:bg-red-900  hover:text-white  transition duration-500 hover:scale-105 w-max text-center ">Detail Program</p>
                      </Link>
                    </div>
                  </li>
                  <li className=" my-3 lg:basis-1/4 p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Partnership</h4>
                    <p className="text-gray-300 group-hover:text-gray-600">Bahasa Jepang dalam sekolah atau kampus</p>
                    <div className="flex justify-center">
                      <Link href="/kelas-partnership">
                        <p className="rounded-lg px-2 text-red-600 border-2 border-red-900 mr-4 hover:bg-red-900  hover:text-white  transition duration-500 hover:scale-105 w-max text-center ">Detail Program</p>
                      </Link>
                    </div>
                  </li>
                </ul>

                <ul className="lg:flex justify-center flex-wrap gap-4">
                  <li className=" my-3 lg:basis-1/4   p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Beasiswa </h4>
                    <p className="text-gray-300 group-hover:text-gray-600">Orientasi bagi penerima beasiswa</p>
                    <div className="flex justify-center">
                      <Link href="/kelas-beasiswa">
                        <p className="rounded-lg px-2 text-red-600 border-2 border-red-900 mr-4 hover:bg-red-900  hover:text-white  transition duration-500 hover:scale-105 w-max text-center ">Detail Program</p>
                      </Link>
                    </div>
                  </li>
                  <li className=" my-3 lg:basis-1/4   p-4 hover:cursor-pointer hover:bg-opacity-0 bg-slate-900 text-white hover:text-black transition duration-300 rounded-xl shadow-lg group">
                    <h4 className="font-bold text-2xl">Kelas Reguler</h4>
                    <p className="text-md text-gray-300 group-hover:text-gray-600">Bahasa Jepang untuk umum</p>
                    <div className="flex justify-center">
                      <Link href="/kelas-dasar">
                        <p className="rounded-lg px-2 text-red-600 border-2 border-red-900 mr-4 hover:bg-red-900  hover:text-white  transition duration-500 hover:scale-105 w-max text-center ">Detail Program</p>
                      </Link>
                    </div>
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
