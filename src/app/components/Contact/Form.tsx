import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

const Form = () => {
    const t = useTranslations('contact.form')
    return (
        <form className='mt-20 flex flex-col gap-4 px-4'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='voornaam' className='text-2xl font-bold'>
                        {t('voornaam')}
                        <span className='text-red-600'>*</span>
                    </Label>
                    <Input
                        className='bg-zinc-200 placeholder:text-gray-400'
                        type='text'
                        placeholder={t('voornaam')}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='achternaam' className='text-2xl font-bold'>
                        {t('achternaam')}
                        <span className='text-red-600'>*</span>
                    </Label>
                    <Input
                        className='bg-zinc-200 placeholder:text-gray-400'
                        type='text'
                        placeholder={t('achternaam')}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='email' className='text-2xl font-bold'>
                    {t('email')}
                    <span className='text-red-600'>*</span>
                </Label>
                <Input
                    className='bg-zinc-200 placeholder:text-gray-400'
                    type='email'
                    placeholder={t('email')}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor='telefoonnummer' className='text-2xl font-bold'>
                    {t('telefoon')}
                </Label>
                <Input
                    className='bg-zinc-200 placeholder:text-gray-400'
                    type='tel'
                    placeholder={t('telefoon')}
                />
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor='bericht' className='text-2xl font-bold'>
                    {t('bericht')}
                </Label>
                <Textarea
                    className='bg-zinc-200 placeholder:text-gray-400'
                    placeholder={t('uw-bericht')}
                    cols={8}
                    rows={8}
                />
            </div>
            <Button
                className='bg-[#008c45] hover:bg-[#008c45]/90'
                type='submit'
            >
                {t('verzenden')}
            </Button>
        </form>
    )
}

export default Form
