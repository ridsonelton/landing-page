'use client'
import down from 'public/down.svg'
import Image from 'next/image'

export default function KelasPrecollege() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 "> Kelas Pre-college (Bahasa Jepang)</h1>
        <p>
          Kelas persiapan bahasa Jepang dengan kemampuan bahasa level N5/N4 agar bisa lanjut kuliah di Jepang. Kelas ini dibagi 2 Tahap. Tahap 1 (Paket A) Para siswa diharapkan lulus Min.N5 setelah 2~3 bulan belajar bahasa Jepang. Tahap 2
          (Paket B) Para siswa mampu bercakap dasar bahasa Jepang, dengan kemampuan bahasa level N4 (Mengenal kebudayaan & kebiasaan orang2 Jepang lewat materi2 kelas budaya dan Interaksi langsung dengan native speaker ataupun mahasiswa2
          Indonesia yg telah lama berada di Jepang).
        </p>
        <ul className="my-8">
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Kelas persiapan N5(Paket A)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Test N5</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Interview dg user/sekolah bahasa</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Kelas persiapan N4(PaketB)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Bimbingan pemberkasan</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Ejibility oleh Imigrasi Jepang</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">BerangkatKe Jepang</h3>
          </li>
        </ul>
        <p> Note : Program ini adalah belajar dengan biaya sendiri (Non beasiswa). Agar biaya hidup bisa ringan diperkenankan untuk bekerja paruh waktu (28 jam) selama kuliah di Jepang. </p>
      </div>
    </section>
  )
}
