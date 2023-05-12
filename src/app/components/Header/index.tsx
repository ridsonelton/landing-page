import logoB from 'public/logo-black.png'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className="flex justify-center z-10 fixed left-[50vw]">
      <div className="fixed left-0 right-0 bg-gradient-to-b from-gray-700 to-transparent">
        <div className="flex justify-center transition duration-500 bg-red-900 bg-opacity-0">
          <Image src={logoB} alt="smjc" width={55} className="" />
        </div>
        <div className={`font-medium text-white duration-500 drop-shadow-lg transition `}>
          <ul className="flex justify-center ">
            <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">Home</li>
            <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">Program</li>
            <li className="mx-2  hover:bg-red-950 rounded-full p-2 transition cursor-pointer hover:text-white ">Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
