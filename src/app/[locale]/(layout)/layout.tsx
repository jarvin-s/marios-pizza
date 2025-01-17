import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../../globals.css'
import Providers from '@/app/components/Auth/Providers'
import Navbar from '@/app/components/Header/Navbar'
import Footer from '@/app/components/Footer/Footer'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from '@/components/ui/toaster'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Mario's Pizza - Bezorgen & Afhalen",
    description:
        "Mario's Pizza is een pizza restaurant gebaseerd in Eindhoven & 's Hertogenbosch. We serveren de beste pizza's in het land! Bezorgen en afhalen is mogelijk.",
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const locale = await getLocale()
    const messages = await getMessages()
    return (
        <html lang={locale}>
            <head>
                <meta name='theme-color' content='#f8eec8' />
            </head>
            <body className={`${poppins.className} antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <Providers>
                        <Navbar />
                        {children}
                        <Toaster />
                        <Footer />
                    </Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
