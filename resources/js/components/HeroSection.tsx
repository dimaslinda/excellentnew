import Button from '@/components/Button';

interface HeroSectionProps {
    className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
    return (
        <section className={`relative z-10 min-h-screen bg-gray-900 bg-cover bg-center bg-no-repeat font-poppins ${className}`}>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Background image */}
            <div className="absolute inset-0 bg-[url('../../public/img/general/bg-beranda.webp')] bg-cover bg-center bg-no-repeat"></div>

            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 text-left lg:py-48">
                <div className="lg:max-w-1/2 2xl:max-w-3/4">
                    <h1 className="leading-tight font-bold text-white">
                        <span className="block text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">EMPOWER</span>
                        <span className="block text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                            YOUR <span className="text-[#FFB43F]">LEADERS</span>
                        </span>
                    </h1>

                    <p className="mb-5 text-lg font-semibold text-white md:mb-10 lg:text-xl 2xl:text-2xl">
                        with the Science of Influence and Performance
                    </p>

                    <p className="mb-8 text-justify text-sm font-extralight text-white lg:text-base 2xl:max-w-3/4">
                        Excellent Team menghadirkan pelatihan transformasional berbasis Neo NLP & Neuro-Semantics — khusus dirancang untuk eksekutif,
                        manajer, dan tim strategis di perusahaan besar.
                    </p>

                    <div className="flex w-full flex-col gap-4 sm:flex-row 2xl:max-w-3/4">
                        <Button href="https://wa.me/6285213298462" className="w-full">
                            Konsultasi Sekarang
                        </Button>
                        <Button href="https://wa.me/6285213298462" className="w-full">
                            Download Profil
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
