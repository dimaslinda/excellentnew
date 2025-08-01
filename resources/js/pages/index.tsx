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
            <Head title="Beranda">
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
