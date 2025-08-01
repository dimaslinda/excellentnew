import React from 'react';

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    imageAlt?: string;
}

interface ProductSectionProps {
    title?: string;
    subtitle?: string;
    products?: ProductCardProps[];
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, imageAlt }) => {
    return (
        <div className="flex h-full w-full max-w-xs flex-col rounded-tl-[48px] bg-[#efefef] shadow-lg">
            <div className="relative h-48 rounded-tl-[48px] bg-gray-100">
                <img src={image} alt={imageAlt || title} className="h-full w-full rounded-tl-[48px] object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-lg font-bold text-[#242424]">{title}</h3>
                <p className="flex-1 text-xs leading-relaxed whitespace-pre-line text-[#4B4B4B]">{description}</p>
            </div>
        </div>
    );
};

const ProductSection: React.FC<ProductSectionProps> = ({
    title = 'Produk Unggulan',
    subtitle = 'Pelatihan untuk Korporasi',
    products = [
        {
            image: '/img/general/produk1.webp',
            title: 'In House Training',
            description:
                '• NLP for Leaders\n• Neuro-Semantics for High-Performance Teams\n• Coaching & Mentoring untuk Eksekutif\n• Building Agile & Collaborative Teams',
            imageAlt: 'In House Training session',
        },
        {
            image: '/img/general/produk1.webp',
            title: 'Talent Mapping & SWPM Consulting',
            description:
                '• Pemetaan potensi karyawan untuk the right man in the right job.\n• Rekomendasi penataan ulang tim, promosi, hingga strategi rekrutmen.',
            imageAlt: 'Talent mapping consultation',
        },
        {
            image: '/img/general/produk2.webp',
            title: 'e-Learning & Digital Academy for Corporate',
            description:
                '• LMS khusus korporasi dengan konten kustom\n• e-Course praktis: UI/UX, Digital Marketing, Design Thinking\n• Sertifikasi internal & tracking kompetensi',
            imageAlt: 'Digital learning platform',
        },
    ],
}) => {
    return (
        <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-cardhitam lg:text-4xl">{title}</h2>
                    <p className="text-lg text-cardhitam">{subtitle}</p>
                </div>

                {/* Product Cards with Orange Background */}
                <div className="relative">
                    {/* Orange Accent Background - positioned behind cards only */}
                    <div className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 transform bg-headerbanner"></div>

                    {/* Product Cards */}
                    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap lg:flex-nowrap">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                description={product.description}
                                imageAlt={product.imageAlt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;
