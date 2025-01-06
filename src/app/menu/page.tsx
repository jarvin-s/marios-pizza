'use client'

import React from 'react'
import PizzaCard from '../components/Menu/PizzaCard'

const pizzas = [
    {
        title: 'Pizza Salami',
        description:
            'Rijkelijk belegd met de beste ingrediënten en heerlijke plakjes pittige salami.',
        price: '12,99',
        imageUrl: '/images/menu/pizza-salami.jpg',
    },
    {
        title: 'Pizza Margherita',
        description:
            'De klassieke pizza met tomatensaus, mozzarella en basilicum.',
        price: '10,50',
        imageUrl: '/images/menu/pizza-margherita.jpg',
    },
    {
        title: 'Pizza Hawaii',
        description:
            'Een heerlijke combinatie van sappige ananas, ham en gesmolten kaas op een krokante bodem.',
        price: '12,99',
        imageUrl: '/images/menu/pizza-hawaii.jpg',
    },
]

const Menu = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4'>
                {pizzas.map((pizza, index) => (
                    <PizzaCard key={index} {...pizza} />
                ))}
            </div>
        </>
    )
}

export default Menu
