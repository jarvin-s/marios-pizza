import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Lens } from '../../../components/ui/lens'
import { Anton } from 'next/font/google'

const anton = Anton({
    subsets: ['latin'],
    weight: ['400'],
})

interface PizzaCardProps {
    title: string
    description: string
    price: string
    imageUrl: string
}

const PizzaCard = ({ title, description, price, imageUrl }: PizzaCardProps) => {
    const [hovering, setHovering] = useState(false)

    return (
        <div className='relative mx-auto mt-10 w-full max-w-sm overflow-hidden rounded-lg border-4 border-[#d23d2d] bg-[#f8eecb] px-6 pb-2'>
            <div className='relative z-10'>
                <Lens hovering={hovering} setHovering={setHovering}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={500}
                        height={500}
                        className='relative -top-[8rem]'
                    />
                </Lens>
                <motion.div
                    animate={{
                        filter: hovering ? 'blur(4px)' : 'blur(0px)',
                    }}
                    className='relative z-20'
                >
                    <h2
                        className={`${anton.className} text-left text-4xl font-bold uppercase`}
                    >
                        <span className='bg-[#d23d2d] px-2 text-white'>
                            {title}
                        </span>
                    </h2>
                    <p className='mt-4 text-left'>{description}</p>
                    <div className='mb-4 flex flex-row items-end'>
                        <h1
                            className={`${anton.className} mt-4 text-4xl font-bold`}
                        >
                            {price}
                        </h1>
                        <a className={`${anton.className} ml-auto`} href='#'>
                            <Button
                                size={'lg'}
                                className='bg-[#008c45] text-2xl uppercase hover:bg-[#2ca86a]'
                            >
                                Voeg toe
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PizzaCard
