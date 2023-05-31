import logoA from 'public/logo.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center">
          <Image src={logoA} alt="smjc" width={50} height={50}></Image>
          <p className="text-gray-400">made by ERU</p>
        </div>
      </div>
    </section>
  )
}
