import partnership from "../../gallery/partnership.jpg"
import newClass from "../../gallery/new-class.jpg"
import waiwai from "../../gallery/waiwai.jpg"
import Image from 'next/image'
import Link from 'next/link'

export function NewsComponent() {
  return (
    <section className="container mx-auto my-9 text-center ">
      <div className="">
        <h2 className="text-4xl my-5 font-bold">NEWS</h2>
        <ul className="justify-items-center grid lg:grid-cols-3 grid-cols-1 my-3 gap-4 justify-stretch">
          <li className=" cursor-pointer w-[80vw]  lg:w-[30vw] xl:w-[25vw] text-sm md:text-base h-min overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <Link href="/news/new-class-opening">
              <div>
                <Image className="h-52" src={newClass} alt="newClass"/>
              </div>
              <div className="flex ">
                <div className="bg-red-700  p-2 justify-center items-center flex">
                  <p className="text-white">2023.05.24</p>
                </div>
                <div className="p-2 w-full bg-gray-300">
                  <p>Buka kelas baru untuk bulan July</p>
                </div>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer w-[80vw]  lg:w-[30vw] xl:w-[25vw] text-sm md:text-base h-min overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <Link href="/news/mahasiswa-program-partnership">
              <div>
                 <Image className="h-52" src={partnership} alt="newClass"/>
              </div>
              <div className="flex ">
                <div className="bg-red-700  p-2 justify-center items-center flex">
                  <p className="text-white">2023.05.24</p>
                </div>
                <div className="p-2 w-full bg-gray-300">
                  <p>Mahasiswa Program Partnership</p>
                </div>
              </div>
            </Link>
          </li>
          <li className="cursor-pointer w-[80vw]  lg:w-[30vw] xl:w-[25vw] text-sm md:text-base h-min overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <Link href="/news/waiwai">
              <div>
                 <Image className="h-52" src={waiwai} alt="newClass"/>
              </div>
              <div className="flex ">
                <div className="bg-red-700  p-2 justify-center items-center flex">
                  <p className="text-white">2023.05.24</p>
                </div>
                <div className="p-2 w-full bg-gray-300">
                  <p>Alumni SMJC di Festival Waiwai World Fair 2021</p>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="text-center my-7 hidden">
          <button className="hover:bg-red-900  hover:text-white border-2 border-red-900 px-3 py-2 rounded-xl transition duration-500 hover:scale-110">Lihat semua</button>
        </div>
      </div>
    </section>
  )
}
