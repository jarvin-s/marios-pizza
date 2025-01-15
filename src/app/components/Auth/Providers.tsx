'use client'
import { CartProvider } from '@/app/context/CartContext'
import { UserProvider } from '../Auth/UserContext'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <CartProvider>
            <UserProvider>{children}</UserProvider>
        </CartProvider>
    )
}

export default AuthProvider
