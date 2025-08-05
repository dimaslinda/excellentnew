import Button from '@/components/Button';

interface HeroSectionNeuroProps {
    className?: string;
    backgroundImage?: string;
    subtitle?: string;
    subtitle2?: string;
    title?: string;
    highlightedText?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function HeroSectionNeuro({
    className = '',
    backgroundImage = '/img/general/bg-neurosemantics.webp',
    subtitle = 'in house training',
    title = 'high-performance',
    subtitle2 = 'teams',
    highlightedText = 'neuro-semantics for',
    description = '"The Right Person in the Right Role with the Right Potential."',
    buttonText = 'Konsultasi Sekarang',
    buttonHref = 'https://wa.me/6285213298462',
}: HeroSectionNeuroProps) {
    return (
        <section className={`relative z-10 h-auto bg-gray-900 bg-cover bg-center bg-no-repeat font-poppins ${className}`}>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>

            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 text-center lg:py-48">
                <div className="mx-auto lg:max-w-1/2 2xl:max-w-3/4">
                    <span className="relative mb-5 text-2xl font-light tracking-[0.5em] text-white uppercase lg:text-3xl">{subtitle}</span>
                    <h1 className="leading-tight font-bold text-white">
                        <span className="block text-4xl uppercase md:text-5xl lg:text-6xl xl:text-7xl">{highlightedText}</span>
                        <span className="my-4 inline-block -rotate-3 transform bg-[#FFB43F] px-6 py-2 text-2xl font-bold text-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                            {title}
                        </span>
                        <span className="block text-6xl uppercase md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">{subtitle2}</span>
                    </h1>

                    <p className="mb-5 text-lg font-light text-white italic md:mb-10 lg:text-xl 2xl:text-2xl">{description}</p>

                    <div className="item-center flex w-full flex-col justify-center gap-4 sm:flex-row">
                        <Button href={buttonHref} className="w-full md:w-1/2 2xl:w-1/3">
                            {buttonText}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
