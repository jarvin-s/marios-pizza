'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Anton } from 'next/font/google'
import { supabase } from '@/app/lib/supaBaseClient'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

export default function SignUpPage() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const { data: userData, error: registerError } =
            await supabase.auth.admin.createUser({
                email,
                password,
                email_confirm: true,
                user_metadata: {
                    first_name: firstName,
                    last_name: lastName,
                },
            })

        if (registerError) {
            console.log(userData)
            setError(registerError.message)
            return
        }

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {    
            setError(error.message)
        } else {
            router.push('/')
            window.location.reload()
        }
    }

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8'>
            <div className='w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md'>
                <h2
                    className={`${anton.className} text-center text-3xl text-gray-900`}
                >
                    Registreren
                </h2>

                <form
                    className='flex flex-col space-y-4'
                    onSubmit={handleSubmit}
                >
                    <div className='flex gap-4'>
                        <div className='flex-1 space-y-2'>
                            <Label htmlFor='firstName' className='text-right'>
                                Voornaam
                            </Label>
                            <Input
                                id='firstName'
                                type='text'
                                placeholder='Voornaam'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='flex-1 space-y-2'>
                            <Label htmlFor='lastName' className='text-right'>
                                Achternaam
                            </Label>
                            <Input
                                id='lastName'
                                type='text'
                                placeholder='Achternaam'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='email' className='text-right'>
                            E-mailadres
                        </Label>
                        <Input
                            id='email'
                            type='email'
                            placeholder='E-mailadres'
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && (
                        <div className='rounded-lg border-l-8 border-red-600 bg-red-200 py-2 text-sm font-bold text-red-600'>
                            <div className='ml-2 flex items-center justify-center gap-4'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='48'
                                    height='48'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fill='currentColor'
                                        d='M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22'
                                    />
                                </svg>
                                {error}
                            </div>
                        </div>
                    )}

                    <Button
                        type='submit'
                        className='w-full bg-[#d23d2d] text-white duration-300 hover:bg-[#b93229]'
                    >
                        Registreer
                    </Button>
                </form>

                <div className='mt-4 text-center'>
                    <p>
                        Al een account?
                        <Link
                            href='/sign-in'
                            className='pl-2 text-[#0090e3] hover:underline'
                        >
                            Log hier in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
