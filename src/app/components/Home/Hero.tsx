'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { Anton } from 'next/font/google'
import Slider from './Swiper'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Hero = () => {
    return (
        <>
            <div
                className={`mb-40 flex flex-col items-center ${anton.className}`}
            >
                <div className='mt-10 flex flex-col md:flex-row'>
                    <a href='/menu'>
                        <Button className='w-full rounded-bl-none rounded-br-none bg-[#008c45] px-12 py-10 text-5xl uppercase hover:bg-green-600 md:rounded-bl md:rounded-tr-none'>
                            Bezorgen
                        </Button>
                    </a>
                    <a href='/menu'>
                        <Button className='w-full rounded-tl-none rounded-tr-none bg-red-600 px-12 py-10 text-5xl uppercase hover:bg-red-500 md:rounded-bl-none md:rounded-tr'>
                            Afhalen
                        </Button>
                    </a>
                </div>
                <Slider />
            </div>
        </>
    )
}

export default Hero
