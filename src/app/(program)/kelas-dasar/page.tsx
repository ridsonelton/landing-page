'use client'
import dasar from 'public/dasar.png'
import Image from 'next/image'

export default function KelasDasar() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 ">Kelas Reguler Dasar Bahasa Jepang</h1>
        <p>Kelas pembelajaran bahasa Jepang dasar yang diperuntukkan untuk umum, tidak ada batasan umur, bagi pelajar/pegawai/karyawan/profesional atau siapa saja yang tertarik mempelajari bahasa Jepang. </p>
        <br />
        <p>Terbagi dalam 4 level : Basic 1, Basic 2, Basic 3, dan Basic 4.</p>
        <p>Kelas diselenggarakan 2 atau 3 kali (opsional) dalam 1 minggu (2 jam/pertemuan).Total 20 pertemuan per level (1.5 – 2.5 bulan) (Kelas online/offline/e-learning).</p>
        <p className="italic text-sm">
          <span className="font-semibold">Note :</span> jam pembelajaran bisa disesuaikan dengan waktu para peserta, atas kesepakatan bersama
        </p>
        <br />
        <p>
          <span className="font-semibold">Syarat Peserta :</span>
          <br />
          Bebas dari semua kalangan (SD/SMP/SMA/AKADEMI/UNIV./Profesional/Pekerja)
        </p>
        <p>※Kelas dijalankan jika ada pendaftar minimal 4 orang.</p>
        <br />
        <h4 className="font-semibold ">Proses</h4>
        <Image src={dasar} width={1000} height={1000} alt="dasar"></Image>
      </div>
    </section>
  )
}
