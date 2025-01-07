import Image from 'next/image'
import React from 'react'

const Location = () => {
    return (
        <>
            <div className='mx-auto mt-40 flex max-w-[1400px] flex-col justify-between px-4 pb-80 md:mt-20 md:flex-row'>
                <h1 className='text-center text-6xl font-bold md:text-left'>
                    Onze locaties
                </h1>
                <div className='mt-10 flex justify-center'>
                    <Image
                        className='border-4 border-[#d23d2d]'
                        src='/images/contact/eindhoven-location.jpg'
                        alt='location'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </>
    )
}

export default Location
