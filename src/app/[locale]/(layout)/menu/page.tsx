'use client'

import React, { useState } from 'react'
import PizzaCard from '../../../components/Menu/PizzaCard'
import { pizzas } from '../../../data/pizzaData'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

const Menu = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const filteredPizzas = pizzas().filter((pizza) => {
        if (activeFilter === 'all') return true
        if (activeFilter === 'meat') return !pizza.vegan
        return pizza.vegan
    })

    const t = useTranslations('menu')

    return (
        <>
            <div className='mx-auto mt-10 min-h-screen max-w-[1920px] p-0 pb-20 md:px-20'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-center text-6xl font-bold'>
                        {t('title')}
                    </h1>
                    <h1 className='text-center text-3xl'>{t('description')}</h1>
                </div>
                <div className='mt-10 flex justify-center gap-4'>
                    <Button
                        onClick={() => setActiveFilter('all')}
                        className={`rounded-lg px-4 py-2 ${
                            activeFilter === 'all'
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-300 text-black hover:bg-gray-400'
                        }`}
                    >
                        {t('all-button')}
                    </Button>
                    <Button
                        onClick={() => setActiveFilter('meat')}
                        className={`rounded-lg px-4 py-2 ${
                            activeFilter === 'meat'
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-300 text-black hover:bg-gray-400'
                        }`}
                    >
                        {t('meat-button')}
                    </Button>
                    <Button
                        onClick={() => setActiveFilter('veggie')}
                        className={`rounded-lg px-4 py-2 ${
                            activeFilter === 'veggie'
                                ? 'bg-[#008c45] text-white hover:bg-[##2ca86a]'
                                : 'bg-gray-300 text-black hover:bg-gray-400'
                        }`}
                    >
                        {t('vegetarian-button')}
                    </Button>
                </div>

                <div className='grid grid-cols-1 px-4 sm:gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4'>
                    {filteredPizzas.map((pizza, index) => (
                        <PizzaCard key={index} {...pizza} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu
