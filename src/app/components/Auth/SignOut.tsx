'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Anton } from 'next/font/google'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})
const SignOut = () => {
    return (
        <>
            <Button
                className={`${anton.className} rounded-md bg-[#630A00] px-3 py-2 text-xl uppercase text-white hover:bg-[#630a00d2]`}
                onClick={() => signOut()}
            >
                Uitloggen
            </Button>
        </>
    )
}

export default SignOut
