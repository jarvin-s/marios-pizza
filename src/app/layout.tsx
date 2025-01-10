import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './components/Auth/Providers'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Mario's Pizza | Bezorgen & Afhalen",
    description:
        "Mario's Pizza is een pizza restaurant gebaseerd in Eindhoven & 's Hertogenbosch. We serveren de beste pizza's in het land! Bezorgen en afhalen is mogelijk.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <head>
                <meta name='theme-color' content='#f8eec8' />
            </head>
            <body className={`${poppins.className} antialiased`}>
                <Providers>
                    <Navbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
