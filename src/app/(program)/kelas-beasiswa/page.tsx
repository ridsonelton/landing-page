'use client'
import yomiuri from 'public/yomiuri.png'
import Image from 'next/image'

export default function KelasBeasiswa() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 ">Kelas Orientasi Bea Siswa (Yomiuri Shinbun)</h1>
        <p className="my-3">
          Kelas pembekalan/orientasi bagi para siswa/mahasiswa yang terpilih sebagai penerima beasiswa dari Yomiuri Shinbun (perusahaan koran terkemuka di Jepang). Bea siswa Yomiuri Shinbung dikhususkan untuk siswa yang akan menempuh
          pendidikan bahasa Jepang di Kokusai Kotoba Gakuin Nihonggo gakko di Jepang. Bea siswa hanya mencover biaya pendidikan selama belajar/kuliah di Jepang dalam kurun waktu 2 sd 4 tahun selama di Jepang sebesar Adapun biaya hidup
          (living cost) bisa didapatkan dari kerja paruh waktu di kantor2 cabang distributor koran dalam propinsi Shizuoka, Jepang.
        </p>
        <p>Kelas Orientasi ini diselenggarakan 2X dalam seminggu (2 jam/pertemuan) dgn total masa belajar 1.5 bulan (14 kali pertemuan, sekitar 28 jam) . </p>
        <br />
        <p>
          <span className="font-semibold">Syarat Peserta :</span>
          <br />
          <ul className="list-disc">
            <li> Lulus seleksi berkas dalam SMJC (Tamat SMA/AKADEMI/UNIVERSITAS).</li>
            <li> Memiliki kemampuan bahasa Jepang Level N4 keatas.</li>
            <li> Mampu berkomunikasi dasar dalam bahasa Jepang.</li>
            <li>Lulus tes interview dengan pihak Yomiuri Shinbun. </li>
            <li>Memiliki SIM C.</li>
            <li>Bersedia bekerja paruh waktu sbg distributor koran selama belajar sekolah bahasa.</li>
          </ul>
        </p>
        <br />
        <h4 className="font-semibold">Proses</h4>
        <Image src={yomiuri} width={1000} height={1000} alt="yomiuri"></Image>
      </div>
    </section>
  )
}
