'use client'
import test from 'public/test.png'
import Image from 'next/image'

export default function KelasPersiapan() {
  return (
    <section className="">
      <div className="my-14 relative container mx-auto">
        <h1 className="font-bold text-2xl my-4 ">Kelas Persiapan test kemampuan Bahasa Jepang (N5/N4/N3) (1~3 bulan)</h1>
        <p>
          Merupakan kelas persiapan bahasa Jepang agar dapat lulus dalam test kemampuan bahasa Jepang (能力試験) level N5, N4, N3.
          <br />
          Kelas ini lebih konsentrasi pada bimbingan latihan soal-soal test bahasa Jepang.
        </p>
        <br />
        <p>Kelas diselenggarakan 3 kali dalam 1 minggu (2 jam/pertemuan) dgn total masa belajar 2 bulan (sekitar 68~70 jam) .</p>
        <br />
        <p>
          <span className="font-semibold">Syarat Peserta :</span>
          <br />
          Telah memiliki kemampuan dasar Jepang (N5/N4/N3) dg lulus tes awal standar SMJC (Lulusan SMP/SMA/Akademi/Universitas/Profesional).
        </p>
        <br />
        <h4 className="font-semibold">Proses</h4>
        <Image src={test} width={1000} height={1000} alt="test"></Image>
      </div>
    </section>
  )
}
