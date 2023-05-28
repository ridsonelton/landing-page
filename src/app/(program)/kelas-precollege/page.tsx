'use client'
import down from 'public/down.svg'
import Image from 'next/image'
import DPrecollege from 'public/precollege.png'
import Link from 'next/link'
import PriceCard from '@/app/components/priceCard'

export default function KelasPrecollege() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container sm:px-5">
        <h1 className="font-bold text-2xl my-4 ">Kelas Intensif Pre-college (Bahasa Jepang)</h1>
        <p>Merupakan kelas persiapan bahasa Jepang agar bisa ikut dalam program lanjut kuliah di Jepang. (Target bahasa level N5/N4 dg 2 tahap/paket kelas persiapan).</p>
        <p className="italic text-sm">
          <span className="font-semibold">Note : </span> Program ini program lanjut kuliah di Jepang dengan biaya sendiri (Non beasiswa). Selama kuliah di Jepang bisa bekerja paruh waktu (28 jam). Ada bantuan dalam mencari pekerjaan paruh
          waktu setelah di Jepang.
        </p>
        <br />
        <div className="bg-slate-200">
          <p>Dengan kelas ini siswa akan memiliki kemampuan bahasa level N5/N4 dg 2 tahap/paket kelas persiapan.</p>
          <br />
          <p>
            <span className="font-semibold">Kelas Tahap 1 (Paket A - Tingkat Dasar)</span>
            <br />
            Para siswa diharapkan lulus bahasa Jepang level N5.
          </p>
          <p>
            <span className="font-semibold">Kelas Tahap 2 (Paket B - Tingkat Menengah)</span>
            <br />
            Para siswa diharapkan mampu bercakap dasar dengan kemampuan bahasa Jepang setara level N4 (Mengenal kebudayaan & kebiasaan orang2 Jepang lewat materi2 kelas budaya dan berinteraksi langsung dengan native speaker ataupun
            mahasiswa2 Indonesia yg telah berada di Jepang)
          </p>
          <br />
        </div>
        <p className="font-semibold mt-2">Proses</p>
        <Image src={DPrecollege} alt="precollege" width={1000} height={1000}></Image>
        <br />
        <section className="my-4 bg-slate-200 w-full">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan :</h6>
          <ul className="list-disc">
            <li>Entry sheet SMJC(Via Website)</li>
            <li>Pas Foto Terbaru ( 3 Bulan Terakhir)</li>
            <li>KTP/Kartu Pelajar</li>
            <li>Kartu Keluarga</li>
            <li>Application Form</li>
            <li>Ijazah & Transkrip Nilai Pendidikan Terakhir</li>
            <li>Foto Keluarga</li>
            <li>Passport</li>
            <li>Sertifikat Kursus Bahasa Jepang (250 jam)</li>
            <li>Sertifikat Level Bahasa Jepang (N5 keatas)</li>
            <li>Surat Keterangan Kerja Penjamin (Wali/Org Tua)</li>
            <li>Surat Keterangan Penghasilan Penjamin</li>
            <li>Referensi Bank (Penjamin)</li>
            <li>Surat Keterangan Sehat</li>
            <li>Sertifikat Enrollmet</li>
          </ul>
        </section>

        <p>
          <span className="font-semibold">Syarat Peserta:</span> <br />
          Tamatan SMA/SMAK/STM/Akademi/Universitas ※Maksimal 3 tahun setelah tamat SMA & 5 tahun setelah tamat kuliah.
        </p>

        <br />

        <div className="flex gap-7 justify-center my-3 ">
          <PriceCard title={'paket A'} price={'4,750'} pertemuan={'50X pertemuan'} li1={'Senin-Jumat(3 bulan)'} li2={' 90 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'paket B'} price={'5,500'} pertemuan={'50X pertemuan'} li1={'Senin-Jumat(3 bulan)'} li2={'90 Menit/pertemuan '} li3={'Tersedia kelas Online & Offline'}></PriceCard>
        </div>
      </div>
    </section>
  )
}
