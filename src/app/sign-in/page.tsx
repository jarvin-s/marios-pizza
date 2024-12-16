'use client'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await signIn('credentials', {
            email,
            password,
        })

        if (res?.error) {
            setError(res.error)
        } else {
            redirect('/')
        }
    }

    return (
        <div className='flex h-screen items-center justify-center bg-gray-100'>
            <form
                onSubmit={handleSubmit}
                className='w-96 rounded-lg bg-white p-6 shadow-md'
            >
                <h2 className='mb-4 text-2xl font-bold'>Sign In</h2>

                {/* Email */}
                <div className='mb-4'>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='mt-1 w-full rounded-md border border-gray-300 p-2'
                        placeholder='you@example.com'
                    />
                </div>

                {/* Password */}
                <div className='mb-4'>
                    <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='mt-1 w-full rounded-md border border-gray-300 p-2'
                        placeholder='Your password'
                    />
                </div>

                {/* Error Message */}
                {error && <p className='mb-4 text-sm text-red-600'>{error}</p>}

                {/* Sign-in Button */}
                <button
                    type='submit'
                    className='w-full rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600'
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}

export default Login
