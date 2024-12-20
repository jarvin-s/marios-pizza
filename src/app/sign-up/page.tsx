'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { supabase } from '../lib/supaBaseClient'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError('De wachtwoorden komen niet overeen.')
            return
        }

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            })

            if (error) {
                setError(
                    error.message ||
                        'Er is iets misgegaan. Probeer het opnieuw.'
                )
            } else {
                setSuccess(true)
                setError('')
                setTimeout(() => {
                    router.push('/') // Redirect to login after a short delay
                }, 2000)
            }
        } catch (err) {
            setError('Er is een fout opgetreden. Probeer het later opnieuw.')
        }
    }

    return (
        <div className='flex h-screen items-center justify-center bg-gray-100'>
            <form className='space-y-4 px-2 sm:px-0' onSubmit={handleSubmit}>
                <div className='space-y-2'>
                    <Label htmlFor='email' className='text-right'>
                        E-mailadres
                    </Label>
                    <Input
                        id='email'
                        type='email'
                        placeholder='E-mailadres'
                        className='flex-1'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='password' className='text-right'>
                        Wachtwoord
                    </Label>
                    <Input
                        id='password'
                        type='password'
                        placeholder='Wachtwoord'
                        className='flex-1'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='space-y-2'>
                    <Label htmlFor='confirmPassword' className='text-right'>
                        Bevestig wachtwoord
                    </Label>
                    <Input
                        id='confirmPassword'
                        type='password'
                        placeholder='Bevestig wachtwoord'
                        className='flex-1'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {error && (
                    <div className='rounded-lg border-l-8 border-red-600 bg-red-200 py-2 text-sm font-bold text-red-600'>
                        {error}
                    </div>
                )}
                {success && (
                    <div className='rounded-lg border-l-8 border-green-600 bg-green-200 py-2 text-sm font-bold text-green-600'>
                        Registratie succesvol! Je wordt doorgestuurd...
                    </div>
                )}
                <Button
                    type='submit'
                    className='w-full bg-[#007bff] text-white duration-300 hover:bg-[#0056b3]'
                >
                    Aanmelden
                </Button>
                <p className='text-center text-sm'>
                    Heb je al een account?{' '}
                    <a href='/sign-in' className='text-blue-500 underline'>
                        Inloggen
                    </a>
                </p>
            </form>
        </div>
    )
}

export default SignUp
