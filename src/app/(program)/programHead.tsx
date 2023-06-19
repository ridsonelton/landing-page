import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'

export default function ProgramHead() {
  const ul = useRef<HTMLUListElement>(null)
  const li = useRef<HTMLLIElement>(null)
  // const ulParent = document.querySelectorAll('#ul-parent')
  // const ulLength = ulParent?.children.length || 5
  // const ulParent = document.querySelectorAll('.nav-li')
  // const ulLength = ul.current?.children.length || 5

  useEffect(() => {
    // ul.current?.childNodes.forEach((child) => {
    //   child.addEventListener('click', () => {
    //     console.log(child.textContent)
    //   })
    // })
  }, [])
  // const makeBold = (prop: number) => {
  //   ulParent?.children[prop].classList.add('font-semibold')
  // }

  // const makeNotBold = () => {
  //   for (let i = 0; i < ulLength; i++) {
  //     ulParent?.children[i].classList.remove('font-semibold')
  //   }
  // }

  return (
    <ul id="ul-parent" ref={ul} className="bg-gray-100 drop-shadow-lg py-4 px-8 w-56 items-center">
      <li ref={li} id="nav-li" className="text-sm hover:font-semibold active:ring ">
        <Link href="/kelas-precollege">Kelas Precollege</Link>
      </li>
      <li ref={li} id="nav-li" className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-persiapan-test">Kelas Persiapan Test</Link>
      </li>
      <li ref={li} id="nav-li" className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-partnership">Kelas Partnership</Link>
      </li>
      <li ref={li} id="nav-li" className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-beasiswa">Kelas Beasiswa</Link>
      </li>
      <li ref={li} id="nav-li" className="text-sm hover:font-semibold active:ring">
        <Link href="/kelas-dasar">Kelas Dasar</Link>
      </li>
    </ul>
  )
}
