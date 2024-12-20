'use client'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetTitle,
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
import Auth from '../Auth/Auth'
import useSession from '@/app/hooks/useSession'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Navbar = () => {
    const session = useSession()
    return (
        <>
            <header className='sticky top-0 z-[100] flex h-20 w-full shrink-0 items-center border-b-[1px] border-[#ffffff48] bg-primary-cream px-6 text-primary-orange backdrop-blur-md md:justify-center'>
                <Sheet>
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
                        className='z-[999] bg-primary-cream text-primary-orange'
                        side='left'
                    >
                        <SheetTitle className='hidden'>
                            Mario's Pizza
                        </SheetTitle>
                        <Link
                            className='flex justify-center'
                            href='#'
                            prefetch={false}
                        >
                            <span className='sr-only'>Mario's Pizza</span>
                        </Link>
                        <div className='grid gap-2 py-6'>
                            <Link
                                href='/'
                                className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href='/aanbiedingen'
                                className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                                prefetch={false}
                            >
                                Aanbiedingen
                            </Link>
                            <Link
                                href='/contact'
                                className='flex w-full items-center py-2 text-lg font-semibold hover:underline'
                                prefetch={false}
                            >
                                Contact
                            </Link>
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
                    <span className='sr-only'>Mario's Pizza</span>
                </Link>
                <div className='hidden md:flex md:flex-grow md:justify-center'>
                    <NavigationMenu className='hidden md:flex'>
                        <NavigationMenuList
                            className={`${anton.className} text-2xl uppercase`}
                        >
                            <NavigationMenuLink asChild>
                                <Link
                                    href='/'
                                    className='group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 duration-150 hover:bg-primary-orange hover:text-white disabled:pointer-events-none disabled:opacity-50'
                                    prefetch={false}
                                >
                                    Menu
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href='/aanbiedingen'
                                    className='group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 duration-150 hover:bg-primary-orange hover:text-white disabled:pointer-events-none disabled:opacity-50'
                                    prefetch={false}
                                >
                                    Aanbiedingen{' '}
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link
                                    href='/contact'
                                    className='group inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 duration-150 hover:bg-primary-orange hover:text-white disabled:pointer-events-none disabled:opacity-50'
                                    prefetch={false}
                                >
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className='ml-auto hidden items-center md:flex'>
                    {/* {!session ? <SignOut /> : <Auth />} */}
                    {session ? <SignOut /> : <Auth />}
                </div>
            </header>
        </>
    )
}

export default Navbar

function MenuIcon(props: any) {
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

// 'use client'

// import { useState } from 'react'

// const Navbar = () => {
//     const [overlayStyle, setOverlayStyle] = useState({
//         left: 0,
//         top: 0,
//         width: 0,
//         height: 0,
//         opacity: 0,
//     })

//     const handleMouseOver = (e: React.MouseEvent<HTMLLIElement>) => {
//         const rect = e.currentTarget.getBoundingClientRect()
//         setOverlayStyle({
//             left: rect.x,
//             top: rect.y + window.scrollY,
//             width: rect.width,
//             height: rect.height,
//             opacity: 1,
//         })
//     }

//     const handleMouseOut = () => {
//         setOverlayStyle((prev) => ({ ...prev, opacity: 0 }))
//     }

//     const navItems = ['Home', 'About', 'Contact', 'Shop', 'Portfolio / Works']

//     return (
//         <header className='relative mt-4 flex items-center justify-center'>
//             <div className='relative'>
//                 {/* Hover Overlay */}
//                 <div
//                     className='absolute z-0 rounded-md bg-red-500 transition-all duration-300'
//                     style={{
//                         left: `${overlayStyle.left}px`,
//                         top: `${overlayStyle.top}px`,
//                         width: `${overlayStyle.width}px`,
//                         height: `${overlayStyle.height}px`,
//                         opacity: overlayStyle.opacity,
//                     }}
//                 ></div>
//                 {/* Navigation Items */}
//                 <ul className='relative z-10 flex items-center justify-center space-x-4'>
//                     {navItems.map((item) => (
//                         <li
//                             key={item}
//                             onMouseOver={handleMouseOver}
//                             onMouseOut={handleMouseOut}
//                             className='relative cursor-pointer list-none px-4 py-2 text-lg font-semibold text-black'
//                         >
//                             <a
//                                 href='#'
//                                 className='text-black transition hover:text-gray-600'
//                             >
//                                 {item}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </header>
//     )
// }

// export default Navbar
