import { useTranslations } from 'next-intl'

const TermsAndConditions = () => {
    const t = useTranslations('tos')
    return (
        <div className='mx-auto max-w-4xl px-4 py-8'>
            <h1 className='mb-6 text-3xl font-bold'>{t('title')}</h1>

            <div className='space-y-6 text-gray-700'>
                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.0.title')}
                    </h2>
                    <p>{t('sections.0.content')}</p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.1.title')}
                    </h2>
                    <p>{t('sections.1.content')}</p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.2.title')}
                    </h2>
                    <ul className='list-disc space-y-2 pl-5'>
                        <li>{t('sections.2.content.0')}</li>
                        <li>{t('sections.2.content.1')}</li>
                        <li>{t('sections.2.content.0')}</li>
                    </ul>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.3.title')}
                    </h2>
                    <p>{t('sections.3.content')}</p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.4.title')}
                    </h2>
                    <p>{t('sections.4.content')}</p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.5.title')}
                    </h2>
                    <p>{t('sections.5.content')}</p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.6.title')}
                    </h2>
                    <p>{t('sections.6.content')}</p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        {t('sections.7.title')}
                    </h2>
                    <p>
                        {t('sections.7.content.0')}
                        <br />
                        {t('sections.7.content.1')}
                        <br />
                        {t('sections.7.content.2')}
                    </p>
                </section>

                <footer className='pt-8 text-sm text-gray-500'>
                    <p>
                        {t('last-update')}
                        {new Date().toLocaleDateString('nl-NL')}
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default TermsAndConditions
