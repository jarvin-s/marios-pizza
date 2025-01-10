import Image from 'next/image'
import React from 'react'
import Form from './Form'

const Hero = () => {
    return (
        <>
            <div className='mx-auto mt-10 flex min-h-screen max-w-[1400px] flex-col justify-between md:flex-row'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-6xl font-bold'>Hulp nodig?</h1>
                    <p className='mt-6 text-2xl text-white'>
                        <span className='bg-[#d23d2d] px-3 py-2'>
                            We staan voor je klaar!
                        </span>
                    </p>
                    <Form />
                </div>
                <div className='relative mt-20 flex flex-col items-center gap-10 px-4 md:mt-0'>
                    <Image
                        src='/images/contact/pizza-hero.jpg'
                        alt='pizza-hero'
                        width={504}
                        height={120}
                        className='border-4 border-[#d23d2d]'
                    />
                    {/* <Image
                        className='absolute -right-[15rem] bottom-0 z-[-1]'
                        src='/contact-blob.svg'
                        alt='contact-blob'
                        width={580}
                        height={580}
                    /> */}
                </div>
            </div>
        </>
    )
}

export default Hero
