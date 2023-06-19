'use client'
import down from 'public/down.svg'
import Image from 'next/image'
import DPrecollege from 'public/precollege.png'
import Link from 'next/link'
import PriceCard from '@/app/components/priceCard'

export default function KelasPrecollege() {
  return (
    <div className="mx-auto w-full my-14 ">
      <section className="container mx-auto px-4 sm:px-0">
        <h1 className="font-bold text-2xl my-4 ">Kelas Intensif Pre-college (Bahasa Jepang)</h1>
        <p>Merupakan kelas persiapan bahasa Jepang agar bisa ikut dalam program lanjut kuliah di Jepang. (Target bahasa level N5/N4 dg 2 tahap/paket kelas persiapan).</p>
        <p className="italic text-sm mb-3">
          <span className="font-semibold">Note : </span> Program ini program lanjut kuliah di Jepang dengan biaya sendiri (Non beasiswa). Selama kuliah di Jepang bisa bekerja paruh waktu (28 jam). Ada bantuan dalam mencari pekerjaan paruh
          waktu setelah di Jepang.
        </p>
      </section>

      <section className="bg-slate-200">
        <div className="container mx-auto px-4 sm:px-0">
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
      </section>
      <div className="container mx-auto px-4 sm:px-0">
        <p className="font-semibold mt-2">Proses</p>
        <Image src={DPrecollege} alt="precollege" width={1000} height={1000}></Image>
        <br />
      </div>

      <section className="py-4 bg-slate-200 ">
        <div className="container mx-auto px-4 sm:px-0">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan :</h6>
          <ul className="list-disc list-inside">
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
        </div>
      </section>

      <section className="px-4 sm:px-0 mx-auto container py-3">
        <p>
          <span className="font-semibold">Syarat Peserta:</span> <br />
          Tamatan SMA/SMAK/STM/Akademi/Universitas ※Maksimal 3 tahun setelah tamat SMA & 5 tahun setelah tamat kuliah.
        </p>

        <br />

        <div className="flex flex-wrap gap-7 justify-center my-3 ">
          <PriceCard title={'paket A'} price={'4,750'} pertemuan={'50X pertemuan'} li1={'Senin-Jumat(3 bulan)'} li2={' 90 Menit/pertemuan'} li3={'Tersedia kelas Online & Offline'}></PriceCard>
          <PriceCard title={'paket B'} price={'5,500'} pertemuan={'50X pertemuan'} li1={'Senin-Jumat(3 bulan)'} li2={'90 Menit/pertemuan '} li3={'Tersedia kelas Online & Offline'}></PriceCard>
        </div>
      </section>
      <section className="px-4 sm:px-0 mx-auto container py-3">
        <h6 className="font-semibold">Biaya Ke Jepang:</h6>

        <p className="my-2">Total biaya yang diperlukan untuk bisa ke Jepang sebesar ¥595.000 (Rp 65.450.000 dengan Kurs ¥1 = Rp. 110)</p>
        <p className="my-2">
          Rincian biaya diatas adalah uang sekolah di semester pertama sebesar ¥427.000, dan assuransi kesehatan,biaya hidup,dll di estimasi sebesar ¥168.000. (berdasarkan survey siswa yg telah ada di Jepang)
          <br /> Adapun sisanya biaya semester kedua bisa dibayarkan kemudian.
        </p>
        <p className="my-2">Biaya2 yang dibutuhkan adalah dengan perincian sebagai berikut</p>

        <div>
          <h6 className="font-semibold">A. Uang Sekolah </h6>
          <h6 className="font-semibold">Semester Pertama</h6>
          <ul className="list-disc list-inside">
            <li>Formulir Pendaftaran ¥25.000 </li>
            <li>Admission Fee ¥60.000</li>
            <li>Material Fee ¥21.000</li>
            <li>Facility Fee ¥21.000</li>
            <li>Tuition Fee (6 months) ¥300.000</li>
            <li>Total ¥427.000</li>
          </ul>
          <h6 className="font-semibold">Semester Kedua</h6>
          <p>Tuition Fee (6 months) : ¥300.000</p>
        </div>
        <div>
          <h6 className="font-semibold">B. Living Cost/Akomodasi/Dll</h6>

          <ul className="list-disc list-inside">
            <li>Apartment (3 bulan) ¥60.000</li>
            <li>Asuransi (1 tahun) ¥17.000</li>
            <li>Air/Listrik/Gas (3 bulan) ¥30.000</li>
            <li>Belanja/Dapur ¥30.000</li>
            <li>Sepeda (utk transportasi) ¥20.000</li>
            <li>Biaya HP (Estimasi) ¥6.000</li>
            <li>Dll ¥5.000</li>
            <li>Total ¥168.000 </li>
          </ul>
        </div>
        <p className="italic text-sm mb-3 my-2">
          <span className="font-semibold">Note : </span> Setelah 3 bulan di jepang, rata2 siswa mampu membiayai hidupnya karena diperkenankan bekerja part time sebanyak 28 jam per minggu.
        </p>
      </section>
    </div>
  )
}
