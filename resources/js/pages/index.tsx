import ArticleSection from '@/components/ArticleSection';
import ClientSection from '@/components/ClientSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import PortfolioSection from '@/components/PortfolioSection';
import ProductSection from '@/components/ProductSection';
import TestimoniSection from '@/components/TestimoniSection';
import VisionSection from '@/components/VisionSection';
import WhyExcellentSection from '@/components/WhyExcellentSection';
import { Head } from '@inertiajs/react';

interface WordPressArticle {
    id: number;
    date: string;
    link: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    featured_media_src_url: string;
    yoast_head_json: {
        description: string;
    };
}

interface IndexProps {
    responselates?: WordPressArticle[];
    responselimit?: WordPressArticle[];
}

export default function Index({ responselates = [], responselimit = [] }: IndexProps) {
    return (
        <>
            <Head title="Beranda - Excellent Consulting | Partner Strategis Pengembangan SDM Terbaik">
                {/* Meta Description */}
                <meta
                    name="description"
                    content="Excellent Consulting adalah partner strategis pengembangan SDM terbaik di Indonesia. Kami mentransformasi pola pikir, komunikasi, dan performa tim melalui pendekatan saintifik berbasis potensi dan teknologi untuk korporasi besar."
                />

                {/* Keywords */}
                <meta
                    name="keywords"
                    content="excellent consulting, pengembangan SDM, human resource development, talent mapping, STIFiN, konsultan SDM Indonesia, training korporat, assessment karyawan, coaching bisnis, transformasi organisasi, manajemen talenta, leadership development"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Excellent Consulting - Partner Strategis Pengembangan SDM Terbaik di Indonesia" />
                <meta
                    property="og:description"
                    content="Transformasi pola pikir, komunikasi, dan performa tim melalui pendekatan saintifik berbasis potensi dan teknologi. Solusi pengembangan SDM untuk korporasi besar."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://excellentteam.id" />
                <meta property="og:image" content="https://excellentteam.id/img/general/visi.webp" />
                <meta property="og:image:alt" content="Excellent Consulting - Pengembangan SDM Berbasis Sains" />
                <meta property="og:site_name" content="Excellent Consulting" />
                <meta property="og:locale" content="id_ID" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Excellent Consulting - Partner Strategis Pengembangan SDM Terbaik" />
                <meta
                    name="twitter:description"
                    content="Transformasi pola pikir, komunikasi, dan performa tim melalui pendekatan saintifik berbasis potensi dan teknologi."
                />
                <meta name="twitter:image" content="https://excellentteam.id/img/general/visi.webp" />

                {/* Additional SEO Meta Tags */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Excellent Consulting" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://excellentteam.id" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header className="relative font-poppins">
                <Navbar />

                <HeroSection />
            </header>
            <section className="bg-white font-poppins">
                <VisionSection
                    title="Visi Besar Kami"
                    description="Menjadi partner strategis pengembangan SDM terbaik di Indonesia untuk korporasi besar yang ingin mentransformasi pola pikir, pola komunikasi, dan performa tim melalui pendekatan saintifik berbasis potensi dan teknologi."
                    imageSrc="/img/general/visi.webp"
                    imageAlt="Vision Image"
                />
            </section>
            <section className="bg-white font-poppins">
                <WhyExcellentSection />
            </section>
            <section className="bg-white font-poppins">
                <ProductSection />
            </section>
            <section className="bg-white font-poppins">
                <PortfolioSection />
            </section>
            <section className="bg-white font-poppins">
                <ClientSection />
            </section>
            <section className="bg-white font-poppins">
                <ArticleSection latestArticles={responselates} limitedArticles={responselimit} />
            </section>
            <section className="relative bg-white py-16 font-poppins">
                <TestimoniSection />
                <div className="absolute bottom-0 left-0 hidden md:block">
                    <img src="/img/general/clips.png" className="w-120" alt="clips" />
                </div>
            </section>
            <Footer />
        </>
    );
}
