import Image from 'next/image'
import biaya from 'public/biaya.png'
import back from 'public/back.svg'
import Link from 'next/link'

export default function Biaya() {
  return (
    <div className="h-[80vh]">
      <Link href="/kelas-precollege">
        <Image className="mt-2" src={back} width={30} height={30} alt="biaya"></Image>
      </Link>
      <Image className="mx-auto my-4" src={biaya} width={500} height={500} alt="biaya"></Image>
    </div>
  )
}
