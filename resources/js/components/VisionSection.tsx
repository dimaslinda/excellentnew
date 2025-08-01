interface VisionSectionProps {
    title: string;
    description: string | string[];
    imageSrc: string;
    imageAlt: string;
    backgroundImage?: string;
    className?: string;
    titleColor?: string;
    descriptionColor?: string;
}

export default function VisionSection({
    title,
    description,
    imageSrc,
    imageAlt,
    backgroundImage = '/img/general/bg-visi.webp',
    className = '',
    titleColor = 'text-cardhitam',
    descriptionColor = 'text-cardhitam',
}: VisionSectionProps) {
    return (
        <section className={`bg-cover bg-center bg-no-repeat py-16 lg:py-24 ${className}`} style={{ backgroundImage: `url('${backgroundImage}')` }}>
            <div className="mx-auto max-w-screen-xl px-4">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className={`mb-6 text-3xl font-bold lg:mb-8 lg:text-4xl xl:text-5xl ${titleColor}`}>{title}</h2>
                        <div className={`text-justify text-base leading-relaxed lg:text-lg ${descriptionColor}`}>
                            {Array.isArray(description) ? (
                                description.map((paragraph, index) => (
                                    <p key={index} className={index > 0 ? 'mt-4' : ''}>
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p>{description}</p>
                            )}
                        </div>
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
