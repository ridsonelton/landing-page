'use client'
import dasar from 'public/dasar.png'
import Image from 'next/image'

export default function KelasDasar() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 ">Kelas Reguler Dasar Bahasa Jepang</h1>
        <p>Kelas pembelajaran bahasa Jepang yang diperuntukkan untuk umum, tidak ada batasan umur, bagi pelajar/pegawai/karyawan/profesional yang tertarik mempelajari bahasa Jepang.</p>
        <br />
        <p>Kelas diselenggarakan 2-3X dalam seminggu (2 jam/pertemuan) dgn total masa belajar 3-6 bulan (Kelas online/offline/e-learning). </p>
        <p className="italic text-sm">
          <span className="font-semibold">Note :</span> Jam belajar akan disesuaikan dengan waktu para peserta
        </p>
        <br />
        <p>
          <span className="font-semibold">Syarat Peserta :</span>
          <br />
          Semua kalangan (SD/SMP/SMA/AKADEMI/UNIV./Profesional/Pekerja)
        </p>
        <br />
        <h4 className="font-semibold ">Proses</h4>
        <Image src={dasar} width={1000} height={1000} alt="dasar"></Image>
      </div>
    </section>
  )
}
