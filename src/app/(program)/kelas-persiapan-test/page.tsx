'use client'
import down from 'public/down.svg'
import Image from 'next/image'

export default function KelasPersiapan() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 ">Kelas Persiapan test kemampuan Bahasa Jepang (N5/N4/N3) (1~3 bulan)</h1>
        <p>Kelas persiapan dalam mengikuti test kemampuan bahasa Jepang level N5, N4, N3 Latihan soal2 bahasa Jepang baik Tulis, Tata Bahasa, Kemampuan Pendengaran.</p>
        <p>Syarat Peserta : Telah memiliki kemampuan dasar Jepang (N5/N4/N3) dg lulus tes awal standar SMJC (Lulusan SMP/SMA/Akademi/Universitas/Profesional).</p>
        <ul>
          <li className="">
            <h3 className="text-center text-lg mt-7 font-semibold">Mengisi Entry</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Test kemampuan Awal</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Penentuan Kelas</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Kelas persiapan (Latihan Soal-Soal)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Daftar Tes Kemampuan Bahasa Jepang</h3>
          </li>
        </ul>
      </div>
    </section>
  )
}
