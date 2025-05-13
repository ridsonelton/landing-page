'use client'

import Header from '../components/Header'
import Image from 'next/image'
import { useState } from 'react'
import close from 'public/close.svg'
import photo1 from '../gallery/photo1.jpg'
import photo2 from '../gallery/photo2.jpg'
import photo3 from '../gallery/photo3.jpg'
import photo4 from '../gallery/photo4.jpg'
import photo5 from '../gallery/photo5.jpg'
import photo6 from '../gallery/photo6.jpg'
import photo7 from '../gallery/photo7.jpg'
import photo8 from '../gallery/photo8.jpg'
import photo9 from '../gallery/photo9.jpg'
import photo10 from '../gallery/photo10.jpg'
import photo11 from '../gallery/photo11.jpg'
import photo12 from '../gallery/photo12.jpg'
import photo13 from '../gallery/photo13.jpg'
import photo14 from '../gallery/photo14.jpg'
import photo15 from '../gallery/photo15.jpg'

export default function GaleryPage() {
  const images = [
    { images: photo1, alt: 'smjc1' },
    { images: photo2, alt: 'smjc2' },
    { images: photo3, alt: 'smjc3' },
    { images: photo4, alt: 'smjc4' },
    { images: photo5, alt: 'smjc5' },
    { images: photo6, alt: 'smjc6' },
    { images: photo7, alt: 'smjc6' },
    { images: photo8, alt: 'smjc6' },
    { images: photo9, alt: 'smjc6' },
    { images: photo10, alt: 'smjc6' },
    { images: photo11, alt: 'smjc6' },
    { images: photo12, alt: 'smjc6' },
    { images: photo13, alt: 'smjc6' },
    { images: photo14, alt: 'smjc6' },
    { images: photo15, alt: 'smjc6' },
  ]

  const [modal, setModal] = useState(false)
  const [modalImage, setModalImage] = useState('')
  return (
    <main className="">
      <div>
        <Header></Header>
      </div>
      <div className=" container mx-auto pt-32">
        <div className="">
          <h1 className="text-4xl text-center font-semibold">Galery</h1>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3 my-9  px-4">
            {images.map((image) => (
              <img
                className="h-52 sm:hover:opacity-70 sm:cursor-pointer"
                key={image.images.src}
                src={image.images.src}
                alt={image.alt}
                width="100%"
                onClick={() => {
                  setModal(!modal)
                  setModalImage(image.images.src)
                }}
              ></img>
            ))}
          </div>
          {modal ? (
            <div>
              <div className="hidden sm:block fixed inset-0 z-10 bg-gray-900 bg-opacity-80">
                <div className=" flex justify-center relative">
                  <img className="mx-auto h-[30rem] mt-[20vh]" alt="" src={modalImage} width="50%"></img>
                  <Image className="absolute top-[15vh] bg-red-950 rounded-full cursor-pointer" onClick={() => setModal(false)} src={close} width={30} alt="close"></Image>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </main>
  )
}
