import Footer from '@/components/Footer';
import HeroSectionLayanan from '@/components/HeroSectionLayanan';
import Navbar from '@/components/Navbar';
import VisionSection from '@/components/VisionSection';
import { Head } from '@inertiajs/react';

export default function NLP() {
    return (
        <>
            <Head title="NLP - Natural Language Processing">
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
                <HeroSectionLayanan />
            </header>

            <main className="font-poppins">
                <section className="bg-white py-16 font-poppins">
                    <VisionSection
                        title="Deskripsi Program"
                        description={[
                            'NLP for Leaders adalah program pelatihan khusus untuk pemimpin dan calon pemimpin di dunia korporasi yang ingin mengembangkan kapasitas communication influence, strategic alignment, dan behavioral transformation.',
                            'Program ini dirancang berdasarkan pendekatan Neuro-Linguistic Programming (NLP) generasi terbaru yang dikenal sebagai NLP 3.0 dikembangkan dan disempurnakan oleh NLP Society, sehingga lebih relevan dengan tantangan kepemimpinan modern: kompleksitas, perubahan cepat, dan kolaborasi lintas budaya.',
                        ]}
                        imageSrc="/img/general/visi.webp"
                        imageAlt="NLP Vision"
                    />
                </section>
            </main>

            <Footer />
        </>
    );
}
