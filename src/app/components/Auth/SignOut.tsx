'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Anton } from 'next/font/google'
import { supabase } from '@/app/lib/supaBaseClient'

const anton = Anton({
    weight: '400',
    subsets: ['latin'],
})

const SignOut = () => {
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        window.location.reload()
    }
    return (
        <>
            <Button
                className={`${anton.className} rounded-md bg-[#630A00] px-3 py-2 text-xl uppercase text-white hover:bg-[#630a00d2]`}
                onClick={handleSignOut}
            >
                Uitloggen
            </Button>
        </>
    )
}

export default SignOut
