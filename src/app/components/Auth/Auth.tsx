'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Anton } from 'next/font/google'
import { supabase } from '@/app/lib/supaBaseClient'
import { User } from '@supabase/supabase-js'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Auth = () => {
    const [user, setUser] = useState<User | null>(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
    const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false)

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value)
    }
    const handleFirstNameChange = (event: any) => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = (event: any) => {
        setLastName(event.target.value)
    }

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
        } else {
            setUser(data.user)
            window.location.reload()
        }
    }

    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        const { data, error } = await supabase.auth.admin.createUser({
            email,
            password,
            email_confirm: true,
            user_metadata: {
                first_name: firstName,
                last_name: lastName,
            },
        })

        if (error) {
            console.log(data)
            setError(error.message)
        }
    }

    return (
        <>
            <Dialog
                open={isLoginDialogOpen}
                onOpenChange={setIsLoginDialogOpen}
            >
                <DialogTrigger asChild>
                    <Button
                        className={`${anton.className} bg-[#d23d2d] text-xl uppercase text-white duration-300 hover:bg-[#b93329ab]`}
                        onClick={() => setIsLoginDialogOpen(true)}
                    >
                        Inloggen
                    </Button>
                </DialogTrigger>
                <DialogContent className='mx-2 h-[400px] overflow-auto sm:max-w-[425px] md:mx-4'>
                    <DialogHeader>
                        <DialogTitle>Inloggen</DialogTitle>
                    </DialogHeader>
                    <form
                        className='flex flex-col space-y-4 px-2 sm:px-0'
                        onSubmit={handleLoginSubmit}
                    >
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
                                onChange={handleEmailChange}
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
                                onChange={handlePasswordChange}
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
                                    De combinatie van e-mailadres en wachtwoord
                                    is niet geldig.
                                </div>
                            </div>
                        )}
                        <DialogFooter className='mt-4'>
                            <Button
                                type='submit'
                                className='w-full bg-[#d23d2d] text-white duration-300 hover:bg-[#b93229]'
                            >
                                Inloggen
                            </Button>
                        </DialogFooter>
                    </form>
                    <div className='text-center'>
                        <p>
                            Nog geen account?
                            <Button
                                className='pl-2 text-[#0090e3]'
                                variant='link'
                                onClick={() => {
                                    setIsLoginDialogOpen(false)
                                    setIsRegisterDialogOpen(true)
                                }}
                            >
                                Registreer nu
                            </Button>
                        </p>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Register Dialog */}
            <Dialog
                open={isRegisterDialogOpen}
                onOpenChange={setIsRegisterDialogOpen}
            >
                <DialogContent className='mx-2 h-[400px] rounded-lg sm:max-w-[425px] md:mx-4'>
                    <DialogHeader>
                        <DialogTitle>Registreren</DialogTitle>
                    </DialogHeader>
                    <form
                        className='space-y-4 px-2 sm:px-0'
                        onSubmit={handleRegisterSubmit}
                    >
                        <div className='flex gap-4'>
                            <div className='space-y-2'>
                                <Label
                                    htmlFor='firstName'
                                    className='text-right'
                                >
                                    Voornaam
                                </Label>
                                <Input
                                    id='firstName'
                                    type='text'
                                    placeholder='Voornaam'
                                    className='flex-1'
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                />
                            </div>
                            <div className='space-y-2'>
                                <Label
                                    htmlFor='lastName'
                                    className='text-right'
                                >
                                    Achternaam
                                </Label>
                                <Input
                                    id='lastName'
                                    type='text'
                                    placeholder='Achternaam'
                                    className='flex-1'
                                    value={lastName}
                                    onChange={handleLastNameChange}
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
                                className='flex-1'
                                value={email}
                                onChange={handleEmailChange}
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
                                onChange={handlePasswordChange}
                            />
                        </div>
                        <DialogFooter>
                            <Button
                                type='submit'
                                className='w-full bg-[#d23d2d] text-white duration-300 hover:bg-[#b93229]'
                            >
                                Registreer
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Auth
