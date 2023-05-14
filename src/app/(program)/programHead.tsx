import Link from 'next/link'

export default function ProgramHead() {
  const ulParent = document.querySelector('#ul-parent')
  const ulLength = ulParent?.children.length || 5

  const makeBold = (prop: number) => {
    ulParent?.children[prop].classList.add('font-semibold')
  }
  const makeNotBold = () => {
    for (let i = 0; i < ulLength; i++) {
      ulParent?.children[i].classList.remove('font-semibold')
    }
  }

  return (
    <ul id="ul-parent" className="bg-gray-100 drop-shadow-lg py-4 px-8 w-56 items-center">
      <li className="text-sm hover:font-semibold active:ring ">
        <Link
          href="/kelas-precollege"
          onClick={() => {
            makeNotBold()
            makeBold(0)
          }}
        >
          Kelas Precollege
        </Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-persiapan-test"
          onClick={() => {
            makeNotBold()
            makeBold(1)
          }}
        >
          Kelas Persiapan Test
        </Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-partnership"
          onClick={() => {
            makeNotBold()
            makeBold(2)
          }}
        >
          Kelas Partnership
        </Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-beasiswa"
          onClick={() => {
            makeNotBold()
            makeBold(3)
          }}
        >
          Kelas Beasiswa
        </Link>
      </li>
      <li className="text-sm hover:font-semibold active:ring">
        <Link
          href="/kelas-dasar"
          onClick={() => {
            makeNotBold()
            makeBold(4)
          }}
        >
          Kelas Dasar
        </Link>
      </li>
    </ul>
  )
}
