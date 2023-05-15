import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function ProgramHead() {
  const ul = useRef<HTMLDivElement>(null)
  // const ulParent = document.querySelectorAll('#ul-parent')
  // const ulLength = ulParent?.children.length || 5
  const ulParent = ul.current
  const ulLength = ul.current?.children.length || 5

  const makeBold = (prop: number) => {
    ulParent?.children[prop].classList.add('font-semibold')
  }

  const makeNotBold = () => {
    for (let i = 0; i < ulLength; i++) {
      ulParent?.children[i].classList.remove('font-semibold')
    }
  }
  useEffect(() => {
    console.log(ulLength)
  })

  return (
    <div id="ul-parent" ref={ul} className="bg-gray-100 drop-shadow-lg py-4 px-8 w-56 items-center">
      <div className="text-sm hover:font-semibold active:ring ">
        <Link
          href="/kelas-precollege"
          onClick={() => {
            makeNotBold()
            makeBold(0)
          }}
        >
          Kelas Precollege
        </Link>
      </div>
      <div className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-persiapan-test"
          onClick={() => {
            makeNotBold()
            makeBold(1)
          }}
        >
          Kelas Persiapan Test
        </Link>
      </div>
      <div className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-partnership"
          onClick={() => {
            makeNotBold()
            makeBold(2)
          }}
        >
          Kelas Partnership
        </Link>
      </div>
      <div className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-beasiswa"
          onClick={() => {
            makeNotBold()
            makeBold(3)
          }}
        >
          Kelas Beasiswa
        </Link>
      </div>
      <div className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-dasar"
          onClick={() => {
            makeNotBold()
            makeBold(4)
          }}
        >
          Kelas Dasar
        </Link>
      </div>
    </div>
  )
}
