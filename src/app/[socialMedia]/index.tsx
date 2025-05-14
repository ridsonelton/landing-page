import insta from 'public/instagram.svg'
import face from 'public/facebook.svg'
import wa from 'public/wa.svg'
import tele from 'public/tele.svg'
import adress from 'public/adress.svg'
import clock from 'public/clock.svg'
import Image from 'next/image'

export default function SocialMedia() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col gap-3 content-center justify-center sm:gap-9 my-4 flex-wrap items-start">
        <div className="flex flex-col justify-center items-center w-40 ">
          <a href="https://maps.app.goo.gl/B2uS6hzQCmNFzfCg6">
            <Image src={adress} width={50} height={50} alt="address"></Image>
          </a>
          <p className="text-center text-sm ">jl.sermani no.10, Makassar </p>
        </div>
        <div className="flex flex-col justify-center items-center w-40">
          <Image src={clock} width={50} height={50} alt="address"></Image>
          <p className="text-center text-sm">Buka senin-jumat 08:00-1700</p>
          <p className="text-center text-sm">Tutup sabtu dan minggu</p>
        </div>
        <div className="flex flex-col justify-center items-center w-40">
          <Image src={tele} width={50} height={50} alt="address"></Image>
          <p className="text-center text-sm">+62 821-9400-6678</p>
          <p className="text-center text-sm">+62 818-0944-7374(untuk wilayah Jakarta/Bandung)</p>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col content-center gap-3 justify-center sm:gap-9 my-4 flex-wrap items-start">
        <div className="flex flex-col justify-center items-center w-40">
          <Image src={wa} width={50} height={50} alt="address"></Image>
          <p className="text-center text-sm">+62 821-9400-6678</p>
        </div>
        <div>
          <a className="flex flex-col justify-center items-center w-40" href="https://www.instagram.com/smjc_makassar/">
            <Image src={insta} width={50} height={50} alt="address"></Image>
            <p className="text-center text-sm">@smjc_makassar</p>
          </a>
        </div>
        <div>
          <a className="flex flex-col justify-center items-center w-40" href="https://m.facebook.com/smjc_makassar-107411900945318/">
            <Image src={face} width={50} height={50} alt="address"></Image>
            <p className="text-center text-sm">smjc_makassar</p>
          </a>
        </div>
      </div>
    </div>
  )
}
