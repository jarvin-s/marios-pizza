// import Image from 'next/image'
// import loading from '@/../public/loading.svg'

const LoadingScreen = () => {
    return (
        <div className='flex min-h-[92vh] items-center justify-center'>
            {/* <div className='h-32 w-32 animate-spin rounded-full border-t-2 border-pink-950' /> */}
            <div className='h-24 w-24 animate-spin rounded-full border-4 border-gray-300 border-t-primary-orange' />
            {/* <Image
                className='animate-bounce'
                src={loading}
                width={96}
                height={96}
                alt='Loading icon'
            /> */}
        </div>
    )
}

export default LoadingScreen
