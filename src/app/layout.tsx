import type { Metadata } from 'next'
import { Anton, Poppins } from 'next/font/google'
import './globals.css'
import Providers from './components/Auth/Providers'
import Navbar from './components/Header/Navbar'

const anton = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Mario's Pizza",
    description:
        'An innovative web app to modernize a pizza place, enhancing online ordering and staff efficiency',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={`${anton.className} antialiased`}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
