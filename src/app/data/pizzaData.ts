import { useTranslations } from 'next-intl'

const PizzaTranslations = () => {
    const t = useTranslations('menu.pizzas');
    return {
        pizzaSalami: t('pizza-salami'),
        pizzaMargherita: t('pizza-margherita'),
        pizzaHawaii: t('pizza-hawaii'),
        pizzaChicken: t('pizza-chicken'),
        pizzaPepperoni: t('pizza-pepperoni'),
        pizzaBBQChicken: t('pizza-bbq-chicken'),
        pizzaVegetarian: t('pizza-veggie'),
        pizzaQuattroFormaggi: t('pizza-quattro-formaggi'),
        pizzaSpicyMeat: t('pizza-spicy-meat'),
        pizzaTruffel: t('pizza-truffel'),
    };
};

export const pizzas = () => {
    const translations = PizzaTranslations();

    return [
        {
            id: 1,
            title: 'Pizza Salami',
            description: translations.pizzaSalami,
            price: '10,99',
            imageUrl: '/images/menu/pizza-salami.jpg',
            vegan: false,
        },
        {
            id: 2,
            title: 'Pizza Margherita',
            description: translations.pizzaMargherita,
            price: '9,99',
            imageUrl: '/images/menu/pizza-margherita.jpg',
            vegan: true,
        },
        {
            id: 3,
            title: 'Pizza Hawaii',
            description: translations.pizzaHawaii,
            price: '11,49',
            imageUrl: '/images/menu/pizza-hawaii.jpg',
            vegan: false,
        },
        {
            id: 4,
            title: 'Pizza Chicken',
            description: translations.pizzaChicken,
            price: '11,99',
            imageUrl: '/images/menu/pizza-chicken.jpg',
            vegan: false,
        },
        {
            id: 5,
            title: 'Pizza Pepperoni',
            description: translations.pizzaPepperoni,
            price: '11,49',
            imageUrl: '/images/menu/pizza-pepperoni.jpg',
            vegan: false,
        },
        {
            id: 6,
            title: 'Pizza BBQ Chicken',
            description: translations.pizzaBBQChicken,
            price: '12,49',
            imageUrl: '/images/menu/pizza-bbq-chicken.jpg',
            vegan: false,
        },
        {
            id: 7,
            title: 'Pizza Vegetarian',
            description: translations.pizzaVegetarian,
            price: '10,49',
            imageUrl: '/images/menu/pizza-veggie.jpg',
            vegan: true,
        },
        {
            id: 8,
            title: 'Pizza Quattro Formaggi',
            description: translations.pizzaQuattroFormaggi,
            price: '12,99',
            imageUrl: '/images/menu/pizza-quattro-formaggi.jpg',
            vegan: false,
        },
        {
            id: 9,
            title: 'Pizza Spicy Meat',
            description: translations.pizzaSpicyMeat,
            price: '12,49',
            imageUrl: '/images/menu/pizza-spicy-meat.jpg',
            vegan: false,
        },
        {
            id: 10,
            title: 'Pizza Truffel',
            description: translations.pizzaTruffel,
            price: '13,49',
            imageUrl: '/images/menu/pizza-truffel.jpg',
            vegan: false
        },
    ];
};