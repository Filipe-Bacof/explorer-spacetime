import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo efetuado no evento Next Level Week da Rocketseat',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-gray-900 text-gray-50`}>
        {children}
      </body>
    </html>
  )
}
