import '../app/globals.css'
import Layout from '../app/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <Layout>
        <div className={`${inter.className}`}>
            about
        </div>
    </Layout>
  )
}
