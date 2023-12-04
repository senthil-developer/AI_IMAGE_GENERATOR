import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import UserInfo from '@/components/UserInfo'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Generator',
  description: 'AI Generator will generator free Room picture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className+'dark:bg-[#17181c] bg-slate-500 min-h-screen flex flex-col container mx-auto'}>
        <header className='w-full'>
          <div className='container border-b p-5 mx-auto items-center flex justify-between'>
            <Link href='/' className='flex items-center gap-3 '>
              <Image src={'/couch.svg'} alt='logo_image' width={50} height={50}/>
              <h2 className='md:text-3xl sm:text-2xl font-bold'>AI GENERATOR</h2>
            </Link>
            {/* UserInfo */}
            <UserInfo/>
          </div>
        </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  )
}
