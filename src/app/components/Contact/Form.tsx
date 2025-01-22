'use client'

import { useState } from 'react'

import { Label } from '@/components/ui/label' // Replace with your component imports
import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { supabase } from '@/app/lib/supaBaseClient'
import { useToast } from '@/hooks/use-toast'

export default function ContactForm() {
    const t = useTranslations('contact.form')
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    const { toast } = useToast()

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)

        // Basic validation
        if (!formData.first_name || !formData.last_name || !formData.email) {
            setLoading(false)
            return
        }

        try {
            const { data, error } = await supabase
                .from('contact')
                .insert([formData])

            if (error) {
                throw error
            }

            setSuccess(true)
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: '',
            })
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message || t('error.generic'))
            } else {
                setError(t('error.unknown'))
            }
        } finally {
            toast({
                title: t('success'),
                variant: 'default',
                description: t('success-description'),
                style: {
                    backgroundColor: '#16a34a',
                    color: '#fff',
                },
            })
            setLoading(false)
        }
    }

    return (
        <form onSubmit={submitForm} className='mt-20 flex flex-col gap-4 px-4'>
            {error && (
                <div className='flex justify-center text-red-600'>{error}</div>
            )}
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='first_name' className='text-2xl font-bold'>
                        {t('voornaam')}
                        <span className='text-red-600'>*</span>
                    </Label>
                    <Input
                        name='first_name'
                        value={formData.first_name}
                        onChange={handleChange}
                        className='bg-zinc-200 placeholder:text-gray-400'
                        type='text'
                        placeholder={t('voornaam')}
                        required
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='last_name' className='text-2xl font-bold'>
                        {t('achternaam')}
                        <span className='text-red-600'>*</span>
                    </Label>
                    <Input
                        name='last_name'
                        value={formData.last_name}
                        onChange={handleChange}
                        className='bg-zinc-200 placeholder:text-gray-400'
                        type='text'
                        placeholder={t('achternaam')}
                        required
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='email' className='text-2xl font-bold'>
                    {t('email')}
                    <span className='text-red-600'>*</span>
                </Label>
                <Input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='bg-zinc-200 placeholder:text-gray-400'
                    type='email'
                    placeholder={t('email')}
                    required
                />
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='phone' className='text-2xl font-bold'>
                    {t('telefoon')}
                </Label>
                <Input
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='bg-zinc-200 placeholder:text-gray-400'
                    type='tel'
                    placeholder={t('telefoon')}
                />
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='message' className='text-2xl font-bold'>
                    {t('bericht')}
                </Label>
                <Textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='bg-zinc-200 placeholder:text-gray-400'
                    placeholder={t('uw-bericht')}
                    cols={8}
                    rows={8}
                />
            </div>

            <Button
                className={`bg-[#008c45] hover:bg-[#008c45]/90 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                type='submit'
                disabled={loading}
            >
                {t('verzenden')}
            </Button>
        </form>
    )
}
