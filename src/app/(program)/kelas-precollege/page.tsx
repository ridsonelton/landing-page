'use client'
import down from 'public/down.svg'
import Image from 'next/image'
import DPrecollege from 'public/precollege.png'
import Link from 'next/link'

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
        <div className="my-4">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan :</h6>
          <ul className="list-disc">
            <li>Entry sheet SMJC　(Via Website)</li>
            <li>Pas Foto (terbaru, 3 bulan)</li>
            <li>Application Sheet</li>
            <li>KTP & Kartu Keluarga</li>
            <li>Passport</li>
            <li>Foto (Keluarga)</li>
            <li>Ijazah dan Transkrip Nilai terakhir</li>
            <li>Sertifikat Kursus Bahasa Jepang (250 jam)</li>
            <li>Sertifikat Level Bahasa Jepang (N5 keatas)</li>
            <li>Surat Keterangan Kerja Penjamin (Wali/Org Tua)</li>
            <li>Foto copy rekening (penjamin)</li>
            <li>Surat Referensi Bank (Penjamin)</li>
            <li>Surat Keterangan Penghasilan Penjamin (Guarantor)</li>
            <li>Essay (maksud dan tujuan ke Jepang)</li>
            <li>Surat Keterangan Pembentukan Dana</li>
            <li>Surat Keterangan Sehat (MCU) </li>
            <li>Sertifikat Enrollmet</li>
          </ul>
        </div>

        <div className="flex gap-7 justify-center my-3 ">
          <div className="flex flex-col justify-center basis-1/4 items-center rounded-lg">
            <div className="justify-center flex flex-col items-center w-full px-3 pb-7 pt-9 rounded-t-2xl gap-3 bg-white">
              <div className="text-xl">Paket A</div>
              <div className="flex items-start">
                <span className="text-lg">IDR</span>
                <h3 className="text-5xl">3,500</h3>
                <span className="text-lg">000</span>
              </div>
              <h5 className="text-sm">30X pertemuan</h5>
            </div>

            <div className="flex flex-col justify-center items-center bg-orange-400 px-3 pt-7 pb-9 rounded-b-2xl w-full gap-4">
              <ul className="p-2  text-sm">
                <li>2x/minggu, 90 Menit/pertemuan (3 bulan)</li>
                <li>Komprehenshif Minna no nihongo</li>
                <li>Tersedia kelas Online & Offline</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center basis-1/4 items-center rounded-2xl ">
            <div className=" justify-center flex flex-col items-center w-full px-3 pb-7 pt-9 rounded-t-2xl gap-3 bg-white">
              <div className="text-xl">Paket B</div>
              <div className="flex items-start">
                <span className="text-lg">IDR</span>
                <h3 className="text-5xl">4,000</h3>
                <span className="text-lg">000</span>
              </div>
              <h5 className="text-sm">30X pertemuan</h5>
            </div>

            <div className="flex flex-col justify-center items-center bg-orange-400 px-3 pt-7 pb-9 rounded-b-2xl w-full gap-4">
              <ul className="p-2  text-sm">
                <li>2x/minggu, 90 Menit/pertemuan (3 bulan)</li>
                <li>Komprehenshif Minna no nihongo</li>
                <li>Tersedia kelas Online & Offline</li>
              </ul>
            </div>
          </div>
        </div>

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
          <Link href="/biaya">
            <button className="cursor-pointer mx-4 bg-blue-950 rounded-md px-3 text-yellow-300">Biaya</button>
          </Link>
          <Link href="/dokumen">
            <button className="cursor-pointer mx-4 bg-blue-950 rounded-md px-3 text-yellow-300">Dokumen yang dibutuhkan</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
