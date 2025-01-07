import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

const Form = () => {
    return (
        <form className='mt-20 flex flex-col gap-4 px-4'>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='voornaam' className='text-2xl font-bold'>
                        Voornaam
                        <span className='text-red-600'>*</span>
                    </Label>
                    <Input
                        className='bg-zinc-200 placeholder:text-gray-400'
                        type='text'
                        placeholder='Voornaam'
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='achternaam' className='text-2xl font-bold'>
                        Achternaam
                        <span className='text-red-600'>*</span>
                    </Label>
                    <Input
                        className='bg-zinc-200 placeholder:text-gray-400'
                        type='text'
                        placeholder='Achternaam'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <Label htmlFor='email' className='text-2xl font-bold'>
                    E-mailadres
                    <span className='text-red-600'>*</span>
                </Label>
                <Input
                    className='bg-zinc-200 placeholder:text-gray-400'
                    type='email'
                    placeholder='Email'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor='telefoonnummer' className='text-2xl font-bold'>
                    Telefoonnummer
                </Label>
                <Input
                    className='bg-zinc-200 placeholder:text-gray-400'
                    type='tel'
                    placeholder='Telefoonnummer'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor='bericht' className='text-2xl font-bold'>
                    Bericht
                </Label>
                <Textarea
                    className='bg-zinc-200 placeholder:text-gray-400'
                    placeholder='Uw bericht'
                    cols={8}
                    rows={8}
                />
            </div>
            <Button
                className='bg-[#008c45] hover:bg-[#008c45]/90'
                type='submit'
            >
                Verzenden
            </Button>
        </form>
    )
}

export default Form
