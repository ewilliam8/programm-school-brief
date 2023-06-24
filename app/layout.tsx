import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
// import { Navbar } from '/widgets/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Школа Программ',
  description: 'Бриф - Школа Программ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`layout-wrp ${inter.className}`}>
      {/* <Navbar /> */}
      {children}
    </div>
  )
}
