'use client'
import React, { useState } from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { Button } from '@/components/ui/button'
import { Anton } from 'next/font/google'
import { useTranslations } from 'next-intl'

const anton = Anton({
    subsets: ['latin'],
    weight: ['400'],
})

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string
const Location = () => {
    const [selectedLocation, setSelectedLocation] = useState('eindhoven')
    const t = useTranslations('contact.vestigingen')

    return (
        <>
            <div className='mx-auto mt-40 flex max-w-[1400px] flex-col justify-between px-4 pb-80 md:mt-20'>
                <h1 className='text-center text-6xl font-bold'>{t('titel')}</h1>
                <div className='mx-auto mt-10 flex max-w-sm flex-col gap-4'>
                    <Button
                        size='lg'
                        onClick={() => setSelectedLocation('eindhoven')}
                        className={`${selectedLocation === 'eindhoven' ? 'bg-primary-orange text-white hover:bg-primary-orange/80' : 'bg-gray-200 text-black hover:bg-gray-300'} py-6 text-3xl uppercase ${anton.className}`}
                    >
                        Eindhoven
                    </Button>
                    <Button
                        size='lg'
                        onClick={() => setSelectedLocation('denbosch')}
                        className={`${selectedLocation === 'denbosch' ? 'bg-primary-orange text-white hover:bg-primary-orange/80' : 'bg-gray-200 text-black hover:bg-gray-300'} py-6 text-3xl uppercase ${anton.className}`}
                    >
                        &apos;s Hertogenbosch
                    </Button>
                </div>
                <div className='mt-10 flex flex-col justify-center gap-8'>
                    <div
                        className={
                            selectedLocation === 'eindhoven'
                                ? 'block'
                                : 'hidden'
                        }
                    >
                        <GoogleMapsEmbed
                            apiKey={apiKey}
                            height={600}
                            width='100%'
                            mode='place'
                            q='Eindhoven,Fontys'
                        />
                    </div>
                    <div
                        className={
                            selectedLocation === 'denbosch' ? 'block' : 'hidden'
                        }
                    >
                        <GoogleMapsEmbed
                            apiKey={apiKey}
                            height={600}
                            width='100%'
                            mode='place'
                            q="'s Hertogenbosch,Fontys Hogeschool"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location
