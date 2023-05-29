'use client'
import dasar from 'public/dasar.png'
import Image from 'next/image'
import PriceCard from '@/app/components/priceCard'
export default function KelasDasar() {
  return (
    <div>
      <section className="">
        <div className="my-14 relative mx-auto container px-4 sm:px-0">
          <h1 className="font-bold text-2xl my-4 ">Kelas Reguler Bahasa Jepang</h1>
          <p>Kelas pembelajaran bahasa Jepang dasar yang diperuntukkan untuk umum, tidak ada batasan umur, bagi pelajar/pegawai/karyawan/profesional atau siapa saja yang tertarik mempelajari bahasa Jepang. </p>
          <br />
          <p>Terbagi dalam 4 level : Basic 1, Basic 2, Intermediate 1, Intermediate 2.</p>

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

      <section className="mx-auto bg-slate-200 w-full py-4">
        <div className="container mx-auto px-4 sm:px-0">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan :</h6>
          <ul className="list-disc list-inside">
            <li>Entry sheet SMJC　(Via Website)</li>
            <li>Pas Foto (3 bulan terakhir)</li>
            <li>Application Sheet</li>
            <li>KTP & Kartu Pelajar</li>
          </ul>
        </div>

        <div className="flex gap-7 justify-center my-3  flex-wrap">
          <PriceCard title={'Basic 1'} price={'1,600'} pertemuan={'20X pertemuan'} li1={'2-3X per-minggu'} li2={' 90 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'Basic 2'} price={'1,700'} pertemuan={'20X pertemuan'} li1={'2-3X per-minggu'} li2={' 90 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'Intermediate 1'} price={'1,800'} pertemuan={'20X pertemuan'} li1={'2-3X per-minggu'} li2={' 90 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'Intermediate 2'} price={'1,900'} pertemuan={'20X pertemuan'} li1={'2-3X per-minggu'} li2={' 90 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
        </div>
      </section>
    </div>
  )
}
