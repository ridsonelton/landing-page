'use client'
import yomiuri from 'public/yomiuri.png'
import Image from 'next/image'

export default function KelasBeasiswa() {
  return (
    <div>
      <section className="">
        <div className="my-14 relative mx-auto container">
          <h1 className="font-bold text-2xl my-4 ">Kelas Orientasi Bea Siswa</h1>
          <p className="my-3">
            Kelas pembekalan/orientasi bagi para siswa/mahasiswa yang terpilih sebagai penerima beasiswa dari Yomiuri Shinbun (perusahaan koran terkemuka di Jepang). Bea siswa mencover biaya pendidikan selama belajar/kuliah di Jepang dalam
            kurun waktu 2 sd 4 tahun selama di Jepang.
          </p>
          <p className="my-3">Bea siswa Yomiuri Shinbun dikhususkan untuk siswa yang akan menempuh pendidikan bahasa Jepang di Kokusai Kotoba Gakuin Nihonggo gakko di Jepang.</p>
          <p>Adapun biaya hidup (living cost) bisa didapatkan dari kerja paruh waktu di kantor2 cabang distributor koran dalam propinsi Shizuoka, Jepang.</p>
          <p>Kelas Orientasi diselenggarakan 2 kali seminggu, 2 jam/pertemuan (14 kali pertemuan). </p>
          <br />
          <div>
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
          </div>
          <br />
          <h4 className="font-semibold">Proses</h4>
          <Image src={yomiuri} width={1000} height={1000} alt="yomiuri"></Image>
        </div>
      </section>
      <section className="py-4 bg-slate-200 w-full">
        <div className="container mx-14">
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
            <li>Surat Keterangan Sehat</li>
            <li>SIM C + surat keterangan dari kepolisian setempat</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
