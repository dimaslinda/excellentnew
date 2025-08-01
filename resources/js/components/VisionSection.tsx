interface VisionSectionProps {
    className?: string;
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export default function VisionSection({
    className = '',
    title = 'Visi Besar Kami',
    description = 'Menjadi partner strategis pengembangan SDM terbaik di Indonesia untuk korporasi besar yang ingin mentransformasi pola pikir, pola komunikasi, dan performa tim melalui pendekatan saintifik berbasis potensi dan teknologi.',
    imageSrc = '/img/general/visi.webp',
    imageAlt = 'Vision Image',
}: VisionSectionProps) {
    return (
        <section className={`bg-[url('/img/general/bg-visi.webp')] bg-cover bg-center bg-no-repeat py-16 lg:py-24 ${className}`}>
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="mb-6 text-3xl font-bold text-cardhitam lg:mb-8 lg:text-4xl xl:text-5xl">{title}</h2>
                        <p className="text-justify text-base leading-relaxed text-cardhitam lg:text-lg">{description}</p>
                    </div>

                    {/* Image Content */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative overflow-hidden">
                            {/* Image */}
                            <div className="relative z-10">
                                <img src={imageSrc} alt={imageAlt} className="h-auto w-full rounded-tl-[93px] object-cover shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
