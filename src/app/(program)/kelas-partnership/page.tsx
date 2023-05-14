'use client'
import partner from 'public/Partnership.png'
import Image from 'next/image'

export default function KelasPartnership() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 "> Kelas Partnership (SMA/Akademi/Universitas)</h1>
        <p> Merupakan kelas tambahan bahasa Jepang dalam sekolah atau mata kuliah pilihan dalam kampus. Pelaksanaannya hanya pada institusi pendidikan yang telah memiliki kerja sama (MoU) dengan SMJC.</p>
        <p>
          Para siswa/mahasiswa akan memiliki kemampuan bahasa jepang dasar level N5 selama belajar/kuliah di sekolah/kampus. Dan setelah tamat SMA/Universitas dapat bergabung dalam Program Intensif Pre-College (kelas tahap 2 untuk lanjut
          kuliah di Jepang), Program Beasiswa atau program lainnya.
        </p>
        <br />
        <p>Kelas diselenggarakan 1X dalam seminggu (2 jam/pertemuan) dgn total masa belajar 12 bulan (sekitar 126 jam) .</p>
        <br />
        <p>
          <span className="font-semibold">Syarat Peserta :</span> <br />
          Siswa/Mahasiswa yang masih belajar dalam ruang lingkup SMA/AKADEMI/UNIV. yang telah memiliki kerja sama dengan SMJC.
        </p>
        <br />
        <h4 className="font-semibold">Proses</h4>
        <Image src={partner} width={1000} height={1000} alt="flow"></Image>
        <p className="italic text-sm">※Jika ingin lanjut kuliah ke jepang</p>
      </div>
    </section>
  )
}
