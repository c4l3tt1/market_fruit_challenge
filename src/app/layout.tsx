import { Header } from '@/components/header'
import { CssBaseline } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import React from 'react'
import './globals.css'
import MUIThemeProvider from './provider'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Market Fruit List - A SPA to handler your buys',
  description: 'Make it easy to see, register and list your market buys',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${montserrat.className}`}>
        <Header />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MUIThemeProvider>
            <>
              <CssBaseline />
              <main className="bg-white mt-[70px] py-10">{children}</main>
            </>
          </MUIThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
