import React from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'

const Location = () => {
    const apiKey = process.env.GOOGLE_API_KEY as string
    return (
        <>
            <div className='mx-auto mt-40 flex max-w-[1400px] flex-col justify-between px-4 pb-80 md:mt-20'>
                <h1 className='text-center text-6xl font-bold'>
                    Onze locaties
                </h1>
                <div className='mt-10 flex flex-col justify-center gap-4 text-center text-3xl md:flex-row'>
                    <h1>Eindhoven</h1>
                    <h1>&apos;s Hertogenbosch</h1>
                </div>
                <div className='mt-20 flex flex-col justify-center gap-8'>
                    <div>
                        <GoogleMapsEmbed
                            apiKey={apiKey}
                            height={600}
                            width='100%'
                            mode='place'
                            q='Eindhoven,Fontys'
                        />
                    </div>
                    <div className='hidden'>
                        <GoogleMapsEmbed
                            apiKey={apiKey}
                            height={400}
                            width='100%'
                            mode='place'
                            q="'s Hertogenbosch,Avans Hogeschool"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Location
