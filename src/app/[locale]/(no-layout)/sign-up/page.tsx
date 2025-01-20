'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Anton } from 'next/font/google'
import { supabase } from '@/app/lib/supaBaseClient'
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import useSession from '@/app/hooks/useSession'
import Image from 'next/image'
import login from '@/../public/login-image.jpg'
import logo from '@/../public/logo.svg'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

export default function SignUpPage() {
    const session = useSession()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    useEffect(() => {
        if (session?.user) {
            redirect(`/${selectedLocale}`)
        }
    })

    const t = useTranslations('sign-up')

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

    const handleGoogleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `https://marios-pizza.vercel.app/${selectedLocale}`,
            },
        })

        if (error) {
            setError(error.message)
        }
    }

    return (
        <div className='flex min-h-screen'>
            <div className='relative flex flex-1 items-center justify-center bg-gray-50 px-4 sm:px-6 md:flex-[.4] lg:px-8'>
                <div className='absolute top-10'>
                    <Link href={`/${selectedLocale}/`}>
                        <Image
                            src={logo}
                            width={300}
                            height={300}
                            alt="Mario's Pizza logo"
                            className='h-auto'
                        />
                    </Link>
                </div>
                <div className='mt-[12.5rem] w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md'>
                    <h2
                        className={`${anton.className} text-center text-3xl text-gray-900`}
                    >
                        {t('title')}
                    </h2>

                    <form
                        className='flex flex-col space-y-4'
                        onSubmit={handleSubmit}
                    >
                        <div className='flex gap-4'>
                            <div className='flex-1 space-y-2'>
                                <Label htmlFor='firstName'>
                                    {t('first-name')}
                                </Label>
                                <Input
                                    id='firstName'
                                    type='text'
                                    placeholder={t('first-name')}
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                            </div>
                            <div className='flex-1 space-y-2'>
                                <Label htmlFor='lastName'>
                                    {t('last-name')}
                                </Label>
                                <Input
                                    id='lastName'
                                    type='text'
                                    placeholder={t('last-name')}
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='email'>{t('email')}</Label>
                            <Input
                                id='email'
                                type='email'
                                placeholder={t('email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='password'>{t('password')}</Label>
                            <Input
                                id='password'
                                type='password'
                                placeholder={t('password')}
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
                                    {t('error')}
                                </div>
                            </div>
                        )}

                        <Button
                            type='submit'
                            className='w-full bg-[#d23d2d] text-white duration-300 hover:bg-[#b93229]'
                        >
                            {t('button')}
                        </Button>

                        <div className='flex items-center'>
                            <hr className='w-full border-t-[1px] border-[#49494923]' />
                            <span className='px-4 opacity-60'>{t('or')}</span>
                            <hr className='w-full border-t-[1px] border-[#49494923]' />
                        </div>
                        <Button
                            type='button'
                            onClick={handleGoogleSignIn}
                            className='flex w-full items-center justify-center rounded-md border border-gray-300 bg-white text-black shadow-sm hover:bg-gray-50'
                        >
                            <GoogleIcon />
                            {t('google')}
                        </Button>

                        <div className='pt-4 text-center'>
                            <p>
                                {t('account')}
                                <Link
                                    href={`/${selectedLocale}/sign-in`}
                                    className='pl-2 text-[#0090e3] hover:underline'
                                >
                                    {t('login')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden md:flex md:flex-[.6]'>
                <Image
                    src={login}
                    width={0}
                    height={0}
                    alt='Login image'
                    className='object-cover'
                />
            </div>
        </div>
    )
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='31.27'
            height='32'
            viewBox='0 0 256 262'
        >
            <path
                fill='#4285F4'
                d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
            />
            <path
                fill='#34A853'
                d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
            />
            <path
                fill='#FBBC05'
                d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z'
            />
            <path
                fill='#EB4335'
                d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
            />
        </svg>
    )
}
