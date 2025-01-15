'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/app/context/CartContext'
import { supabase } from '@/app/lib/supaBaseClient'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Cart = () => {
    const { cart, clearCart } = useCart()
    const { toast } = useToast()
    const t = useTranslations('basket')
    const handlePayment = async () => {
        const { error } = await supabase.from('orders').insert(
            cart.map((item) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                imageUrl: item.imageUrl,
                vegan: item.vegan,
            }))
        )

        if (!cart.length) {
            toast({
                title: 'Kon de bestelling niet plaatsen',
                variant: 'destructive',
                description: 'Uw winkelwagen is leeg',
            })
            return
        }

        if (error) {
            console.log(error)
        } else {
            clearCart()
            toast({
                title: 'Betaling succesvol.',
                variant: 'default',
                description: 'Hartelijk bedankt voor uw bestelling!',
                style: {
                    backgroundColor: '#4bb543',
                    color: '#fff',
                },
            })
        }
    }

    const clearCartClick = () => {
        clearCart()
    }

    const total = cart
        .reduce((total, item) => total + parseFloat(item.price), 0)
        .toFixed(2)
    const itemCount = cart.length

    return (
        <>
            <div className='relative py-24'>
                <div className='mx-auto flex max-w-[1000px] flex-col px-4 md:px-0'>
                    <h2 className='mb-8 text-center text-4xl font-bold text-black'>
                        {t('title')}
                    </h2>
                    <div className='flex flex-col space-y-4 bg-white shadow-md'>
                        {cart.length === 0 ? (
                            <p className='text-gray-500'>{t('empty')}</p>
                        ) : (
                            <>
                                {cart.map((item, index) => (
                                    <div
                                        key={index}
                                        className='flex flex-row gap-2 border-[1px] border-[#e6e6e8] p-2 py-2'
                                    >
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            width={150}
                                            height={150}
                                            className='rounded'
                                        />
                                        <div className='flex flex-col'>
                                            <h3 className='text-center text-xl md:text-left'>
                                                {item.title}
                                            </h3>
                                            <p className='font-bold'>
                                                €{item.price}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className='mt-4 flex flex-col p-8'>
                                    <p className='flex justify-between text-lg font-bold'>
                                        {t('total')}: <span>€{total}</span>
                                    </p>
                                    <p className='flex justify-between text-gray-500'>
                                        {t('items')}:<span>{itemCount}</span>
                                    </p>
                                </div>
                            </>
                        )}
                        <div className='mt-4 flex w-full flex-col gap-2 p-8'>
                            <Button
                                onClick={handlePayment}
                                className='hover bg-primary-green text-white hover:bg-primary-green/60'
                            >
                                {t('checkout')}
                            </Button>
                            <Button
                                variant={'ghost'}
                                onClick={clearCartClick}
                                className='border-2 border-primary-orange bg-transparent text-primary-orange hover:bg-primary-orange hover:text-white'
                            >
                                {t('clear')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
