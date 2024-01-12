import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'BULL RUN | SOLANA 🦬',
  description: 'Unlock the potential of decentralized finance with BullRunSol on the Solana blockchain. Join the crypto revolution and explore new possibilities in financial freedom.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.bullrunsolana.xyz/',
    site_name: 'BullRunSol',
    title: 'BullRunSol - Decentralized Finance on Solana',
    description: 'Unlock the potential of decentralized finance with BullRunSol on the Solana blockchain. Join the crypto revolution and explore new possibilities in financial freedom.',
    images: [
      {
        url: 'images/og-image.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'BullRunSol - Decentralized Finance on Solana',
      },
    ],
  },
  twitter: {
    handle: '@_Bullrunsol',
    site: '@_Bullrunsol',
    cardType: 'summary_large_image',
  }
}


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}


