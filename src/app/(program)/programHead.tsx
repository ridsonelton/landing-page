'use client'

import Link from 'next/link'
import { useRef } from 'react'

export default function ProgramHead() {
  return (
    <ul className="bg-gray-100 drop-shadow-lg py-4 px-8 w-56 items-center">
      <li className="text-sm hover:font-semibold active:ring ">
        <Link href="/kelas-precollege">Kelas Precollege</Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-persiapan-test">Kelas Persiapan Test</Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-partnership">Kelas Partnership</Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-beasiswa">Kelas Beasiswa</Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-dasar">Kelas Dasar</Link>
      </li>
    </ul>
  )
}
