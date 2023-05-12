'use client'
import down from 'public/down.svg'
import Image from 'next/image'

export default function KelasDasar() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 ">Kelas Dasar Bahasa Jepang</h1>
        <p>
          Kelas pembelajaran bahasa Jepang yang diperuntukkan untuk umum/semua kalangan umur baik pelajar maupun profesional yang tertarik mempelajari bahasa Jepang. Jam pembelajaran disesuaikan dengan waktu peserta. Bisa diadakan online
          dan offline termasuk e-learning.
        </p>
        <p>Syarat Peserta : Semua kalangan (SD/SMP/SMA/AKADEMI/UNIV./Profesional/Pekerja)</p>
        <ul>
          <li className="">
            <h3 className="text-center text-lg mt-7 font-semibold">Mendaftar/Entri sheet</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Mengikuti Kelas Dasar/Reguler</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Test ujian Standar (SMJC)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Sertifikat telah belajar.</h3>

            <p className="text-center">※Kelas dijalankan jika murid diatas 4 orang.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
