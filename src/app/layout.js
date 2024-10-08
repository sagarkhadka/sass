import { Wix_Madefor_Display } from 'next/font/google'
import './globals.css'

const wix = Wix_Madefor_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Aim Tell',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={wix.className}>{children}</body>
    </html>
  )
}
