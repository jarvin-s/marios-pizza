import Image from 'next/image'
import React from 'react'
// import logo from '@/../public/logo.svg'
import social from '@/../public/images/footer/social.svg'
import clock from '@/../public/images/footer/clock.svg'
import facebook from '@/../public/images/footer/social-icons/facebook.svg'
import tiktok from '@/../public/images/footer/social-icons/tiktok.svg'
import instagram from '@/../public/images/footer/social-icons/instagram.svg'

const Footer = () => {
    return (
        <>
            <div className='border-t-[1px] border-zinc-900/40 bg-[#f8eec8]'>
                <div className='flex h-[20rem] flex-col items-center justify-center md:flex-row md:gap-16'>
                    {/* <div className='flex'>
                        <Image src={logo} alt='logo' width={220} height={220} />
                    </div> */}
                    <div className='flex flex-col'>
                        <div className='mt-4 space-y-1'>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src={clock}
                                    alt='clock'
                                    width={24}
                                    height={24}
                                />
                                <p className='font-bold text-[#d23d2d]'>
                                    Openingstijden
                                </p>
                                <p className='flex justify-between gap-4'>
                                    <span>maandag t/m vrijdag:</span>
                                    <span>13:00 - 22:00</span>
                                </p>
                                <p className='flex justify-between'>
                                    <span>zaterdag:</span>
                                    <span>17:00 - 23:00</span>
                                </p>
                                <p className='flex justify-between'>
                                    <span>zondag:</span>
                                    <span>17:00 - 22:00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-[#d23d2d]'>
                            <div className='flex flex-col gap-2'>
                                <Image
                                    src={social}
                                    alt='social'
                                    width={24}
                                    height={24}
                                />
                                <p className='font-bold'>Socials</p>
                                <div className='flex gap-4'>
                                    <a
                                        href='https://facebook.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Image
                                            src={facebook}
                                            alt='facebook'
                                            width={24}
                                            height={24}
                                            className='transition-opacity hover:opacity-80'
                                        />
                                    </a>
                                    <a
                                        href='https://tiktok.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Image
                                            src={tiktok}
                                            alt='tiktok'
                                            width={24}
                                            height={24}
                                            className='transition-opacity hover:opacity-80'
                                        />
                                    </a>
                                    <a
                                        href='https://instagram.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <Image
                                            src={instagram}
                                            alt='instagram'
                                            width={24}
                                            height={24}
                                            className='transition-opacity hover:opacity-80'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='mx-[2rem] border-zinc-900/40 md:mx-[136px]' />
                <div className='flex justify-center py-10 text-center md:text-left'>
                    <p className='text-[#d23d2d]'>
                        © Mario&apos;s Pizza B.V. Alle rechten voorbehouden.
                        <a
                            href='/terms-and-conditions'
                            className='text-[#d23d2d] opacity-100 duration-300 hover:opacity-80'
                        >
                            {' '}
                            Algemene voorwaarden.
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
