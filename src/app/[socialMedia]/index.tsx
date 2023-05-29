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
      <div className="flex justify-center sm:gap-9 my-4 flex-wrap items-start">
        <div className="flex flex-col justify-center items-center w-40 ">
          <a href="https://www.google.co.jp/maps/place/Grand+Central+BTP/@-5.1313809,119.4996753,18.05z/data=!4m10!1m2!2m1!1sRUKO+GRAND+SENTRAL+BTP+No.2B+Tamalanrea,+Kec.+Tamalanrea,+Kota+Makassar,+Sulawesi+Selatan,%C2%A0Indonesia%C2%A090245!3m6!1s0x2dbefdea2853fd77:0x29e8c749979a5ac9!8m2!3d-5.1312031!4d119.501062!15sCmxSVUtPIEdSQU5EIFNFTlRSQUwgQlRQIE5vLjJCIFRhbWFsYW5yZWEsIEtlYy4gVGFtYWxhbnJlYSwgS290YSBNYWthc3NhciwgU3VsYXdlc2kgU2VsYXRhbizCoEluZG9uZXNpYcKgOTAyNDWSARFob3VzaW5nX2F1dGhvcml0eeABAA!16s%2Fg%2F11gyvr8z5d">
            <Image src={adress} width={50} height={50} alt="address"></Image>
          </a>
          <p className="text-center text-sm ">Ruko Grand Sentral BTP, Makassar </p>
        </div>
        <div className="flex flex-col justify-center items-center w-40">
          <Image src={clock} width={50} height={50} alt="address"></Image>
          <p className="text-center text-sm">Mon-Fry 08:00-1700</p>
          <p className="text-center text-sm">Saturday and Monday Closed</p>
        </div>
        <div className="flex flex-col justify-center items-center w-40">
          <Image src={tele} width={50} height={50} alt="address"></Image>
          <p className="text-center text-sm">+62 821-9400-6678</p>
        </div>
      </div>

      <div className="flex justify-center sm:gap-9 my-4 flex-wrap items-start">
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
