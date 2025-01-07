'use client'

import React from 'react'
import PizzaCard from '../components/Menu/PizzaCard'

const pizzas = [
    {
        title: 'Pizza Salami',
        description:
            'Rijkelijk belegd met de beste ingrediënten en heerlijke plakjes pittige salami.',
        price: '10,99',
        imageUrl: '/images/menu/pizza-salami.jpg',
    },
    {
        title: 'Pizza Margherita',
        description:
            'De klassieke pizza met tomatensaus, mozzarella en basilicum.',
        price: '9,99',
        imageUrl: '/images/menu/pizza-margherita.jpg',
    },
    {
        title: 'Pizza Hawaii',
        description:
            'Een heerlijke combinatie van sappige ananas, ham en gesmolten kaas op een krokante bodem.',
        price: '11,49',
        imageUrl: '/images/menu/pizza-hawaii.jpg',
    },
]

const Menu = () => {
    return (
        <>
            <div className='mx-auto min-h-screen max-w-[1440px]'>
                <div className='grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3'>
                    {pizzas.map((pizza, index) => (
                        <PizzaCard key={index} {...pizza} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Menu
