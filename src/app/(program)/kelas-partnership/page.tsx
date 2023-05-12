'use client'
import down from 'public/down.svg'
import Image from 'next/image'

export default function KelasPartnership() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 "> Kelas Partnership (SMA/Akademi/Universitas)</h1>
        <p>Merupakan kelas penunjang/pilihan bahasa Jepang dalam sekolah/kampus yang berbasis biaya murah. Dalam 2 tahun siswa dapat memiliki kemampuan dasar level N5 atau N4 sambil mempersiapkan diri untuk dalam program</p>
        <p> Pre-College, program beasiswa atau program2 lainnya yang ditawarkan setelah tamat sekolah atau universitas.</p>
        <p>Syarat Peserta : Siswa/Mahasiswa yang masih belajar dalam ruang lingkup SMA/AKADEMI/UNIV. yang telah memiliki kerja sama dengan SMJC. </p>
        <ul>
          <li className="">
            <h3 className="text-center text-lg mt-7 font-semibold">Mendaftar lewat sekolah masing2</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Orientasi</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold"> Kelas Budaya </h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Evaluasi Test Ujian (SMJC)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Tes kemampuan dasar bahasa Jepang (N5/N4) </h3>
            <p className="text-center">※Jika ingin lanjut kuliah ke jepang</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
