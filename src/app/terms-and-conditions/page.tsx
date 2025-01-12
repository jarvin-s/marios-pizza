const TermsAndConditions = () => {
    return (
        <div className='mx-auto max-w-4xl px-4 py-8'>
            <h1 className='mb-6 text-3xl font-bold'>Algemene voorwaarden</h1>

            <div className='space-y-6 text-gray-700'>
                <section>
                    <h2 className='mb-3 text-xl font-semibold'>1. Algemeen</h2>
                    <p>
                        Deze algemene voorwaarden zijn van toepassing op alle
                        diensten en aanbiedingen van [Bedrijfsnaam]. Door
                        gebruik te maken van onze diensten gaat u akkoord met
                        deze voorwaarden.
                    </p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        2. Dienstverlening
                    </h2>
                    <p>
                        Wij streven ernaar onze diensten zo goed mogelijk aan te
                        bieden. We behouden ons het recht voor om wijzigingen
                        aan te brengen in onze diensten zonder voorafgaande
                        kennisgeving.
                    </p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        3. Gebruiksvoorwaarden
                    </h2>
                    <ul className='list-disc space-y-2 pl-5'>
                        <li>
                            U dient minimaal 18 jaar oud te zijn om gebruik te
                            maken van onze diensten.
                        </li>
                        <li>
                            U bent verantwoordelijk voor het geheimhouden van uw
                            accountgegevens.
                        </li>
                        <li>
                            Het is niet toegestaan om onze diensten te gebruiken
                            voor illegale doeleinden.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        4. Privacy en Gegevensbescherming
                    </h2>
                    <p>
                        Wij hechten groot belang aan de bescherming van uw
                        persoonsgegevens. Voor meer informatie verwijzen wij u
                        naar ons privacybeleid.
                    </p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        5. Intellectueel Eigendom
                    </h2>
                    <p>
                        Alle content op deze website, inclusief maar niet
                        beperkt tot teksten, afbeeldingen en logo&apos;s, is
                        eigendom van [Bedrijfsnaam] en wordt beschermd door
                        intellectuele eigendomsrechten.
                    </p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        6. Aansprakelijkheid
                    </h2>
                    <p>
                        Wij zijn niet aansprakelijk voor eventuele schade die
                        voortvloeit uit het gebruik van onze diensten, tenzij er
                        sprake is van opzet of grove nalatigheid van onze kant.
                    </p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>
                        7. Wijzigingen
                    </h2>
                    <p>
                        Wij behouden ons het recht voor om deze algemene
                        voorwaarden op elk moment te wijzigen. Wijzigingen
                        worden gepubliceerd op onze website.
                    </p>
                </section>

                <section>
                    <h2 className='mb-3 text-xl font-semibold'>8. Contact</h2>
                    <p>
                        Heeft u vragen over deze algemene voorwaarden? Neem dan
                        contact met ons op via:
                        <br />
                        Email: info@mariospizza.nl
                        <br />
                        Telefoon: 06 12345678
                        <br />
                        Adres: Rachelsmolen 10, Eindhoven
                    </p>
                </section>

                <footer className='pt-8 text-sm text-gray-500'>
                    <p>
                        Laatste update: {new Date().toLocaleDateString('nl-NL')}
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default TermsAndConditions
