export function NewsComponent() {
  return (
    <section className="container mx-auto my-9 text-center ">
      <div className="">
        <h2 className="text-3xl font-bold">News</h2>
        <ul className=" flex flex-col md:flex-row justify-center items-center flex-wrap my-3 gap-4">
          <li className="cursor-pointer w-[70vw] md:w-[25vw] text-sm md:text-base overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <div>
              <img className="" src="https://source.unsplash.com/500x302?education" alt="" width="100%" />
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
          <li className="cursor-pointer w-[70vw] md:w-[25vw] text-sm md:text-base overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <div>
              <img className="" src="https://source.unsplash.com/500x301?education" alt="" width="100%" />
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
          <li className="cursor-pointer w-[70vw] md:w-[25vw] text-sm md:text-base overflow-hidden  rounded-xl hover:opacity-50 shadow-lg shadow-gray-400 hover:scale-105">
            <div>
              <img className="" src="https://source.unsplash.com/500x300?education" alt="" width="100%" />
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
          <button className="hover:bg-red-900  hover:text-white outline outline-red-900 px-3 py-2 rounded-xl transition duration-500">Lihat semua</button>
        </div>
      </div>
    </section>
  )
}
