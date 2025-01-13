'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/logo.svg'
import facebook from '@/../public/images/footer/social-icons/facebook.svg'
import tiktok from '@/../public/images/footer/social-icons/tiktok.svg'
import instagram from '@/../public/images/footer/social-icons/instagram.svg'
import { useLocale, useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('footer')
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])
    return (
        <footer className='border-t-[1px] border-[#49494923] bg-[#f8eec8]'>
            <div className='mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                    <section>
                        <div className='flex justify-center sm:justify-start'>
                            <Image
                                src={logo}
                                alt='logo'
                                width={128}
                                height={128}
                            />
                        </div>

                        <p className='mx-auto mt-6 max-w-md text-center sm:mx-0 sm:max-w-xs sm:text-left'>
                            {t('description')}
                        </p>
                    </section>

                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2'>
                        {/* Socials */}
                        {/* <div className='flex flex-col gap-2 text-[#d23d2d]'>
                            <p className='font-bold'>Socials</p>
                            <div className='flex gap-4'>
                                <a
                                    href='https://facebook.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        src={facebook}
                                        alt='facebook'
                                        width={24}
                                        height={24}
                                        className='transition-opacity hover:opacity-80'
                                    />
                                </a>
                                <a
                                    href='https://tiktok.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        src={tiktok}
                                        alt='tiktok'
                                        width={20}
                                        height={24}
                                        className='transition-opacity hover:opacity-80'
                                    />
                                </a>
                                <a
                                    href='https://instagram.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        src={instagram}
                                        alt='instagram'
                                        width={24}
                                        height={24}
                                        className='transition-opacity hover:opacity-80'
                                    />
                                </a>
                            </div>
                        </div> */}

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-[#d23d2d]'>
                                {t('links.title')}
                            </p>
                            <div className='flex flex-col gap-4 text-sm'>
                                <a
                                    href={`/${selectedLocale}/`}
                                    className='transition-opacity hover:opacity-80'
                                >
                                    Home
                                </a>
                                <a
                                    href={`/${selectedLocale}/menu`}
                                    className='transition-opacity hover:opacity-80'
                                >
                                    Menu
                                </a>
                                <a
                                    href={`/${selectedLocale}/aanbiedingen`}
                                    className='transition-opacity hover:opacity-80'
                                >
                                    {t('links.aanbiedingen')}
                                </a>
                                <a
                                    href={`/${selectedLocale}/contact`}
                                    className='transition-opacity hover:opacity-80'
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='font-bold text-[#d23d2d]'>
                                {t('openingstijden')}
                            </p>
                            <p className='flex justify-between'>
                                <span>{t('maandag')}</span>
                                <span>13:00 - 22:00</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>{t('dinsdag')}</span>
                                <span>13:00 - 22:00</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>{t('woensdag')}</span>
                                <span>13:00 - 22:00</span>
                            </p>
                            <p className='flex justify-between gap-10 md:gap-0'>
                                <span>{t('donderdag')}</span>
                                <span>13:00 - 22:00</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>{t('vrijdag')}</span>
                                <span>13:00 - 22:00</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>{t('zaterdag')}</span>
                                <span>17:00 - 23:00</span>
                            </p>
                            <p className='flex justify-between'>
                                <span>{t('zondag')}</span>
                                <span>17:00 - 22:00</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-12 border-t border-[#49494923] pt-6'>
                    <div className='text-center sm:flex sm:flex-row-reverse sm:justify-between sm:text-left'>
                        <p className='space-x-1 text-sm text-[#d23d2d]'>
                            <span className='block sm:inline'>
                                {t('rechten')}
                            </span>

                            <Link
                                className='inline-block text-[#d23d2d] underline transition hover:text-[#d23d2d]/75'
                                href={`/${selectedLocale}/terms-and-conditions`}
                            >
                                {t('tos')}
                            </Link>

                            <span>&middot;</span>

                            <Link
                                className='inline-block text-[#d23d2d] underline transition hover:text-[#d23d2d]/75'
                                href='/'
                            >
                                Privacy policy
                            </Link>
                        </p>

                        <p className='mt-4 text-sm text-[#d23d2d] sm:mt-0'>
                            &copy; 2024 Mario&apos;s Pizza
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
