import newClass from "../../gallery/new-class.jpg"
import Image from 'next/image'

export default function NewClassOpening() {
  return (
    <div className="">
      <Image className="lg:h-[60vh] sm:h-[70%] mx-auto" src={newClass} alt="new-class"/>
      <div>
        <h3 className="font-semibold sm:text-3xl text-xl mt-6 my-2">SMJC Buka Kelas Baru Untuk Bulan July 2023</h3>
        <h6 className="font-light text-gray-600">by Juan-red | Mei 27, 2023 | Semua kelas Bahasa Jepang</h6>
        <p className="my-3">SMJC membuka kelas intensive di bulan july 2023 untuk persiapan belajar ke jepang di bulan april 2024. Bagi yang ingin berminat silahkan hubungi kami via email atau no kontak yang tersedia.</p>
        <p className="my-3">Akan di buka segera kelas reguler (2~3 kali seminggu) di bulan july 2023. Ayo belajar bahasa Jepang bersama kami!!</p>
      </div>
    </div>
  )
}
