'use client'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
    SheetHeader,
    SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Anton } from 'next/font/google'
import SignOut from '../Auth/SignOut'
import Image from 'next/image'
import logo from '../../../../public/logo.svg'
import useSession from '@/app/hooks/useSession'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import LanguageSwitcher from '../LanguageSwitcher'
import SheetLanguageSwitcher from '../SheetLanguageSwitcher'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Navbar = () => {
    const session = useSession()
    const currentPath = usePathname()
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    const t = useTranslations('nav')
    return (
        <>
            <header className='sticky top-0 z-50 flex h-20 w-full shrink-0 items-center border-b-[1px] border-[#ffffff48] bg-primary-cream px-6 text-primary-orange shadow-md backdrop-blur-md'>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            size='icon'
                            className='bg-primary-cream duration-300 hover:bg-[#f1e6bf] md:hidden'
                        >
                            <MenuIcon className='h-6 w-4 text-black' />
                            <span className='sr-only'>
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        className={`${anton.className} z-[999] bg-primary-cream uppercase text-primary-orange`}
                        side='left'
                    >
                        <SheetHeader>
                            <SheetDescription hidden>
                                {' '}
                                Mario&apos;s Pizza
                            </SheetDescription>
                        </SheetHeader>
                        <SheetTitle className='hidden'>
                            Mario&apos;s Pizza
                        </SheetTitle>
                        <Link
                            className='flex justify-center'
                            href='/'
                            prefetch={false}
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                className='ml-4 md:ml-0'
                                src={logo}
                                alt='Marios Pizza Logo'
                                width={150}
                                height={0}
                            />
                            <span className='sr-only'>Mario&apos;s Pizza</span>
                        </Link>
                        <hr className='mt-4 border-t-[1px] border-[#49494923]' />
                        <div
                            style={{
                                textTransform: 'none',
                                fontFamily: 'poppins',
                            }}
                        >
                            <p className='mt-4 flex justify-center text-3xl'>
                                {session
                                    ? 'Hi, ' +
                                      session?.user.user_metadata.first_name
                                    : ''}
                            </p>
                        </div>
                        <div className='grid gap-2 py-6'>
                            <Link
                                href={`/${selectedLocale}/menu`}
                                className='flex w-full items-center py-2 text-2xl hover:underline'
                                prefetch={false}
                                onClick={() => setOpen(false)}
                            >
                                Menu
                            </Link>
                            <Link
                                href={`/${selectedLocale}/aanbiedingen`}
                                className='flex w-full items-center py-2 text-2xl hover:underline'
                                prefetch={false}
                                onClick={() => setOpen(false)}
                            >
                                {t('aanbiedingen')}
                            </Link>
                            <Link
                                href={`/${selectedLocale}/contact`}
                                className='flex w-full items-center py-2 text-2xl hover:underline'
                                prefetch={false}
                                onClick={() => setOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                        <hr className='mt-4 border-t-[1px] border-[#49494923]' />
                        <div className='mt-4 flex items-end justify-center'>
                            {session ? (
                                <SignOut />
                            ) : (
                                <div className='grid w-full grid-cols-2 gap-4'>
                                    <Link
                                        href={`/${selectedLocale}/sign-in`}
                                        onClick={() => setOpen(false)}
                                    >
                                        <Button
                                            className={`${anton.className} w-full bg-primary-orange text-xl uppercase text-white duration-300 hover:bg-[#b93329ab]`}
                                        >
                                            {t('sign-in')}
                                        </Button>
                                    </Link>
                                    <Link href={`/${selectedLocale}/sign-up`}>
                                        <Button
                                            className={`${anton.className} w-full border-[1px] border-primary-orange bg-transparent text-xl uppercase text-primary-orange duration-300 hover:bg-primary-orange/30`}
                                        >
                                            {t('sign-up')}
                                        </Button>
                                    </Link>
                                </div>
                            )}
                            <hr className='mt-4 border-t-[1px] border-[#49494923]' />
                        </div>
                        <div className='mt-4'>
                            <SheetLanguageSwitcher />
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href='/' className='flex'>
                    <Image
                        className='ml-4 md:ml-0'
                        src={logo}
                        alt='Marios Pizza Logo'
                        width={150}
                        height={0}
                    />
                    <span className='sr-only'>Mario&apos;s Pizza</span>
                </Link>
                <div className='hidden md:absolute md:left-1/2 md:mx-auto md:flex md:-translate-x-1/2 md:transform'>
                    <NavigationMenu className='hidden md:flex'>
                        <NavigationMenuList
                            className={`${anton.className} text-2xl uppercase`}
                        >
                            <NavigationMenuLink asChild>
                                <Link
                                    href={`/${selectedLocale}/menu`}
                                    className={
                                        currentPath == `/${selectedLocale}/menu`
                                            ? 'group inline-flex h-9 w-max items-center justify-center rounded-full bg-primary-orange px-4 py-2 text-white disabled:pointer-events-none disabled:opacity-50'
                                            : 'group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 hover:bg-primary-orange hover:text-white disabled:pointer-events-none disabled:opacity-50'
                                    }
                                    prefetch={false}
                                >
                                    Menu
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={`/${selectedLocale}/aanbiedingen`}
                                    className={
                                        currentPath ==
                                        `/${selectedLocale}/aanbiedingen`
                                            ? 'group inline-flex h-9 w-max items-center justify-center rounded-full bg-primary-orange px-4 py-2 text-white disabled:pointer-events-none disabled:opacity-50'
                                            : 'group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 hover:bg-primary-orange hover:text-white disabled:pointer-events-none disabled:opacity-50'
                                    }
                                    prefetch={false}
                                >
                                    {t('aanbiedingen')}
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={`/${selectedLocale}/contact`}
                                    className={
                                        currentPath ==
                                        `/${selectedLocale}/contact`
                                            ? 'group inline-flex h-9 w-max items-center justify-center rounded-full bg-primary-orange px-4 py-2 text-white disabled:pointer-events-none disabled:opacity-50'
                                            : 'group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 hover:bg-primary-orange hover:text-white disabled:pointer-events-none disabled:opacity-50'
                                    }
                                    prefetch={false}
                                >
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className='ml-auto flex items-center gap-2'>
                    <div className='hidden md:flex'>
                        <LanguageSwitcher />
                    </div>
                    {session ? (
                        <>
                            <span className='mr-2'>
                                Hi, {session.user.user_metadata.first_name}
                            </span>{' '}
                            <SignOut />
                        </>
                    ) : (
                        <>
                            <Link href={`/${selectedLocale}/sign-in`}>
                                <Button
                                    className={`${anton.className} bg-primary-orange text-xl uppercase text-white duration-300 hover:bg-[#b93329ab]`}
                                >
                                    {t('sign-in')}
                                </Button>
                            </Link>
                            <Link href={`/${selectedLocale}/sign-up`}>
                                <Button
                                    className={`${anton.className} border-[1px] border-primary-orange bg-transparent text-xl uppercase text-primary-orange duration-300 hover:bg-primary-orange/30`}
                                >
                                    {t('sign-up')}
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </header>
        </>
    )
}

export default Navbar

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <line x1='4' x2='20' y1='12' y2='12' />
            <line x1='4' x2='20' y1='6' y2='6' />
            <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
    )
}
