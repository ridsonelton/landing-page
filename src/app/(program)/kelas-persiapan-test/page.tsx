'use client'
import test from 'public/Test.png'
import Image from 'next/image'
import PriceCard from '@/app/components/priceCard'

export default function KelasPersiapan() {
  return (
    <div>
      <section className="">
        <div className="my-14 relative container mx-auto">
          <h1 className="font-bold text-2xl my-4 ">Kelas Persiapan test kemampuan Bahasa Jepang (N5/N4/N3) (1~3 bulan)</h1>
          <p>
            Merupakan kelas persiapan bahasa Jepang agar dapat lulus dalam test kemampuan bahasa Jepang (能力試験) level N5, N4, N3.
            <br />
            Kelas ini lebih konsentrasi pada bimbingan latihan soal-soal test bahasa Jepang.
          </p>
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

      <section className="mx-auto bg-slate-200 w-full">
        <div className="container mx-14">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan :</h6>
          <ul className="list-disc">
            <li>Entry sheet SMJC　(Via Website)</li>
            <li>Pas Foto (3 bulan terakhir)</li>
            <li>Application Sheet</li>
            <li>KTP & Kartu Pelajar</li>
          </ul>
        </div>

        <div className="flex gap-7 justify-center my-3 flex-wrap">
          <PriceCard title={'N5'} price={'1,600'} pertemuan={'10X pertemuan'} li1={'2-5X per-minggu'} li2={' 60 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'N4'} price={'1,800'} pertemuan={'10X pertemuan'} li1={'2-5X per-minggu'} li2={' 60 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'N3'} price={'2,200'} pertemuan={'10X pertemuan'} li1={'2-5X per-minggu'} li2={' 60 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
        </div>
      </section>
    </div>
  )
}
