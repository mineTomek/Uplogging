import type { Metadata } from 'next'
import { getContentFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uplogging',
  description: 'App for logging achievements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${
          getContentFont().className
        } bg-slate-50 text-slate-950 dark:bg-black dark:text-slate-50`}
      >
        {children}
      </body>
    </html>
  )
}
