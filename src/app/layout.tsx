import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer'

const pop = Poppins({
  weight: ['400', '500', '600', '300'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'SMJC',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pop.className}  bg-gray-100 `}>
        {children}

        <Footer></Footer>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  )
}
