import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

interface PortfolioItem {
    id: number;
    title: string;
    images: string[];
    description?: string;
}

interface PortfolioSectionProps {
    title?: string;
    description?: string;
    portfolioItems?: PortfolioItem[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
    title = 'Portofolio',
    description = 'Kami telah mendampingi berbagai institusi dan perusahaan dalam program pelatihan dan asesmen, termasuk:',
    portfolioItems = [
        {
            id: 1,
            title: 'Sektor Teknologi Informasi',
            images: ['/img/general/produk1.webp', '/img/general/produk1.webp', '/img/general/produk1.webp'],
        },
        {
            id: 2,
            title: 'Sektor Perbankan',
            images: ['/img/general/produk2.webp', '/img/general/produk1.webp', '/img/general/produk1.webp'],
        },
        {
            id: 3,
            title: 'Sektor Pendidikan',
            images: ['/img/general/produk1.webp', '/img/general/produk1.webp', '/img/general/produk1.webp'],
        },
    ],
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative overflow-hidden bg-white px-4 py-16 font-poppins">
            <div className="relative mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-6 text-4xl font-bold text-[#242424] md:text-5xl">{title}</h2>
                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#4B4B4B]">{description}</p>
                </div>

                {/* Portfolio Slider */}
                <div className="relative overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full xl:left-52">
                            <img src="/img/general/clips3.png" className="h-70 w-70" alt="" />
                        </div>
                        <div className="absolute top-1/2 right-32 translate-x-1/2 -translate-y-1/2 transform rounded-full xl:right-52">
                            <img src="/img/general/clips3.png" className="h-70 w-70" alt="" />
                        </div>
                    </div>
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {portfolioItems.map((item, index) => (
                            <div key={index} className="flex w-full flex-shrink-0 items-center justify-center gap-5">
                                {/* Main Image */}
                                <div className="relative">
                                    <div className="relative overflow-hidden rounded-tl-[59px] bg-white">
                                        <div className="relative h-64 w-full md:h-full md:w-[500px]">
                                            <img src={item.images[0]} alt={item.title} className="h-full w-full object-cover" />
                                            {/* Overlay with title */}
                                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                                <h3 className="text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Side Images */}
                                <div className="hidden flex-col gap-4 lg:flex">
                                    {item.images.slice(1, 3).map((image, imgIndex) => (
                                        <div key={imgIndex} className="h-full w-64 overflow-hidden rounded-tl-[59px] bg-white shadow-lg">
                                            <img src={image} alt={`${item.title} ${imgIndex + 2}`} className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-headerbanner text-white shadow-lg transition-colors duration-200 hover:bg-headerbanner/95"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        aria-label="Next slide"
                        className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-headerbanner text-white shadow-lg transition-colors duration-200 hover:bg-headerbanner/95"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="mt-8 flex justify-center space-x-3">
                    {portfolioItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                                index === currentSlide ? 'bg-headerbanner' : 'bg-[#D9D9D9]'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
