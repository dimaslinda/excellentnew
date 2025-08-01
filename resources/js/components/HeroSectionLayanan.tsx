import Button from '@/components/Button';

interface HeroSectionLayananProps {
    className?: string;
}

export default function HeroSectionLayanan({ className = '' }: HeroSectionLayananProps) {
    return (
        <section className={`relative z-10 min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat font-poppins ${className}`}>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Background image */}
            <div className="absolute inset-0 bg-[url('../../public/img/general/bg-beranda.webp')] bg-cover bg-center bg-no-repeat"></div>

            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 text-center lg:py-48">
                <div className="mx-auto lg:max-w-1/2 2xl:max-w-3/4">
                    <span className="relative mb-5 text-2xl font-light tracking-[0.5em] text-white uppercase lg:text-3xl">in house training</span>
                    <h1 className="leading-tight font-bold text-white">
                        <span className="block text-5xl uppercase lg:text-6xl xl:text-8xl 2xl:text-9xl">
                            <span className="text-[#FFB43F]">NLP</span> for leaders
                        </span>
                    </h1>

                    <p className="mb-5 text-lg font-semibold text-white md:mb-10 lg:text-xl 2xl:text-2xl">
                        Leading Through Influence, Thinking, and Transformation
                    </p>

                    <div className="item-center flex w-full flex-col justify-center gap-4 sm:flex-row">
                        <Button href="https://wa.me/6285213298462" className="w-full md:w-1/2 2xl:w-1/3">
                            Konsultasi Sekarang
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
