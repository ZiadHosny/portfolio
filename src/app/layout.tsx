import type { Metadata } from 'next'
import { NavBar } from '@/components/Navbar/Navbar'
import { Footer } from '@/components/Footer/Footer'
import './AboutMe.css';
import '@/styles/main.css'


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
      <body >
        <div id='root'>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
