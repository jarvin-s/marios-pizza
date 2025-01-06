'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { Anton } from 'next/font/google'
import Image from 'next/image'
// import useSession from '@/app/hooks/useSession'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Hero = () => {
    // const session = useSession()
    // TODO
    //! Fix console error (debug gotrue-js)
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
            <div className={`flex justify-center ${anton.className}`}>
                <Image
                    src='/images/home/margherita-hero.jpg'
                    alt='Pizza Margherita hero '
                    width={400}
                    height={0}
                    className='absolute -left-52 top-20 z-[-1]'
                />
                <div className='flex flex-col space-y-4'>
                    <div className='mt-10 flex flex-col md:flex-row'>
                        <a href='/bezorgen'>
                            <Button className='w-full rounded-bl-none rounded-br-none bg-[#008c45] px-12 py-10 text-5xl uppercase hover:bg-[#2ca86a] md:rounded-bl md:rounded-tr-none'>
                                Bezorgen
                            </Button>
                        </a>
                        <a href='/afhalen'>
                            <Button className='w-full rounded-tl-none rounded-tr-none bg-red-600 px-12 py-10 text-5xl uppercase hover:bg-red-500 md:rounded-bl-none md:rounded-tr'>
                                Afhalen
                            </Button>
                        </a>
                    </div>
                    <div className='flex flex-col items-center space-y-6'>
                        <span className='bg-red-500 px-3 py-2'>
                            <h1 className='text-7xl text-white'>2e PIZZA</h1>
                        </span>
                        <h1 className='text-6xl'>
                            DE{' '}
                            <span className='bg-red-500 px-2 text-white'>
                                HALVE
                            </span>{' '}
                            PRIJS
                        </h1>
                    </div>
                </div>
                {/* <h1 className='text-7xl'>
                    Welkom{' '}
                    {session ? session.user.user_metadata.first_name : ''}
                </h1> */}
            </div>
        </>
    )
}

export default Hero
