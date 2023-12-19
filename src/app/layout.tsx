import React from 'react'
import { Metadata } from 'next'
import { mergeOpenGraph } from './shared/utils/mergeOpenGraph';

// import { AdminBar } from './_PL/_components/AdminBar'
// import { Footer } from './_PL/_components/Footer'
// import { Header } from './_PL/_components/Header'
// import { Providers } from './_PL/_providers'
// import { InitTheme } from './_PL/_providers/Theme/InitTheme'
// import { mergeOpenGraph } from './_PL/_utilities/mergeOpenGraph'

// import './_css/app.scss'
// import './css/global.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
          {children}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  openGraph: mergeOpenGraph(),
}
