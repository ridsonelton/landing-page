'use client'
import partner from 'public/Partnership.png'
import Image from 'next/image'

export default function KelasPartnership() {
  return (
    <div>
      <section className="">
        <div className="my-14 relative mx-auto container">
          <h1 className="font-bold text-2xl my-4 "> Kelas Partnership (SMA/Akademi/Universitas)</h1>
          <p> Merupakan kelas tambahan bahasa Jepang dalam sekolah atau mata kuliah pilihan dalam kampus. Pelaksanaannya hanya pada institusi pendidikan yang telah memiliki kerja sama (MoU) dengan SMJC.</p>
          <p>
            Para siswa/mahasiswa akan memiliki kemampuan bahasa jepang dasar level N5 selama belajar/kuliah di sekolah/kampus. Dan setelah tamat SMA/Universitas dapat bergabung dalam Program Intensif Pre-College (kelas tahap 2 untuk lanjut
            kuliah di Jepang), Program Beasiswa atau program lainnya.
          </p>
          <br />
          <p>Kelas diselenggarakan 2 kali dalam 1 minggu (2 jam/pertemuan) dgn total masa belajar 10 bulan (80 pertemuan, sekitar 160 jam).</p>
          <br />
          <p>
            <span className="font-semibold">Syarat Peserta :</span> <br />
            Siswa/Mahasiswa yang masih belajar dalam ruang lingkup SMA/AKADEMI/UNIV. yang telah memiliki kerja sama dengan SMJC.
          </p>
          <br />
          <h4 className="font-semibold">Proses</h4>
          <Image src={partner} width={1000} height={1000} alt="flow"></Image>
          <p className="italic text-sm">※Jika ingin lanjut kuliah ke jepang</p>
          <p className="italic text-sm">
            <span className="font-semibold">Note : </span> Biaya diatur sesuai kesepakatan dalam MoU(Memorandum of Understanding)
          </p>
        </div>
      </section>

      <section className="py-4 bg-slate-200 w-full">
        <div className="container mx-14">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan(tingkat SMA) :</h6>
          <ul className="list-disc">
            <li>Entry sheet SMJC　(Via Website)</li>
            <li>Pas Foto Terbaru ( 3 Bulan Terakhir)</li>
            <li>KTP/Kartu Pelajar</li>
          </ul>
        </div>
        <div className="container mx-14">
          <h6 className="font-semibold my-2">Dokumen yang dibutuhkan(tingkat Universitas/lanjut kuliah ke Jepang) :</h6>
          <ul className="list-disc">
            <li>Entry sheet SMJC　(Via Website)</li>
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
    </div>
  )
}
