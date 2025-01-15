'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

const Slider = () => {
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)
    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-custom-pagination',
                }}
                modules={[Autoplay, Pagination]}
                className='mySwiper relative mt-10 max-w-7xl'
            >
                <SwiperSlide>
                    <Link href={`/${selectedLocale}/menu`}>
                        <Image
                            className='rounded-lg'
                            src='/images/home/carousel-1.jpg'
                            alt='Carousel image 1'
                            width={1920}
                            height={1080}
                            loading='lazy'
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={`/${selectedLocale}/menu`}>
                        <Image
                            className='rounded-lg'
                            src='/images/home/carousel-2.jpg'
                            alt='Carousel image 2'
                            width={1920}
                            height={1080}
                            loading='lazy'
                        />
                    </Link>
                </SwiperSlide>
                <div className='swiper-custom-pagination mt-4 flex justify-center' />
            </Swiper>
        </>
    )
}

export default Slider
