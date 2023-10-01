
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProblemListNavbar from '../components/ProblemListNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Problem',
  description: 'Problem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen h-screen overflow-hidden'>
            <ProblemListNavbar/>
            {children}
        </div>
      </body>
    </html>
  )
}
