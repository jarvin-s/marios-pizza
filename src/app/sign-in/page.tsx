'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await signIn('credentials', {
            email,
            password,
        })

        if (res?.error) {
            setError(res.error)
        } else {
            router.push('/')
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
                {error && (
                    <div className='rounded-lg border-l-8 border-red-600 bg-red-200 py-2 text-sm font-bold text-red-600'>
                        {/* Error icon */}
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
                            De combinatie van e-mailadres en wachtwoord is niet
                            geldig.
                        </div>
                    </div>
                )}
                <Button
                    type='submit'
                    className='w-full bg-[#d23d2d] text-white duration-300 hover:bg-[#b93229]'
                >
                    Inloggen
                </Button>
            </form>
        </div>
    )
}

export default Login
