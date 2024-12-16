'use client'

import { useState } from 'react'
// import { supabase } from '../lib/supaBaseClient'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_ANON_KEY as string
)

const updateEmail = async (newEmail: string) => {
    const { data, error } = await supabase.auth.updateUser({
        email: newEmail,
    })

    if (error) {
        console.error('Error updating email:', error.message)
        return null
    }

    return data
}

const ClientEmailForm = ({
    initialEmail,
}: {
    initialEmail: string | null | undefined
}) => {
    const [email, setEmail] = useState<string>(initialEmail ?? '')
    const [isLoading, setIsLoading] = useState(false)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (isLoading) return // Prevent multiple submissions

        setIsLoading(true)

        const updatedUser = await updateEmail(email)
        if (updatedUser) {
            alert('Email updated successfully!')
        }

        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label
                    htmlFor='email'
                    className='block text-lg font-medium text-gray-700'
                >
                    Email Address
                </label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={handleEmailChange}
                    className='mt-1 block w-full rounded-md border border-gray-300 px-4 py-2'
                    disabled={isLoading}
                />
            </div>
            <button
                type='submit'
                className='rounded-md bg-blue-500 px-4 py-2 text-white'
                disabled={isLoading}
            >
                {isLoading ? 'Updating...' : 'Update Email'}
            </button>
        </form>
    )
}

export default ClientEmailForm
