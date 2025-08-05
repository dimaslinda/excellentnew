import Button from '@/components/Button';

interface HeroSectionLearningProps {
    className?: string;
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
    highlightedText?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
}

export default function HeroSectionLearning({
    className = '',
    backgroundImage = '/img/general/bg-elearning.webp',
    title = 'digital academy for ',
    highlightedText = 'e-learning',
    subtitle = 'corporate',
    description = '“Solusi Pembelajaran Digital yang Fleksibel, Efisien, dan Terukur untuk Korporasi Modern.”',
    buttonText = 'Konsultasi Sekarang',
    buttonHref = 'https://wa.me/6285213298462',
}: HeroSectionLearningProps) {
    return (
        <section className={`relative z-10 h-auto bg-gray-900 bg-cover bg-center bg-no-repeat font-poppins ${className}`}>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Background image */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>

            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 text-center lg:py-52">
                <div className="mx-auto max-w-full">
                    <h1 className="mb-5 leading-tight font-bold text-white">
                        <span className="block text-4xl uppercase lg:text-6xl xl:text-8xl">
                            <span className="text-[#FFB43F]"> {highlightedText} </span> & {title}
                            <span className="text-[#FFB43F]">{subtitle}</span>
                        </span>
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
