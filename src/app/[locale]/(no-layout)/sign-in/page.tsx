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
import login from '@/../public/login-image.jpg'
import Image from 'next/image'
import logo from '@/../public/logo.svg'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

export default function SignInPage() {
    const session = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const t = useTranslations('sign-in')
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
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
        <div className='flex min-h-screen'>
            <div className='relative flex flex-1 items-center justify-center bg-gray-50 px-4 md:flex-[.4]'>
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
                <div className='w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-xl'>
                    <h2
                        className={`${anton.className} text-center text-3xl text-gray-900`}
                    >
                        {t('title')}
                    </h2>

                    <form
                        className='flex flex-col space-y-4'
                        onSubmit={handleSubmit}
                    >
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

                        <div className='pt-4 text-center'>
                            <p>
                                {t('account')}
                                <Link
                                    href={`/${selectedLocale}/sign-up`}
                                    className='pl-2 text-[#0090e3] hover:underline'
                                >
                                    {t('register')}
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden bg-blue-500 md:flex md:flex-[.6]'>
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
