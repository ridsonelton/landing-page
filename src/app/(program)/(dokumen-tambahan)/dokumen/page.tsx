import Image from 'next/image'
import dokumen from 'public/dokumen.png'
import back from 'public/back.svg'
import Link from 'next/link'

export default function Dokumen() {
  return (
    <div className="h-[80vh]">
      <Link href="/kelas-precollege">
        <Image className="mt-2" src={back} width={30} height={30} alt="biaya"></Image>
      </Link>
      <Image className="mx-auto my-4" src={dokumen} width={800} height={1000} alt="biaya"></Image>
    </div>
  )
}
