'use client'

import React from 'react'
import useSession from '@/app/hooks/useSession'

const Hero = () => {
    const session = useSession()

    return (
        // ! SMALL PIZZA FACE ANIMATION ON HOVER
        // <div className='flex min-h-screen items-center justify-center'>
        //     <div className='group relative'>
        //         <div className='block group-hover:hidden'>
        //             <Image src={pizza_1} alt='Pizza 1' width={200} height={0} />
        //         </div>
        //         <div className='hidden group-hover:block'>
        //             <Image src={pizza_2} alt='Pizza 1' width={200} height={0} />
        //         </div>
        //     </div>
        // </div>
        <>
            <div className='flex justify-center'>
                <h1 className='text-7xl'>
                    Welkom{' '}
                    {session ? session.user.user_metadata.first_name : ''}
                </h1>
            </div>
        </>
    )
}

export default Hero
