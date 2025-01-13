'use client'

import { useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

const SheetLanguageSwitcher = () => {
    const router = useRouter()
    const pathname = usePathname()
    const currentLocale = useLocale()
    const [selectedLocale, setSelectedLocale] = useState(currentLocale)

    useEffect(() => {
        setSelectedLocale(currentLocale)
    }, [currentLocale])

    const changeLocale = (newLocale: string) => {
        setSelectedLocale(newLocale)
        const newPathname = `/${newLocale}${pathname.substring(currentLocale.length + 1)}`
        router.replace(newPathname)
        router.refresh()
    }

    return (
        <Button
            variant='default'
            className={`${poppins.className} bg-primary-green font-bold text-white duration-300 hover:bg-primary-green/60`}
            onClick={() => changeLocale(selectedLocale === 'nl' ? 'en' : 'nl')}
        >
            {selectedLocale === 'en' ? (
                <>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 36 36'
                    >
                        <path fill='#EEE' d='M0 14h36v8H0z' />
                        <path
                            fill='#AE1F28'
                            d='M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4'
                        />
                        <path
                            fill='#20478B'
                            d='M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4'
                        />
                    </svg>
                    <span className='ml-1'>NL</span>
                </>
            ) : (
                <>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 640 480'
                    >
                        <path fill='#012169' d='M0 0h640v480H0z' />
                        <path
                            fill='#FFF'
                            d='m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0z'
                        />
                        <path
                            fill='#C8102E'
                            d='m424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z'
                        />
                        <path
                            fill='#FFF'
                            d='M241 0v480h160V0zM0 160v160h640V160z'
                        />
                        <path
                            fill='#C8102E'
                            d='M0 193v96h640v-96zM273 0v480h96V0z'
                        />
                    </svg>
                    <span className={`${poppins.className} ml-1`}>EN</span>
                </>
            )}
        </Button>
    )
}

export default SheetLanguageSwitcher
