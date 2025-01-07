'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { Anton } from 'next/font/google'
import Image from 'next/image'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Hero = () => {
    // TODO
    //! Fix price + button alignment on cards
    return (
        <>
            {/* <div className='flex min-h-screen items-center justify-center'>
                <div className='group relative'>
                    <div className='block group-hover:hidden'>
                        <Image
                            src={pizza_1}
                            alt='Pizza 1'
                            width={200}
                            height={0}
                        />
                    </div>
                    <div className='hidden group-hover:block'>
                        <Image
                            src={pizza_2}
                            alt='Pizza 1'
                            width={200}
                            height={0}
                        />
                    </div>
                </div>
            </div> */}
            <div className={`flex flex-col items-center ${anton.className}`}>
                <div className='mt-10 flex flex-col md:flex-row'>
                    <a href='/bezorgen'>
                        <Button className='w-full rounded-bl-none rounded-br-none bg-[#008c45] px-12 py-10 text-5xl uppercase hover:bg-green-600 md:rounded-bl md:rounded-tr-none'>
                            Bezorgen
                        </Button>
                    </a>
                    <a href='/afhalen'>
                        <Button className='w-full rounded-tl-none rounded-tr-none bg-red-600 px-12 py-10 text-5xl uppercase hover:bg-red-500 md:rounded-bl-none md:rounded-tr'>
                            Afhalen
                        </Button>
                    </a>
                </div>
                <div className='relative my-20 flex flex-col gap-4 overflow-hidden bg-[#008c45] px-20 py-40 md:px-96'>
                    <Image
                        src='/images/home/margherita-hero.jpg'
                        alt='Pizza Margherita hero'
                        width={400}
                        height={400}
                        className='absolute -left-[15%] -top-[40%]'
                    />
                    <Image
                        src='/images/menu/pizza-salami.jpg'
                        alt='Pizza Margherita hero'
                        width={400}
                        height={400}
                        className='absolute -right-[15%] -top-[40%]'
                    />
                    <div className='relative flex flex-col items-center space-y-6 pb-8'>
                        <h1 className='text-5xl md:text-7xl'>2e PIZZA</h1>
                        <h1 className='text-4xl md:text-6xl'>
                            DE <span className='half-price'>HALVE</span> PRIJS
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
