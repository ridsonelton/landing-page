import insta from 'public/instagram.svg'
import face from 'public/facebook.svg'
import wa from 'public/wa.svg'
import tele from 'public/tele.svg'
import adress from 'public/adress.svg'
import Image from 'next/image'

export default function SocialMedia() {
  return (
    <div>
      <div className="flex justify-center gap-20 my-4">
        <div className="flex flex-col justify-center items-center">
          <Image src={adress} width={80} height={80} alt="address"></Image>
          <p className="text-center text-sm">Address</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={tele} width={80} height={80} alt="address"></Image>
          <p className="text-center text-sm">+62 821-9400-6678</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={wa} width={80} height={80} alt="address"></Image>
          <p className="text-center text-sm">+62 821-9400-6678</p>
        </div>
      </div>
      <div className="flex justify-center gap-16">
        <div>
          <a className="flex flex-col justify-center items-center" href="https://www.instagram.com/smjc_makassar/">
            <Image src={insta} width={80} height={80} alt="address"></Image>
            <p className="text-center text-sm">@smjc_makassar</p>
          </a>
        </div>
        <div>
          <a className="flex flex-col justify-center items-center" href="https://m.facebook.com/smjc_makassar-107411900945318/">
            <Image src={face} width={80} height={80} alt="address"></Image>
            <p className="text-center text-sm">smjc_makassar</p>
          </a>
        </div>
      </div>
    </div>
  )
}
