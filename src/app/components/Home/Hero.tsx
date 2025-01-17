'use client'

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Anton } from 'next/font/google'
import Slider from './Swiper'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Hero = () => {
    const t = useTranslations('home')
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    return (
        <>
            <div
                className={`mb-40 flex flex-col items-center ${anton.className}`}
            >
                <h1 className='mt-10 text-center text-6xl md:text-left'>
                    {t('title')}
                </h1>
                <div className='mt-10 flex flex-col md:flex-row'>
                    <Link href={`/${selectedLocale}/menu`}>
                        <Button className='w-full rounded-bl-none rounded-br-none bg-[#008c45] px-12 py-10 text-5xl uppercase hover:bg-green-600 md:rounded-bl md:rounded-tr-none'>
                            {t('button')}
                        </Button>
                    </Link>
                    <Link href={`/${selectedLocale}/menu`}>
                        <Button className='w-full rounded-tl-none rounded-tr-none bg-red-600 px-12 py-10 text-5xl uppercase hover:bg-red-500 md:rounded-bl-none md:rounded-tr'>
                            {t('button2')}
                        </Button>
                    </Link>
                </div>
                <Slider />
            </div>
        </>
    )
}

export default Hero
