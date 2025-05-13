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
    { images: "https://drive.google.com/uc?export=view&id=1nXdodffNEm3-grqd-ZHx89w5YFbYn1GK", alt: 'smjc1' },
    { images: 'https://drive.google.com/uc?id=1kOhgpBNWz_Rc9ZHpcCPZMzHrWJ72a-MA', alt: 'smjc2' },
    { images: 'https://drive.google.com/uc?id=1hUv4q0l1_PFVCCROet8qLTzm_tie_nsw', alt: 'smjc3' },
    { images: 'https://drive.google.com/uc?id=16o6lyjkFXcUUYgM0NPIhfqZQ_N4IENkL', alt: 'smjc4' },
    { images: 'https://drive.google.com/uc?id=1iRSDkjkfTtrqMo9oTjVmAIWD6N3ZsX_a', alt: 'smjc5' },
    { images: 'https://drive.google.com/uc?id=1nXdodffNEm3-grqd-ZHx89w5YFbYn1GK', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=17GN5NJD2aVZg_BYhMN63ge1wgCnNA7UB', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1PUMmpOdDy6CVEw7M2fjvx9_xeRCOwOol', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1hFJ4525PworyrssxJtoFsyaG6IAv-I8B', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1gTP8iqa0vnU0cNxI-_xmHXGxx6q2qCfp', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1Mbv_GXJuDOvMh-dHxlndU95zPyU7MwDm', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=10YEuvjatIDgoshlqdMpRJbWnY-Yqui25', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1DF8jAmTtc4trRld7V4118ECIyULWny71', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1hE2C7jbPo4mmOgcHQMRvr6-EMe5K05ri', alt: 'smjc6' },
    { images: 'https://drive.google.com/uc?id=1k9ant16KYnr9hbSloaPJ8eb8oBYHqIJ9', alt: 'smjc6' },
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
                key={image.images}
                src={image.images}
                alt={image.alt}
                width="100%"
                onClick={() => {
                  setModal(!modal)
                  setModalImage(image.images)
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
