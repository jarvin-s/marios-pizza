'use client'
import { UserProvider } from '../Auth/UserContext'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return <UserProvider>{children}</UserProvider>
}

export default AuthProvider
