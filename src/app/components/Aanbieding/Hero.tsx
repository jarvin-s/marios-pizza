import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Anton } from 'next/font/google'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const Hero = () => {
    return (
        <>
            <div className='relative h-[75vh] w-full overflow-hidden'>
                <Image
                    src='/images/aanbiedingen/hero-background.jpg'
                    alt='Aanbiedingen'
                    fill
                    priority
                    className='object-cover blur-sm'
                />
                <div className='absolute inset-0 z-10 flex flex-col items-center justify-center'>
                    <h1
                        className={`${anton.className} px-4 text-center text-4xl uppercase text-white md:text-6xl`}
                    >
                        <span className='inline-block bg-[#008c45] px-6 py-3'>
                            Mario&apos;s Pizza Menu
                        </span>
                    </h1>
                    <a
                        className='mt-8'
                        href='/HUIDIGE-AANBIEDINGEN-2025.pdf#zoom=40'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Button
                            variant={'default'}
                            className='bg-[#d23d2d] py-4 text-sm duration-0 hover:bg-[#d66356] md:py-7 md:text-2xl'
                        >
                            Bekijk onze aanbiedingen
                            <svg
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
                                <path d='M5 12h14' />
                                <path d='m12 5 7 7-7 7' />
                            </svg>
                        </Button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero
