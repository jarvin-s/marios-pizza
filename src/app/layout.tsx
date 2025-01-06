import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './components/Auth/Providers'
import Navbar from './components/Header/Navbar'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Mario's Pizza",
    description:
        'An innovative web app to modernise a pizza place, enhancing online ordering and staff efficiency',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={`${poppins.className} antialiased`}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
