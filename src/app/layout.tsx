import './globals.css'
import type { Metadata } from 'next'
import { NavBar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'


export const metadata: Metadata = {
  title: 'Ziad Hosny',
  description: 'My About Me Page',
  icons: ['./z.png']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id='root'>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
