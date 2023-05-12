'use client'
import down from 'public/down.svg'
import Image from 'next/image'

export default function KelasBeasiswa() {
  return (
    <section className="">
      <div className="my-14 relative mx-auto container">
        <h1 className="font-bold text-2xl my-4 ">Kelas Beasiswa Yomiuri</h1>
        <p className="my-3">
          Kelas persiapan/pembekalan bagi para siswa/mahasiswa yang terpilih sebagai penerima beasiswa dari Yomiuri Shinbun (perusahaan koran terbesar di Jepang). Bea siswa ini khusus untuk siswa di sekolah bahasa di Jepang yang mencover
          seluruh biaya pendidikan selama belajar/kuliah di Jepang dalam kurun waktu 2-4 tahun.
        </p>
        <p>
          Syarat Peserta : Lulus seleksi berkas dalam SMJC (Tamat SMA/AKADEMI/UNIVERSITAS). Memiliki kemampuan bahasa Jepang Level N4 keatas. Mampu berkomunikasi dasar dalam bahasa Jepang. Lulus tes interview dengan pihak Yomiuri Shinbun.
          Memiliki SIM C. Bersedia bekerja paruh waktu sbg distributor koran selama belajar sekolah bahasa.
        </p>
        <ul>
          <li className="">
            <h3 className="text-center text-lg mt-7 font-semibold">Mengikuti seleksi berkas (SMJC)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Test Interview (pihak Yomiuri)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold"> Pemberkasan </h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Kelas Orientasi/pembekalan (Pihak Jepang)</h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Ejibility </h3>
            <Image className="mx-auto" src={down} width={20} height={20} alt="panah"></Image>
          </li>
          <li className="">
            <h3 className="text-center text-lg my-1 font-semibold">Orientasi Dasar (SMJC) Go to Japan </h3>
          </li>
        </ul>
      </div>
    </section>
  )
}
