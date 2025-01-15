import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Anton } from 'next/font/google'
import { useTranslations } from 'next-intl'
import { useCart } from '@/app/context/CartContext'
import { useToast } from '@/hooks/use-toast'

const anton = Anton({
    subsets: ['latin'],
    weight: ['400'],
})

interface PizzaCardProps {
    id: number
    title: string
    description: string
    price: string
    imageUrl: string
    vegan: boolean
}

const PizzaCard = ({
    id,
    title,
    description,
    price,
    imageUrl,
    vegan,
}: PizzaCardProps) => {
    const { addToCart } = useCart()

    const handleAddToCart = () => {
        addToCart({ id, title, price, imageUrl, vegan })
        toast({
            title: 'Item toegevoegd aan winkelwagen!',
            description: 'Je kunt het in je winkelwagen bekijken.',
            variant: 'default',
            style: {
                backgroundColor: '#2d8626',
                color: '#fff',
            },
        })
    }
    const { toast } = useToast()
    const t = useTranslations('menu')
    return (
        <div className='mt-10 w-full overflow-hidden rounded-lg bg-[#f8eecb] px-6 py-8 shadow-lg'>
            <div className='flex flex-col items-center'>
                <div className='relative h-[200px] w-[200px]'>
                    <Image src={imageUrl} alt={title} fill />
                </div>
                <div className='relative z-20 mt-10'>
                    <h2
                        className={`${anton.className} text-left text-3xl uppercase`}
                    >
                        <span
                            className={`px-2 text-white ${vegan ? 'bg-[#008c45]' : 'bg-[#d23d2d]'}`}
                        >
                            {title}
                        </span>
                    </h2>
                    <div className='mt-4 h-24'>
                        <p className='text-left'>{description}</p>
                    </div>
                    <div className='mt-4 flex flex-row items-end justify-between'>
                        <h1 className={`${anton.className} text-4xl font-bold`}>
                            {price}
                        </h1>
                        <a className={`${anton.className}`} href='#'>
                            <Button
                                size={'lg'}
                                className='bg-[#008c45] text-2xl uppercase hover:bg-[#2ca86a]'
                                onClick={handleAddToCart}
                            >
                                {t('add-button')}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaCard
