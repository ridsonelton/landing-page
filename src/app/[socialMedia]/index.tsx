import insta from 'public/instagram.svg'
import face from 'public/face.svg'
import wa from 'public/wa.svg'
import tele from 'public/tele.svg'
import adress from 'public/adress.svg'
import Image from 'next/image'

export default function socialMedia() {
  return (
    <div>
      iniseocaojcp
      <div>
        <Image src={adress} width={100} height={100} alt="address"></Image>
      </div>
    </div>
  )
}
