'use client'
import down from 'public/down.svg'
import Image from 'next/image'
import DPrecollege from 'public/precollege.png'

export default function KelasPrecollege() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container sm:px-5">
        <h1 className="font-bold text-2xl my-4 ">Kelas Intensif Pre-college (Bahasa Jepang)</h1>
        <p>Merupakan kelas persiapan bahasa Jepang agar bisa ikut dalam program lanjut kuliah di Jepang. (Target bahasa level N5/N4 dg 2 tahap/paket kelas persiapan).</p>
        <br />
        <p>
          <span className="font-semibold">Kelas Tahap 1 (Paket A - Tingkat Dasar)</span>
          <br />
          Para siswa diharapkan lulus bahasa Jepang level N5.
        </p>
        <p>
          <span className="font-semibold">Kelas Tahap 2 (Paket B - Tingkat Menengah)</span>
          <br />
          Para siswa diharapkan mampu bercakap dasar dengan kemampuan bahasa Jepang setara level N4 (Mengenal kebudayaan & kebiasaan orang2 Jepang lewat materi2 kelas budaya dan berinteraksi langsung dengan native speaker ataupun mahasiswa2
          Indonesia yg telah berada di Jepang)
        </p>
        <br />
        <p>Kelas diselenggarakan 5X seminggu (2 jam/pertemuan) dgn total 3 bulan masa belajar (120jam) .</p>
        <br />
        <p className="font-semibold">Proses</p>
        <Image src={DPrecollege} alt="precollege" width={1000} height={1000}></Image>
        <br />
        <p>
          <span className="font-semibold">Syarat Peserta:</span> <br />
          Tamatan SMA/SMAK/STM/Akademi/Universitas ※Maksimal 3 tahun setelah tamat SMA & 5 tahun setelah tamat kuliah.
        </p>
        <br />
        <p className="italic text-sm">
          <span className="font-semibold">Note : </span> Program ini program lanjut kuliah di Jepang dengan biaya sendiri (Non beasiswa). Selama kuliah di Jepang bisa bekerja paruh waktu (28 jam). Ada bantuan dalam mencari pekerjaan paruh
          waktu setelah di Jepang.
        </p>
        <div className="flex justify-center my-4">
          <button className="cursor-pointer mx-4 bg-blue-950 rounded-md px-3 text-yellow-300">Biaya</button>
          <button className="cursor-pointer mx-4 bg-blue-950 rounded-md px-3 text-yellow-300">Dokumen yang dibutuhkan</button>
        </div>
      </div>
    </section>
  )
}
