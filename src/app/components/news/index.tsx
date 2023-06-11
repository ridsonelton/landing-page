export function NewsComponent() {
  return (
    <section className="container mx-auto my-9 text-center ">
      <div className="">
        <h2 className="text-4xl my-5 font-bold">NEWS</h2>
        <ul className="justify-items-center grid md:grid-cols-3 grid-cols-1 my-3 gap-4 justify-stretch">
          <li className=" cursor-pointer w-[90vw] md:w-[25vw] lg:w-[25vw] text-sm md:text-base h-min overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <div>
              <img className="h-52" src="https://drive.google.com/uc?id=1oDd8Jf_e6ZulJ7hpfotK4trTKBABhRa-" alt="" width="100%" />
            </div>
            <div className="flex ">
              <div className="bg-red-700  p-2 justify-center items-center flex">
                <p className="text-white">2023.05.24</p>
              </div>
              <div className="p-2 w-full bg-gray-300">
                <p>Buka kelas baru untuk bulan July</p>
              </div>
            </div>
          </li>
          <li className="cursor-pointer w-[90vw] md:w-[25vw] lg:w-[25vw] text-sm md:text-base h-min overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <div>
              <img className="h-52" src="https://source.unsplash.com/500x300?pencil" alt="" width="100%" />
            </div>
            <div className="flex ">
              <div className="bg-red-700  p-2 justify-center items-center flex">
                <p className="text-white">2023.05.24</p>
              </div>
              <div className="p-2 w-full bg-gray-300">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              </div>
            </div>
          </li>
          <li className="cursor-pointer w-[90vw] md:w-[25vw] lg:w-[25vw] text-sm md:text-base h-min overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <div>
              <img className="h-52" src="https://source.unsplash.com/500x300?book" alt="" width="100%" />
            </div>
            <div className="flex ">
              <div className="bg-red-700  p-2 justify-center items-center flex">
                <p className="text-white">2023.05.24</p>
              </div>
              <div className="p-2 w-full bg-gray-300">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="text-center my-7">
          <button className="hover:bg-red-900  hover:text-white border-2 border-red-900 px-3 py-2 rounded-xl transition duration-500 hover:scale-110">Lihat semua</button>
        </div>
      </div>
    </section>
  )
}
