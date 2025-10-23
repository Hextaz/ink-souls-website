import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

export const metadata = {
  title: 'Ink Souls',
  description: 'Official site for Ink Souls esports team'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-900 text-white min-h-screen body-ink">
        <Header />
        {children}
      </body>
    </html>
  )
}
