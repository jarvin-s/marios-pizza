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
                <div className='relative mt-20 flex flex-col items-center gap-10 md:mt-0 px-4'>
                    <svg
                        className='hidden md:block'
                        viewBox='0 0 618 120'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M1 22.2191C65.2742 -1.03649 214.747 -23.5279 298.444 72.5507C382.141 168.629 545.688 90.3245 617 39.1623'
                            stroke='#D23D2D'
                            strokeWidth='3'
                            strokeLinejoin='round'
                        />
                    </svg>
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
