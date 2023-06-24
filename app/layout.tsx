import "./globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"
// import { Navbar } from '/widgets/Navbar'

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Школа Программ</title>
        <meta name="description" content="Бриф - Школа Программ" />
      </Head>
      <div className={`layout-wrp ${inter.className}`}>
        {/* <Navbar /> */}
        {children}
      </div>
    </>
  )
}
