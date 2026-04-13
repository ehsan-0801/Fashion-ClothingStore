import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Hind_Siliguri } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'bengali'],
  variable: '--font-bengali'
});

export const metadata: Metadata = {
  title: 'Nadia Fashion - Premium Women\'s Fashion in Bangladesh',
  description: 'আপনার স্টাইল, আপনার আত্মবিশ্বাস। প্রিমিয়াম মানের ফ্যাশন পণ্য এবং দ্রুত ডেলিভারি সেবা। ক্যাশ অন ডেলিভারি উপলব্ধ।',
  generator: 'Nadia-Fashion',
  keywords: ['fashion', 'women clothing', 'dresses', 'Bangladesh', 'online shopping', 'নারীদের পোশাক'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn" className="bg-background" suppressHydrationWarning>
      <body className={`font-sans antialiased ${_hindSiliguri.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
